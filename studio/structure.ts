import type { StructureResolver } from "sanity/structure";

// Todas las páginas tienen un id fijo: el sitio las busca por ese id.
export const SINGLETON_TYPES = new Set([
  "settings",
  "service",
  "pageHome",
  "pageTransporte",
  "pageNosotros",
  "pageCobertura",
  "pageContacto",
  "pageMonterrey",
  "basePage",
  "pageAviso",
]);

const PAGES: [string, string, string][] = [
  ["Inicio", "pageHome", "page-home"],
  ["Transporte de carga", "pageTransporte", "page-transporte-de-carga"],
  ["Nosotros", "pageNosotros", "page-nosotros"],
  ["Cobertura", "pageCobertura", "page-cobertura"],
  ["Contacto", "pageContacto", "page-contacto"],
  ["Transporte de carga en Monterrey", "pageMonterrey", "page-monterrey"],
  ["Aviso de privacidad", "pageAviso", "page-aviso"],
];

const SERVICES: [string, string][] = [
  ["Caja seca de 53 pies", "service-caja-seca-53-pies"],
  ["Tolva", "service-transporte-tolva"],
  ["Contenedores marítimos", "service-transporte-de-contenedores-maritimos"],
  ["Carga suelta en plataforma", "service-transporte-de-carga-suelta"],
  ["Almacenamiento de mercancías", "service-almacenamiento-de-mercancias"],
];

const BASES: [string, string][] = [
  ["Altamira", "base-altamira"],
  ["Manzanillo", "base-manzanillo"],
  ["Nuevo Laredo", "base-nuevoLaredo"],
  ["Silao", "base-silao"],
  ["Coatzacoalcos", "base-coatzacoalcos"],
];

export const structure: StructureResolver = (S) => {
  const doc = (title: string, type: string, id: string) =>
    S.listItem()
      .title(title)
      .id(id)
      .child(S.document().schemaType(type).documentId(id).title(title));
  return S.list()
    .title("Contenido del sitio")
    .items([
      doc("Ajustes generales", "settings", "settings"),
      S.divider(),
      S.listItem()
        .title("Páginas")
        .child(
          S.list()
            .title("Páginas")
            .items(PAGES.map(([t, type, id]) => doc(t, type, id))),
        ),
      S.listItem()
        .title("Servicios")
        .child(
          S.list()
            .title("Servicios")
            .items(SERVICES.map(([t, id]) => doc(t, "service", id))),
        ),
      S.listItem()
        .title("Páginas por base")
        .child(
          S.list()
            .title("Páginas por base (sin publicar en Google)")
            .items(BASES.map(([t, id]) => doc(t, "basePage", id))),
        ),
    ]);
};
