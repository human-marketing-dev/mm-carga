import type { NextConfig } from "next";

// Encabezados de seguridad para todas las respuestas
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // CSP mínima que no rompe los scripts de Next: sin iframes de otros sitios, sin plugins,
  // formularios solo al propio sitio
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'",
  },
];

// Redirecciones 301 de las URLs del WordPress anterior de mmcarga.com (sitemap de WP, nov 2026)
const wordpressRedirects: [string, string][] = [
  ["/contactos/", "/contacto/"],
  ["/servicios/", "/transporte-de-carga/"],
  ["/cart-3/", "/"],
  ["/pxl-template/cajas-secas-de-53/", "/caja-seca-53-pies/"],
  ["/pxl-template/tolvas/", "/transporte-tolva/"],
  ["/pxl-template/transporte-en-tolvas/", "/transporte-tolva/"],
  ["/pxl-template/traslado-de-contenedores-maritimos/", "/transporte-de-contenedores-maritimos/"],
  ["/pxl-template/plataformas-para-carga-suelta/", "/transporte-de-carga-suelta/"],
  ["/pxl-template/almacen-y-maniobras-de-mercancia/", "/almacenamiento-de-mercancias/"],
  ["/pxl-template/control-de-inventarios/", "/almacenamiento-de-mercancias/"],
  ["/pxl-template/maniobras/", "/almacenamiento-de-mercancias/"],
  ["/pxl-template/rastreo/", "/transporte-de-carga/"],
  ["/pxl-template/coordinacion/", "/transporte-de-carga/"],
  // Plantillas internas del tema (header, footer, sticky…) y páginas de autor
  ["/pxl-template/:path*", "/"],
  ["/author/:path*", "/"],
  // Sitemaps de WordPress → sitemap nuevo
  ["/wp-sitemap.xml", "/sitemap.xml"],
  ["/:wpmap(wp-sitemap-.*)", "/sitemap.xml"],
  ["/sitemap_index.xml", "/sitemap.xml"],
  ["/feed/", "/"],
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return wordpressRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Sitio de prueba y local: que ningún buscador los indexe. En mmcarga.com no aplica.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(.+\\.)?humanmarketing\\.mx|localhost" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  // Fotos del cliente: next/image las sirve en calidad 90 (por defecto es 75)
  images: {
    qualities: [90],
    // Imágenes subidas en Sanity (CMS)
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
    ],
  },
  trailingSlash: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
