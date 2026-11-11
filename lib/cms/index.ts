import { cacheLife, cacheTag } from "next/cache";

// Contenido editable desde Sanity. Sin NEXT_PUBLIC_SANITY_PROJECT_ID el sitio usa el
// contenido local de content/*.ts (el mismo que se migra a Sanity), así nunca se rompe.
export const SANITY_PROJECT_ID =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const SANITY_DATASET =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const API_VERSION = "2025-02-19";

/** Etiqueta de caché que invalida la ruta /api/revalidar al publicar en Sanity */
export const CMS_TAG = "sanity";

async function query<T>(groq: string, params: Record<string, unknown> = {}) {
  const url = new URL(
    `https://${SANITY_PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${SANITY_DATASET}`,
  );
  url.searchParams.set("query", groq);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(`$${k}`, JSON.stringify(v));
  }
  // Solo contenido publicado (sin borradores)
  url.searchParams.set("perspective", "published");
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Sanity respondió ${res.status}`);
  const json = (await res.json()) as { result: T };
  return json.result;
}

// Imagen de Sanity → URL del CDN. La referencia trae id, medidas y formato:
// image-<id>-<ancho>x<alto>-<ext>
function imageUrl(ref: string) {
  const [, id, size, ext] = ref.split("-");
  return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${size}.${ext}`;
}

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj =>
  typeof v === "object" && v !== null && !Array.isArray(v);

/** Quita los campos internos de Sanity y convierte imágenes a { src, alt } */
function normalize(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(normalize);
  if (!isObj(value)) return value;
  const asset = value.asset as Obj | undefined;
  if (asset && typeof asset._ref === "string") {
    const [w, h] = asset._ref.split("-")[2].split("x").map(Number);
    return {
      src: imageUrl(asset._ref),
      alt: (value.alt as string) ?? "",
      width: w,
      height: h,
    };
  }
  if (value._type === "image") return undefined;
  // Texto enriquecido: se conserva tal cual (sus _key y marcas los usa el render)
  if (value._type === "block") return value;
  const out: Obj = {};
  for (const [k, v] of Object.entries(value)) {
    if (k.startsWith("_")) continue;
    const n = normalize(v);
    if (n !== undefined && n !== null && n !== "") out[k] = n;
  }
  return out;
}

/**
 * Mezcla el documento de Sanity sobre el contenido local: si un campo falta o está vacío
 * en Sanity se usa el local, para que la página nunca quede sin texto. Las listas de
 * Sanity reemplazan completas a las locales.
 */
function merge<T>(local: T, remote: unknown): T {
  if (remote === undefined) return local;
  if (isObj(local) && isObj(remote)) {
    const out: Obj = { ...local };
    for (const [k, v] of Object.entries(remote)) {
      out[k] = merge((local as Obj)[k], v);
    }
    return out as T;
  }
  if (Array.isArray(remote) && remote.length === 0) return local;
  return remote as T;
}

async function fetchDoc(id: string): Promise<unknown> {
  "use cache";
  cacheTag(CMS_TAG);
  cacheLife("max");
  try {
    return await query<unknown>(`*[_id == $id][0]`, { id });
  } catch (err) {
    console.error(`[cms] No se pudo leer "${id}" de Sanity:`, err);
    return null;
  }
}

/** Documento de Sanity por id, mezclado con su contenido local de respaldo */
export async function getDoc<T>(id: string, local: T): Promise<T> {
  if (!SANITY_PROJECT_ID) return local;
  const doc = await fetchDoc(id);
  if (!doc) return local;
  return merge(local, normalize(doc));
}
