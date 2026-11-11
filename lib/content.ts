import { getDoc } from "@/lib/cms";
import { services as localServices } from "@/content/services";
import { siteSettings } from "@/content/site";

// Lectura del contenido editable. Cada función usa Sanity si está configurado y,
// campo por campo, el contenido local de content/ como respaldo.

export const getSettings = () => getDoc("settings", siteSettings);

/** Id del documento de un servicio en Sanity (fijo, a partir de la URL) */
export const serviceDocId = (slug: string) =>
  `service-${slug.replaceAll("/", "")}`;

/** Los 5 servicios en el orden fijo del sitio */
export const getServices = () =>
  Promise.all(localServices.map((s) => getDoc(serviceDocId(s.slug), s)));

export async function getService(slug: string) {
  const local = localServices.find((s) => s.slug === slug);
  if (!local) throw new Error(`Servicio desconocido: ${slug}`);
  return getDoc(serviceDocId(slug), local);
}

/** Datos de contacto derivados (enlaces tel: y WhatsApp) */
export function contactLinks(contact: {
  phone: string;
  whatsapp: string;
  phoneAlt: string;
}) {
  const tel = (p: string) => `tel:${p.replace(/[^\d+]/g, "")}`;
  return {
    phoneHref: tel(contact.phone),
    phoneAltHref: tel(contact.phoneAlt),
    whatsappHref: `https://wa.me/${contact.whatsapp}`,
  };
}
