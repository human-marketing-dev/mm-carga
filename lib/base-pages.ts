import { PENDIENTE, type BasePageData } from "@/components/site/base-page";
import { bases } from "@/lib/site";

// Páginas por base bajo /cobertura/ (sitemap, 3 nov). Van con noindex y sin enlaces
// internos hasta que el cliente envíe los datos de cada base: todo texto que empieza
// con PENDIENTE es provisional y no debe tomarse como dato confirmado.

const P = PENDIENTE;

type Seed = {
  slug: string;
  city: string;
  label: string;
  h1: string;
  title: string;
  subtitle: string;
  intro: string;
  warehouse: boolean;
  image?: { src: string; alt: string };
  routes: string[];
  extraFaq: { q: string; a: string };
};

const noWarehouse =
  "Esta base no cuenta con almacén. El servicio de almacenamiento se ofrece en nuestras bases de Altamira, Manzanillo y Pesquería.";

function build(s: Seed): BasePageData & { title: string } {
  return {
    slug: s.slug,
    city: s.city,
    label: s.label,
    h1: s.h1,
    title: s.title,
    subtitle: s.subtitle,
    warehouse: s.warehouse,
    image: s.image,
    intro: {
      title: `Empresa de transporte en ${s.label} con base propia`,
      paragraphs: [
        s.intro,
        `${P} Describir en dos o tres frases qué hay en la base de ${s.label} (patio, equipo, personal) y qué tipo de carga se mueve desde ahí.`,
      ],
    },
    facilities: [
      {
        title: "Patio de operación",
        text: `${P} Superficie del patio y capacidad de resguardo de unidades.`,
      },
      {
        title: "Almacén",
        text: s.warehouse
          ? `Base con almacén propio para el resguardo de mercancías. ${P} Superficie techada y al aire libre de esta base.`
          : noWarehouse,
      },
      {
        title: "Báscula",
        text: `${P} Confirmar si la base cuenta con báscula y de qué tipo.`,
      },
      {
        title: "Equipo asignado",
        text: `${P} Unidades, plataformas, cajas o tolvas asignadas a esta base.`,
      },
      {
        title: "Horario de operación",
        text: `${P} Días y horario de atención de la base.`,
      },
    ],
    services: {
      title: `Servicios de transporte de carga desde ${s.label}`,
      summaries: {
        "/caja-seca-53-pies/": `Carga seca desde y hacia ${s.label}.`,
        "/transporte-tolva/": `Materiales a granel desde y hacia ${s.label}.`,
        "/transporte-de-contenedores-maritimos/": `Contenedores de importación y exportación desde y hacia ${s.label}.`,
        "/transporte-de-carga-suelta/": `Acero, maquinaria y carga suelta en plataformas en full.`,
        "/almacenamiento-de-mercancias/": `Resguardo de mercancías en el almacén de ${s.label}.`,
      },
    },
    routes: s.routes.map((to) => ({ to, km: "— km", time: "— h" })),
    faq: [
      {
        q: `¿Dónde se ubica la base de MM Carga en ${s.label}?`,
        a: `Nuestra base de operación se encuentra en ${addressOf(s.city)}.`,
      },
      s.extraFaq,
      {
        q: `¿Qué servicios ofrecen desde ${s.label}?`,
        a: `${P} Confirmar qué servicios de transporte se operan desde esta base. Ofrecemos cobertura nacional desde y hacia cada una de nuestras bases.`,
      },
    ],
    cta: {
      title: `Solicita tu cotización de transporte de carga en ${s.label}`,
      text: "Compártenos el origen, el destino y el tipo de carga, y nuestro equipo te presentará una propuesta.",
    },
  };
}

// Dirección tal como está en lib/site.ts
function addressOf(city: string) {
  return bases.find((b) => b.city === city)!.address;
}

