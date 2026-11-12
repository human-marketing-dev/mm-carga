import type { Metadata } from "next";

// Dominio final. Las páginas solo se indexan aquí: en cualquier otro dominio (sitio de
// prueba, localhost) next.config.ts manda X-Robots-Tag: noindex.
export const SITE_URL = "https://mmcarga.com";
export const SITE_NAME = "MM Carga";

// Imagen para compartir (Open Graph, 1200×630 JPG en public/og/). Se genera a partir
// de la foto del hero de cada página; la de Inicio es la imagen por defecto.
const OG_PAGES = new Set([
  "/transporte-de-carga/",
  "/caja-seca-53-pies/",
  "/transporte-tolva/",
  "/transporte-de-contenedores-maritimos/",
  "/transporte-de-carga-suelta/",
  "/almacenamiento-de-mercancias/",
  "/cobertura/",
  "/transporte-de-carga-en-monterrey/",
  "/nosotros/",
  "/transporte-de-carga-en-altamira/",
  "/transporte-de-carga-en-coatzacoalcos/",
  "/transporte-de-contenedores-en-manzanillo/",
]);

export const DEFAULT_OG_IMAGE = "/og/inicio.jpg";

function ogImage(path: string) {
  return OG_PAGES.has(path) ? `/og${path.slice(0, -1)}.jpg` : DEFAULT_OG_IMAGE;
}

/** Metadatos completos de una página: title, description, canonical, Open Graph y Twitter */
export function pageMetadata(
  path: string,
  seo: { title: string; description: string },
  extra: Pick<Metadata, "robots"> = {},
): Metadata {
  const image = { url: ogImage(path), width: 1200, height: 630, alt: seo.title };
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_MX",
      siteName: SITE_NAME,
      url: path,
      title: seo.title,
      description: seo.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image.url],
    },
    ...extra,
  };
}
