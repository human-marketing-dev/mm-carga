// Tipos compartidos del contenido editable (mismos campos que los esquemas de Sanity en studio/)

/** Imagen: ruta local (/images/...) o URL del CDN de Sanity. El alt es obligatorio. */
export type Img = { src: string; alt: string; width?: number; height?: number };

/** Título y descripción para buscadores. La URL canónica es fija en el código. */
export type Seo = { title: string; description: string };

/** Nombres de los íconos disponibles (components/site/icon-map.tsx) */
export type IconName =
  | "integral"
  | "fleet"
  | "monitoring"
  | "certified"
  | "route"
  | "border"
  | "trailer"
  | "swap"
  | "clock"
  | "eye"
  | "hopper"
  | "layers"
  | "weight"
  | "cost"
  | "container"
  | "import"
  | "export"
  | "scale"
  | "warehouse"
  | "port"
  | "flatbed"
  | "strap"
  | "inventory"
  | "forklift";

export type IconItem = { title: string; text: string; icon: IconName };

export type FaqItem = { q: string; a: string };

/** Párrafos que aceptan enlaces con la sintaxis [texto](/ruta/) */
export type Paragraphs = string[];
