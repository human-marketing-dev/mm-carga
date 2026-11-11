import { defineArrayMember, defineField, defineType } from "sanity";
import {
  CITIES,
  SERVICE_URLS,
  cta,
  faqItems,
  figures,
  group,
  h1,
  icon,
  iconItems,
  img,
  paragraphs,
  seo,
  str,
  summaries,
  txt,
} from "./fields";

// Cada documento corresponde a una página (o a los ajustes generales) del sitio.
// Las URLs, el orden de las secciones y el diseño son fijos: aquí solo se edita contenido.

const faq = (title = "Preguntas frecuentes") =>
  group("faq", title, [str("title", "Título"), faqItems()]);

export const settings = defineType({
  name: "settings",
  title: "Ajustes generales",
  type: "document",
  fields: [
    group("contact", "Datos de contacto", [
      str("phone", "Teléfono principal (también WhatsApp)", {
        description: "Como se muestra en el sitio, p. ej. +52 81 1985 1429",
      }),
      defineField({
        name: "whatsapp",
        title: "Número de WhatsApp",
        type: "string",
        description:
          "Formato internacional, solo números y sin + ni espacios. Ej.: 528119851429",
        validation: (r) =>
          r.required().regex(/^\d{10,15}$/, { name: "solo números" }),
      }),
      str("email", "Correo general"),
      str("address", "Dirección de la oficina corporativa"),
      str("phoneAlt", "Teléfono adicional"),
      str("purchasing", "Correo de proveedores (compras)"),
    ]),
    txt("whatsappMessage", "Mensaje predeterminado de WhatsApp", { rows: 2 }),
    defineField({
      name: "social",
      title: "Redes sociales",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Red",
              type: "string",
              options: { list: ["Facebook", "Instagram", "LinkedIn"] },
              validation: (r) => r.required(),
            }),
            defineField({
              name: "href",
              title: "Enlace",
              type: "url",
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "name", subtitle: "href" } },
        }),
      ],
    }),
    txt("footerText", "Texto del pie de página"),
    defineField({
      name: "bases",
      title: "Bases de operación",
      type: "array",
      description:
        "Las seis bases son fijas (el mapa depende de ellas): edita sus datos, pero no agregues ni quites bases.",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "city",
              title: "Ciudad",
              type: "string",
              readOnly: true,
              options: { list: CITIES },
            }),
            str("state", "Estado"),
            str("region", "Región", { description: "P. ej. Puerto del Golfo" }),
            txt("role", "Descripción de la base", { rows: 2 }),
            str("address", "Dirección"),
            defineField({
              name: "maps",
              title: "Enlace de Google Maps",
              type: "url",
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "city", subtitle: "address" } },
        }),
      ],
    }),
    defineField({
      name: "certifications",
      title: "Certificaciones y afiliaciones",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            str("name", "Nombre"),
            txt("text", "Descripción (Nosotros)", { rows: 2, required: false }),
            defineField({
              name: "affiliation",
              title: "Es afiliación o registro (no certificación)",
              type: "boolean",
              initialValue: false,
            }),
            img("image", "Logo"),
          ],
          preview: { select: { title: "name", media: "image" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Ajustes generales" }) },
});

export const service = defineType({
  name: "service",
  title: "Servicio",
  type: "document",
  groups: [
    { name: "page", title: "Página", default: true },
    { name: "card", title: "Tarjeta" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    { ...seo, group: "seo" },
    {
      ...group(
        "card",
        "Tarjeta del servicio",
        [
          str("name", "Nombre"),
          str("short", "Nombre corto (pie de página)"),
          txt("summary", "Resumen (Inicio y Transporte de carga)", { rows: 2 }),
          txt("otherSummary", "Resumen corto (Otros servicios y Cobertura)", {
            rows: 2,
          }),
          img("image", "Foto de la tarjeta"),
        ],
        { description: "Cómo se ve el servicio en el menú, el pie y las tarjetas de otras páginas." },
      ),
      group: "card",
    },
    { ...str("crumb", "Nombre en la miga de pan"), group: "page" },
    { ...h1(), group: "page" },
    { ...txt("subtitle", "Subtítulo del hero"), group: "page" },
    { ...img("image", "Foto del hero"), group: "page" },
    {
      ...group("about", "Sobre el servicio", [
        str("title", "Título"),
        paragraphs(),
        img("image", "Foto a todo lo ancho", { required: false }),
      ]),
      group: "page",
    },
    {
      ...group("scope", "Qué incluye", [str("title", "Título"), iconItems()]),
      group: "page",
    },
    {
      ...group("coverage", "Cobertura", [
        str("title", "Título"),
        txt("text", "Texto", { rows: 4 }),
        defineField({
          name: "highlight",
          title: "Bases principales del servicio",
          type: "array",
          description: "Vacío = opera desde las seis bases por igual.",
          of: [defineArrayMember({ type: "string" })],
          options: { list: CITIES },
        }),
        str("mainLabel", "Título de la tarjeta de bases", { required: false }),
        txt("mainNote", "Nota bajo la lista de bases", { rows: 2, required: false }),
      ]),
      group: "page",
    },
    {
      ...group("reasons", "Por qué MM Carga", [str("title", "Título"), iconItems()]),
      group: "page",
    },
    { ...faq(), group: "page" },
    { ...cta, group: "page" },
  ],
  preview: { select: { title: "card.name", media: "card.image" } },
});

export const pageHome = defineType({
  name: "pageHome",
  title: "Inicio",
  type: "document",
  fields: [
    seo,
    group("hero", "Hero", [
      str("badge", "Etiqueta superior"),
      h1(),
      txt("subtitle", "Subtítulo"),
      defineField({
        name: "slides",
        title: "Fotos del slider",
        type: "array",
        of: [
          defineArrayMember({
            type: "image",
            fields: [
              defineField({
                name: "alt",
                title: "Texto alternativo (alt)",
                type: "string",
                validation: (r) => r.required(),
              }),
              str("label", "Nombre en la pestaña", {
                description: "Servicio que se ve en la foto",
              }),
              str("position", "Encuadre", {
                required: false,
                description:
                  "Opcional. Punto de la foto que se mantiene visible, p. ej. 60% 50%",
              }),
            ],
          }),
        ],
        validation: (r) => r.required().min(1),
      }),
    ]),
    figures(),
    group("about", "Quiénes somos", [
      str("title", "Título"),
      paragraphs(),
      img("image", "Foto"),
      str("statValue", "Dato flotante: cifra"),
      str("statLabel", "Dato flotante: texto"),
    ]),
    group("reasons", "Por qué MM Carga", [
      str("title", "Título"),
      txt("intro", "Introducción", { rows: 2 }),
      iconItems(),
    ]),
    group("services", "Servicios", [
      str("title", "Título"),
      txt("intro", "Introducción", { rows: 2 }),
      str("allTitle", "Tarjeta final: título"),
      txt("allText", "Tarjeta final: texto", { rows: 2 }),
    ]),
    group("coverage", "Cobertura", [str("title", "Título"), paragraphs()]),
    group("certifications", "Certificaciones", [
      str("title", "Título"),
      txt("intro", "Introducción", { rows: 2 }),
    ]),
    faq(),
    cta,
  ],
  preview: { prepare: () => ({ title: "Inicio" }) },
});

export const pageTransporte = defineType({
  name: "pageTransporte",
  title: "Transporte de carga",
  type: "document",
  fields: [
    seo,
    group("hero", "Hero", [h1(), txt("subtitle", "Subtítulo"), img("image", "Foto")]),
    group("about", "Presentación", [str("title", "Título"), paragraphs()]),
    group("services", "Servicios", [
      str("title", "Título"),
      txt("intro", "Introducción", { rows: 2 }),
    ]),
    group("guide", "Guía de selección", [
      str("title", "Título"),
      txt("intro", "Introducción", { rows: 2 }),
      defineField({
        name: "rows",
        title: "Filas de la tabla",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            fields: [
              str("cargo", "Tipo de carga"),
              str("equipment", "Equipo recomendado"),
              defineField({
                name: "href",
                title: "Enlaza a",
                type: "string",
                options: { list: SERVICE_URLS },
                validation: (r) => r.required(),
              }),
            ],
            preview: { select: { title: "cargo", subtitle: "equipment" } },
          }),
        ],
      }),
    ]),
    group("coverage", "Cobertura", [str("title", "Título"), paragraphs()]),
    group("reasons", "Por qué MM Carga", [str("title", "Título"), iconItems()]),
    faq(),
    cta,
  ],
  preview: { prepare: () => ({ title: "Transporte de carga" }) },
});

