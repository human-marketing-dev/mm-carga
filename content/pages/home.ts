import type { FaqItem, IconItem, Img, Paragraphs, Seo } from "../types";

export type HomeContent = {
  seo: Seo;
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    /** Fotos que rotan en el fondo del hero */
    slides: (Img & {
      label: string;
      /** Encuadre (CSS object-position), p. ej. "60% 50%" */
      position?: string;
    })[];
  };
  figures: { value: string; unit?: string; label: string }[];
  about: {
    title: string;
    paragraphs: Paragraphs;
    image: Img;
    /** Dato flotante sobre la foto */
    statValue: string;
    statLabel: string;
  };
  reasons: { title: string; intro: string; items: IconItem[] };
  services: {
    title: string;
    intro: string;
    allTitle: string;
    allText: string;
  };
  coverage: { title: string; paragraphs: Paragraphs };
  certifications: { title: string; intro: string };
  faq: { title: string; items: FaqItem[] };
  cta: { title: string; text: string };
};

export const home: HomeContent = {
  seo: {
    title:
      "Transporte de carga y almacenaje de mercancías en México | MM Carga",
    description:
      "20 años en el transporte de carga y almacenaje de mercancías, con flota, almacenes y bases propias en México. Solicita tu cotización.",
  },
  hero: {
    badge: "20 AÑOS DE EXPERIENCIA",
    h1: "Transporte de carga y almacenaje de mercancías en México",
    subtitle:
      "Servicio integral para el manejo, almacenaje y transporte de tu mercancía, con flota, almacenes y bases propias y 20 años de experiencia.",
    // Fotos de los distintos servicios para que no se lea solo como flota de camiones.
    // ⚠️ Carga suelta es una foto de 630 px: reemplazar por una versión de 2000 px o más.
    slides: [
      {
        src: "/images/hero/hero-transporte-de-carga-mexico.webp",
        alt: "Flota de tractocamiones de MM Carga, empresa de transporte de carga y almacenaje de mercancías en México",
        label: "Transporte de carga",
        position: "60% 50%",
      },
      {
        src: "/images/servicios/almacenamiento-de-mercancias-mm-carga.webp",
        alt: "Almacén de MM Carga con mercancía paletizada",
        label: "Almacenaje de mercancías",
        position: "50% 60%",
      },
      {
        src: "/images/hero/transporte-de-contenedores-y-acero-mm-carga.webp",
        alt: "Patio de MM Carga en Altamira con contenedores marítimos, rollos de acero y plataforma en maniobra de carga",
        label: "Contenedores marítimos",
        position: "65% 50%",
      },
      {
        src: "/images/servicios/transporte-de-carga-suelta-rollos-de-acero-mm-carga.webp",
        alt: "Transporte de carga suelta en plataforma full de MM Carga con rollos de acero",
        label: "Carga suelta en plataforma",
        position: "50% 60%",
      },
    ],
  },
  figures: [
    { value: "20", label: "años de experiencia" },
    { value: "+200", label: "unidades full" },
    { value: "+100", label: "cajas secas de 53 pies" },
    { value: "200,000", unit: "m²", label: "de almacenamiento" },
  ],
  about: {
    title:
      "Empresa de transporte y almacenaje con infraestructura propia en México",
    paragraphs: [
      "MM Carga es una empresa mexicana dedicada al transporte terrestre de carga y al almacenaje de mercancías. Desde hace 20 años facilitamos las operaciones de nuestros clientes con un servicio integral para el manejo, almacenaje y transporte de su mercancía, respaldado por infraestructura propia: flota, cajas secas, almacenes y bases de operación.",
      "Nuestra principal fortaleza es el transporte en plataformas en full, con el que movemos acero, carga suelta y contenedores de importación y exportación. Además, operamos cajas secas de 53 pies y tolvas para materiales a granel. Nuestras unidades cuentan con rastreo GPS y cámaras, supervisadas por un centro de monitoreo que opera las 24 horas.",
    ],
    image: {
      src: "/images/cobertura/patio-bases-de-operacion-transporte-de-carga-mm-carga.webp",
      alt: "Patio de MM Carga con tractocamiones en una de sus bases de operación",
    },
    statValue: "6",
    statLabel: "bases de operación propias",
  },
  reasons: {
    title:
      "¿Por qué elegir a MM Carga para el transporte y almacenaje de tu mercancía?",
    intro: "Nos encargamos de tu mercancía de principio a fin.",
    items: [
      {
        title: "Solución logística integral",
        icon: "integral",
        text: "Centralizamos los servicios que tu mercancía necesita y coordinamos cada etapa de la operación, desde el origen hasta el destino, con distintas modalidades y equipos dentro de una misma empresa.",
      },
      {
        title: "Capacidad para grandes operaciones",
        icon: "fleet",
        text: "Más de 200 unidades para operación full, más de 100 cajas secas de 53 pies, 100,000 m² de almacén techado y 100,000 m² de almacenamiento al aire libre.",
      },
      {
        title: "Control, tecnología y servicio 24/7",
        icon: "monitoring",
        text: "Unidades propias de modelos recientes con GPS y cámaras, un centro de monitoreo que opera las 24 horas, operadores certificados e integraciones vía API.",
      },
      {
        title: "Todo lo que tu operación necesita, en un solo lugar",
        icon: "layers",
        text: "Integramos transporte, almacenamiento y servicios especializados con un solo proveedor, desde el origen hasta el destino.",
      },
    ],
  },
  services: {
    title: "Soluciones integrales de transporte de carga y almacenamiento",
    intro:
      "Ofrecemos el equipo adecuado para cada tipo de carga, con monitoreo permanente y coordinación de origen a destino.",
    allTitle: "Ver servicios de transporte de carga",
    allText: "Conoce el equipo, el alcance y la cobertura de cada servicio.",
  },
  coverage: {
    title: "Presencia en los principales puertos, la frontera norte y el Bajío",
    paragraphs: [
      "Contamos con bases de operación propias en Altamira, Manzanillo, Coatzacoalcos, Nuevo Laredo, Silao y Monterrey, y ofrecemos cobertura nacional desde y hacia cada una de ellas. Esta red nos permite atender con oportunidad las operaciones portuarias del Golfo y del Pacífico, el comercio con Estados Unidos y el corredor industrial del centro del país.",
    ],
  },
  certifications: {
    title: "Certificaciones y afiliaciones",
    intro:
      "Nuestras operaciones cumplen con estándares nacionales e internacionales de seguridad, calidad y cuidado ambiental.",
  },
  faq: {
    title: "Preguntas frecuentes sobre transporte de carga y almacenaje",
    items: [
      {
        q: "¿Qué tipos de carga transportan?",
        a: "Nuestro equipo principal son las plataformas en full, con las que transportamos contenedores marítimos, carga suelta, acero y maquinaria. Además, contamos con tolvas para materiales a granel y con cajas secas de 53 pies para carga seca.",
      },
      {
        q: "¿Cuentan con cobertura nacional?",
        a: "Sí. Ofrecemos cobertura nacional desde y hacia nuestras bases en Monterrey, Altamira, Manzanillo, Nuevo Laredo, Silao y Coatzacoalcos.",
      },
      {
        q: "¿Cómo se da seguimiento a la carga?",
        a: "Todas nuestras unidades cuentan con GPS y cámaras, y son supervisadas por nuestro centro de monitoreo las 24 horas.",
      },
      {
        q: "¿Ofrecen servicio de almacenamiento?",
        a: "Sí. Contamos con almacenes en Altamira, Manzanillo y Pesquería, con 100,000 m² techados y 100,000 m² al aire libre, y control de inventarios mediante sistema WMS.",
      },
      {
        q: "¿Cómo puedo solicitar una cotización?",
        a: "Comunícate por WhatsApp o completa el formulario de contacto con el origen, el destino y el tipo de carga. Nuestro equipo te enviará una propuesta.",
      },
    ],
  },
  cta: {
    title: "Soluciones de transporte y almacenaje a la medida de tu operación",
    text: "Nuestro equipo está listo para analizar tus necesidades de transporte y almacenamiento y presentarte una propuesta.",
  },
};
