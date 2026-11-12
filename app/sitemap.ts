import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { SITE_URL } from "@/lib/seo";

// Solo páginas indexables (el aviso de privacidad lleva noindex y no va aquí)
const pages = [
  "/",
  "/transporte-de-carga/",
  ...services.map((s) => s.slug),
  "/cobertura/",
  "/transporte-de-carga-en-monterrey/",
  "/transporte-de-carga-en-altamira/",
  "/transporte-de-contenedores-en-manzanillo/",
  "/transporte-de-carga-en-nuevo-laredo/",
  "/transporte-de-carga-en-silao-bajio/",
  "/transporte-de-carga-en-coatzacoalcos/",
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
