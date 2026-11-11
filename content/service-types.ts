import type { FaqItem, IconItem, Img, Paragraphs, Seo } from "./types";

export type ServiceCard = {
  name: string;
  /** Nombre corto (footer) */
  short: string;
  /** Resumen en Inicio y Transporte de carga */
  summary: string;
  /** Resumen corto en "Otros servicios" y Cobertura */
  otherSummary: string;
  image: Img;
};

export type ServicePageData = {
  /** Fijo: URL de la página */
  slug: string;
  /** Fijo: miga intermedia; las páginas de transporte cuelgan de /transporte-de-carga/ */
  parent?: { href: string; label: string };
  crumb: string;
  h1: string;
  subtitle: string;
  image: Img;
  about: {
    title: string;
    paragraphs: Paragraphs;
    /** Foto opcional a todo lo ancho al final de "Sobre el servicio" */
    image?: Img;
  };
  scope: { title: string; items: IconItem[] };
  coverage: {
    title: string;
    text: string;
    /** Título de la tarjeta de bases en "Sobre el servicio" */
    mainLabel?: string;
    /** Texto bajo la lista; sin valor, se listan las demás bases */
    mainNote?: string;
    /** Bases principales del servicio; sin valor, las 6 */
    highlight?: string[];
    /** Fijo. true: el servicio solo opera en esas bases (almacenamiento) */
    exclusive?: boolean;
    activeLabel?: string;
    linksLabel?: string;
  };
  reasons: { title: string; items: IconItem[] };
  faq: { title: string; items: FaqItem[] };
  /** cta.service es fijo: preselecciona el servicio en el formulario */
  cta: { title: string; text: string; service: string };
};

export type ServiceContent = ServicePageData & {
  seo: Seo;
  card: ServiceCard;
};
