import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { SITE_URL } from "@/lib/seo";

// Solo páginas indexables. Las páginas por base (noindex) y el aviso de privacidad
// no van aquí; al publicar las bases hay que agregarlas.
const pages = [
  "/",
  "/transporte-de-carga/",
  ...services.map((s) => s.slug),
  "/cobertura/",
  "/transporte-de-carga-en-monterrey/",
  "/nosotros/",
  "/contacto/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
