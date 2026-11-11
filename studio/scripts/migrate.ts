/**
 * Sube a Sanity el contenido actual del sitio (content/ en la raíz del repo) con sus
 * imágenes (public/images). Correr desde studio/ con una sesión de Sanity iniciada:
 *
 *   npx sanity login
 *   npm run migrar
 *
 * Por defecto NO toca documentos que ya existan en Sanity (para no borrar cambios del
 * cliente). Para reemplazarlos con el contenido del repo: npm run migrar -- --forzar
 */
import { createReadStream, writeFileSync } from "node:fs";
import { basename, resolve } from "node:path";
import { getCliClient } from "sanity/cli";
import { aviso } from "../../content/pages/aviso";
import { basePages } from "../../content/pages/bases";
import { cobertura } from "../../content/pages/cobertura";
import { contacto } from "../../content/pages/contacto";
import { home } from "../../content/pages/home";
import { monterrey } from "../../content/pages/monterrey";
import { nosotros } from "../../content/pages/nosotros";
import { transporte } from "../../content/pages/transporte";
import { services } from "../../content/services";
import { siteSettings } from "../../content/site";

const client = getCliClient({ apiVersion: "2025-02-19" });
const FORCE = process.argv.includes("--forzar");
/** --prueba: no sube nada; escribe los documentos en migracion-prueba.json */
const DRY = process.argv.includes("--prueba");
const PUBLIC = resolve(process.cwd(), "../public");

type Obj = Record<string, unknown>;
const isObj = (v: unknown): v is Obj =>
  typeof v === "object" && v !== null && !Array.isArray(v);

// Campos que son fijos en el código y no existen en los esquemas de Sanity
const FIXED: Record<string, string[]> = {
  service: [
    "slug",
    "parent",
    "cta.service",
    "coverage.exclusive",
    "coverage.activeLabel",
    "coverage.linksLabel",
  ],
  basePage: ["slug", "city", "warehouse"],
};

function omit(doc: Obj, paths: string[] = []) {
  const out = structuredClone(doc);
  for (const p of paths) {
    const parts = p.split(".");
    let o: Obj | undefined = out;
    for (const k of parts.slice(0, -1)) o = isObj(o?.[k]) ? (o[k] as Obj) : undefined;
    if (o) delete o[parts.at(-1)!];
  }
  return out;
}

const uploaded = new Map<string, string>();
async function uploadImage(src: string) {
  if (DRY) return `image-prueba-${basename(src)}`;
  if (!uploaded.has(src)) {
    const file = resolve(PUBLIC, `.${src}`);
    const asset = await client.assets.upload("image", createReadStream(file), {
      filename: basename(file),
    });
    console.log(`  imagen ${src}`);
    uploaded.set(src, asset._id);
  }
  return uploaded.get(src)!;
}

let k = 0;
/** Convierte el contenido local al formato de Sanity: imágenes como assets y _key en listas */
async function toSanity(value: unknown): Promise<unknown> {
  if (Array.isArray(value)) {
    const items = [];
    for (const v of value) {
      const item = await toSanity(v);
      items.push(isObj(item) && !item._key ? { _key: `m${(k++).toString(36)}`, ...item } : item);
    }
    return items;
  }
  if (!isObj(value)) return value;
  if (value._type === "block") return value;
  if (typeof value.src === "string" && typeof value.alt === "string") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { src, width, height, ...rest } = value;
    return {
      _type: "image",
      asset: { _type: "reference", _ref: await uploadImage(src) },
      ...rest,
    };
  }
  const out: Obj = {};
  for (const [key, v] of Object.entries(value)) {
    if (v !== undefined) out[key] = await toSanity(v);
  }
  return out;
}

const SERVICE_IDS = services.map((s) => `service-${s.slug.replaceAll("/", "")}`);

const docs: { _id: string; _type: string; data: Obj }[] = [
  { _id: "settings", _type: "settings", data: siteSettings },
  { _id: "page-home", _type: "pageHome", data: home },
  { _id: "page-transporte-de-carga", _type: "pageTransporte", data: transporte },
  { _id: "page-nosotros", _type: "pageNosotros", data: nosotros },
  { _id: "page-cobertura", _type: "pageCobertura", data: cobertura },
  { _id: "page-contacto", _type: "pageContacto", data: contacto },
  { _id: "page-monterrey", _type: "pageMonterrey", data: monterrey },
  { _id: "page-aviso", _type: "pageAviso", data: aviso },
  ...services.map((s, i) => ({ _id: SERVICE_IDS[i], _type: "service", data: s })),
  ...Object.entries(basePages).map(([key, b]) => ({
    _id: `base-${key}`,
    _type: "basePage",
    data: b,
  })),
];

async function main() {
  if (DRY) {
    const out = [];
    for (const d of docs)
      out.push({ _id: d._id, _type: d._type, ...((await toSanity(omit(d.data as Obj, FIXED[d._type]))) as Obj) });
    writeFileSync("migracion-prueba.json", JSON.stringify(out, null, 2));
    console.log(`Prueba: ${out.length} documentos en migracion-prueba.json`);
    return;
  }
  const existing = new Set<string>(
    await client.fetch(`*[_id in $ids]._id`, { ids: docs.map((d) => d._id) }),
  );
  for (const d of docs) {
    if (existing.has(d._id) && !FORCE) {
      console.log(`= ${d._id} ya existe, se deja igual`);
      continue;
    }
    console.log(`→ ${d._id}`);
    const body = (await toSanity(omit(d.data as Obj, FIXED[d._type]))) as Obj;
    await client.createOrReplace({ _id: d._id, _type: d._type, ...body });
  }
  console.log("Listo.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
