import { robotsTxt } from "@/lib/seo-files";

// Solo en Node (sitio de prueba); en la versión estática lo escribe deploy/build-static.mjs
export function GET() {
  return new Response(robotsTxt(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
