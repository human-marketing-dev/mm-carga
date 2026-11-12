import type { NextConfig } from "next";
import rules from "./deploy/rules.json";

// Versión estática para IONOS (hosting sin Node): STATIC_EXPORT=1 npm run build:static
// Sin la variable el sitio corre en Node como siempre (sitio de prueba en RunCloud).
const STATIC = process.env.STATIC_EXPORT === "1";

// Redirecciones y encabezados: en Node los aplica Next; en la versión estática van al
// .htaccess que genera deploy/build-static.mjs a partir del mismo archivo
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const redirects = rules.redirects.map((r) => ({
  source: "prefix" in r && r.prefix ? `/:p(${escapeRe(r.from.slice(1))}.*)` : r.from,
  destination: r.to,
  permanent: true,
}));

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(STATIC
    ? {
        output: "export" as const,
        // Las rutas de API (route.node.ts) solo existen en Node; en IONOS el formulario es PHP
        pageExtensions: ["tsx", "ts"],
      }
    : {
        pageExtensions: ["node.ts", "tsx", "ts"],
        redirects: async () => redirects,
        headers: async () => [
      { source: "/:path*", headers: rules.securityHeaders },
      // Sitio de prueba y local: que ningún buscador los indexe. En mmcarga.com no aplica.
      {
        source: "/:path*",
        has: [{ type: "host", value: "(.+\\.)?humanmarketing\\.mx|localhost" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
        ],
      }),
  /* config options here */
  experimental: {
    agentFeedback: true,
    // La exportación estática no es compatible con cacheComponents (PPR); "use cache" sigue
    // funcionando con useCache y todo se resuelve en el build
    ...(STATIC && { useCache: true }),
  },
  cacheComponents: !STATIC,
  // Fotos del cliente: next/image las sirve en calidad 90 (por defecto es 75). Decisión del usuario: no bajarla
  images: {
    qualities: [90],
    // En la versión estática no hay servidor que redimensione: deploy/image-loader.ts apunta
    // a copias ya redimensionadas (las genera deploy/build-static.mjs) o al CDN de Sanity
    ...(STATIC && {
      loader: "custom" as const,
      loaderFile: "./deploy/image-loader.ts",
      deviceSizes: [640, 828, 1200, 1920, 2560],
      imageSizes: [96, 256, 384],
    }),
    // Imágenes subidas en Sanity (CMS)
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
    ],
  },
  trailingSlash: true,
  partialPrefetching: !STATIC,
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
