import type { Seo } from "../types";

export type ContactContent = {
  seo: Seo;
  hero: { h1: string; subtitle: string; whatsappLabel: string };
  form: { title: string; intro: string };
  info: { title: string; monitoring: string };
};

export const contacto: ContactContent = {
  seo: {
    title: "Contacto y cotizaciones | MM Carga",
    description:
      "Solicita una cotización de transporte de carga o almacenamiento con MM Carga. Contáctanos por WhatsApp, teléfono o formulario.",
  },
  hero: {
    h1: "Solicita una cotización de transporte de carga",
    subtitle:
      "Compártenos los detalles de tu operación y nuestro equipo te presentará una propuesta.",
    whatsappLabel: "Escríbenos por WhatsApp",
  },
  form: {
    title: "Formulario de cotización",
    intro:
      "Indica el servicio, el origen y el destino de tu carga. Si eres proveedor, elige ese motivo y te pondremos en contacto con el área de compras.",
  },
  info: {
    title: "Información de contacto",
    monitoring: "Monitoreo de unidades 24/7",
  },
};
