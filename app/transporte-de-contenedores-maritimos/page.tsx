import type { Metadata } from "next";
import {
  IconCertified,
  IconContainer,
  IconExport,
  IconImport,
  IconIntegral,
  IconPort,
  IconScale,
  IconSwap,
  IconWarehouse,
} from "@/components/site/icons";
import {
  ServicePage,
  type ServicePageData,
} from "@/components/site/service-page";

const SLUG = "/transporte-de-contenedores-maritimos/";

export const metadata: Metadata = {
  title: "Transporte de contenedores marítimos | MM Carga",
  description:
    "Transporte de contenedores marítimos de importación y exportación desde Altamira, Manzanillo y Coatzacoalcos. One Way, Round Trip y báscula VGM.",
  alternates: { canonical: SLUG },
};

const data: ServicePageData = {
  slug: SLUG,
  parent: { href: "/transporte-de-carga/", label: "Transporte de carga" },
  crumb: "Contenedores marítimos",
  h1: "Transporte de contenedores marítimos",
  subtitle:
    "Traslado de contenedores de importación y exportación entre puertos, plantas y almacenes, con bases propias en Altamira, Manzanillo y Coatzacoalcos.",
  image: {
    src: "/images/servicios/transporte-contenedores-maritimos-mm-carga.webp",
    alt: "Transporte de contenedor marítimo de MM Carga en puerto",
  },
  specsButton: "Ver tipos de contenedores",
  about: {
    title: "Traslado de contenedores de importación y exportación",
    paragraphs: [
      "El transporte de contenedores marítimos enlaza la operación portuaria con las plantas y almacenes de nuestros clientes. En importación, trasladamos el contenedor desde el puerto hasta su destino final; en exportación, lo llevamos desde la planta hasta la terminal portuaria.",
      "MM Carga realiza el enrampe con portacontenedor o chasis y ofrece movimientos One Way (solo ida) y Round Trip (ida y retorno del contenedor vacío). Para operaciones de exportación contamos con báscula certificada para la obtención del VGM (peso bruto verificado) que requieren las navieras.",
    ],
    audience: [
      "Importadores y exportadores",
      "Agentes aduanales y agentes de carga",
      "Plantas industriales que reciben insumos por vía marítima",
      "Navieras y operadores logísticos que requieren arrastre terrestre",
    ],
  },
  scope: {
    title: "Alcance del servicio de transporte de contenedores",
    items: [
      {
        title: "Importación",
        icon: <IconImport />,
        text: "Traslado del puerto a la planta o almacén del cliente.",
      },
      {
        title: "Exportación",
        icon: <IconExport />,
        text: "Traslado de la planta al puerto, en tiempo para el cierre del buque.",
      },
      {
        title: "One Way y Round Trip",
        icon: <IconSwap />,
        text: "Movimientos de solo ida o con retorno del contenedor vacío.",
      },
      {
        title: "Enrampe con portacontenedor o chasis",
        icon: <IconContainer />,
        text: "Equipo adecuado para cada tipo de contenedor.",
      },
      {
        title: "Báscula certificada para VGM",
        icon: <IconScale />,
        text: "Pesaje oficial conforme a los requisitos de las navieras.",
      },
      {
        title: "Almacenamiento",
        icon: <IconWarehouse />,
        text: "Patio y almacén para la carga que requiere resguardo temporal.",
      },
    ],
  },
  specs: {
    title: "Tipos de contenedores que transportamos",
    caption: "Tipos de contenedores marítimos que transporta MM Carga",
    note: "Equipo: portacontenedor o chasis · Movimientos: One Way y Round Trip · Báscula certificada VGM.",
    head: ["Contenedor", "Medidas exteriores aprox.", "Uso común"],
    rows: [
      ["20 pies (20’ DV)", "6.1 × 2.44 × 2.59 m", "Carga pesada y densa"],
      ["40 pies (40’ DV)", "12.2 × 2.44 × 2.59 m", "Carga general"],
      ["40 pies High Cube (40’ HC)", "12.2 × 2.44 × 2.9 m", "Carga voluminosa"],
    ],
  },
  coverage: {
    title: "Transporte de contenedores desde los principales puertos de México",
    text: "Contamos con bases propias en los puertos de Altamira, Manzanillo y Coatzacoalcos, además de Monterrey, Nuevo Laredo y Silao. Desde estas seis bases trasladamos contenedores entre los puertos y las plantas y almacenes del interior del país.",
  },
  reasons: {
    title: "¿Por qué elegir a MM Carga para el transporte de contenedores?",
    items: [
      {
        title: "Presencia en tres puertos",
        icon: <IconPort />,
        text: "Bases propias en el Golfo de México y el Pacífico.",
      },
      {
        title: "Comercio exterior certificado",
        icon: <IconCertified />,
        text: "Certificaciones C-TPAT y OEA que respaldan las operaciones de importación y exportación.",
      },
      {
        title: "VGM sin intermediarios",
        icon: <IconScale />,
        text: "Báscula certificada propia para operaciones de exportación.",
      },
      {
        title: "Transporte y almacenamiento integrados",
        icon: <IconIntegral />,
        text: "Resguardo de la carga en nuestras instalaciones cuando la operación lo requiere.",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre transporte de contenedores",
    items: [
      {
        q: "¿Cuál es la diferencia entre One Way y Round Trip?",
        a: "En One Way el contenedor se traslada solo de ida. En Round Trip, además, retornamos el contenedor vacío al puerto o al patio de la naviera.",
      },
      {
        q: "¿Qué es el VGM y por qué es necesario?",
        a: "Es el peso bruto verificado del contenedor, requisito de las navieras antes del embarque. Lo obtenemos mediante nuestra báscula certificada.",
      },
      {
        q: "¿En qué puertos operan?",
        a: "Contamos con bases propias en Altamira, Manzanillo y Coatzacoalcos.",
      },
      {
        q: "¿Qué tipos de contenedor transportan?",
        a: "Contenedores de 20 y 40 pies, incluidos High Cube.",
      },
      {
        q: "¿Venden o rentan contenedores?",
        a: "No. Nuestro servicio es el transporte terrestre de contenedores marítimos entre puerto, planta y almacén.",
      },
    ],
  },
  cta: {
    title: "Solicita tu cotización de transporte de contenedores marítimos",
    text: "Compártenos el puerto, el destino y el tipo de contenedor, y nuestro equipo te presentará una propuesta.",
    service: "Contenedores marítimos",
  },
};

export default function TransporteContenedores() {
  return <ServicePage data={data} />;
}
