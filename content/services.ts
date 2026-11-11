// Servicios (documentos "service" en Sanity): tarjeta + página de cada servicio.
// La URL (slug) y el orden son fijos en el código; el resto es editable.

import type { ServiceContent } from "./service-types";

export const services: ServiceContent[] = [
  {
    slug: "/caja-seca-53-pies/",
    seo: {
      title: "Transporte en caja seca de 53 pies | MM Carga",
      description:
        "Transporte en caja seca de 53 pies con más de 100 cajas propias. Rutas nacionales y de exportación vía Laredo, Drop & Hook y monitoreo 24/7.",
    },
    card: {
      name: "Transporte en caja seca de 53 pies",
      short: "Transporte en caja seca de 53 pies",
      summary:
        "Traslado de carga seca en rutas nacionales y de exportación a Estados Unidos.",
      otherSummary:
        "Traslado de carga seca en rutas nacionales y de exportación.",
      image: {
        src: "/images/servicios/transporte-caja-seca-53-pies-mm-carga.webp",
        alt: "Tractocamión de MM Carga con caja seca de 53 pies en carretera",
      },
    },

    parent: { href: "/transporte-de-carga/", label: "Transporte de carga" },
    crumb: "Caja seca de 53 pies",
    h1: "Transporte en caja seca de 53 pies",
    subtitle:
      "Traslado seguro y monitoreado de carga seca en rutas nacionales y de exportación, con más de 100 cajas propias.",
    image: {
      src: "/images/servicios/transporte-caja-seca-53-pies-mm-carga.webp",
      alt: "Tractocamión de MM Carga con caja seca de 53 pies en carretera",
    },
    about: {
      title: "Caja seca de 53 pies para carga nacional y de exportación",
      paragraphs: [
        "El transporte en caja seca protege la mercancía de la intemperie, el polvo y el riesgo de robo durante el trayecto. Es la opción más utilizada para carga seca paletizada o empacada, ya que combina gran capacidad volumétrica con altos niveles de seguridad.",
        "MM Carga cuenta con más de 100 cajas de 53 pies propias, que operan en rutas nacionales y en servicio de exportación a Estados Unidos vía Laredo. Todas las unidades cuentan con rastreo GPS y cámaras, supervisadas por nuestro centro de monitoreo las 24 horas.",
      ],
      image: {
        src: "/images/servicios/transporte-en-caja-seca-de-53-pies-mm-carga.webp",
        alt: "Transporte en caja seca de 53 pies de MM Carga con tractocamión azul en patio de operación",
      },
    },
    scope: {
      title: "Alcance del servicio de transporte en caja seca",
      items: [
        {
          title: "Rutas nacionales",
          icon: "route",
          text: "Traslados punto a punto hacia distintos destinos del país.",
        },
        {
          title: "Exportación vía Laredo",
          icon: "border",
          text: "Servicio cross-border con cruce por Nuevo Laredo.",
        },
        {
          title: "Drop & Hook",
          icon: "trailer",
          text: "Colocación de cajas en las instalaciones del cliente para su carga programada, con recolección al término del proceso.",
        },
        {
          title: "Arrastres e intercambios",
          icon: "swap",
          text: "Movimientos de cajas entre patios, plantas y recintos aduanales.",
        },
        {
          title: "Monitoreo 24/7",
          icon: "clock",
          text: "Rastreo GPS, cámaras y supervisión permanente durante todo el trayecto.",
        },
      ],
    },
    coverage: {
      title: "Cobertura del servicio de caja seca",
      text: "El transporte en caja seca opera principalmente desde nuestras bases en Nuevo Laredo y Silao, con cobertura nacional desde y hacia el resto de nuestras bases en Monterrey, Altamira, Manzanillo y Coatzacoalcos.",
      highlight: ["Nuevo Laredo", "Silao"],
      activeLabel: "Base principal del servicio",
      linksLabel: "Cómo llegar a las bases principales",
    },
    reasons: {
      title: "¿Por qué elegir a MM Carga para el transporte en caja seca?",
      items: [
        {
          title: "Disponibilidad de equipo",
          icon: "fleet",
          text: "Más de 100 cajas propias para atender la demanda de cada operación.",
        },
        {
          title: "Exportación certificada",
          icon: "certified",
          text: "Certificaciones C-TPAT y OEA que agilizan el cruce de mercancías a Estados Unidos.",
        },
        {
          title: "Presencia en la frontera",
          icon: "monitoring",
          text: "Base propia en Nuevo Laredo para la coordinación del cruce.",
        },
        {
          title: "Visibilidad permanente",
          icon: "eye",
          text: "Monitoreo 24/7 de cada unidad en ruta.",
        },
      ],
    },
    faq: {
      title: "Preguntas frecuentes sobre la caja seca de 53 pies",
      items: [
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
      ],
    },
    cta: {
      title: "Solicita tu cotización de transporte en caja seca de 53 pies",
      text: "Compártenos el origen, el destino y el tipo de carga, y te enviaremos una propuesta con la disponibilidad de equipo.",
      service: "Caja seca de 53 pies",
    },
  },
  {
    slug: "/transporte-tolva/",
    seo: {
      title: "Transporte en tolva para carga a granel | MM Carga",
      description:
        "Transporte en tolva de 140 m³ para materiales a granel y mercancía ferrosa. Flota propia, operadores certificados y monitoreo 24/7.",
    },
    card: {
      name: "Transporte en tolva",
      short: "Transporte en tolva",
      summary:
        "Traslado de materiales a granel en tolvas con capacidad de 140 m³.",
      otherSummary: "Traslado de materiales a granel en tolvas de 140 m³.",
      image: {
        src: "/images/servicios/transporte-tolva-granel-mm-carga.webp",
        alt: "Tractocamión de MM Carga con tolvas para transporte de carga a granel",
      },
    },

    parent: { href: "/transporte-de-carga/", label: "Transporte de carga" },
    crumb: "Tolva",
    h1: "Transporte en tolva",
    subtitle:
      "Traslado de materiales a granel en tolvas de 140 m³, con flota propia y monitoreo permanente.",
    image: {
      src: "/images/servicios/transporte-tolva-granel-mm-carga.webp",
      alt: "Tráiler con tolva de MM Carga para transporte a granel",
    },
    about: {
      title: "Tolva de carga para materiales a granel",
      paragraphs: [
        "La tolva es un remolque abierto en su parte superior, diseñado para la carga y descarga eficiente de materiales sueltos. Es el equipo indicado para trasladar grandes volúmenes de producto a granel que no se transporta en tarimas ni empaques.",
        "MM Carga opera tolvas con capacidad de 140 m³ para el traslado de materiales como arena, grava, minerales y mercancía ferrosa, con equipo especializado según el tipo de carga.",
      ],
      image: {
        src: "/images/servicios/transporte-en-tolva-a-granel-chatarra-mm-carga.webp",
        alt: "Transporte en tolva de MM Carga: carga de mercancía ferrosa a granel con grúa en patio de chatarra",
      },
    },
    scope: {
      title: "Alcance del servicio de transporte en tolva",
      items: [
        {
          title: "Tolvas de gran capacidad",
          icon: "hopper",
          text: "140 m³ por unidad, lo que reduce el número de viajes requeridos.",
        },
        {
          title: "Equipo especializado por material",
          icon: "layers",
          text: "Unidades adecuadas para carga a granel o mercancía ferrosa.",
        },
        {
          title: "Proyectos cargado/cargado",
          icon: "swap",
          text: "Aprovechamiento del viaje de retorno con producto terminado para optimizar costos.",
        },
        {
          title: "Monitoreo 24/7",
          icon: "clock",
          text: "Rastreo GPS, cámaras y supervisión permanente durante el trayecto.",
        },
      ],
    },
    coverage: {
      title: "Cobertura del servicio de transporte en tolva",
      text: "El transporte en tolva opera principalmente desde nuestra base en Coatzacoalcos, con cobertura nacional desde y hacia el resto de nuestras bases en Monterrey, Nuevo Laredo, Altamira, Silao y Manzanillo.",
      highlight: ["Coatzacoalcos"],
      activeLabel: "Base principal del servicio",
      linksLabel: "Cómo llegar a las bases principales",
    },
    reasons: {
      title: "¿Por qué elegir a MM Carga para el transporte en tolva?",
      items: [
        {
          title: "Mayor volumen por viaje",
          icon: "hopper",
          text: "Tolvas de 140 m³ que optimizan cada traslado.",
        },
        {
          title: "Experiencia en carga pesada",
          icon: "weight",
          text: "20 años en el traslado de granel, acero y mercancía ferrosa.",
        },
        {
          title: "Optimización de costos",
          icon: "cost",
          text: "Esquemas cargado/cargado que reducen el costo por tonelada.",
        },
        {
          title: "Operación segura",
          icon: "certified",
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
  },
  {
    slug: "/transporte-de-contenedores-maritimos/",
    seo: {
      title: "Transporte de contenedores marítimos | MM Carga",
      description:
        "Transporte de contenedores marítimos de importación y exportación desde Altamira, Manzanillo y Coatzacoalcos. One Way, Round Trip y báscula VGM.",
    },
    card: {
      name: "Transporte de contenedores marítimos",
      short: "Transporte de contenedores marítimos",
      summary:
        "Movimientos de importación y exportación desde los principales puertos del país.",
      otherSummary:
        "Importación y exportación desde Altamira, Manzanillo y Coatzacoalcos.",
      image: {
        src: "/images/servicios/transporte-contenedores-maritimos-mm-carga.webp",
        alt: "Tractocamión de MM Carga transportando un contenedor marítimo",
      },
    },

    parent: { href: "/transporte-de-carga/", label: "Transporte de carga" },
    crumb: "Contenedores marítimos",
    h1: "Transporte de contenedores marítimos",
    subtitle:
      "Traslado de contenedores de importación y exportación entre puertos, plantas y almacenes, con operación principal en Altamira, Manzanillo y Monterrey.",
    image: {
      src: "/images/servicios/transporte-contenedores-maritimos-mm-carga.webp",
      alt: "Transporte de contenedor marítimo de MM Carga en puerto",
    },
    about: {
      title: "Traslado de contenedores de importación y exportación",
      paragraphs: [
        "El transporte de contenedores marítimos enlaza la operación portuaria con las plantas y almacenes de nuestros clientes. En importación, trasladamos el contenedor desde el puerto hasta su destino final; en exportación, lo llevamos desde la planta hasta la terminal portuaria.",
        "MM Carga traslada los contenedores en plataformas en full, nuestro equipo principal, y ofrece movimientos One Way (solo ida) y Round Trip (ida y retorno del contenedor vacío). Para operaciones de exportación contamos con báscula certificada para la obtención del VGM (peso bruto verificado) que requieren las navieras.",
      ],
      image: {
        src: "/images/servicios/transporte-de-contenedores-maritimos-en-full-mm-carga.webp",
        alt: "Transporte de contenedores marítimos de MM Carga: plataforma en full cargada con grúa reach stacker en patio de contenedores",
      },
    },
    scope: {
      title: "Alcance del servicio de transporte de contenedores",
      items: [
        {
          title: "Importación",
          icon: "import",
          text: "Traslado del puerto a la planta o almacén del cliente.",
        },
        {
          title: "Exportación",
          icon: "export",
          text: "Traslado de la planta al puerto, en tiempo para el cierre del buque.",
        },
        {
          title: "One Way y Round Trip",
          icon: "swap",
          text: "Movimientos de solo ida o con retorno del contenedor vacío.",
        },
        {
          title: "Enrampe con portacontenedor o chasis",
          icon: "container",
          text: "Equipo adecuado para cada tipo de contenedor.",
        },
        {
          title: "Báscula certificada para VGM",
          icon: "scale",
          text: "Pesaje oficial conforme a los requisitos de las navieras.",
        },
        {
          title: "Almacenamiento",
          icon: "warehouse",
          text: "Patio y almacén para la carga que requiere resguardo temporal.",
        },
      ],
    },
    coverage: {
      title:
        "Transporte de contenedores desde los principales puertos de México",
      text: "El transporte de contenedores opera principalmente desde nuestras bases en Altamira, Manzanillo y Monterrey, con cobertura nacional desde y hacia el resto de nuestras bases en Nuevo Laredo, Silao y Coatzacoalcos. Trasladamos contenedores entre los puertos y las plantas y almacenes del interior del país.",
      highlight: ["Altamira", "Manzanillo", "Monterrey"],
      activeLabel: "Base principal del servicio",
      linksLabel: "Cómo llegar a las bases principales",
    },
    reasons: {
      title: "¿Por qué elegir a MM Carga para el transporte de contenedores?",
      items: [
        {
          title: "Presencia en tres puertos",
          icon: "port",
          text: "Bases propias en el Golfo de México y el Pacífico.",
        },
        {
          title: "Comercio exterior certificado",
          icon: "certified",
          text: "Certificaciones C-TPAT y OEA que respaldan las operaciones de importación y exportación.",
        },
        {
          title: "VGM sin intermediarios",
          icon: "scale",
          text: "Báscula certificada propia para operaciones de exportación.",
        },
        {
          title: "Transporte y almacenamiento integrados",
          icon: "integral",
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
  },
  {
    slug: "/transporte-de-carga-suelta/",
    seo: {
      title: "Transporte de carga suelta en plataforma | MM Carga",
      description:
        "Transporte de carga suelta en plataforma para acero, maquinaria, madera y tubería. Más de 200 unidades full, equipo de sujeción y monitoreo 24/7.",
    },
    card: {
      name: "Transporte de carga suelta en plataforma",
      short: "Transporte de carga suelta en plataforma",
      summary:
        "Traslado de acero, maquinaria y madera con equipo especializado de amarre y sujeción.",
      otherSummary: "Traslado de acero, maquinaria, madera y tubería.",
      image: {
        src: "/images/servicios/transporte-carga-suelta-plataforma-mm-carga.webp",
        alt: "Plataforma de MM Carga transportando rollos de acero como carga suelta",
      },
    },

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
          icon: "flatbed",
          text: "Más de 200 unidades para operaciones de gran volumen.",
        },
        {
          title: "Amarre y sujeción",
          icon: "strap",
          text: "Equipo especializado para asegurar cada tipo de pieza.",
        },
        {
          title: "Carga y descarga en puerto",
          icon: "port",
          text: "Maniobras para carga suelta de importación y exportación.",
        },
        {
          title: "Monitoreo 24/7",
          icon: "clock",
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
          icon: "weight",
          text: "20 años atendiendo a la industria del acero y la maquinaria.",
        },
        {
          title: "Capacidad para grandes volúmenes",
          icon: "fleet",
          text: "Más de 200 unidades full disponibles.",
        },
        {
          title: "Carga debidamente asegurada",
          icon: "strap",
          text: "Equipo de sujeción propio y operadores certificados.",
        },
        {
          title: "Conexión puerto-planta",
          icon: "route",
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
      title:
        "Solicita tu cotización de transporte de carga suelta en plataforma",
      text: "Compártenos el tipo de carga, sus dimensiones y peso aproximado, y nuestro equipo te presentará una propuesta.",
      service: "Carga suelta en plataforma",
    },
  },
  {
    slug: "/almacenamiento-de-mercancias/",
    seo: {
      title: "Almacenamiento de mercancías y maniobras | MM Carga",
      description:
        "Almacenamiento de mercancías en 200,000 m² techados y al aire libre. Control de inventarios con WMS, maniobras, distribución y báscula VGM.",
    },
    card: {
      name: "Almacenamiento de mercancías y maniobras",
      short: "Almacenamiento de mercancías",
      summary:
        "200,000 m² de almacén en Altamira, Manzanillo y Pesquería, control de inventarios con WMS y báscula certificada para VGM.",
      otherSummary: "200,000 m², control de inventarios con WMS y báscula VGM.",
      image: {
        src: "/images/servicios/almacenamiento-de-mercancias-mm-carga.webp",
        alt: "Almacén de MM Carga con mercancía paletizada",
      },
    },

    crumb: "Almacenamiento de mercancías",
    h1: "Almacenamiento de mercancías y maniobras",
    subtitle:
      "Resguardo, control de inventario y distribución de mercancía en 200,000 m² de almacén, integrados con nuestro servicio de transporte.",
    image: {
      src: "/images/servicios/almacenamiento-de-mercancias-mm-carga.webp",
      alt: "Almacén de mercancías de MM Carga con mercancía paletizada",
    },
    about: {
      title:
        "Servicio de almacenamiento de mercancías con control de inventario",
      paragraphs: [
        "El almacenamiento de mercancías comprende el resguardo del producto en un espacio controlado mientras se programa su siguiente destino. Incluye la recepción, el acomodo, el control de inventario y el despacho hacia el cliente final o la planta.",
        "MM Carga cuenta con 100,000 m² techados y 100,000 m² al aire libre, bodegas y montacargas propios, y control de inventarios mediante sistema WMS. Al integrar transporte y almacenamiento, gestionamos la recolección, el resguardo y la entrega con un solo equipo de trabajo.",
      ],
      image: {
        src: "/images/servicios/almacenamiento-de-mercancias-almacen-y-patio-mm-carga.webp",
        alt: "Almacenamiento de mercancías de MM Carga: vista aérea del almacén techado y patio con acero, contenedores y tractocamiones",
      },
    },
    scope: {
      title: "Alcance del servicio de almacenamiento",
      items: [
        {
          title: "Recepción de mercancías",
          icon: "import",
          text: "Descarga, inspección y registro del producto a su llegada al almacén.",
        },
        {
          title: "Almacenamiento techado y al aire libre",
          icon: "warehouse",
          text: "Espacios para mercancía que requiere resguardo y para carga pesada o voluminosa.",
        },
        {
          title: "Control de inventarios con WMS",
          icon: "inventory",
          text: "Visibilidad de entradas, salidas y existencias.",
        },
        {
          title: "Maniobras de carga y descarga",
          icon: "forklift",
          text: "Montacargas propios y personal capacitado.",
        },
        {
          title: "Distribución y entregas",
          icon: "fleet",
          text: "Recolección y entrega coordinadas con nuestra flota.",
        },
        {
          title: "Báscula certificada para VGM",
          icon: "scale",
          text: "Pesaje oficial de contenedores de exportación.",
        },
      ],
    },
    coverage: {
      title: "Cobertura del servicio de almacenamiento de mercancías",
      text: "Contamos con almacenes propios en Altamira, Manzanillo y Pesquería (Monterrey), integrados con nuestro servicio de transporte para coordinar la recolección, el resguardo y la entrega de cada operación.",
      highlight: ["Altamira", "Manzanillo", "Monterrey"],
      exclusive: true,
      activeLabel: "Base con almacén",
      mainLabel: "Almacenes propios en",
      mainNote:
        "Integrados con el transporte desde y hacia el resto de nuestras bases.",
      linksLabel: "Cómo llegar a nuestros almacenes",
    },
    reasons: {
      title: "¿Por qué elegir a MM Carga para el almacenamiento de mercancías?",
      items: [
        {
          title: "Transporte y almacenamiento integrados",
          icon: "integral",
          text: "Un solo proveedor para el flete y el resguardo de la mercancía.",
        },
        {
          title: "Espacio para carga pesada",
          icon: "weight",
          text: "Patios al aire libre para acero, maquinaria o contenedores.",
        },
        {
          title: "Control de inventario",
          icon: "inventory",
          text: "Sistema WMS para conocer en todo momento las existencias y su ubicación.",
        },
        {
          title: "Procesos certificados",
          icon: "certified",
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
  },
];