export const pageNosotros = defineType({
  name: "pageNosotros",
  title: "Nosotros",
  type: "document",
  fields: [
    seo,
    group("hero", "Hero", [
      h1(),
      txt("subtitle", "Subtítulo"),
      img("image", "Foto panorámica"),
      defineField({
        name: "seals",
        title: "Sellos bajo los botones",
        type: "array",
        of: [defineArrayMember({ type: "string" })],
      }),
    ]),
    group("about", "Quiénes somos", [
      str("title", "Título"),
      paragraphs(),
      str("foundedYear", "Año de fundación"),
      str("foundedLabel", "Texto del año de fundación"),
      str("yearsValue", "Años de operación"),
      str("yearsLabel", "Texto de los años de operación"),
      img("image", "Collage de 20 años"),
    ]),
    group("identity", "Misión, visión y valores", [
      str("title", "Título"),
      img("image", "Foto"),
      defineField({
        name: "items",
        title: "Tarjetas",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            fields: [str("title", "Título"), txt("text", "Texto")],
            preview: { select: { title: "title", subtitle: "text" } },
          }),
        ],
      }),
    ]),
    group("figures", "Cifras", [str("title", "Título"), figures("items", "Cifras")]),
    group(
      "certifications",
      "Certificaciones",
      [
        str("title", "Título"),
        txt("intro", "Introducción", { rows: 2 }),
        str("affiliationsTitle", "Título de afiliaciones"),
      ],
      { description: "Los logos y descripciones se editan en Ajustes generales." },
    ),
    group("bases", "Bases de operación", [str("title", "Título"), paragraphs()]),
    cta,
  ],
  preview: { prepare: () => ({ title: "Nosotros" }) },
});

