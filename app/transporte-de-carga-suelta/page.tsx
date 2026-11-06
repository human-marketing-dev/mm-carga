import type { Metadata } from "next";
import {
  IconClock,
  IconFleet,
  IconFlatbed,
  IconPort,
  IconRoute,
  IconStrap,
  IconWeight,
} from "@/components/site/icons";
import {
  ServicePage,
  type ServicePageData,
} from "@/components/site/service-page";

const SLUG = "/transporte-de-carga-suelta/";

export const metadata: Metadata = {
  title: "Transporte de carga suelta en plataforma | MM Carga",
  description:
    "Transporte de carga suelta en plataforma para acero, maquinaria, madera y tubería. Más de 200 unidades full, equipo de sujeción y monitoreo 24/7.",
  alternates: { canonical: SLUG },
};

const data: ServicePageData = {
  slug: SLUG,
  parent: { href: "/transporte-de-carga/", label: "Transporte de carga" },
  crumb: "Carga suelta en plataforma",
  h1: "Transporte de carga suelta en plataforma",
  subtitle:
    "Traslado de acero, maquinaria, madera y tubería con más de 200 unidades full y equipo especializado de sujeción.",
  image: {
    src: "/images/servicios/transporte-carga-suelta-plataforma-mm-carga.webp",
    alt: "Plataforma de MM Carga transportando acero como carga suelta",
  },
  about: {
    title: "Plataformas para carga suelta y carga pesada",
    paragraphs: [
      "Se denomina carga suelta a la mercancía que se transporta sin contenedor ni caja, como rollos y placas de acero, vigas, tubería, maquinaria o madera. Por sus dimensiones y peso, se traslada en plataformas abiertas que facilitan las maniobras con grúa o montacargas y se asegura mediante equipo de amarre.",
      "MM Carga cuenta con más de 200 unidades full para carga suelta y equipo propio de amarre y sujeción. Asimismo, realizamos maniobras de carga y descarga en puerto para mercancía de importación y exportación.",
      "Las plataformas en full son el equipo principal de MM Carga: con ellas transportamos acero, carga suelta, maquinaria y también contenedores marítimos.",
    ],
    image: {
      src: "/images/servicios/transporte-de-carga-suelta-rollos-de-acero-mm-carga.webp",
      alt: "Transporte de carga suelta en plataforma full de MM Carga con rollos de acero en puente vehicular",
    },
  },
  scope: {
    title: "Alcance del servicio de transporte de carga suelta",
    items: [
      {
        title: "Unidades full en plataforma",
        icon: <IconFlatbed />,
        text: "Más de 200 unidades para operaciones de gran volumen.",
      },
      {
        title: "Amarre y sujeción",
        icon: <IconStrap />,
        text: "Equipo especializado para asegurar cada tipo de pieza.",
      },
      {
        title: "Carga y descarga en puerto",
        icon: <IconPort />,
        text: "Maniobras para carga suelta de importación y exportación.",
      },
      {
        title: "Monitoreo 24/7",
        icon: <IconClock />,
        text: "Rastreo GPS, cámaras y supervisión permanente durante el trayecto.",
      },
    ],
  },
  coverage: {
    title: "Cobertura del servicio de transporte en plataforma",
    text: "El transporte en plataforma opera desde todas nuestras bases, con cobertura nacional desde y hacia Monterrey, Nuevo Laredo, Altamira, Silao, Manzanillo y Coatzacoalcos.",
    mainLabel: "Opera desde nuestras seis bases",
  },
  reasons: {
    title: "¿Por qué elegir a MM Carga para el transporte de carga suelta?",
    items: [
      {
        title: "Especialización en carga pesada",
        icon: <IconWeight />,
        text: "20 años atendiendo a la industria del acero y la maquinaria.",
      },
      {
        title: "Capacidad para grandes volúmenes",
        icon: <IconFleet />,
        text: "Más de 200 unidades full disponibles.",
      },
      {
        title: "Carga debidamente asegurada",
        icon: <IconStrap />,
        text: "Equipo de sujeción propio y operadores certificados.",
      },
      {
        title: "Conexión puerto-planta",
        icon: <IconRoute />,
        text: "Bases en los principales puertos para la recepción de carga de importación.",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre el transporte de carga suelta",
    items: [
      {
        q: "¿Qué es la carga suelta?",
        a: "Es la mercancía que se transporta sin contenedor, por piezas o en bultos, como acero, maquinaria, madera o tubería.",
      },
      {
        q: "¿Qué tipo de carga transportan en plataforma?",
        a: "Rollos y placas de acero, vigas, tubería, maquinaria y madera, entre otras.",
      },
      {
        q: "¿Cómo se asegura la carga?",
        a: "Mediante equipo de amarre y sujeción adecuado a cada pieza, con monitoreo 24/7 durante el trayecto.",
      },
      {
        q: "¿Realizan maniobras de carga y descarga en puerto?",
        a: "Sí. Realizamos maniobras en puerto para carga suelta de importación y exportación.",
      },
    ],
  },
  cta: {
    title: "Solicita tu cotización de transporte de carga suelta en plataforma",
    text: "Compártenos el tipo de carga, sus dimensiones y peso aproximado, y nuestro equipo te presentará una propuesta.",
    service: "Carga suelta en plataforma",
  },
};

export default function TransporteCargaSuelta() {
  return <ServicePage data={data} />;
}
