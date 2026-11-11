import type { Img, Paragraphs, Seo } from "../types";

export type CoverageContent = {
  seo: Seo;
  hero: { h1: string; subtitle: string; image: Img };
  map: { title: string; paragraphs: Paragraphs };
  bases: { title: string };
  services: { title: string };
  cta: { title: string; text: string };
};

export const cobertura: CoverageContent = {
  seo: {
    title: "Cobertura y bases de operación | MM Carga",
    description:
      "Bases de operación de MM Carga en Altamira, Manzanillo, Coatzacoalcos, Nuevo Laredo, Silao y Monterrey. Transporte de carga en puertos, frontera y Bajío.",
  },
  hero: {
    h1: "Bases de operación de MM Carga en México",
    subtitle:
      "Seis bases propias en puertos, la frontera norte y el Bajío para atender con oportunidad cada operación.",
    image: {
      src: "/images/cobertura/patio-bases-de-operacion-transporte-de-carga-mm-carga.webp",
      alt: "Patio de MM Carga con tractocamiones y plataformas propias en una base de operación",
    },
  },
  map: {
    title: "Transporte de carga en puertos, frontera y Bajío",
    paragraphs: [
      "Nuestra red de bases se ubica en los puntos de mayor actividad comercial del país: los puertos del Golfo y del Pacífico, el principal cruce fronterizo con Estados Unidos y el corredor industrial del Bajío. Esta presencia nos permite coordinar cada movimiento con equipo propio y tiempos de respuesta oportunos.",
      "Ofrecemos cobertura nacional desde y hacia cada una de nuestras bases. Contamos con almacenes en Altamira, Manzanillo y Pesquería.",
    ],
  },
  bases: { title: "Nuestras bases de operación" },
  services: { title: "Servicios coordinados desde nuestras bases" },
  cta: {
    title: "Coordinamos tu operación desde la base más cercana",
    text: "Compártenos el origen, el destino y el tipo de carga, y nuestro equipo te presentará una propuesta.",
  },
};
