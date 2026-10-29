import type { Metadata } from "next";
import {
  IconCertified,
  IconFleet,
  IconForklift,
  IconImport,
  IconIntegral,
  IconInventory,
  IconScale,
  IconWarehouse,
  IconWeight,
} from "@/components/site/icons";
import {
  ServicePage,
  type ServicePageData,
} from "@/components/site/service-page";

const SLUG = "/almacenamiento-de-mercancias/";

export const metadata: Metadata = {
  title: "Almacenamiento de mercancías y maniobras | MM Carga",
  description:
    "Almacenamiento de mercancías en 200,000 m² techados y al aire libre. Control de inventarios con WMS, maniobras, distribución y báscula VGM.",
  alternates: { canonical: SLUG },
};

const data: ServicePageData = {
  slug: SLUG,
  crumb: "Almacenamiento de mercancías",
  h1: "Almacenamiento de mercancías y maniobras",
  subtitle:
    "Resguardo, control de inventario y distribución de mercancía en 200,000 m² de almacén, integrados con nuestro servicio de transporte.",
  image: {
    src: "/images/servicios/almacenamiento-de-mercancias-mm-carga.webp",
    alt: "Almacén de mercancías de MM Carga con mercancía paletizada",
  },
  specsButton: "Ver instalaciones",
  about: {
    title: "Servicio de almacenamiento de mercancías con control de inventario",
    paragraphs: [
      "El almacenamiento de mercancías comprende el resguardo del producto en un espacio controlado mientras se programa su siguiente destino. Incluye la recepción, el acomodo, el control de inventario y el despacho hacia el cliente final o la planta.",
      "MM Carga cuenta con 100,000 m² techados y 100,000 m² al aire libre, bodegas y montacargas propios, y control de inventarios mediante sistema WMS. Al integrar transporte y almacenamiento, gestionamos la recolección, el resguardo y la entrega con un solo equipo de trabajo.",
    ],
    audience: [
      "Importadores que requieren espacio para su mercancía a la salida del puerto",
      "Plantas que necesitan inventario cercano a su producción",
      "Empresas con carga pesada o voluminosa que requiere patio al aire libre",
      "Exportadores que deben obtener el pesaje de sus contenedores (VGM)",
    ],
  },
  scope: {
    title: "Alcance del servicio de almacenamiento",
    items: [
      {
        title: "Recepción de mercancías",
        icon: <IconImport />,
        text: "Descarga, inspección y registro del producto a su llegada al almacén.",
      },
      {
        title: "Almacenamiento techado y al aire libre",
        icon: <IconWarehouse />,
        text: "Espacios para mercancía que requiere resguardo y para carga pesada o voluminosa.",
      },
      {
        title: "Control de inventarios con WMS",
        icon: <IconInventory />,
        text: "Visibilidad de entradas, salidas y existencias.",
      },
      {
        title: "Maniobras de carga y descarga",
        icon: <IconForklift />,
        text: "Montacargas propios y personal capacitado.",
      },
      {
        title: "Distribución y entregas",
        icon: <IconFleet />,
        text: "Recolección y entrega coordinadas con nuestra flota.",
      },
      {
        title: "Báscula certificada para VGM",
        icon: <IconScale />,
        text: "Pesaje oficial de contenedores de exportación.",
      },
    ],
  },
  specs: {
    title: "Instalaciones de almacenamiento",
    caption: "Instalaciones de almacenamiento de MM Carga",
    rows: [
      ["Almacén techado", "100,000 m²"],
      ["Patio al aire libre", "100,000 m²"],
      ["Control de inventarios", "Sistema WMS"],
      ["Equipo de maniobras", "Montacargas propios"],
      ["Pesaje", "Báscula certificada para VGM"],
    ],
  },
  coverage: {
    title: "Cobertura del servicio de almacenamiento de mercancías",
    text: "Integramos el almacenamiento con nuestro servicio de transporte desde las seis bases de MM Carga en Monterrey, Nuevo Laredo, Altamira, Silao, Manzanillo y Coatzacoalcos, para coordinar la recolección, el resguardo y la entrega de cada operación.",
  },
  reasons: {
    title: "¿Por qué elegir a MM Carga para el almacenamiento de mercancías?",
    items: [
      {
        title: "Transporte y almacenamiento integrados",
        icon: <IconIntegral />,
        text: "Un solo proveedor para el flete y el resguardo de la mercancía.",
      },
      {
        title: "Espacio para carga pesada",
        icon: <IconWeight />,
        text: "Patios al aire libre para acero, maquinaria o contenedores.",
      },
      {
        title: "Control de inventario",
        icon: <IconInventory />,
        text: "Sistema WMS para conocer en todo momento las existencias y su ubicación.",
      },
      {
        title: "Procesos certificados",
        icon: <IconCertified />,
        text: "ISO 9001:2015, C-TPAT y OEA.",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes sobre almacenamiento de mercancías",
    items: [
      {
        q: "¿Qué es el almacenamiento de mercancías?",
        a: "Es el resguardo del producto en un espacio controlado, que incluye recepción, acomodo, control de inventario y despacho hacia su destino.",
      },
      {
        q: "¿Cómo se realiza la recepción de mercancías en el almacén?",
        a: "Descargamos el producto, verificamos que coincida con la documentación y lo registramos en el sistema WMS antes de su acomodo.",
      },
      {
        q: "¿Cuentan con almacenamiento al aire libre?",
        a: "Sí. Además de 100,000 m² techados, contamos con 100,000 m² al aire libre para carga pesada o voluminosa.",
      },
      {
        q: "¿Ofrecen recolección y entrega de mercancía?",
        a: "Sí. Coordinamos la recolección y la entrega con nuestra propia flota.",
      },
    ],
  },
  cta: {
    title: "Solicita tu cotización de almacenamiento de mercancías",
    text: "Compártenos el tipo de producto, el volumen y el tiempo estimado de resguardo, y nuestro equipo te presentará una propuesta.",
    service: "Almacenamiento",
  },
};

export default function AlmacenamientoMercancias() {
  return <ServicePage data={data} />;
}
