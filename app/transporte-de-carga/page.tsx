import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  IconCertified,
  IconFleet,
  IconMonitoring,
  IconWarehouse,
} from "@/components/site/icons";
import { MexicoMap } from "@/components/site/mexico-map";
import { PageHero } from "@/components/site/page-hero";
import { Photo } from "@/components/site/photo";
import {
  Container,
  CtaBand,
  Faq,
  Points,
  SectionTitle,
  TextLink,
} from "@/components/site/sections";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { services } from "@/lib/site";

const SLUG = "/transporte-de-carga/";

export const metadata: Metadata = {
  title: "Empresa de transporte de carga en México | MM Carga",
  description:
    "Empresa de transporte de carga pesada con flota propia: caja seca de 53 pies, tolvas, contenedores marítimos y plataformas, con monitoreo 24/7.",
  alternates: { canonical: SLUG },
};

// Solo los servicios de transporte; almacenamiento se enlaza desde "Por qué MM Carga"
const transport = services.filter(
  (s) => s.slug !== "/almacenamiento-de-mercancias/",
);

const guide = [
  {
    cargo: "Tarimas, cajas o producto terminado",
    href: "/caja-seca-53-pies/",
    equipment: "Caja seca de 53 pies",
  },
  {
    cargo: "Arena, grava, minerales o mercancía ferrosa a granel",
    href: "/transporte-tolva/",
    equipment: "Tolva",
  },
  {
    cargo: "Mercancía de importación o exportación en contenedor",
    href: "/transporte-de-contenedores-maritimos/",
    equipment: "Transporte de contenedores",
  },
  {
    cargo: "Acero, maquinaria, madera o tubería",
    href: "/transporte-de-carga-suelta/",
    equipment: "Plataforma para carga suelta",
  },
];

const reasons = [
  {
    title: "Flota propia",
    icon: <IconFleet />,
    text: "Control directo del equipo, que respalda el cumplimiento de cada entrega.",
  },
  {
    title: "Monitoreo 24/7",
    icon: <IconMonitoring />,
    text: "Rastreo GPS, cámaras y centro de monitoreo permanente.",
  },
  {
    title: "Operación certificada",
    icon: <IconCertified />,
    text: "C-TPAT, OEA, ISO 9001:2015 y Transporte Limpio.",
  },
  {
    title: "Transporte y almacenamiento integrados",
    icon: <IconWarehouse />,
    text: "Resguardo de la carga en nuestros almacenes cuando la operación lo requiere.",
  },
];

const faq = [
  {
    q: "¿Qué tipos de carga transportan?",
    a: "Carga seca, materiales a granel, contenedores marítimos y carga suelta, como acero, maquinaria o madera.",
  },
  {
    q: "¿Realizan transporte de carga pesada?",
    a: "Sí. Contamos con más de 30 años de experiencia en el traslado de carga para la industria pesada.",
  },
  {
    q: "¿Las unidades son propias?",
    a: "Sí. Operamos con flota, cajas y bases de operación propias.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización?",
    a: "Comunícate por WhatsApp o completa el formulario con el origen, el destino y el tipo de carga.",
  },
];

