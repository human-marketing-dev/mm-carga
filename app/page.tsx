import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { CountUp } from "@/components/site/count-up";
import {
  IconCertified,
  IconFleet,
  IconIntegral,
  IconMonitoring,
} from "@/components/site/icons";
import { MexicoMap } from "@/components/site/mexico-map";
import { Photo } from "@/components/site/photo";
import {
  Certifications,
  Container,
  CtaBand,
  Faq,
  Points,
  SectionTitle,
  TextLink,
} from "@/components/site/sections";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Empresa de logística y transporte de carga en México | MM Carga",
  description:
    "Más de 30 años ofreciendo soluciones de logística, transporte de carga y almacenamiento con flota, almacenes y bases propias en México.",
  alternates: { canonical: "/" },
};

const figures = [
  { value: "+30", label: "años de experiencia" },
  { value: "+200", label: "unidades full" },
  { value: "+100", label: "cajas secas de 53 pies" },
  { value: "200,000", unit: "m²", label: "de almacenamiento" },
];

const reasons = [
  {
    title: "Solución logística integral",
    icon: <IconIntegral />,
    text: "Transporte, almacenamiento y maniobras gestionados por un solo proveedor.",
  },
  {
    title: "Capacidad operativa",
    icon: <IconFleet />,
    text: "Flota full, más de 100 cajas secas de 53 pies y amplias áreas de almacenamiento para operaciones de gran volumen.",
  },
  {
    title: "Seguridad y monitoreo permanente",
    icon: <IconMonitoring />,
    text: "Unidades con GPS y cámaras, operadores certificados e integración de información vía API.",
  },
  {
    title: "Procesos certificados",
    icon: <IconCertified />,
    text: "Certificaciones C-TPAT, OEA e ISO 9001:2015 que respaldan la seguridad y la calidad de cada operación.",
  },
];

const faq = [
  {
    q: "¿Qué tipos de carga transportan?",
    a: "Transportamos carga seca en caja de 53 pies, materiales a granel en tolva, contenedores marítimos y carga suelta en plataforma, como acero, maquinaria y madera.",
  },
  {
    q: "¿Cuentan con cobertura nacional?",
    a: "Operamos desde seis bases ubicadas en puertos, la frontera norte y el Bajío, y realizamos traslados a distintos destinos del país.",
  },
  {
    q: "¿Cómo se da seguimiento a la carga?",
    a: "Todas nuestras unidades cuentan con GPS y cámaras, y son supervisadas por nuestro centro de monitoreo las 24 horas.",
  },
  {
    q: "¿Ofrecen servicio de almacenamiento?",
    a: "Sí. Contamos con 100,000 m² techados y 100,000 m² al aire libre, con control de inventarios mediante sistema WMS.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización?",
    a: "Comunícate por WhatsApp o completa el formulario de contacto con el origen, el destino y el tipo de carga. Nuestro equipo te enviará una propuesta.",
  },
];

