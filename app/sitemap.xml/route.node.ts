import { sitemapXml } from "@/lib/seo-files";

// Solo en Node (sitio de prueba); en la versión estática lo escribe deploy/build-static.mjs
export function GET() {
  return new Response(sitemapXml(), {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
}
