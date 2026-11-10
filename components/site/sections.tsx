import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import {
  bases,
  certifications,
  contact,
  otherServiceSummary,
  social,
  type Service,
} from "@/lib/site";
import { CountUp } from "./count-up";
import { QuoteForm } from "./quote-form";
import { SocialIcon } from "./icons";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({
  kicker,
  title,
  intro,
  className = "",
}: {
  kicker?: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div data-reveal className={`flex max-w-3xl flex-col gap-4 ${className}`}>
      {kicker && (
        <p className="flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-primary uppercase">
          <span
            className="h-0.5 w-6 rounded-full bg-primary"
            aria-hidden="true"
          />
          {kicker}
        </p>
      )}
      <h2 className="text-[30px] leading-[1.15] font-semibold text-navy-ink md:text-[40px]">
        {title}
      </h2>
      {intro && <p className="text-body text-muted">{intro}</p>}
    </div>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[15px] font-bold text-primary"
    >
      <span className="underline decoration-primary/30 underline-offset-4 group-hover:decoration-primary">
        {children}
      </span>
      <ArrowIcon className="size-3.5 transition group-hover:translate-x-0.5" />
    </Link>
  );
}

// Tarjetas de "Por qué MM Carga": icono en bloque azul y línea de acento al pasar el cursor
export function Points({
  items,
}: {
  items: { title: string; text: string; icon?: ReactNode }[];
}) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {items.map((it, i) => (
        <li
          key={it.title}
          data-reveal
          style={{ "--d": i } as CSSProperties}
          className="group relative flex flex-col gap-4 overflow-hidden rounded-card border border-brand-800/8 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-800/18 hover:shadow-card-hover"
        >
          {it.icon && (
            <span
              className="grid size-14 place-items-center rounded-btn bg-linear-135 from-brand-500 to-brand-550 text-white shadow-btn-solid transition group-hover:shadow-btn-primary [&_svg]:size-6"
              aria-hidden="true"
            >
              {it.icon}
            </span>
          )}
          <h3 className="text-[19px] leading-snug font-bold text-navy-800">
            {it.title}
          </h3>
          <p className="text-small text-muted">{it.text}</p>
          <span
            className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-linear-to-r from-primary to-brand-400 transition duration-500 group-hover:scale-x-100"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

// Cierre de "Por qué MM Carga": frase del sitio actual, a petición del cliente
function ClosingCard({ className = "" }: { className?: string }) {
  return (
    <div
      data-reveal
      style={{ "--d": 2 } as CSSProperties}
      className={`relative flex flex-col gap-4 overflow-hidden rounded-card bg-(image:--gradient-hero) p-7 text-white shadow-card-hover ${className}`}
    >
      <span
        className="absolute -right-10 -bottom-16 size-48 rounded-full bg-brand-500/35 blur-3xl"
        aria-hidden="true"
      />
      <p className="relative text-[24px] leading-tight font-bold">
        Una sola operación. Todo bajo control.
      </p>
      <p className="relative text-small text-white/75">
        Integramos transporte, almacenamiento y coordinación logística para
        simplificar tus procesos de principio a fin.
      </p>
      <Link
        href="/contacto/"
        className="relative inline-flex items-center gap-2 self-start pt-1 text-sm font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
      >
        Solicita una cotización <ArrowIcon className="size-3.5" />
      </Link>
    </div>
  );
}

// Sección "Por qué MM Carga": título fijo a la izquierda con tarjeta de cierre y tarjetas a la derecha
export function ReasonsSection({
  title,
  intro,
  items,
  className = "",
  aside,
}: {
  title: string;
  intro?: string;
  items: { title: string; text: string; icon?: ReactNode }[];
  className?: string;
  /** Contenido extra bajo el título (p. ej. un enlace) */
  aside?: ReactNode;
}) {
  return (
    <section
      className={`relative isolate overflow-hidden py-20 md:py-28 ${className}`}
    >
      <div
        className="absolute top-0 left-0 -z-10 h-80 w-1/2 opacity-40 [background-image:radial-gradient(var(--color-primary)_1px,transparent_1.3px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]"
        aria-hidden="true"
      />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <SectionTitle kicker="Por qué MM Carga" title={title} intro={intro} />
          {aside}
          {/* En móvil la tarjeta de cierre va después de las razones */}
          <ClosingCard className="max-lg:hidden" />
        </div>
        <Points items={items} />
        <ClosingCard className="lg:hidden" />
      </Container>
    </section>
  );
}

export function Faq({
  title,
  items,
  kicker = "FAQs",
}: {
  title: string;
  items: { q: string; a: string }[];
  kicker?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <SectionTitle kicker={kicker} title={title} />
        <div
          data-reveal
          style={{ "--d": 2 } as CSSProperties}
          className="divide-y divide-navy-800/10 border-y border-navy-800/10"
        >
          {items.map((it) => (
            <details key={it.q} className="faq-item group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] leading-snug font-semibold text-navy-800">
                  {it.q}
                </h3>
                <span
                  className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-navy-800/20 text-navy-800 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 12 12" className="size-2.5">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
              </summary>
              <p className="faq-answer max-w-2xl pb-6 text-small text-muted">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}

export function Certifications({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-y border-navy-800/8 py-16">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div data-reveal className="flex max-w-sm flex-col gap-3">
          <h2 className="text-2xl font-semibold text-navy-ink">{title}</h2>
          {intro && <p className="text-small text-muted">{intro}</p>}
        </div>
        <ul className="grid grid-cols-3 items-center gap-x-8 gap-y-6 sm:grid-cols-7 lg:max-w-4xl">
          {certifications.map((c, i) => (
            <li
              key={c.file}
              data-reveal="fade"
              style={{ "--d": i } as CSSProperties}
              className={c.width > 200 ? "col-span-3 sm:col-span-2" : ""}
            >
              <Image
                src={`/images/certificaciones/${c.file}`}
                alt={c.alt}
                width={c.width}
                height={c.height}
                className={`mx-auto h-auto w-full opacity-80 ${c.width > 200 ? "max-w-[220px]" : "max-w-[104px]"}`}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function BaseList({ highlight }: { highlight?: string[] }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-card border border-navy-800/10 bg-navy-800/10 sm:grid-cols-2 lg:grid-cols-3">
      {bases.map((b, i) => {
        const on = highlight?.includes(b.city);
        return (
          <li
            key={b.city}
            data-reveal="fade"
            style={{ "--d": i } as CSSProperties}
            className={`flex flex-col gap-1 p-6 ${on ? "bg-brand-50" : "bg-white"}`}
          >
            <span className="text-xs font-bold tracking-[0.14em] text-muted uppercase">
              {b.region}
            </span>
            <span className="flex items-center gap-2.5 text-lg font-bold text-navy-800">
              <span
                className={`size-2.5 rounded-full ${on || !highlight ? "bg-primary" : "bg-slate-300"}`}
                aria-hidden="true"
              />
              {b.city}
            </span>
            <span className="text-sm text-muted">{b.state}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function CtaBand({
  title,
  text,
  kicker = "Cotización",
  service,
}: {
  title: string;
  text: string;
  kicker?: string;
  service?: string;
}) {
  return (
    <section
      id="cotizar"
      className="bg-navy-900 bg-(image:--gradient-cta) py-20 text-white md:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div data-reveal className="flex flex-col gap-5">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-brand-400 uppercase">
            <span
              className="h-0.5 w-6 rounded-full bg-brand-400"
              aria-hidden="true"
            />
            {kicker}
          </p>
          <h2 className="text-[30px] leading-[1.15] font-semibold md:text-[40px]">
            {title}
          </h2>
          <p className="max-w-lg text-lead text-white/78">{text}</p>
          <ul className="mt-4 flex flex-col gap-4 border-t border-white/12 pt-8 text-[15px]">
            <li className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold tracking-[0.12em] text-white/55 uppercase">
                WhatsApp y teléfono
              </span>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold tabular-nums hover:text-brand-400"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold tracking-[0.12em] text-white/55 uppercase">
                Correo
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="font-semibold hover:text-brand-400"
              >
                {contact.email}
              </a>
            </li>
            <li className="flex flex-col gap-2.5">
              <span className="text-xs font-semibold tracking-[0.12em] text-white/55 uppercase">
                Síguenos
              </span>
              <div className="flex gap-2.5">
                {social.map((n) => (
                  <a
                    key={n.name}
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`MM Carga en ${n.name}`}
                    className="grid size-11 place-items-center rounded-btn-sm border border-white/15 bg-white/6 text-white transition hover:border-white/35 hover:bg-white/14"
                  >
                    <SocialIcon name={n.name} />
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
        <div data-reveal style={{ "--d": 2 } as CSSProperties}>
          <QuoteForm service={service} />
        </div>
      </Container>
    </section>
  );
}

export type Figure = { value: string; unit?: string; label: string };

// Franja de cifras (Home y Nosotros); los valores tipo "24/7" no se animan
export function Figures({ items, label }: { items: Figure[]; label: string }) {
  // 6 cifras (Nosotros) van en 2 filas de 3 para que los números grandes no se encimen
  const six = items.length > 4;
  return (
    <section aria-label={label} className="border-b border-navy-800/8">
      <Container>
        <dl
          className={
            six
              ? "grid grid-cols-2 gap-px bg-navy-800/10 lg:grid-cols-3"
              : "grid grid-cols-2 lg:grid-cols-4"
          }
        >
          {items.map((f, i) => (
            <div
              key={f.label}
              data-reveal
              style={{ "--d": i } as CSSProperties}
              className={
                six
                  ? `flex flex-col gap-1 bg-white py-8 lg:py-10 ${i % 2 ? "pl-6" : "pr-6"} lg:px-8 ${i % 3 === 0 ? "lg:pl-0" : ""}`
                  : `flex flex-col gap-1 py-8 lg:py-10 ${i % 2 ? "pl-6" : "pr-6"} lg:px-8 ${
                      i > 0 ? "lg:border-l lg:border-navy-800/10" : "lg:pl-0"
                    } ${i % 2 ? "border-l border-navy-800/10" : ""} ${i > 1 ? "border-t border-navy-800/10 lg:border-t-0" : ""}`
              }
            >
              <dt className="order-2 text-[15px] text-muted">{f.label}</dt>
              <dd className="order-1 text-[28px] leading-none font-heavy text-navy-800 tabular-nums sm:text-[34px] md:text-[44px]">
                {f.value.includes("/") ? f.value : <CountUp value={f.value} />}
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
  );
}

// Tarjetas de servicios con resumen corto (Otros servicios, Cobertura)
export function ServiceCards({
  items,
  summaries = otherServiceSummary,
}: {
  items: Service[];
  summaries?: Record<string, string>;
}) {
  const cols = items.length > 4 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <ul className={`grid gap-5.5 sm:grid-cols-2 ${cols}`}>
      {items.map((s, i) => (
        <li key={s.slug} data-reveal style={{ "--d": i } as CSSProperties}>
          <Link
            href={s.slug}
            className="group flex h-full flex-col overflow-hidden rounded-card border border-brand-800/8 bg-white shadow-card transition hover:-translate-y-1 hover:border-brand-800/22 hover:shadow-card-hover"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#dfe6f0]">
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="text-[19px] leading-snug font-extrabold text-brand-800">
                {s.name}
              </h3>
              <p className="flex-1 text-small text-muted">
                {summaries[s.slug]}
              </p>
              <span className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-primary">
                Ver servicio{" "}
                <ArrowIcon className="size-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