export default function Home() {
  return (
    <>
      {/* Bloque 1 · Hero */}
      <section className="relative isolate -mt-18 overflow-hidden bg-navy-950 pt-18 text-white">
        {/* Imagen de fondo con overlay para legibilidad del texto */}
        <div className="hero-photo absolute inset-0 -z-10">
          <Photo
            src="/images/hero/hero-transporte-de-carga-mexico.webp"
            alt="Flota de tractocamiones de MM Carga, empresa de logística y transporte de carga en México"
            label="fondo del hero, tráiler MM Carga en carretera"
            className="size-full"
            sizes="100vw"
            priority
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-navy-950/95 via-navy-950/85 to-navy-950/65 lg:via-navy-950/75 lg:to-navy-950/25"
          aria-hidden="true"
        />
        <Container className="flex min-h-[clamp(560px,78vh,760px)] items-center py-20 lg:py-28">
          <div className="hero-in flex max-w-2xl flex-col items-start gap-7">
            <Badge dot={false}>+30 AÑOS DE EXPERIENCIA</Badge>
            <h1 className="text-[clamp(36px,4.4vw,60px)] leading-[1.08] font-heavy">
              Empresa líder en logística y transporte de carga en México
            </h1>
            <p className="max-w-xl text-lead tracking-[.05px] text-white/80">
              Más de 30 años brindando soluciones de transporte y almacenamiento
              a la industria, con flota, almacenes y bases propias en la
              República Mexicana.
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <Button href="/contacto/">Solicita una cotización</Button>
              <Button href="/transporte-de-carga/" variant="outline">
                Conoce nuestros servicios
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Bloque 2 · Cifras */}
      <section
        aria-label="MM Carga en cifras"
        className="border-b border-navy-800/8"
      >
        <Container>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {figures.map((f, i) => (
              <div
                key={f.label}
                data-reveal
                style={{ "--d": i } as CSSProperties}
                className={`flex flex-col gap-1 py-8 lg:py-10 ${i % 2 ? "pl-6" : "pr-6"} lg:px-8 ${
                  i > 0 ? "lg:border-l lg:border-navy-800/10" : "lg:pl-0"
                } ${i % 2 ? "border-l border-navy-800/10" : ""} ${i > 1 ? "border-t border-navy-800/10 lg:border-t-0" : ""}`}
              >
                <dt className="order-2 text-[15px] text-muted">{f.label}</dt>
                <dd className="order-1 text-[28px] sm:text-[34px] leading-none font-heavy text-navy-800 tabular-nums md:text-[44px]">
                  <CountUp value={f.value} />
                  {f.unit && (
                    <span className="ml-1 text-xl font-bold md:text-2xl">
                      {f.unit}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Bloque 3 · Presentación */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionTitle
            kicker="Quiénes somos"
            title="Empresa de logística con infraestructura propia en México"
          />
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="flex flex-col gap-6 text-body text-ink lg:pt-9"
          >
            <p>
              MM Carga es una empresa mexicana especializada en logística,
              transporte terrestre de carga y almacenamiento de mercancías.
              Contamos con infraestructura propia (flota, cajas secas, almacenes
              y bases de operación) que nos permite gestionar cada etapa de la
              operación, desde la recolección hasta la entrega.
            </p>
            <p className="text-muted">
              Atendemos a la industria pesada y al comercio exterior con
              servicios para acero, maquinaria, materiales a granel y
              contenedores de importación y exportación. Nuestras unidades
              operan con rastreo GPS y cámaras, supervisadas por un centro de
              monitoreo que funciona las 24 horas.
            </p>
          </div>
        </Container>
      </section>

      {/* Bloque 4 · Servicios */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              kicker="Soluciones"
              title="Soluciones integrales de logística y transporte de carga"
              intro="Ofrecemos el equipo adecuado para cada tipo de carga, con monitoreo permanente y coordinación de origen a destino."
            />
          </div>
          <ul className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
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
                    className="aspect-[16/10]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-6">
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
            <li data-reveal style={{ "--d": services.length } as CSSProperties}>
              <Link
                href="/transporte-de-carga/"
                className="group flex h-full min-h-72 flex-col justify-between gap-8 overflow-hidden rounded-card bg-(image:--gradient-hero) p-8 text-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="text-xs font-bold tracking-[0.16em] text-white/70 uppercase">
                  Todos los servicios
                </span>
                <span className="flex flex-col gap-3">
                  <span className="text-[26px] leading-tight font-bold">
                    Ver servicios de transporte de carga
                  </span>
                  <span className="text-small text-white/75">
                    Conoce el equipo, el alcance y la cobertura de cada
                    servicio.
                  </span>
                </span>
                <span className="grid size-12 place-items-center rounded-btn bg-white/14 transition group-hover:bg-white/22">
                  <ArrowIcon className="size-4.5 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* Bloque 5 · Cobertura */}
      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle
              kicker="Cobertura"
              title="Presencia en los principales puertos, la frontera norte y el Bajío"
            />
            <p
              data-reveal
              style={{ "--d": 1 } as CSSProperties}
              className="text-body text-muted"
            >
              Contamos con bases de operación propias en Altamira, Manzanillo,
              Coatzacoalcos, Nuevo Laredo, Silao y Monterrey. Esta red nos
              permite atender con oportunidad las operaciones portuarias del
              Golfo y del Pacífico, el comercio con Estados Unidos y el corredor
              industrial del centro del país.
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
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionTitle
            kicker="Por qué MM Carga"
            title="¿Por qué elegir a MM Carga como tu empresa de logística?"
          />
          <Points items={reasons} />
        </Container>
      </section>

      {/* Bloque 7 · Certificaciones */}
      <Certifications
        title="Certificaciones y afiliaciones"
        intro="Nuestras operaciones cumplen con estándares nacionales e internacionales de seguridad, calidad y cuidado ambiental."
      />

      {/* Bloque 8 · FAQ */}
      <Faq
        title="Preguntas frecuentes sobre logística y transporte de carga"
        items={faq}
      />

      {/* Bloque 9 · CTA */}
      <CtaBand
        title="Soluciones logísticas a la medida de tu operación"
        text="Nuestro equipo está listo para analizar tus necesidades de transporte y almacenamiento y presentarte una propuesta."
      />
    </>
  );
}
