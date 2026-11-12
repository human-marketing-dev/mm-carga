// Cargador de imágenes de la versión estática (IONOS no tiene servidor que las redimensione).
// - Fotos de Sanity: el CDN de Sanity las redimensiona al vuelo.
// - Fotos locales (public/): copias ya redimensionadas que genera deploy/build-static.mjs
//   en /img/<ancho>/<ruta original>, en calidad 90 como el resto del sitio.
export default function loader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("https://cdn.sanity.io/")) {
    const sep = src.includes("?") ? "&" : "?";
    return `${src}${sep}w=${width}&q=${quality ?? 90}&auto=format&fit=max`;
  }
  if (src.startsWith("/") && /\.(webp|jpe?g|png)$/i.test(src)) {
    return `/img/${width}${src.replace(/\.(jpe?g|png)$/i, ".webp")}`;
  }
  return src;
}
