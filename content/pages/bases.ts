// Páginas por base bajo /cobertura/ (documentos "basePage" en Sanity). Copy con la
// información que el cliente envió el 6 nov. Siguen con noindex y sin enlaces en
// menú/footer hasta que el usuario confirme publicarlas.

import type { BasePageData } from "./base-types";

export const basePages: Record<
  "altamira" | "manzanillo" | "nuevoLaredo" | "silao" | "coatzacoalcos",
  BasePageData
> = {
  altamira: {
    slug: "/transporte-de-carga-en-altamira/",
    city: "Altamira",
    label: "Altamira",
    h1: "Transporte de carga en Altamira, Tamaulipas",
    seo: {
      title: "Transporte de carga en Altamira | MM Carga",
      description:
        "Transporte de carga en Altamira desde nuestra base propia junto al puerto industrial: bodega, patio de maniobras y báscula certificada.",
    },
    subtitle:
      "Base de operación propia muy cerca del puerto industrial de Altamira, con bodega, patio de maniobras y báscula certificada.",
    warehouse: true,
    image: {
      src: "/images/bases/transporte-de-carga-en-altamira-mm-carga.webp",
      alt: "Patio de MM Carga en Altamira con contenedores marítimos, rollos de acero y plataforma en maniobra de carga",
    },
    intro: {
      title: "Empresa de transporte de carga en Altamira con base propia",
      paragraphs: [
        "Altamira es una de las bases más importantes de MM Carga por su cercanía con el puerto industrial de Altamira, en el Golfo de México. Desde aquí transportamos principalmente acero y contenedores de importación y exportación que entran o salen del puerto.",
        "La base cuenta con bodega, patio de maniobras y báscula certificada. En ella consolidamos y desconsolidamos mercancía, lo que nos permite integrar en un mismo lugar el transporte, el resguardo y la preparación de cada embarque.",
        "Ofrecemos cobertura nacional desde y hacia nuestras bases, con unidades propias y monitoreo las 24 horas.",
      ],
    },
    facilities: [
      {
        icon: "port",
        title: "Cercanía al puerto",
        text: "Ubicación muy próxima al puerto industrial de Altamira para agilizar la entrada y salida de contenedores.",
      },
      {
        icon: "warehouse",
        title: "Bodega",
        text: "Espacio propio para el resguardo de mercancías, integrado con nuestro servicio de transporte.",
      },
      {
        icon: "forklift",
        title: "Patio de maniobras",
        text: "Área para la carga, descarga y maniobra de contenedores, acero y unidades de plataforma.",
      },
      {
        icon: "scale",
        title: "Báscula certificada",
        text: "Verificación del peso de la carga dentro de la misma base, antes de su salida a carretera.",
      },
      {
        icon: "layers",
        title: "Consolidación y desconsolidación",
        text: "Agrupamos o dividimos mercancía en la base según el destino de cada embarque.",
      },
    ],
    services: {
      title: "Servicios de transporte de carga desde Altamira",
      intro:
        "Desde Altamira operamos principalmente el transporte de contenedores marítimos y de acero en plataforma, además del almacenamiento de mercancías en nuestra bodega.",
      focus: [
        "/transporte-de-contenedores-maritimos/",
        "/transporte-de-carga-suelta/",
        "/almacenamiento-de-mercancias/",
      ],
      summaries: [
        {
          slug: "/transporte-de-contenedores-maritimos/",
          text: "Contenedores de importación y exportación que entran o salen del puerto de Altamira.",
        },
        {
          slug: "/transporte-de-carga-suelta/",
          text: "Acero y carga suelta en plataformas en full desde y hacia el puerto.",
        },
        {
          slug: "/almacenamiento-de-mercancias/",
          text: "Resguardo, consolidación y desconsolidación de mercancía en nuestra bodega.",
        },
        {
          slug: "/caja-seca-53-pies/",
          text: "Carga seca desde y hacia Altamira.",
        },
        {
          slug: "/transporte-tolva/",
          text: "Materiales a granel desde y hacia Altamira.",
        },
      ],
    },
    coverageNote:
      "Ofrecemos cobertura nacional desde y hacia nuestras bases, con unidades propias y monitoreo las 24 horas.",
    faq: [
      {
        q: "¿Qué tipo de carga transportan desde Altamira?",
        a: "Principalmente acero y contenedores de importación y exportación que entran o salen del puerto de Altamira. También ofrecemos el resto de nuestros servicios desde y hacia esta base.",
      },
      {
        q: "¿La base de Altamira cuenta con bodega?",
        a: "Sí. La base cuenta con bodega para el resguardo de mercancías, además de patio de maniobras, y en ella consolidamos y desconsolidamos mercancía.",
      },
      {
        q: "¿Cuentan con báscula en Altamira?",
        a: "Sí. Nuestra base de Altamira cuenta con báscula certificada.",
      },
    ],
    cta: {
      title: "Solicita tu cotización de transporte de carga en Altamira",
      text: "Compártenos el origen, el destino y el tipo de carga, y nuestro equipo te presentará una propuesta.",
    },
  },

  manzanillo: {
    slug: "/transporte-de-contenedores-en-manzanillo/",
    city: "Manzanillo",
    label: "Manzanillo",
    h1: "Transporte de contenedores desde Manzanillo, Colima",
    seo: {
      title: "Transporte de contenedores en Manzanillo | MM Carga",
      description:
        "Transporte de contenedores en Manzanillo desde nuestra base propia cerca del puerto: almacén, patio y montacargas para contenedores.",
    },
    subtitle:
      "Base de operación propia cerca del puerto más importante del país, con almacén, patio y montacargas para el manejo de contenedores.",
    warehouse: true,
    image: {
      src: "/images/bases/transporte-de-contenedores-en-manzanillo-mm-carga.webp",
      alt: "Vista aérea de la base de MM Carga en Manzanillo con almacén, contenedores marítimos y plataformas",
    },
    intro: {
      title: "Transporte de contenedores en Manzanillo con base propia",
      paragraphs: [
        "Nuestra base de Manzanillo se ubica cerca del puerto más importante del país, lo que nos permite atender con oportunidad los movimientos de contenedores de importación y exportación en el Pacífico mexicano.",
        "Contamos con almacén, patio y montacargas para mover contenedores. En la base consolidamos y desconsolidamos mercancía antes de su traslado a destino.",
        "Ofrecemos cobertura nacional desde y hacia nuestras bases, con unidades propias y monitoreo las 24 horas.",
      ],
    },
    facilities: [
      {
        icon: "port",
        title: "Cercanía al puerto",
        text: "Base próxima al puerto más importante del país para agilizar la entrada y salida de contenedores.",
      },
      {
        icon: "warehouse",
        title: "Almacén",
        text: "Espacio propio para el resguardo de mercancías, integrado con nuestro servicio de transporte.",
      },
      {
        icon: "container",
        title: "Patio",
        text: "Área para el resguardo y la maniobra de contenedores y unidades.",
      },
      {
        icon: "forklift",
        title: "Montacargas para contenedores",
        text: "Equipo propio para mover contenedores dentro de la base.",
      },
      {
        icon: "layers",
        title: "Consolidación y desconsolidación",
        text: "Agrupamos o dividimos mercancía en la base según el destino de cada embarque.",
      },
    ],
    services: {
      title: "Servicios de transporte de carga desde Manzanillo",
      intro:
        "Desde Manzanillo operamos principalmente el transporte de contenedores marítimos y el almacenamiento de mercancías.",
      focus: [
        "/transporte-de-contenedores-maritimos/",
        "/almacenamiento-de-mercancias/",
      ],
      summaries: [
        {
          slug: "/transporte-de-contenedores-maritimos/",
          text: "Contenedores de importación y exportación desde y hacia el puerto de Manzanillo.",
        },
        {
          slug: "/almacenamiento-de-mercancias/",
          text: "Resguardo, consolidación y desconsolidación de mercancía en nuestro almacén.",
        },
        {
          slug: "/transporte-de-carga-suelta/",
          text: "Acero, maquinaria y carga suelta en plataformas en full.",
        },
        {
          slug: "/caja-seca-53-pies/",
          text: "Carga seca desde y hacia Manzanillo.",
        },
        {
          slug: "/transporte-tolva/",
          text: "Materiales a granel desde y hacia Manzanillo.",
        },
      ],
    },
    coverageNote:
      "Ofrecemos cobertura nacional desde y hacia nuestras bases, con unidades propias y monitoreo las 24 horas.",
    faq: [
      {
        q: "¿Qué servicios ofrecen en el puerto de Manzanillo?",
        a: "Principalmente el transporte de contenedores de importación y exportación y el almacenamiento de mercancías. También ofrecemos el resto de nuestros servicios desde y hacia esta base.",
      },
      {
        q: "¿La base de Manzanillo cuenta con almacén?",
        a: "Sí. La base cuenta con almacén y patio, y en ella consolidamos y desconsolidamos mercancía.",
      },
      {
        q: "¿Cuentan con equipo para mover contenedores en la base?",
        a: "Sí. Contamos con montacargas para el movimiento de contenedores dentro de la base.",
      },
    ],
    cta: {
      title:
        "Solicita tu cotización de transporte de contenedores en Manzanillo",
      text: "Compártenos el origen, el destino y el tipo de carga, y nuestro equipo te presentará una propuesta.",
    },
  },

  nuevoLaredo: {
    slug: "/transporte-de-carga-en-nuevo-laredo/",
    city: "Nuevo Laredo",
    label: "Nuevo Laredo",
    h1: "Transporte de carga en Nuevo Laredo, Tamaulipas",
    seo: {
      title: "Transporte de carga en Nuevo Laredo | MM Carga",
      description:
        "Transporte de carga en Nuevo Laredo con cajas secas de 53 pies y operación cross border entre México y Estados Unidos desde base propia.",
    },
    subtitle:
      "Base de operación de nuestras cajas secas de 53 pies, enfocada en el transporte de carga cross border entre México y Estados Unidos.",
    warehouse: false,
    intro: {
      title: "Transporte de carga cross border en Nuevo Laredo",
      paragraphs: [
        "Nuevo Laredo es la base de nuestras cajas secas de 53 pies y está enfocada en el transporte de carga cross border, en la frontera con Estados Unidos.",
        "Desde aquí coordinamos el intercambio de remolques y los traslados de mercancía que cruzan por esta frontera, con unidades propias y procesos certificados en C-TPAT y OEA.",
        "Ofrecemos cobertura nacional desde y hacia nuestras bases, con unidades propias y monitoreo las 24 horas.",
      ],
    },
    facilities: [
      {
        icon: "trailer",
        title: "Base de cajas secas de 53 pies",
        text: "Punto de operación de nuestras cajas secas para el transporte de carga seca.",
      },
      {
        icon: "border",
        title: "Operación cross border",
        text: "Base enfocada en los traslados de mercancía entre México y Estados Unidos.",
      },
      {
        icon: "swap",
        title: "Intercambio de remolques",
        text: "Coordinación del intercambio de cajas en la frontera para dar continuidad a cada embarque.",
      },
    ],
    services: {
      title: "Servicios de transporte de carga desde Nuevo Laredo",
      intro:
        "Desde Nuevo Laredo operamos principalmente el transporte en caja seca de 53 pies, con enfoque en el cruce fronterizo.",
      focus: ["/caja-seca-53-pies/"],
      summaries: [
        {
          slug: "/caja-seca-53-pies/",
          text: "Carga seca cross border entre México y Estados Unidos vía Nuevo Laredo.",
        },
        {
          slug: "/transporte-de-contenedores-maritimos/",
          text: "Contenedores de importación y exportación desde y hacia Nuevo Laredo.",
        },
        {
          slug: "/transporte-de-carga-suelta/",
          text: "Acero, maquinaria y carga suelta en plataformas en full.",
        },
        {
          slug: "/transporte-tolva/",
          text: "Materiales a granel desde y hacia Nuevo Laredo.",
        },
      ],
    },
    coverageNote:
      "Ofrecemos cobertura nacional desde y hacia nuestras bases, con unidades propias y monitoreo las 24 horas.",
    faq: [
      {
        q: "¿Realizan transporte de carga cross border en Nuevo Laredo?",
        a: "Sí. Nuestra base de Nuevo Laredo está enfocada en el transporte cross border entre México y Estados Unidos, incluido el intercambio de remolques en la frontera.",
      },
      {
        q: "¿Qué equipo opera desde la base de Nuevo Laredo?",
        a: "Nuevo Laredo es la base de nuestras cajas secas de 53 pies. También ofrecemos el resto de nuestros servicios de transporte desde y hacia esta base.",
      },
    ],
    cta: {
      title: "Solicita tu cotización de transporte de carga en Nuevo Laredo",
      text: "Compártenos el origen, el destino y el tipo de carga, y nuestro equipo te presentará una propuesta.",
    },
  },

  silao: {
    slug: "/transporte-de-carga-en-silao-bajio/",
    city: "Silao",
    label: "Silao",
    h1: "Transporte de carga en Silao, Guanajuato",
    seo: {
      title: "Transporte de carga en Silao y el Bajío | MM Carga",
      description:
        "Transporte de carga en Silao y el Bajío con cajas secas de 53 pies para la industria automotriz, desde nuestra base propia en Guanajuato.",
    },
    subtitle:
      "Base de operación de nuestras cajas secas de 53 pies en el corredor industrial del Bajío, enfocada en la industria automotriz.",
    warehouse: false,
    intro: {
      title: "Transporte de carga para la industria automotriz del Bajío",
      paragraphs: [
        "Nuestra base de Silao, en el corredor industrial del Bajío, está enfocada en el servicio de transporte en caja seca de 53 pies para la industria automotriz.",
        "Su ubicación nos permite atender a la industria de la región y conectar sus embarques con el resto de nuestras bases, incluida la frontera con Estados Unidos a través de Nuevo Laredo.",
        "Ofrecemos cobertura nacional desde y hacia nuestras bases, con unidades propias y monitoreo las 24 horas.",
      ],
    },
    facilities: [
      {
        icon: "trailer",
        title: "Base de cajas secas de 53 pies",
        text: "Punto de operación de nuestras cajas secas en el Bajío.",
      },
      {
        icon: "integral",
        title: "Enfoque automotriz",
        text: "Servicio de transporte orientado a la industria automotriz de la región.",
      },
      {
        icon: "route",
        title: "Conexión con la frontera",
        text: "Embarques coordinados con nuestra base de Nuevo Laredo para el cruce a Estados Unidos.",
      },
    ],
    services: {
      title: "Servicios de transporte de carga desde Silao",
      intro:
        "Desde Silao operamos principalmente el transporte en caja seca de 53 pies para la industria automotriz.",
      focus: ["/caja-seca-53-pies/"],
      summaries: [
        {
          slug: "/caja-seca-53-pies/",
          text: "Carga seca para la industria automotriz del Bajío.",
        },
        {
          slug: "/transporte-de-contenedores-maritimos/",
          text: "Contenedores de importación y exportación desde y hacia el Bajío.",
        },
        {
          slug: "/transporte-de-carga-suelta/",
          text: "Acero, maquinaria y carga suelta en plataformas en full.",
        },
        {
          slug: "/transporte-tolva/",
          text: "Materiales a granel desde y hacia el Bajío.",
        },
      ],
    },
    coverageNote:
      "Ofrecemos cobertura nacional desde y hacia nuestras bases, con unidades propias y monitoreo las 24 horas.",
    faq: [
      {
        q: "¿Atienden a la industria automotriz desde Silao?",
        a: "Sí. Nuestra base de Silao está enfocada en el transporte en caja seca de 53 pies para la industria automotriz del Bajío.",
      },
      {
        q: "¿Qué equipo opera desde la base de Silao?",
        a: "Silao es una base de nuestras cajas secas de 53 pies. También ofrecemos el resto de nuestros servicios de transporte desde y hacia esta base.",
      },
    ],
    cta: {
      title: "Solicita tu cotización de transporte de carga en Silao",
      text: "Compártenos el origen, el destino y el tipo de carga, y nuestro equipo te presentará una propuesta.",
    },
  },

  coatzacoalcos: {
    slug: "/transporte-de-carga-en-coatzacoalcos/",
    city: "Coatzacoalcos",
    label: "Coatzacoalcos",
    h1: "Transporte de carga en Coatzacoalcos, Veracruz",
    seo: {
      title: "Transporte de carga en Coatzacoalcos | MM Carga",
      description:
        "Transporte de carga en Coatzacoalcos con unidades de tolva para carga a granel y rutas hacia el sureste del país, desde base propia.",
    },
    subtitle:
      "Base de operación de nuestras unidades de tolva y de las rutas del sureste del país.",
    warehouse: false,
    image: {
      src: "/images/bases/transporte-de-carga-en-coatzacoalcos-mm-carga.webp",
      alt: "Tractocamión de MM Carga con tolvas en su base de transporte de carga en Coatzacoalcos, Veracruz",
    },
    intro: {
      title: "Transporte en tolva y rutas del sureste desde Coatzacoalcos",
      paragraphs: [
        "Nuestra base de Coatzacoalcos da servicio principalmente a nuestras unidades de tolva y a las unidades con ruta en el sureste del país.",
        "Desde aquí atendemos el transporte de materiales a granel en el sur del Golfo de México y conectamos la región con el resto de nuestras bases.",
        "Ofrecemos cobertura nacional desde y hacia nuestras bases, con unidades propias y monitoreo las 24 horas.",
      ],
    },
    facilities: [
      {
        icon: "hopper",
        title: "Base de unidades de tolva",
        text: "Punto de servicio de nuestras unidades de tolva para el transporte de materiales a granel.",
      },
      {
        icon: "route",
        title: "Rutas en el sureste",
        text: "Atención a las unidades que operan rutas en el sureste del país.",
      },
    ],
    services: {
      title: "Servicios de transporte de carga desde Coatzacoalcos",
      intro:
        "Desde Coatzacoalcos operamos principalmente el transporte en tolva y las rutas del sureste del país.",
      focus: ["/transporte-tolva/"],
      summaries: [
        {
          slug: "/transporte-tolva/",
          text: "Materiales a granel en unidades de tolva desde y hacia el sureste.",
        },
        {
          slug: "/caja-seca-53-pies/",
          text: "Carga seca desde y hacia Coatzacoalcos.",
        },
        {
          slug: "/transporte-de-contenedores-maritimos/",
          text: "Contenedores de importación y exportación desde y hacia Coatzacoalcos.",
        },
        {
          slug: "/transporte-de-carga-suelta/",
          text: "Acero, maquinaria y carga suelta en plataformas en full.",
        },
      ],
    },
    coverageNote:
      "Ofrecemos cobertura nacional desde y hacia nuestras bases, con unidades propias y monitoreo las 24 horas.",
    faq: [
      {
        q: "¿Qué servicio se opera principalmente desde Coatzacoalcos?",
        a: "Nuestra base de Coatzacoalcos da servicio principalmente a las unidades de tolva, para el transporte de materiales a granel.",
      },
      {
        q: "¿Cubren rutas en el sureste del país?",
        a: "Sí. La base de Coatzacoalcos atiende a nuestras unidades con ruta en el sureste, con cobertura nacional desde y hacia el resto de nuestras bases.",
      },
    ],
    cta: {
      title: "Solicita tu cotización de transporte de carga en Coatzacoalcos",
      text: "Compártenos el origen, el destino y el tipo de carga, y nuestro equipo te presentará una propuesta.",
    },
  },
};