export const pageCobertura = defineType({
  name: "pageCobertura",
  title: "Cobertura",
  type: "document",
  fields: [
    seo,
    group("hero", "Hero", [h1(), txt("subtitle", "Subtítulo"), img("image", "Foto")]),
    group("map", "Mapa", [str("title", "Título"), paragraphs()]),
    group(
      "bases",
      "Fichas de las bases",
      [str("title", "Título")],
      { description: "Los datos de cada base se editan en Ajustes generales." },
    ),
    group("services", "Servicios", [str("title", "Título")]),
    cta,
  ],
  preview: { prepare: () => ({ title: "Cobertura" }) },
});

export const pageContacto = defineType({
  name: "pageContacto",
  title: "Contacto",
  type: "document",
  fields: [
    seo,
    group("hero", "Hero", [
      h1(),
      txt("subtitle", "Subtítulo"),
      str("whatsappLabel", "Texto del botón de WhatsApp"),
    ]),
    group("form", "Formulario", [
      str("title", "Título"),
      txt("intro", "Introducción"),
    ]),
    group(
      "info",
      "Información de contacto",
      [str("title", "Título"), str("monitoring", "Texto de monitoreo")],
      { description: "Teléfonos, correos y dirección se editan en Ajustes generales." },
    ),
  ],
  preview: { prepare: () => ({ title: "Contacto" }) },
});

