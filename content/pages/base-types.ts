import type { FaqItem, IconName, Img, Paragraphs, Seo } from "../types";

export type Facility = { icon: IconName; title: string; text: string };

export type BasePageData = {
  /** Fijo: URL de la página */
  slug: string;
  /** Fijo: debe coincidir con la ciudad de la base en Ajustes generales */
  city: string;
  seo: Seo;
  h1: string;
  subtitle: string;
  /** Nombre corto de la ciudad en títulos y miga */
  label: string;
  /** Fijo: solo Altamira, Manzanillo y Pesquería tienen almacén (cliente, 3 nov) */
  warehouse: boolean;
  /** Foto del hero; sin valor muestra el relleno "Foto pendiente" */
  image?: Img;
  intro: { title: string; paragraphs: Paragraphs };
  /** Lo que hay en la base, solo con datos que dio el cliente (6 nov) */
  facilities: Facility[];
  services: {
    title: string;
    intro: string;
    /** Servicios principales de la base (URL): van primero en las tarjetas */
    focus: string[];
    summaries: { slug: string; text: string }[];
  };
  coverageNote: string;
  faq: FaqItem[];
  cta: { title: string; text: string };
};
