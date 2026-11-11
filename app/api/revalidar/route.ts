import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { CMS_TAG } from "@/lib/cms";

// Webhook de Sanity: al publicar un cambio, el sitio vuelve a leer el contenido.
// Variable de entorno (en el servidor, nunca en el repo):
//   SANITY_REVALIDATE_SECRET  la misma clave que el encabezado "x-revalidar-secreto"
//                             configurado en el webhook de Sanity

function sameSecret(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export async function POST(req: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return Response.json(
      { error: "Revalidación no configurada" },
      { status: 503 },
    );
  }
  const sent = req.headers.get("x-revalidar-secreto") ?? "";
  if (!sameSecret(sent, secret)) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }
  // Una sola etiqueta para todo el contenido: el sitio es chico y así un cambio en
  // Ajustes generales (menú, pie, contacto) se refleja en todas las páginas
  // expire 0: la siguiente visita ya ve el cambio (sin servir una vez la versión vieja)
  revalidateTag(CMS_TAG, { expire: 0 });
  return Response.json({ revalidated: true, now: Date.now() });
}