export default function TransporteDeCarga() {
  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        crumb="Transporte de carga"
        h1="Empresa de transporte de carga"
        subtitle="Flota propia para el traslado de carga seca, materiales a granel, contenedores marítimos y carga suelta en México y hacia Estados Unidos."
        secondary={{ href: "#servicios", label: "Ver servicios" }}
        image={{
          src: "/images/hero/hero-transporte-de-carga-mexico.webp",
          alt: "Flota de tractocamiones de MM Carga, empresa de transporte de carga en México",
        }}
      />

      {/* Bloque 2 · Presentación */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionTitle
            kicker="Quiénes somos"
            title="Transporte terrestre de carga pesada con flota propia"
          />
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="flex flex-col gap-6 text-body text-muted lg:pt-9"
          >
            <p>
              MM Carga es una empresa de transporte de carga especializada en la
              industria pesada y el comercio exterior. Contamos con más de 200
              unidades, más de 100 cajas secas de 53 pies y seis bases de
              operación en puertos, la frontera norte y el Bajío.
            </p>
            <p>
              Esta infraestructura propia nos permite trasladar la mercancía de
              nuestros clientes sin depender de terceros, con monitoreo
              permanente de origen a destino.
            </p>
          </div>
        </Container>
      </section>

      {/* Bloque 3 · Servicios de transporte */}
      <section
        id="servicios"
        className="scroll-mt-24 bg-surface py-20 md:py-28"
      >
        <Container className="flex flex-col gap-12">
          <SectionTitle
            kicker="Servicios"
            title="Nuestros servicios de transporte de mercancías"
            intro="Equipo especializado para cada tipo de carga, con operadores capacitados y coordinación en cada etapa del traslado."
          />
          <ul className="grid gap-5.5 sm:grid-cols-2">
            {transport.map((s, i) => (
              <li
                key={s.slug}
                data-reveal
                style={{ "--d": i } as CSSProperties}
              >
                <Link
                  href={s.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-brand-800/8 bg-white shadow-card transition hover:-translate-y-1 hover:border-brand-800/22 hover:shadow-card-hover"
                >
                  <Photo
                    src={s.image}
                    alt={s.imageAlt}
                    className="aspect-[16/9]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <h3 className="text-card-title font-extrabold text-brand-800">
                      {s.name}
                    </h3>
                    <p className="flex-1 text-small text-muted">{s.summary}</p>
                    <span className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-primary">
                      Ver servicio
                      <ArrowIcon className="size-3.5 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Bloque 4 · Guía de selección */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionTitle
            kicker="Guía de selección"
            title="¿Qué equipo requiere tu carga?"
            intro="Identifica el equipo adecuado según el tipo de mercancía. Si tu operación combina varios tipos de carga, nuestro equipo te asesora."
          />
          <div
            data-reveal
            style={{ "--d": 1 } as CSSProperties}
            className="overflow-hidden rounded-card border border-navy-800/10"
          >
            <table className="w-full text-left">
              <thead className="bg-surface text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Tipo de carga
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Equipo recomendado
                  </th>
                </tr>
              </thead>
              <tbody>
                {guide.map((g) => (
                  <tr key={g.href} className="border-t border-navy-800/10">
                    <td className="px-6 py-5 text-small text-ink">{g.cargo}</td>
                    <td className="px-6 py-5">
                      <Link
                        href={g.href}
                        className="text-[15px] font-bold text-primary hover:underline"
                      >
                        {g.equipment}
                        <ArrowIcon className="ml-1.5 inline size-3.5 align-[-2px]" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Bloque 5 · Cobertura */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle
              kicker="Cobertura"
              title="Transporte de carga en México y hacia Estados Unidos"
            />
            <p
              data-reveal
              style={{ "--d": 1 } as CSSProperties}
              className="text-body text-muted"
            >
              Coordinamos cada traslado desde seis bases propias en Monterrey,
              Nuevo Laredo, Altamira, Silao, Manzanillo y Coatzacoalcos, con
              conexión a los principales puertos y al cruce fronterizo de Nuevo
              Laredo.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <TextLink href="/cobertura/">Conoce nuestra cobertura</TextLink>
              <TextLink href="/transporte-de-carga-en-monterrey/">
                Transporte de carga en Monterrey
              </TextLink>
            </div>
          </div>
          <MexicoMap />
        </Container>
      </section>

      {/* Bloque 6 · Por qué MM Carga */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle
              kicker="Por qué MM Carga"
              title="¿Por qué elegir a MM Carga como empresa de transporte de carga?"
            />
            <div className="pt-2">
              <TextLink href="/almacenamiento-de-mercancias/">
                Conoce nuestro servicio de almacenamiento
              </TextLink>
            </div>
          </div>
          <Points items={reasons} />
        </Container>
      </section>

      {/* Bloque 7 · FAQ */}
      <div className="bg-surface">
        <Faq
          title="Preguntas frecuentes sobre transporte de carga"
          items={faq}
        />
      </div>

      {/* Bloque 8 · CTA */}
      <CtaBand
        title="Transporte de carga con el respaldo de una flota propia"
        text="Nuestro equipo te asesora en la elección del equipo adecuado y te presenta una propuesta a la medida de tu operación."
      />
    </>
  );
}
