import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { PageHero } from "@/components/site/page-hero";
import { ServiceBases } from "@/components/site/service-bases";
import {
  Container,
  CtaBand,
  Faq,
  Points,
  SectionTitle,
  ServiceCards,
} from "@/components/site/sections";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { bases, services } from "@/lib/site";

type Item = { title: string; text: string; icon: ReactNode };

export type ServicePageData = {
  slug: string;
  /** Miga intermedia; las páginas de transporte cuelgan de /transporte-de-carga/ */
  parent?: { href: string; label: string };
  crumb: string;
  h1: string;
  subtitle: string;
  image: { src: string; alt: string };
  about: { title: string; paragraphs: string[] };
  scope: { title: string; items: Item[] };
  coverage: {
    title: string;
    text: string;
    /** Título de la tarjeta de bases en "Sobre el servicio" */
    mainLabel?: string;
    /** Texto bajo la lista; sin valor, se listan las demás bases */
    mainNote?: string;
    /** Bases principales del servicio; sin valor, las 6 */
    highlight?: string[];
    /** true: el servicio solo opera en esas bases (no se listan las demás en Cobertura) */
    exclusive?: boolean;
    activeLabel?: string;
    linksLabel?: string;
  };
  reasons: { title: string; items: Item[] };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string; service: string };
};

function listCities(cities: string[]) {
  return cities.length > 1
    ? `${cities.slice(0, -1).join(", ")} y ${cities.at(-1)}`
    : cities[0];
}

// La celda que cierra la rejilla de alcance ocupa el hueco que queden en la última fila
const mdSpan = ["md:col-span-2", ""];
const lgSpan = ["lg:col-span-3", "lg:col-span-2", ""];

export function ServicePage({ data }: { data: ServicePageData }) {
  const others = services.filter((s) => s.slug !== data.slug);
  const n = data.scope.items.length;
  const main = data.coverage.highlight;
  const mainBases = main
    ? main
        .map((city) => bases.find((b) => b.city === city))
        .filter((b) => b !== undefined)
    : bases;
  const otherCities = bases
    .filter((b) => main && !main.includes(b.city))
    .map((b) => b.city);
  const mainNote =
    data.coverage.mainNote ??
    (otherCities.length > 0
      ? `También operamos desde y hacia nuestras bases en ${listCities(otherCities)}.`
      : undefined);
  const tone = (surface: boolean) => (surface ? "bg-surface" : "");

  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        parents={data.parent ? [data.parent] : []}
        crumb={data.crumb}
        h1={data.h1}
        subtitle={data.subtitle}
        secondary={{ href: "#cobertura", label: "Ver cobertura" }}
        image={data.image}
      />

      {/* Bloque 2 · Sobre el servicio */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionTitle kicker="Sobre el servicio" title={data.about.title} />
            {data.about.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal
                style={{ "--d": i + 1 } as CSSProperties}
                className="text-body text-muted"
              >
                {p}
              </p>
            ))}
          </div>
          <aside
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="self-start rounded-card bg-surface p-8"
          >
            <p className="text-sm font-bold text-navy-800">
              {data.coverage.mainLabel ??
                (mainBases.length === 1
                  ? "Base principal del servicio"
                  : "Bases principales del servicio")}
            </p>
            <ul className="mt-5 flex flex-col gap-4">
              {mainBases.map((b) => (
                <li key={b.city} className="flex gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="9.5" r="2.5" fill="currentColor" />
                  </svg>
                  <span className="flex flex-col">
                    <span className="text-[17px] font-bold text-navy-800">
                      {b.city === "Monterrey"
                        ? "Monterrey (Pesquería)"
                        : b.city}
                    </span>
                    <span className="text-small text-muted">{b.state}</span>
                  </span>
                </li>
              ))}
            </ul>
            {mainNote && (
              <p className="mt-6 border-t border-navy-800/10 pt-5 text-small text-muted">
                {mainNote}
              </p>
            )}
          </aside>
        </Container>
      </section>

      {/* Bloque 3 · Alcance */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionTitle kicker="Qué incluye" title={data.scope.title} />
          <ul className="grid gap-px overflow-hidden rounded-card border border-navy-800/10 bg-navy-800/10 md:grid-cols-2 lg:grid-cols-3">
            {data.scope.items.map((s, i) => (
              <li
                key={s.title}
                data-reveal="fade"
                style={{ "--d": i } as CSSProperties}
                className="flex flex-col gap-3 bg-white p-7"
              >
                <span
                  className="mb-1 grid size-12 place-items-center rounded-btn bg-brand-50 text-primary"
                  aria-hidden="true"
                >
                  {s.icon}
                </span>
                <h3 className="text-[19px] font-bold text-navy-800">
                  {s.title}
                </h3>
                <p className="text-small text-muted">{s.text}</p>
              </li>
            ))}
            <li
              data-reveal="fade"
              style={{ "--d": n } as CSSProperties}
              className={`flex flex-col justify-between gap-6 bg-navy-800 p-7 text-white ${mdSpan[n % 2]} ${lgSpan[n % 3]}`}
            >
              <p className="text-[19px] font-bold">
                ¿Tu operación requiere otro esquema?
              </p>
              <Link
                href="/contacto/"
                className="inline-flex items-center gap-2 self-start text-sm font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                Cuéntanos tu operación <ArrowIcon className="size-3.5" />
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* Bloque 4 · Cobertura */}
      {/* Mapa solo en el Home: aquí, tarjetas con las bases principales del servicio */}
      <ServiceBases
        title={data.coverage.title}
        text={data.coverage.text}
        highlight={data.coverage.highlight}
        exclusive={data.coverage.exclusive}
      />

      {/* Bloque 5 · Por qué */}
      <section className={`py-20 md:py-28 ${tone(false)}`}>
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionTitle kicker="Por qué MM Carga" title={data.reasons.title} />
          <Points items={data.reasons.items} />
        </Container>
      </section>

      {/* Bloque 6 · FAQ */}
      <div className={tone(true)}>
        <Faq kicker="FAQs" title={data.faq.title} items={data.faq.items} />
      </div>

      {/* Bloque 7 · Otros servicios */}
      <section className={`py-20 md:py-28 ${tone(false)}`}>
        <Container className="flex flex-col gap-10">
          <SectionTitle
            kicker="Servicios"
            title="Otros servicios de MM Carga"
          />
          <ServiceCards items={others} />
        </Container>
      </section>

      {/* Bloque 8 · CTA */}
      <CtaBand
        kicker="Cotización"
        title={data.cta.title}
        text={data.cta.text}
        service={data.cta.service}
      />
    </>
  );
}
