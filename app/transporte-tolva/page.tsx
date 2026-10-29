import type { Metadata } from "next";
import {
  IconCertified,
  IconClock,
  IconCost,
  IconHopper,
  IconLayers,
  IconSwap,
  IconWeight,
} from "@/components/site/icons";
import {
  PENDING,
  ServicePage,
  type ServicePageData,
} from "@/components/site/service-page";

const SLUG = "/transporte-tolva/";

export const metadata: Metadata = {
  title: "Transporte en tolva para carga a granel | MM Carga",
  description:
    "Transporte en tolva de 140 m³ para materiales a granel y mercancía ferrosa. Flota propia, operadores certificados y monitoreo 24/7.",
  alternates: { canonical: SLUG },
};

const data: ServicePageData = {
  slug: SLUG,
  parent: { href: "/transporte-de-carga/", label: "Transporte de carga" },
  crumb: "Tolva",
  h1: "Transporte en tolva",
  subtitle:
    "Traslado de materiales a granel en tolvas de 140 m³, con flota propia y monitoreo permanente.",
  image: {
    src: "/images/servicios/transporte-tolva-granel-mm-carga.webp",
    alt: "Tráiler con tolva de MM Carga para transporte a granel",
  },
  specsButton: "Ver capacidad de la tolva",
  about: {
    title: "Tolva de carga para materiales a granel",
    paragraphs: [
      "La tolva es un remolque abierto en su parte superior, diseñado para la carga y descarga eficiente de materiales sueltos. Es el equipo indicado para trasladar grandes volúmenes de producto a granel que no se transporta en tarimas ni empaques.",
      "MM Carga opera tolvas con capacidad de 140 m³ para el traslado de materiales como arena, grava, minerales y mercancía ferrosa, con equipo especializado según el tipo de carga.",
    ],
    audience: [
      "Industria siderúrgica y de reciclaje de metales",
      "Industria de la construcción y producción de agregados",
      "Minería y procesamiento de minerales",
      "Proyectos con esquema cargado/cargado de producto terminado",
    ],
  },
  scope: {
    title: "Alcance del servicio de transporte en tolva",
    items: [
      {
        title: "Tolvas de gran capacidad",
        icon: <IconHopper />,
        text: "140 m³ por unidad, lo que reduce el número de viajes requeridos.",
      },
      {
        title: "Equipo especializado por material",
        icon: <IconLayers />,
        text: "Unidades adecuadas para carga a granel o mercancía ferrosa.",
      },
      {
        title: "Proyectos cargado/cargado",
        icon: <IconSwap />,
        text: "Aprovechamiento del viaje de retorno con producto terminado para optimizar costos.",
      },
      {
        title: "Monitoreo 24/7",
        icon: <IconClock />,
        text: "Rastreo GPS, cámaras y supervisión permanente durante el trayecto.",
      },
    ],
  },
  specs: {
    title: "Capacidad del tráiler con tolva",
    caption: "Capacidad y equipo del tráiler con tolva",
    rows: [
      ["Capacidad volumétrica", "140 m³"],
      ["Tipo de carga", "Granel y mercancía ferrosa"],
      ["Configuración", PENDING],
      ["Carga máxima", PENDING],
      ["Tipo de descarga", PENDING],
    ],
  },
  coverage: {
    title: "Cobertura del servicio de transporte en tolva",
    text: "Operamos el servicio de transporte en tolva desde nuestras seis bases en Monterrey, Nuevo Laredo, Altamira, Silao, Manzanillo y Coatzacoalcos, con conexión entre la industria del noreste, el Bajío y los principales puertos del país.",
  },
  reasons: {
    title: "¿Por qué elegir a MM Carga para el transporte en tolva?",
    items: [
      {
        title: "Mayor volumen por viaje",
        icon: <IconHopper />,
        text: "Tolvas de 140 m³ que optimizan cada traslado.",
      },
      {
        title: "Experiencia en carga pesada",
        icon: <IconWeight />,
        text: "Más de 30 años en el traslado de granel, acero y mercancía ferrosa.",
      },
      {
        title: "Optimización de costos",
        icon: <IconCost />,
        text: "Esquemas cargado/cargado que reducen el costo por tonelada.",
      },
      {
        title: "Operación segura",
        icon: <IconCertified />,
        text: "Operadores certificados y procesos bajo la norma ISO 9001:2015.",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre el transporte en tolva",
    items: [
      {
        q: "¿Qué es un camión tolva?",
        a: "Es un tráiler con remolque abierto en la parte superior, diseñado para la carga y descarga eficiente de materiales a granel.",
      },
      {
        q: "¿Cuál es la capacidad de sus tolvas?",
        a: "Nuestras tolvas tienen una capacidad de 140 m³.",
      },
      {
        q: "¿Qué materiales transportan?",
        a: "Arena, grava, minerales y mercancía ferrosa, entre otros. Nuestro equipo confirma el equipo adecuado según el material.",
      },
      {
        q: "¿En qué consiste un proyecto cargado/cargado?",
        a: "Es un esquema en el que la unidad viaja con carga tanto en la ida como en el regreso, lo que reduce el costo del flete.",
      },
    ],
  },
  cta: {
    title: "Solicita tu cotización de transporte en tolva",
    text: "Compártenos el material, el volumen y la ruta, y nuestro equipo te presentará una propuesta.",
    service: "Transporte en tolva",
  },
};

export default function TransporteTolva() {
  return <ServicePage data={data} />;
}
