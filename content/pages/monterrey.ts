import type { Facility } from "./base-types";
import type { FaqItem, IconItem, Img, Paragraphs, Seo } from "../types";

export type MonterreyContent = {
  seo: Seo;
  hero: { h1: string; subtitle: string; image: Img };
  intro: { title: string; paragraphs: Paragraphs };
  facilities: { title: string; items: Facility[] };
  services: {
    title: string;
    /** Resumen de cada servicio visto desde Monterrey (URL fija del servicio) */
    summaries: { slug: string; text: string }[];
  };
  routes: { title: string; items: { to: string; note: string }[] };
  reasons: { title: string; items: IconItem[] };
  location: { title: string };
  faq: { title: string; items: FaqItem[] };
  cta: { title: string; text: string };
};

export const monterrey: MonterreyContent = {
  seo: {
    title: "Transporte de carga en Monterrey | MM Carga",
    description:
      "Empresa de transporte de carga en Monterrey con flota propia: caja seca de 53 pies, tolvas, contenedores y plataformas, con monitoreo 24/7.",
  },
  hero: {
    h1: "Transporte de carga en Monterrey",
    subtitle:
      "Nuestra base central, con oficinas y taller propios, atiende a la industria de Nuevo León con flota propia y monitoreo las 24 horas.",
    image: {
      src: "/images/monterrey/empresa-de-transporte-de-carga-en-monterrey-mm-carga.webp",
      alt: "Tractocamiones de MM Carga para transporte de carga en Monterrey, Nuevo León",
    },
  },
  intro: {
    title: "Empresa de transporte en Monterrey con base propia",
    paragraphs: [
      "Monterrey es la base central de MM Carga. En Pesquería, dentro del área metropolitana, se encuentran nuestras oficinas y nuestro taller, y aquí llegan todas nuestras unidades.",
      "Es también punto de salida y llegada de nuestros viajes. Su ubicación es estratégica por la concentración industrial de Nuevo León, y nos permite coordinar traslados hacia los puertos, la frontera y el centro del país.",
      "La base de Pesquería cuenta con almacén propio para el [resguardo de mercancías](/almacenamiento-de-mercancias/), y desde ella ofrecemos cobertura nacional hacia el resto de nuestras bases.",
    ],
  },
  // Base central (información del cliente, 6 nov)
  facilities: {
    title: "Nuestra base central en Monterrey",
    items: [
      {
        icon: "integral",
        title: "Oficinas",
        text: "Desde aquí coordinamos la operación de todas nuestras bases.",
      },
      {
        icon: "forklift",
        title: "Taller",
        text: "Mantenimiento de nuestras unidades dentro de la misma base.",
      },
      {
        icon: "trailer",
        title: "Punto de llegada de la flota",
        text: "Todas nuestras unidades llegan a la base de Monterrey.",
      },
      {
        icon: "route",
        title: "Salida y llegada de viajes",
        text: "Viajes que salen y llegan a Monterrey, conectados con el resto de nuestras bases.",
      },
    ],
  },
  services: {
    title: "Servicios de transporte de carga desde Monterrey",
    summaries: [
      {
        slug: "/caja-seca-53-pies/",
        text: "Rutas nacionales y de exportación vía Nuevo Laredo.",
      },
      {
        slug: "/transporte-tolva/",
        text: "Traslado de materiales a granel para la industria regional.",
      },
      {
        slug: "/transporte-de-contenedores-maritimos/",
        text: "Movimientos entre Monterrey y los puertos de Altamira y Manzanillo.",
      },
      {
        slug: "/transporte-de-carga-suelta/",
        text: "Acero, maquinaria y madera con equipo especializado de sujeción.",
      },
      {
        slug: "/almacenamiento-de-mercancias/",
        text: "Almacenes y maniobras para la gestión de inventario.",
      },
    ],
  },
  routes: {
    title: "Rutas de transporte desde Monterrey",
    items: [
      { to: "Nuevo Laredo", note: "Cruce fronterizo" },
      { to: "Puerto de Altamira", note: "Golfo de México" },
      { to: "Puerto de Manzanillo", note: "Pacífico" },
      { to: "Bajío (Silao)", note: "Corredor industrial" },
    ],
  },
  reasons: {
    title: "¿Por qué elegir a MM Carga en Nuevo León?",
    items: [
      {
        title: "Presencia local",
        icon: "monitoring",
        text: "Base central con oficinas y taller propios en el área metropolitana de Monterrey.",
      },
      {
        title: "Flota propia",
        icon: "fleet",
        text: "Más de 200 unidades y más de 100 cajas secas de 53 pies.",
      },
      {
        title: "Conexión con puertos y frontera",
        icon: "route",
        text: "Bases propias en Altamira, Manzanillo y Nuevo Laredo.",
      },
      {
        title: "Procesos certificados",
        icon: "certified",
        text: "C-TPAT, OEA e ISO 9001:2015.",
      },
    ],
  },
  location: { title: "Ubicación de MM Carga en Monterrey" },
  faq: {
    title: "Preguntas frecuentes sobre transporte de carga en Monterrey",
    items: [
      {
        q: "¿Dónde se ubican en Monterrey?",
        a: "Nuestra base central, con oficinas y taller, se encuentra en Carretera a Huinala km 6.5, Pesquería, N.L., en el área metropolitana de Monterrey.",
      },
      {
        q: "¿Realizan envíos de Monterrey a Estados Unidos?",
        a: "Sí. Ofrecemos servicio de exportación en caja seca de 53 pies vía Nuevo Laredo.",
      },
      {
        q: "¿Trasladan contenedores entre Monterrey y los puertos?",
        a: "Sí. Realizamos movimientos de contenedores de importación y exportación, con bases propias en Altamira y Manzanillo.",
      },
      {
        q: "¿Cómo puedo solicitar una cotización en Monterrey?",
        a: "Comunícate por WhatsApp o completa el formulario con el origen, el destino y el tipo de carga.",
      },
    ],
  },
  cta: {
    title: "Transporte de carga en Monterrey con respaldo de 20 años",
    text: "Nuestro equipo está listo para analizar tu operación y presentarte una propuesta.",
  },
};
