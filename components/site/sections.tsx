import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Button } from "@/components/ui/button";
import { bases, certifications, contact } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 lg:px-8 ${className}`}>{children}</div>;
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
      {kicker && <p className="text-xs font-bold tracking-[0.16em] text-primary uppercase">{kicker}</p>}
      <h2 className="text-[30px] leading-[1.15] font-semibold text-navy-ink md:text-[40px]">{title}</h2>
      {intro && <p className="text-body text-muted">{intro}</p>}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 text-[15px] font-bold text-primary">
      <span className="underline decoration-primary/30 underline-offset-4 group-hover:decoration-primary">{children}</span>
      <ArrowIcon className="size-3.5 transition group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Points({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
      {items.map((it, i) => (
        <div
          key={it.title}
          data-reveal
          style={{ "--d": i } as CSSProperties}
          className="flex flex-col gap-3 border-t-2 border-navy-800 pt-5"
        >
          <h3 className="text-[19px] leading-snug font-bold text-navy-800">{it.title}</h3>
          <p className="text-small text-muted">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Faq({ title, items }: { title: string; items: { q: string; a: string }[] }) {
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
        <SectionTitle title={title} />
        <div data-reveal style={{ "--d": 2 } as CSSProperties} className="divide-y divide-navy-800/10 border-y border-navy-800/10">
          {items.map((it) => (
            <details key={it.q} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] leading-snug font-semibold text-navy-800">{it.q}</h3>
                <span
                  className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border border-navy-800/20 text-navy-800 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 12 12" className="size-2.5">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-small text-muted">{it.a}</p>
            </details>
          ))}
        </div>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}

export function Certifications({ title, intro }: { title: string; intro?: string }) {
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
          <li key={b.city} data-reveal="fade" style={{ "--d": i } as CSSProperties} className={`flex flex-col gap-1 p-6 ${on ? "bg-brand-50" : "bg-white"}`}>
            <span className="text-xs font-bold tracking-[0.14em] text-muted uppercase">{b.region}</span>
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

export function CtaBand({ title, text, whatsapp = true }: { title: string; text: string; whatsapp?: boolean }) {
  return (
    <section className="bg-(image:--gradient-hero) py-20 text-white md:py-24">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div data-reveal className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-[30px] leading-[1.15] font-semibold md:text-[40px]">{title}</h2>
          <p className="text-lead text-white/78">{text}</p>
        </div>
        <div data-reveal style={{ "--d": 2 } as CSSProperties} className="flex flex-wrap gap-4">
          <Button href="/contacto/">Solicita una cotización</Button>
          {whatsapp && (
            <Button href={contact.whatsapp} variant="outline" target="_blank" rel="noopener noreferrer">
              Contáctanos por WhatsApp
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
