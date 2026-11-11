import type { FaqItem, IconItem, Img, Paragraphs, Seo } from "../types";

export type TransportContent = {
  seo: Seo;
  hero: { h1: string; subtitle: string; image: Img };
  about: { title: string; paragraphs: Paragraphs };
  services: { title: string; intro: string };
  guide: {
    title: string;
    intro: string;
    /** Filas de la tabla: tipo de carga → servicio (la URL del servicio es fija) */
    rows: { cargo: string; href: string; equipment: string }[];
  };
  coverage: { title: string; paragraphs: Paragraphs };
  reasons: { title: string; items: IconItem[] };
  faq: { title: string; items: FaqItem[] };
  cta: { title: string; text: string };
};

export const transporte: TransportContent = {
  seo: {
    title: "Empresa de transporte de carga en México | MM Carga",
    description:
      "Empresa de transporte de carga pesada con flota propia: caja seca de 53 pies, tolvas, contenedores marítimos y plataformas, con monitoreo 24/7.",
  },
  hero: {
    h1: "Empresa de transporte de carga",
    subtitle:
      "Flota propia para el traslado de carga seca, materiales a granel, contenedores marítimos y carga suelta en México y hacia Estados Unidos.",
    image: {
      src: "/images/hero/hero-transporte-de-carga-mexico.webp",
      alt: "Flota de tractocamiones de MM Carga, empresa de transporte de carga en México",
    },
  },
  about: {
    title: "Transporte terrestre de carga pesada con flota propia",
    paragraphs: [
      "MM Carga es una empresa de transporte de carga especializada en la industria pesada y el comercio exterior. Contamos con más de 200 unidades, más de 100 cajas secas de 53 pies y seis bases de operación en puertos, la frontera norte y el Bajío.",
      "Esta infraestructura propia nos permite trasladar la mercancía de nuestros clientes sin depender de terceros, con monitoreo permanente de origen a destino.",
    ],
  },
  services: {
    title: "Nuestros servicios de transporte de mercancías",
    intro:
      "Equipo especializado para cada tipo de carga, con operadores capacitados y coordinación en cada etapa del traslado.",
  },
  guide: {
    title: "¿Qué equipo requiere tu carga?",
    intro:
      "Identifica el equipo adecuado según el tipo de mercancía. Si tu operación combina varios tipos de carga, nuestro equipo te asesora.",
    rows: [
      {
        cargo: "Tarimas, cajas o producto terminado",
        href: "/caja-seca-53-pies/",
        equipment: "Caja seca de 53 pies",
      },
      {
        cargo: "Arena, grava, minerales o mercancía ferrosa a granel",
        href: "/transporte-tolva/",
        equipment: "Tolva",
      },
      {
        cargo: "Mercancía de importación o exportación en contenedor",
        href: "/transporte-de-contenedores-maritimos/",
        equipment: "Transporte de contenedores",
      },
      {
        cargo: "Acero, maquinaria, madera o tubería",
        href: "/transporte-de-carga-suelta/",
        equipment: "Plataforma para carga suelta",
      },
    ],
  },
  coverage: {
    title: "Transporte de carga en México y hacia Estados Unidos",
    paragraphs: [
      "Coordinamos cada traslado desde seis bases propias en Monterrey, Nuevo Laredo, Altamira, Silao, Manzanillo y Coatzacoalcos, con conexión a los principales puertos y al cruce fronterizo de Nuevo Laredo.",
    ],
  },
  reasons: {
    title: "¿Por qué elegir a MM Carga como empresa de transporte de carga?",
    items: [
      {
        title: "Flota propia",
        icon: "fleet",
        text: "Control directo del equipo, que respalda el cumplimiento de cada entrega.",
      },
      {
        title: "Monitoreo 24/7",
        icon: "monitoring",
        text: "Rastreo GPS, cámaras y centro de monitoreo permanente.",
      },
      {
        title: "Operación certificada",
        icon: "certified",
        text: "C-TPAT, OEA, ISO 9001:2015 y Transporte Limpio.",
      },
      {
        title: "Transporte y almacenamiento integrados",
        icon: "warehouse",
        text: "Resguardo de la carga en nuestros almacenes cuando la operación lo requiere.",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre transporte de carga",
    items: [
      {
        q: "¿Qué tipos de carga transportan?",
        a: "Carga seca, materiales a granel, contenedores marítimos y carga suelta, como acero, maquinaria o madera.",
      },
      {
        q: "¿Realizan transporte de carga pesada?",
        a: "Sí. Contamos con 20 años de experiencia en el traslado de carga para la industria pesada.",
      },
      {
        q: "¿Las unidades son propias?",
        a: "Sí. Operamos con flota, cajas y bases de operación propias.",
      },
      {
        q: "¿Cómo puedo solicitar una cotización?",
        a: "Comunícate por WhatsApp o completa el formulario con el origen, el destino y el tipo de carga.",
      },
    ],
  },
  cta: {
    title: "Transporte de carga con el respaldo de una flota propia",
    text: "Nuestro equipo te asesora en la elección del equipo adecuado y te presenta una propuesta a la medida de tu operación.",
  },
};