export const basePages = {
  altamira: build({
    slug: "/transporte-de-carga-en-altamira/",
    city: "Altamira",
    label: "Altamira",
    h1: "Transporte de carga en Altamira, Tamaulipas",
    title: "Transporte de carga en Altamira | MM Carga",
    subtitle:
      "Base de operación propia en el puerto de Altamira, con almacén y cobertura nacional desde y hacia nuestras bases.",
    intro:
      "Nuestra base de Altamira se ubica en el puerto de Altamira, en el Golfo de México, y forma parte de la red de seis bases propias de MM Carga. Cuenta con almacén propio y ofrece cobertura nacional desde y hacia el resto de nuestras bases.",
    warehouse: true,
    image: {
      src: "/images/bases/transporte-de-carga-en-altamira-mm-carga.webp",
      alt: "Patio de MM Carga en Altamira con contenedores marítimos, rollos de acero y plataforma en maniobra de carga",
    },
    routes: ["Monterrey", "Nuevo Laredo", "Bajío (Silao)"],
    extraFaq: {
      q: "¿La base de Altamira cuenta con almacén?",
      a: "Sí. La base de Altamira cuenta con almacén propio para el resguardo de mercancías, integrado con nuestro servicio de transporte.",
    },
  }),
  manzanillo: build({
    slug: "/transporte-de-contenedores-en-manzanillo/",
    city: "Manzanillo",
    label: "Manzanillo",
    h1: "Transporte de contenedores desde Manzanillo, Colima",
    title: "Transporte de contenedores en Manzanillo | MM Carga",
    subtitle:
      "Base de operación propia en el principal puerto del Pacífico mexicano, con almacén y cobertura nacional desde y hacia nuestras bases.",
    intro:
      "Nuestra base de Manzanillo se ubica en el principal puerto del Pacífico mexicano y forma parte de la red de seis bases propias de MM Carga. Cuenta con almacén propio y ofrece cobertura nacional desde y hacia el resto de nuestras bases.",
    warehouse: true,
    routes: ["Bajío (Silao)", "Monterrey"],
    extraFaq: {
      q: "¿La base de Manzanillo cuenta con almacén?",
      a: "Sí. La base de Manzanillo cuenta con almacén propio para el resguardo de mercancías, integrado con nuestro servicio de transporte.",
    },
  }),
  nuevoLaredo: build({
    slug: "/transporte-de-carga-en-nuevo-laredo/",
    city: "Nuevo Laredo",
    label: "Nuevo Laredo",
    h1: "Transporte de carga en Nuevo Laredo, Tamaulipas",
    title: "Transporte de carga en Nuevo Laredo | MM Carga",
    subtitle:
      "Base de operación propia en la frontera con Estados Unidos, con cobertura nacional desde y hacia nuestras bases.",
    intro:
      "Nuestra base de Nuevo Laredo se ubica en la frontera con Estados Unidos y forma parte de la red de seis bases propias de MM Carga, con cobertura nacional desde y hacia el resto de nuestras bases.",
    warehouse: false,
    routes: ["Monterrey", "Altamira", "Bajío (Silao)"],
    extraFaq: {
      q: "¿Realizan transporte de exportación vía Nuevo Laredo?",
      a: `${P} Confirmar el alcance del servicio de exportación desde esta base. En caja seca de 53 pies ofrecemos servicio de exportación a Estados Unidos vía Laredo.`,
    },
  }),
  silao: build({
    slug: "/transporte-de-carga-en-silao-bajio/",
    city: "Silao",
    label: "Silao",
    h1: "Transporte de carga en Silao, Guanajuato",
    title: "Transporte de carga en Silao y el Bajío | MM Carga",
    subtitle:
      "Base de operación propia en el corredor industrial del Bajío, con cobertura nacional desde y hacia nuestras bases.",
    intro:
      "Nuestra base de Silao se ubica en el corredor industrial del Bajío y forma parte de la red de seis bases propias de MM Carga, con cobertura nacional desde y hacia el resto de nuestras bases.",
    warehouse: false,
    routes: ["Manzanillo", "Monterrey", "Altamira"],
    extraFaq: {
      q: "¿Atienden a la industria del Bajío desde Silao?",
      a: `${P} Describir las industrias y zonas del Bajío que se atienden desde esta base.`,
    },
  }),
  coatzacoalcos: build({
    slug: "/transporte-de-carga-en-coatzacoalcos/",
    city: "Coatzacoalcos",
    label: "Coatzacoalcos",
    h1: "Transporte de carga en Coatzacoalcos, Veracruz",
    title: "Transporte de carga en Coatzacoalcos | MM Carga",
    subtitle:
      "Base de operación propia en el sur del Golfo de México, con cobertura nacional desde y hacia nuestras bases.",
    intro:
      "Nuestra base de Coatzacoalcos se ubica en el sur del Golfo de México y forma parte de la red de seis bases propias de MM Carga, con cobertura nacional desde y hacia el resto de nuestras bases.",
    warehouse: false,
    image: {
      src: "/images/bases/transporte-de-carga-en-coatzacoalcos-mm-carga.webp",
      alt: "Tractocamión de MM Carga con tolvas en su base de transporte de carga en Coatzacoalcos, Veracruz",
    },
    routes: ["Altamira", "Bajío (Silao)", "Monterrey"],
    extraFaq: {
      q: "¿Trasladan contenedores desde el puerto de Coatzacoalcos?",
      a: `${P} Confirmar si se realizan movimientos de contenedores desde esta base.`,
    },
  }),
};
