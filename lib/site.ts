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
};

export const services: Service[] = [
  {
    slug: "/caja-seca-53-pies/",
    name: "Transporte en caja seca de 53 pies",
    short: "Caja seca 53'",
    summary: "Traslado de carga seca en rutas nacionales y de exportación a Estados Unidos.",
  },
  {
    slug: "/transporte-tolva/",
    name: "Transporte en tolva",
    short: "Tolva a granel",
    summary: "Traslado de materiales a granel en tolvas con capacidad de 140 m³.",
  },
  {
    slug: "/transporte-de-contenedores-maritimos/",
    name: "Transporte de contenedores marítimos",
    short: "Contenedores marítimos",
    summary: "Movimientos de importación y exportación desde los principales puertos del país.",
  },
  {
    slug: "/transporte-de-carga-suelta/",
    name: "Transporte de carga suelta en plataforma",
    short: "Carga suelta en plataforma",
    summary: "Traslado de acero, maquinaria y madera con equipo especializado de amarre y sujeción.",
  },
  {
    slug: "/almacenamiento-de-mercancias/",
    name: "Almacenamiento de mercancías y maniobras",
    short: "Almacenamiento",
    summary: "200,000 m² de almacén, control de inventarios con WMS y báscula certificada para VGM.",
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
  { city: "Altamira", state: "Tamaulipas", region: "Puerto del Golfo" },
  { city: "Coatzacoalcos", state: "Veracruz", region: "Puerto del Golfo" },
  { city: "Manzanillo", state: "Colima", region: "Puerto del Pacífico" },
  { city: "Nuevo Laredo", state: "Tamaulipas", region: "Frontera norte" },
  { city: "Monterrey", state: "Nuevo León", region: "Noreste industrial" },
  { city: "Silao", state: "Guanajuato", region: "Bajío" },
];

export const certifications = [
  { file: "certificado-6.webp", alt: "Certificación C-TPAT de MM Carga", width: 130, height: 90 },
  { file: "certificado-5.webp", alt: "Certificación OEA, Operador Económico Autorizado, de MM Carga", width: 130, height: 90 },
  { file: "certificado-4.webp", alt: "Certificación ISO 9001:2015 de MM Carga", width: 130, height: 90 },
  { file: "certificado-3.webp", alt: "Programa Transporte Limpio de SEMARNAT", width: 130, height: 90 },
  { file: "certificado-2.webp", alt: "MM Carga, empresa afiliada a CANACAR", width: 130, height: 90 },
  { file: "certificado-1.webp", alt: "Registro Dun & Bradstreet de MM Carga", width: 280, height: 39 },
];
