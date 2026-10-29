import type { Metadata } from "next";
import {
  IconBorder,
  IconCertified,
  IconClock,
  IconEye,
  IconFleet,
  IconMonitoring,
  IconRoute,
  IconSwap,
  IconTrailer,
} from "@/components/site/icons";
import {
  ServicePage,
  type ServicePageData,
} from "@/components/site/service-page";

const SLUG = "/caja-seca-53-pies/";

export const metadata: Metadata = {
  title: "Transporte en caja seca de 53 pies | MM Carga",
  description:
    "Transporte en caja seca de 53 pies con más de 100 cajas propias. Rutas nacionales y de exportación vía Laredo, Drop & Hook y monitoreo 24/7.",
  alternates: { canonical: SLUG },
};

const audience = [
  "Empresas manufactureras y maquiladoras con operaciones de exportación",
  "Fabricantes y distribuidores de producto terminado y refacciones",
  "Industrias que trasladan insumos empacados o en tarimas",
  "Empresas que requieren cajas disponibles en sus instalaciones (Drop & Hook)",
];

const scope = [
  {
    title: "Rutas nacionales",
    icon: <IconRoute />,
    text: "Traslados punto a punto hacia distintos destinos del país.",
  },
  {
    title: "Exportación vía Laredo",
    icon: <IconBorder />,
    text: "Servicio cross-border con cruce por Nuevo Laredo.",
  },
  {
    title: "Drop & Hook",
    icon: <IconTrailer />,
    text: "Colocación de cajas en las instalaciones del cliente para su carga programada, con recolección al término del proceso.",
  },
  {
    title: "Arrastres e intercambios",
    icon: <IconSwap />,
    text: "Movimientos de cajas entre patios, plantas y recintos aduanales.",
  },
  {
    title: "Monitoreo 24/7",
    icon: <IconClock />,
    text: "Rastreo GPS, cámaras y supervisión permanente durante todo el trayecto.",
  },
];

const specs: ServicePageData["specs"]["rows"] = [
  ["Largo exterior", "53 pies (16.15 m)"],
  [
    "Medidas interiores aprox.",
    "15.9 m de largo × 2.5 m de ancho × 2.7 m de alto",
  ],
  ["Volumen aprox.", "100 a 110 m³"],
  ["Tarimas estándar", "26 a 30"],
  ["Flota MM Carga", "Más de 100 cajas de 53 pies"],
];

const reasons = [
  {
    title: "Disponibilidad de equipo",
    icon: <IconFleet />,
    text: "Más de 100 cajas propias para atender la demanda de cada operación.",
  },
  {
    title: "Exportación certificada",
    icon: <IconCertified />,
    text: "Certificaciones C-TPAT y OEA que agilizan el cruce de mercancías a Estados Unidos.",
  },
  {
    title: "Presencia en la frontera",
    icon: <IconMonitoring />,
    text: "Base propia en Nuevo Laredo para la coordinación del cruce.",
  },
  {
    title: "Visibilidad permanente",
    icon: <IconEye />,
    text: "Monitoreo 24/7 de cada unidad en ruta.",
  },
];

const faq = [
  {
    q: "¿Cuál es la capacidad de una caja seca de 53 pies?",
    a: "Como referencia, una caja de 53 pies tiene capacidad para 26 a 30 tarimas estándar y alrededor de 100 m³ de volumen. La capacidad final se confirma según el tipo de carga.",
  },
  {
    q: "¿Realizan envíos a Estados Unidos?",
    a: "Sí. Contamos con servicio de exportación vía Laredo y certificaciones C-TPAT y OEA.",
  },
  {
    q: "¿En qué consiste el servicio Drop & Hook?",
    a: "Consiste en dejar una caja en las instalaciones del cliente para que realice la carga en sus propios tiempos. Al concluir, recolectamos la caja y, si se requiere, la reemplazamos por otra.",
  },
  {
    q: "¿Cómo se da seguimiento a la carga?",
    a: "Todas nuestras unidades cuentan con GPS y cámaras, supervisadas por nuestro centro de monitoreo las 24 horas.",
  },
];

const data: ServicePageData = {
  slug: SLUG,
  parent: { href: "/transporte-de-carga/", label: "Transporte de carga" },
  crumb: "Caja seca de 53 pies",
  h1: "Transporte en caja seca de 53 pies",
  subtitle:
    "Traslado seguro y monitoreado de carga seca en rutas nacionales y de exportación, con más de 100 cajas propias.",
  image: {
    src: "/images/servicios/transporte-caja-seca-53-pies-mm-carga.webp",
    alt: "Tractocamión de MM Carga con caja seca de 53 pies en carretera",
  },
  specsButton: "Ver medidas y capacidad",
  about: {
    title: "Caja seca de 53 pies para carga nacional y de exportación",
    paragraphs: [
      "La caja seca de 53 pies es un remolque cerrado que protege la mercancía de la intemperie, el polvo y el riesgo de robo durante el trayecto. Es el equipo de mayor uso para carga seca paletizada o empacada, ya que combina gran capacidad volumétrica con altos niveles de seguridad.",
      "MM Carga cuenta con más de 100 cajas de 53 pies propias, que operan en rutas nacionales y en servicio de exportación a Estados Unidos vía Laredo. Todas las unidades cuentan con rastreo GPS y cámaras, supervisadas por nuestro centro de monitoreo las 24 horas.",
    ],
    audience,
  },
  scope: {
    title: "Alcance del servicio de transporte en caja seca",
    items: scope,
  },
  specs: {
    title: "Caja seca de 53 pies: medidas y capacidad",
    caption: "Medidas y capacidad de la caja seca de 53 pies",
    note: "Valores de referencia. La capacidad final se confirma según el tipo de carga.",
    rows: specs,
  },
  coverage: {
    title: "Cobertura del servicio de caja seca",
    text: "Operamos el servicio de caja seca desde nuestras seis bases en Monterrey, Nuevo Laredo, Altamira, Silao, Manzanillo y Coatzacoalcos, con conexión entre los principales corredores industriales, los puertos del país y la frontera con Estados Unidos.",
  },
  reasons: {
    title: "¿Por qué elegir a MM Carga para el transporte en caja seca?",
    items: reasons,
  },
  faq: {
    title: "Preguntas frecuentes sobre la caja seca de 53 pies",
    items: faq,
  },
  cta: {
    title: "Solicita tu cotización de transporte en caja seca de 53 pies",
    text: "Compártenos el origen, el destino y el tipo de carga, y te enviaremos una propuesta con la disponibilidad de equipo.",
    service: "Caja seca de 53 pies",
  },
};

export default function CajaSeca() {
  return <ServicePage data={data} />;
}
