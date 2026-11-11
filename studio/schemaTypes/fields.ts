import { defineArrayMember, defineField } from "sanity";

// Piezas reutilizables de los esquemas. Los nombres de campo coinciden con content/ del sitio.

const LINK_HELP =
  "Para un enlace escribe [texto](/ruta/), por ejemplo [almacenamiento](/almacenamiento-de-mercancias/).";

export const ICONS = [
  { title: "Solución integral", value: "integral" },
  { title: "Flota / tractocamión", value: "fleet" },
  { title: "Monitoreo", value: "monitoring" },
  { title: "Certificado", value: "certified" },
  { title: "Ruta", value: "route" },
  { title: "Frontera", value: "border" },
  { title: "Caja seca / remolque", value: "trailer" },
  { title: "Intercambio", value: "swap" },
  { title: "Reloj", value: "clock" },
  { title: "Ojo / visibilidad", value: "eye" },
  { title: "Tolva", value: "hopper" },
  { title: "Capas", value: "layers" },
  { title: "Peso", value: "weight" },
  { title: "Costo", value: "cost" },
  { title: "Contenedor", value: "container" },
  { title: "Importación", value: "import" },
  { title: "Exportación", value: "export" },
  { title: "Báscula", value: "scale" },
  { title: "Almacén", value: "warehouse" },
  { title: "Puerto", value: "port" },
  { title: "Plataforma", value: "flatbed" },
  { title: "Amarre / sujeción", value: "strap" },
  { title: "Inventario", value: "inventory" },
  { title: "Montacargas", value: "forklift" },
];

export const CITIES = [
  "Altamira",
  "Coatzacoalcos",
  "Manzanillo",
  "Nuevo Laredo",
  "Monterrey",
  "Silao",
];

export const SERVICE_URLS = [
  { title: "Transporte en caja seca de 53 pies", value: "/caja-seca-53-pies/" },
  { title: "Transporte en tolva", value: "/transporte-tolva/" },
  {
    title: "Transporte de contenedores marítimos",
    value: "/transporte-de-contenedores-maritimos/",
  },
  {
    title: "Transporte de carga suelta en plataforma",
    value: "/transporte-de-carga-suelta/",
  },
  {
    title: "Almacenamiento de mercancías",
    value: "/almacenamiento-de-mercancias/",
  },
];

type Opts = { description?: string; required?: boolean; rows?: number };

export const str = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name,
    title,
    type: "string",
    description: o.description,
    validation: (r) => (o.required === false ? r : r.required()),
  });

export const txt = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name,
    title,
    type: "text",
    rows: o.rows ?? 3,
    description: o.description,
    validation: (r) => (o.required === false ? r : r.required()),
  });

/** H1: lleva la palabra clave de la página; se avisa antes de cambiarlo */
export const h1 = (name = "h1") =>
  defineField({
    name,
    title: "Título principal (H1)",
    type: "string",
    description:
      "⚠️ Contiene la palabra clave de la página para Google. Cámbialo solo con el visto bueno de la agencia.",
    validation: (r) => r.required(),
  });

export const paragraphs = (name = "paragraphs", title = "Párrafos") =>
  defineField({
    name,
    title,
    type: "array",
    description: LINK_HELP,
    of: [defineArrayMember({ type: "text", rows: 4 })],
    validation: (r) => r.required().min(1),
  });

/** Imagen con texto alternativo obligatorio (SEO y accesibilidad) */
export const img = (name: string, title: string, o: Opts = {}) =>
  defineField({
    name,
    title,
    type: "image",
    description: o.description,
    options: { hotspot: false },
    fields: [
      defineField({
        name: "alt",
        title: "Texto alternativo (alt)",
        type: "string",
        description:
          "Describe la foto e incluye la palabra clave de la página cuando sea natural.",
        validation: (r) => r.required(),
      }),
    ],
    validation: (r) => (o.required === false ? r : r.required()),
  });

export const seo = defineField({
  name: "seo",
  title: "SEO (Google)",
  type: "object",
  description: "Lo que aparece en los resultados de búsqueda.",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: "Ideal: menos de 60 caracteres, con la palabra clave al inicio.",
      validation: (r) => [
        r.required(),
        r.max(70).warning("Google suele cortar títulos de más de 60 caracteres."),
      ],
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 3,
      description: "Ideal: entre 120 y 160 caracteres.",
      validation: (r) => [
        r.required(),
        r.max(170).warning("Google suele cortar descripciones de más de 160 caracteres."),
      ],
    }),
  ],
});

export const icon = defineField({
  name: "icon",
  title: "Ícono",
  type: "string",
  options: { list: ICONS },
  validation: (r) => r.required(),
});

/** Lista de tarjetas con ícono, título y texto */
export const iconItems = (name = "items", title = "Tarjetas") =>
  defineField({
    name,
    title,
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        fields: [icon, str("title", "Título"), txt("text", "Texto")],
        preview: { select: { title: "title", subtitle: "text" } },
      }),
    ],
  });

export const faqItems = (name = "items") =>
  defineField({
    name,
    title: "Preguntas",
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        fields: [str("q", "Pregunta"), txt("a", "Respuesta", { rows: 4 })],
        preview: { select: { title: "q", subtitle: "a" } },
      }),
    ],
  });

export const group = (
  name: string,
  title: string,
  fields: ReturnType<typeof defineField>[],
  o: { description?: string } = {},
) =>
  defineField({
    name,
    title,
    type: "object",
    description: o.description,
    options: { collapsible: true, collapsed: false },
    fields,
  });

export const cta = group("cta", "Bloque de cotización (final de la página)", [
  str("title", "Título"),
  txt("text", "Texto"),
]);

export const figures = (name = "figures", title = "Cifras") =>
  defineField({
    name,
    title,
    type: "array",
    description:
      "Los números se animan al aparecer (excepto valores como 24/7).",
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          str("value", "Cifra", { description: "Por ejemplo 20, +200 o 200,000" }),
          str("unit", "Unidad", { required: false, description: "Opcional, p. ej. m²" }),
          str("label", "Texto"),
        ],
        preview: { select: { title: "value", subtitle: "label" } },
      }),
    ],
  });

/** Resumen de un servicio en una página concreta */
export const summaries = (name = "summaries", title = "Resumen de cada servicio") =>
  defineField({
    name,
    title,
    type: "array",
    of: [
      defineArrayMember({
        type: "object",
        fields: [
          defineField({
            name: "slug",
            title: "Servicio",
            type: "string",
            options: { list: SERVICE_URLS },
            validation: (r) => r.required(),
          }),
          txt("text", "Resumen", { rows: 2 }),
        ],
        preview: { select: { title: "slug", subtitle: "text" } },
      }),
    ],
  });
