export const contact = {
  phone: "+52 81 1985 1429",
  phoneHref: "tel:+528119851429",
  whatsapp: "https://wa.me/528119851429",
  email: "info@mmcarga.com",
  address: "Carretera a Huinala km 6.5, 66673 Pesquería, N.L.",
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "/caja-seca-53-pies/",
    name: "Transporte en caja seca de 53 pies",
    short: "Caja seca 53'",
    summary: "Traslado de carga seca en rutas nacionales y de exportación a Estados Unidos.",
    image: "/images/servicios/transporte-caja-seca-53-pies-mm-carga.webp",
    imageAlt: "Tractocamión de MM Carga con caja seca de 53 pies en carretera",
  },
  {
    slug: "/transporte-tolva/",
    name: "Transporte en tolva",
    short: "Tolva a granel",
    summary: "Traslado de materiales a granel en tolvas con capacidad de 140 m³.",
    image: "/images/servicios/transporte-tolva-granel-mm-carga.webp",
    imageAlt: "Tractocamión de MM Carga con tolvas para transporte de carga a granel",
  },
  {
    slug: "/transporte-de-contenedores-maritimos/",
    name: "Transporte de contenedores marítimos",
    short: "Contenedores marítimos",
    summary: "Movimientos de importación y exportación desde los principales puertos del país.",
    image: "/images/servicios/transporte-contenedores-maritimos-mm-carga.webp",
    imageAlt: "Tractocamión de MM Carga transportando un contenedor marítimo",
  },
  {
    slug: "/transporte-de-carga-suelta/",
    name: "Transporte de carga suelta en plataforma",
    short: "Carga suelta en plataforma",
    summary: "Traslado de acero, maquinaria y madera con equipo especializado de amarre y sujeción.",
    image: "/images/servicios/transporte-carga-suelta-plataforma-mm-carga.webp",
    imageAlt: "Plataforma de MM Carga transportando rollos de acero como carga suelta",
  },
  {
    slug: "/almacenamiento-de-mercancias/",
    name: "Almacenamiento de mercancías y maniobras",
    short: "Almacenamiento",
    summary: "200,000 m² de almacén, control de inventarios con WMS y báscula certificada para VGM.",
    image: "/images/servicios/almacenamiento-de-mercancias-mm-carga.webp",
    imageAlt: "Almacén de MM Carga con mercancía paletizada",
  },
];

// Resumen corto usado en "Otros servicios" (bloque 8 compartido)
export const otherServiceSummary: Record<string, string> = {
  "/caja-seca-53-pies/": "Traslado de carga seca en rutas nacionales y de exportación.",
  "/transporte-tolva/": "Traslado de materiales a granel en tolvas de 140 m³.",
  "/transporte-de-contenedores-maritimos/": "Importación y exportación desde Altamira, Manzanillo y Coatzacoalcos.",
  "/transporte-de-carga-suelta/": "Traslado de acero, maquinaria, madera y tubería.",
  "/almacenamiento-de-mercancias/": "200,000 m², control de inventarios con WMS y báscula VGM.",
};

export const bases = [
  {
    city: "Altamira",
    state: "Tamaulipas",
    region: "Puerto del Golfo",
    maps: "https://www.google.com/search?kgmid=/g/11qq481sbx&q=MM+CARGA+Altamira",
  },
  {
    city: "Coatzacoalcos",
    state: "Veracruz",
    region: "Puerto del Golfo",
    maps: "https://www.google.com/maps/place/MM+CARGA/@18.1266741,-94.4356405,17z/data=!3m1!4b1!4m6!3m5!1s0x85e9835b934094d7:0x604769212dd3ccae!8m2!3d18.1266741!4d-94.4356405!16s%2Fg%2F11fsymp34p",
  },
  {
    city: "Manzanillo",
    state: "Colima",
    region: "Puerto del Pacífico",
    maps: "https://www.google.com/search?kgmid=/g/11mksq__7r&q=MM+CARGA+Manzanillo",
  },
  {
    city: "Nuevo Laredo",
    state: "Tamaulipas",
    region: "Frontera norte",
    maps: "https://www.google.com.mx/maps/place/MM+Carga+Nuevo+Laredo/@27.5715046,-99.6056105,17z/data=!3m1!4b1!4m6!3m5!1s0x86611f00073ba98f:0x6c0a8232040ea873!8m2!3d27.5714999!4d-99.6030356!16s%2Fg%2F11wqhpxwp0",
  },
  {
    city: "Monterrey",
    state: "Nuevo León",
    region: "Noreste industrial",
    maps: "https://www.google.com/search?kgmid=/g/11y0f6b1g8&q=MM+CARGA+Trabajo",
  },
  {
    city: "Silao",
    state: "Guanajuato",
    region: "Bajío",
    maps: "https://www.google.com/maps?q=20.9800509,-101.4777494&z=17&hl=es",
  },
];

export const certifications = [
  { file: "certificado-6.webp", alt: "Certificación C-TPAT de MM Carga", width: 130, height: 90 },
  { file: "certificado-5.webp", alt: "Certificación OEA, Operador Económico Autorizado, de MM Carga", width: 130, height: 90 },
  { file: "certificado-4.webp", alt: "Certificación ISO 9001:2015 de MM Carga", width: 130, height: 90 },
  { file: "certificado-3.webp", alt: "Programa Transporte Limpio de SEMARNAT", width: 130, height: 90 },
  { file: "certificado-2.webp", alt: "MM Carga, empresa afiliada a CANACAR", width: 130, height: 90 },
  { file: "certificado-1.webp", alt: "Registro Dun & Bradstreet de MM Carga", width: 280, height: 39 },
];
