import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { MexicoMap } from "@/components/site/mexico-map";
import { PageHero } from "@/components/site/page-hero";
import {
  Container,
  CtaBand,
  Faq,
  Points,
  SectionTitle,
  ServiceCards,
  TextLink,
} from "@/components/site/sections";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { services } from "@/lib/site";

type Item = { title: string; text: string; icon: ReactNode };

// Un valor de especificación que el cliente aún no confirma
export const PENDING = null;
type Cell = string | typeof PENDING;

export type ServicePageData = {
  slug: string;
  /** Miga intermedia; las páginas de transporte cuelgan de /transporte-de-carga/ */
  parent?: { href: string; label: string };
  crumb: string;
  h1: string;
  subtitle: string;
  image: { src: string; alt: string };
  specsButton: string;
  about: { title: string; paragraphs: string[]; audience: string[] };
  scope: { title: string; items: Item[] };
  specs: {
    title: string;
    caption: string;
    note?: string;
    head?: string[];
    rows: Cell[][];
  };
  coverage: { title: string; text: string };
  reasons: { title: string; items: Item[] };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string; service: string };
};

// La celda que cierra la rejilla de alcance ocupa el hueco que queden en la última fila
const mdSpan = ["md:col-span-2", ""];
const lgSpan = ["lg:col-span-3", "lg:col-span-2", ""];

function SpecValue({ value }: { value: Cell }) {
  if (value === PENDING) {
    return (
      <span className="inline-flex rounded-tag bg-[#f9eeda] px-2.5 py-1 text-xs font-semibold text-[#8a5a00]">
        Por confirmar
      </span>
    );
  }
  return <>{value}</>;
}

export function ServicePage({ data }: { data: ServicePageData }) {
  const others = services.filter((s) => s.slug !== data.slug);
  const n = data.scope.items.length;
  const { head, rows } = data.specs;

  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        parents={data.parent ? [data.parent] : []}
        crumb={data.crumb}
        h1={data.h1}
        subtitle={data.subtitle}
        secondary={{ href: "#especificaciones", label: data.specsButton }}
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
              Este servicio está dirigido a:
            </p>
            <ul className="mt-5 flex flex-col gap-4">
              {data.about.audience.map((a) => (
                <li
                  key={a}
                  className="flex gap-3 text-[15px] leading-relaxed text-ink"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="mt-1 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8.5l3 3 7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  {a}
                </li>
              ))}
            </ul>
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

      {/* Bloque 4 · Especificaciones */}
      <section id="especificaciones" className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionTitle
              kicker="Especificaciones técnicas"
              title={data.specs.title}
            />
            {data.specs.note && (
              <p className="text-small text-muted">{data.specs.note}</p>
            )}
          </div>
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[480px] border-collapse text-left">
              <caption className="sr-only">{data.specs.caption}</caption>
              {head && (
                <thead>
                  <tr>
                    {head.map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="pr-6 pb-4 text-xs font-bold tracking-[0.12em] text-muted uppercase"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {rows.map(([k, ...vals]) => (
                  <tr
                    key={k}
                    className="border-b border-navy-800/10 first:border-t"
                  >
                    <th
                      scope="row"
                      className={`py-5 pr-6 text-[15px] font-semibold ${head ? "text-navy-800" : "w-2/5 text-muted"}`}
                    >
                      {k}
                    </th>
                    {vals.map((v, i) => (
                      <td
                        key={i}
                        className={`py-5 pr-6 tabular-nums ${head ? "text-[15px] text-muted" : "text-[17px] font-semibold text-navy-800"}`}
                      >
                        <SpecValue value={v} />
                      </td>
                    ))}
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
            <SectionTitle kicker="Cobertura" title={data.coverage.title} />
            <p
              data-reveal
              style={{ "--d": 1 } as CSSProperties}
              className="text-body text-muted"
            >
              {data.coverage.text}
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

      {/* Bloque 6 · Por qué */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionTitle kicker="Por qué MM Carga" title={data.reasons.title} />
          <Points items={data.reasons.items} />
        </Container>
      </section>

      {/* Bloque 7 · FAQ */}
      <div className="bg-surface">
        <Faq kicker="FAQs" title={data.faq.title} items={data.faq.items} />
      </div>

      {/* Bloque 8 · Otros servicios */}
      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-10">
          <SectionTitle
            kicker="Servicios"
            title="Otros servicios de MM Carga"
          />
          <ServiceCards items={others} />
        </Container>
      </section>

      {/* Bloque 9 · CTA */}
      <CtaBand
        kicker="Cotización"
        title={data.cta.title}
        text={data.cta.text}
        service={data.cta.service}
      />
    </>
  );
}