const facilities = (name = "items") =>
  defineField({
    name,
    title: "Instalaciones",
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          icon,
          str("title", "Título"),
          txt("text", "Texto"),
        ],
        preview: { select: { title: "title", subtitle: "text" } },
      }),
    ],
  });

export const pageMonterrey = defineType({
  name: "pageMonterrey",
  title: "Transporte de carga en Monterrey",
  type: "document",
  fields: [
    seo,
    group("hero", "Hero", [h1(), txt("subtitle", "Subtítulo"), img("image", "Foto")]),
    group("intro", "Presentación local", [str("title", "Título"), paragraphs()]),
    group("facilities", "Base central", [str("title", "Título"), facilities()]),
    group("services", "Servicios", [str("title", "Título"), summaries()]),
    group("routes", "Rutas frecuentes", [
      str("title", "Título"),
      defineField({
        name: "items",
        title: "Rutas",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            fields: [str("to", "Destino"), str("note", "Nota")],
            preview: { select: { title: "to", subtitle: "note" } },
          }),
        ],
      }),
    ]),
    group("reasons", "Por qué MM Carga", [str("title", "Título"), iconItems()]),
    group("location", "Ubicación", [str("title", "Título")]),
    faq(),
    cta,
  ],
  preview: { prepare: () => ({ title: "Transporte de carga en Monterrey" }) },
});

export const basePage = defineType({
  name: "basePage",
  title: "Página por base",
  type: "document",
  fields: [
    seo,
    str("label", "Nombre corto de la ciudad", {
      description: "Se usa en títulos de sección y en la miga de pan.",
    }),
    h1(),
    txt("subtitle", "Subtítulo del hero"),
    img("image", "Foto del hero", {
      required: false,
      description: "Sin foto se muestra un relleno de “Foto pendiente”.",
    }),
    group("intro", "Presentación local", [str("title", "Título"), paragraphs()]),
    facilities("facilities"),
    group("services", "Servicios desde la base", [
      str("title", "Título"),
      txt("intro", "Introducción", { rows: 2 }),
      defineField({
        name: "focus",
        title: "Servicios principales (van primero)",
        type: "array",
        of: [defineArrayMember({ type: "string" })],
        options: { list: SERVICE_URLS },
      }),
      summaries(),
    ]),
    txt("coverageNote", "Texto de cobertura"),
    defineField({ ...faqItems("faq"), title: "Preguntas frecuentes" }),
    cta,
  ],
  preview: { select: { title: "h1" } },
});

export const pageAviso = defineType({
  name: "pageAviso",
  title: "Aviso de privacidad",
  type: "document",
  fields: [
    seo,
    group("hero", "Hero", [str("h1", "Título"), txt("subtitle", "Subtítulo")]),
    str("updated", "Fecha de última actualización", {
      description: "P. ej. 29 de octubre de 2026",
    }),
    defineField({
      name: "sections",
      title: "Secciones",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            str("title", "Título"),
            defineField({
              name: "body",
              title: "Texto",
              type: "array",
              of: [
                defineArrayMember({
                  type: "block",
                  styles: [{ title: "Normal", value: "normal" }],
                  lists: [{ title: "Viñetas", value: "bullet" }],
                  marks: {
                    decorators: [{ title: "Negritas", value: "strong" }],
                    annotations: [
                      {
                        name: "link",
                        title: "Enlace",
                        type: "object",
                        fields: [
                          defineField({
                            name: "href",
                            title: "URL",
                            type: "url",
                            validation: (r) =>
                              r.uri({ allowRelative: true, scheme: ["https", "http", "mailto", "tel"] }),
                          }),
                        ],
                      },
                    ],
                  },
                }),
              ],
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Aviso de privacidad" }) },
});

export const schemaTypes = [
  settings,
  service,
  pageHome,
  pageTransporte,
  pageNosotros,
  pageCobertura,
  pageContacto,
  pageMonterrey,
  basePage,
  pageAviso,
];
