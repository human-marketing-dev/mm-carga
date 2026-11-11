// Ajustes generales del sitio (documento "settings" en Sanity).
// Este archivo es el contenido de respaldo: el sitio lo usa si Sanity no está configurado
// o si un campo viene vacío, y el script de migración lo sube tal cual.

import type { Img } from "./types";

export type Base = {
  /** Fijo: es la llave del mapa y de las páginas por base */
  city: string;
  state: string;
  region: string;
  role: string;
  address: string;
  maps: string;
};

export type Certification = {
  name: string;
  /** Descripción que se muestra en Nosotros (solo certificaciones) */
  text?: string;
  /** true: afiliación o registro (CANACAR, D&B), no certificación */
  affiliation?: boolean;
  image: Img & { width: number; height: number };
};

export type SiteSettings = {
  contact: {
    phone: string;
    /** Número de WhatsApp en formato internacional, sin "+" ni espacios */
    whatsapp: string;
    email: string;
    address: string;
    phoneAlt: string;
    purchasing: string;
  };
  whatsappMessage: string;
  social: { name: "Facebook" | "Instagram" | "LinkedIn"; href: string }[];
  footerText: string;
  bases: Base[];
  certifications: Certification[];
};

export const siteSettings: SiteSettings = {
  contact: {
    phone: "+52 81 1985 1429",
    whatsapp: "528119851429",
    email: "info@mmcarga.com",
    address: "Carretera a Huinala km 6.5, 66673 Pesquería, N.L.",
    // ⚠️ Uso por confirmar con el cliente (viene del sitio actual)
    phoneAlt: "+52 81 2320 5781",
    purchasing: "comprasmty@mmcarga.com",
  },
  whatsappMessage: "Hola, me gustaría solicitar una cotización con MM Carga.",
  social: [
    { name: "Facebook", href: "https://www.facebook.com/MMCargaSaDeCv" },
    { name: "Instagram", href: "https://www.instagram.com/mmcarga/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/mm-carga/" },
  ],
  footerText:
    "MM Carga ofrece transporte de carga y almacenaje de mercancías con flota, almacenes y bases propias. 20 años de experiencia en México.",
  bases: [
    {
      city: "Altamira",
      state: "Tamaulipas",
      region: "Puerto del Golfo",
      role: "Base cercana al puerto industrial de Altamira, con bodega, patio de maniobras y báscula certificada.",
      address: "G35W+RJ, 89630 Altamira, Tamps.",
      maps: "https://www.google.com/search?kgmid=/g/11qq481sbx&q=MM+CARGA+Altamira",
    },
    {
      city: "Coatzacoalcos",
      state: "Veracruz",
      region: "Puerto del Golfo",
      role: "Base de nuestras unidades de tolva y de las rutas del sureste del país.",
      address:
        "Av. del Puente 123, Adolfo López Mateos, 96490 Coatzacoalcos, Ver.",
      maps: "https://www.google.com/maps/place/MM+CARGA/@18.1266741,-94.4356405,17z/data=!3m1!4b1!4m6!3m5!1s0x85e9835b934094d7:0x604769212dd3ccae!8m2!3d18.1266741!4d-94.4356405!16s%2Fg%2F11fsymp34p",
    },
    {
      city: "Manzanillo",
      state: "Colima",
      region: "Puerto del Pacífico",
      role: "Base cercana al puerto más importante del país, con almacén, patio y montacargas para contenedores.",
      address: "Parcela 228, 28800 El Colomo, Col.",
      maps: "https://www.google.com/search?kgmid=/g/11mksq__7r&q=MM+CARGA+Manzanillo",
    },
    {
      city: "Nuevo Laredo",
      state: "Tamaulipas",
      region: "Frontera norte",
      role: "Base de nuestras cajas secas de 53 pies, enfocada en el transporte cross border.",
      address: "H9CW+HQ, 88350 La Cruz, Tamps.",
      maps: "https://www.google.com.mx/maps/place/MM+Carga+Nuevo+Laredo/@27.5715046,-99.6056105,17z/data=!3m1!4b1!4m6!3m5!1s0x86611f00073ba98f:0x6c0a8232040ea873!8m2!3d27.5714999!4d-99.6030356!16s%2Fg%2F11wqhpxwp0",
    },
    {
      city: "Monterrey",
      state: "Nuevo León",
      region: "Noreste industrial",
      role: "Base central: oficinas, taller y punto de llegada de toda nuestra flota.",
      address: "Carretera a Huinala km 6.5, 66673 Pesquería, N.L.",
      maps: "https://www.google.com/search?kgmid=/g/11y0f6b1g8&q=MM+CARGA+Trabajo",
    },
    {
      city: "Silao",
      state: "Guanajuato",
      region: "Bajío",
      role: "Base de cajas secas de 53 pies para la industria automotriz del Bajío.",
      address: "XGJC+2WC, Colonias Nuevo México, Gto.",
      maps: "https://www.google.com/maps?q=20.9800509,-101.4777494&z=17&hl=es",
    },
  ],
  certifications: [
    {
      name: "C-TPAT",
      text: "Programa de seguridad en la cadena de suministro para el comercio con Estados Unidos.",
      image: {
        src: "/images/certificaciones/certificado-6.webp",
        alt: "Certificación C-TPAT de MM Carga",
        width: 130,
        height: 90,
      },
    },
    {
      name: "OEA (Operador Económico Autorizado)",
      text: "Certificación del SAT que facilita y agiliza las operaciones de comercio exterior.",
      image: {
        src: "/images/certificaciones/certificado-5.webp",
        alt: "Certificación OEA, Operador Económico Autorizado, de MM Carga",
        width: 130,
        height: 90,
      },
    },
    {
      name: "ISO 9001:2015",
      text: "Sistema de gestión de la calidad certificado.",
      image: {
        src: "/images/certificaciones/certificado-4.webp",
        alt: "Certificación ISO 9001:2015 de MM Carga",
        width: 130,
        height: 90,
      },
    },
    {
      name: "Transporte Limpio",
      text: "Programa de SEMARNAT para la reducción de emisiones en el autotransporte.",
      image: {
        src: "/images/certificaciones/certificado-3.webp",
        alt: "Programa Transporte Limpio de SEMARNAT",
        width: 130,
        height: 90,
      },
    },
    {
      name: "CANACAR",
      affiliation: true,
      image: {
        src: "/images/certificaciones/certificado-2.webp",
        alt: "MM Carga, empresa afiliada a CANACAR",
        width: 130,
        height: 90,
      },
    },
    {
      name: "Dun & Bradstreet",
      affiliation: true,
      image: {
        src: "/images/certificaciones/certificado-1.webp",
        alt: "Registro Dun & Bradstreet de MM Carga",
        width: 280,
        height: 39,
      },
    },
  ],
};
