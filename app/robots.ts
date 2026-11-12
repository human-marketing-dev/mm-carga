import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Permite rastrear todo para que Google vea el noindex de las páginas que lo llevan.
// En el sitio de prueba no se indexa nada: next.config.ts manda X-Robots-Tag: noindex
// en cualquier dominio que no sea mmcarga.com.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/design-system/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
