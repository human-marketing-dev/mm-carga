import type { Img, Paragraphs, Seo } from "../types";

export type AboutContent = {
  seo: Seo;
  hero: {
    h1: string;
    subtitle: string;
    image: Img;
    /** Sellos bajo los botones */
    seals: string[];
  };
  about: {
    title: string;
    paragraphs: Paragraphs;
    foundedYear: string;
    foundedLabel: string;
    yearsValue: string;
    yearsLabel: string;
    image: Img;
  };
  identity: {
    title: string;
    image: Img;
    items: { title: string; text: string }[];
  };
  figures: {
    title: string;
    items: { value: string; unit?: string; label: string }[];
  };
  certifications: { title: string; intro: string; affiliationsTitle: string };
  bases: { title: string; paragraphs: Paragraphs };
  cta: { title: string; text: string };
};

export const nosotros: AboutContent = {
  seo: {
    title: "Nosotros | MM Carga, 20 años en transporte de carga",
    description:
      "Conoce a MM Carga, empresa mexicana con 20 años en transporte de carga y almacenamiento, certificada C-TPAT, OEA e ISO 9001.",
  },
  hero: {
    h1: "MM Carga: 20 años en transporte de carga y almacenaje en México",
    subtitle:
      "Somos una empresa mexicana de transporte y almacenamiento con flota, almacenes y bases de operación propias.",
    image: {
      src: "/images/nosotros/transporte-de-carga-en-carretera-mm-carga.webp",
      alt: "Transporte de carga de MM Carga: tractocamiones con contenedores marítimos en carretera, vista aérea",
    },
    seals: ["C-TPAT", "OEA", "ISO 9001:2015", "Transporte Limpio"],
  },
  about: {
    title: "Empresa de transporte de carga pesada con infraestructura propia",
    paragraphs: [
      "MM Carga S.A. de C.V. es una empresa mexicana especializada en el transporte terrestre y el almacenamiento de carga para la industria pesada y el comercio exterior. Fundada en 2006, en 2026 cumple 20 años de operación.",
      "Operamos desde nuestra oficina en Pesquería, Nuevo León, y seis bases ubicadas en puertos, la frontera norte y el Bajío. Contamos con más de 200 unidades, más de 100 cajas secas de 53 pies y 200,000 m² de almacenamiento, lo que nos permite responder a operaciones de gran volumen sin depender de terceros.",
    ],
    foundedYear: "2006",
    foundedLabel: "Año de fundación",
    yearsValue: "20 años",
    yearsLabel: "de operación en 2026",
    image: {
      src: "/images/nosotros/20-anos-de-transporte-de-carga-mm-carga.webp",
      alt: "20 años de MM Carga: collage de su flota de tractocamiones, contenedores y operadores",
      width: 1524,
      height: 1020,
    },
  },
  identity: {
    title: "Misión, visión y valores",
    image: {
      src: "/images/nosotros/flota-de-tractocamiones-mm-carga-mexico.webp",
      alt: "Flota propia de tractocamiones de MM Carga, empresa de transporte de carga en México",
    },
    items: [
      {
        title: "Misión",
        text: "Brindar servicios de transporte con personal calificado, equipo moderno y tecnología de vanguardia, generando seguridad y confianza en nuestros clientes.",
      },
      {
        title: "Visión",
        text: "Ser la empresa de transporte y almacenaje de mercancías de referencia en México, reconocida por un servicio seguro, rentable y de alta calidad.",
      },
      {
        title: "Valores",
        text: "Honestidad, responsabilidad y puntualidad.",
      },
    ],
  },
  figures: {
    title: "MM Carga en cifras",
    items: [
      { value: "20", label: "años de experiencia" },
      { value: "+200", label: "unidades full" },
      { value: "+100", label: "cajas secas de 53 pies" },
      { value: "200,000", unit: "m²", label: "de almacenamiento" },
      { value: "6", label: "bases de operación" },
      { value: "24/7", label: "monitoreo de unidades" },
    ],
  },
  certifications: {
    title: "Certificaciones y estándares de operación",
    intro:
      "Nuestras certificaciones avalan procesos auditados de seguridad, calidad y cuidado ambiental en cada operación.",
    affiliationsTitle: "Afiliaciones y registros",
  },
  bases: {
    title: "Bases de operación",
    paragraphs: [
      "Operamos desde seis bases propias en Monterrey, Nuevo Laredo, Altamira, Silao, Manzanillo y Coatzacoalcos, ubicadas en los principales puertos, la frontera norte y el Bajío.",
    ],
  },
  cta: {
    title: "Un aliado con 20 años de experiencia en transporte y almacenaje",
    text: "Nuestro equipo está listo para analizar tus necesidades de transporte y almacenamiento y presentarte una propuesta.",
  },
};
