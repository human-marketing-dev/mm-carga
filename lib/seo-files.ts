// sitemap.xml y robots.txt. Los usan app/sitemap.xml/route.node.ts y app/robots.txt/route.node.ts
// (sitio en Node) y deploy/build-static.mjs (versión estática de IONOS). Sin alias "@/" ni
// sintaxis exclusiva de TypeScript para que Node lo pueda importar directo.
import rules from "../deploy/rules.json" with { type: "json" };

const SITE = "https://mmcarga.com";

/** Solo páginas indexables (lista en deploy/rules.json) */
export function sitemapXml(): string {
  const urls = rules.sitemap
    .map(
      (p) =>
        `<url>\n<loc>${SITE}${p}</loc>\n<changefreq>monthly</changefreq>\n<priority>${p === "/" ? 1 : 0.8}</priority>\n</url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

// Permite rastrear todo para que Google vea el noindex de las páginas que lo llevan.
// En el sitio de prueba no se indexa nada: next.config.ts manda X-Robots-Tag: noindex.
export function robotsTxt(): string {
  return `User-Agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE}/sitemap.xml\n`;
}
