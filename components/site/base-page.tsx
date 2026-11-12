import type { CSSProperties, ReactNode } from "react";
import { IconWarehouse, NamedIcon } from "@/components/site/icons";
import { MexicoMap } from "@/components/site/mexico-map";
import { PageHero } from "@/components/site/page-hero";
import { Rich } from "@/components/site/rich";
import { pageMetadata } from "@/lib/seo";
import {
  Container,
  CtaBand,
  Faq,
  SectionTitle,
  ServiceCards,
} from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { basePages } from "@/content/pages/bases";
import type { Facility } from "@/content/pages/base-types";
import { getDoc } from "@/lib/cms";
import { contactLinks, getServices, getSettings } from "@/lib/content";

export type BaseKey = keyof typeof basePages;

const getBase = (key: BaseKey) => getDoc(`base-${key}`, basePages[key]);

/** Metadatos de una página por base (sin indexar hasta que se confirme publicarlas) */
export async function baseMetadata(key: BaseKey) {
  const data = await getBase(key);
  return pageMetadata(data.slug, data.seo, {
    robots: { index: false, follow: false },
  });
}

/** Tarjetas de instalaciones; también las usa la página de Monterrey */
export function Facilities({ items }: { items: Facility[] }) {
  const cols =
    items.length % 3 === 0 || items.length > 4
      ? "lg:grid-cols-3"
      : "lg:grid-cols-2";
  return (
    <ul className={`grid gap-5.5 sm:grid-cols-2 ${cols}`}>
      {items.map((f, i) => {
        return (
          <li
            key={f.title}
            data-reveal
            style={{ "--d": i } as CSSProperties}
            className="flex flex-col gap-4 rounded-card border border-navy-800/8 bg-white p-7"
          >
            <span
              className="grid size-12 place-items-center rounded-card bg-primary text-white [&_svg]:size-6"
              aria-hidden="true"
            >
              <NamedIcon name={f.icon} />
            </span>
            <h3 className="text-[19px] font-bold text-navy-800">{f.title}</h3>
            <p className="text-small text-muted">{f.text}</p>
          </li>
        );
      })}
    </ul>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-navy-800/10 py-5 first:pt-0">
      <dt className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
        {label}
      </dt>
      <dd className="text-[17px] font-semibold text-navy-800">{children}</dd>
    </div>
  );
}

export async function BasePage({ base: key }: { base: BaseKey }) {
  const [data, services, { bases, contact }] = await Promise.all([
    getBase(key),
    getServices(),
    getSettings(),
  ]);
  const { whatsappHref } = contactLinks(contact);
  const summaries = Object.fromEntries(
    data.services.summaries.map((s) => [s.slug, s.text]),
  );
  const base = bases.find((b) => b.city === data.city)!;
  // Servicios principales de la base primero; almacenamiento solo donde hay almacén
  const available = services.filter(
    (s) => data.warehouse || s.slug !== "/almacenamiento-de-mercancias/",
  );
  const items = [
    ...data.services.focus
      .map((slug) => available.find((s) => s.slug === slug))
      .filter((s) => s !== undefined),
    ...available.filter((s) => !data.services.focus.includes(s.slug)),
  ];
  const others = bases.filter((b) => b.city !== data.city);
  const faq = [
    {
      q: `¿Dónde se ubica la base de MM Carga en ${data.label}?`,
      a: `Nuestra base de operación se encuentra en ${base.address}`,
    },
    ...data.faq,
  ];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`MM Carga, ${base.address}`)}&output=embed`;
  const [, postalCode] = base.address.match(/\b(\d{5})\b/) ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `MM Carga ${base.city}`,
    description: base.role,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: base.address,
      ...(postalCode && { postalCode }),
      addressLocality: base.city,
      addressRegion: base.state,
      addressCountry: "MX",
    },
    hasMap: base.maps,
    areaServed: `${base.city}, ${base.state}`,
    parentOrganization: { "@type": "Organization", name: "MM Carga" },
  };

  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        parents={[{ href: "/cobertura/", label: "Cobertura" }]}
        crumb={data.label}
        h1={data.h1}
        subtitle={data.subtitle}
        secondary={{ href: "#ubicacion", label: "Ver ubicación de la base" }}
        image={
          data.image ?? {
            alt: `Base de operación de MM Carga en ${data.label}`,
            label: `base de MM Carga en ${data.label}`,
          }
        }
      />

      {/* Bloque 2 · Presentación local */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionTitle kicker="Presencia local" title={data.intro.title} />
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="flex flex-col gap-6 text-body text-muted lg:pt-9"
          >
            {data.intro.paragraphs.map((p) => (
              <p key={p}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Bloque 3 · Qué hay en la base */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionTitle
            kicker="Instalaciones"
            title={`Qué hay en nuestra base de ${data.label}`}
          />
          <Facilities items={data.facilities} />
          {data.warehouse && (
            <p className="inline-flex items-center gap-2 self-start rounded-tag bg-brand-50 px-3 py-1.5 text-sm font-semibold text-primary">
              <span className="[&_svg]:size-4" aria-hidden="true">
                <IconWarehouse />
              </span>
              Esta base cuenta con almacén propio
            </p>
          )}
        </Container>
      </section>

      {/* Bloque 4 · Servicios desde la base */}
      <section id="servicios" className="scroll-mt-24 py-20 md:py-28">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <SectionTitle kicker="Servicios" title={data.services.title} />
            <p
              data-reveal
              style={{ "--d": 1 } as CSSProperties}
              className="max-w-3xl text-body text-muted"
            >
              {data.services.intro}
            </p>
          </div>
          <ServiceCards items={items} summaries={summaries} />
        </Container>
      </section>

      {/* Bloque 5 · Cobertura desde la base */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionTitle
              kicker="Cobertura"
              title={`Rutas de transporte desde ${data.label}`}
            />
            <div data-reveal style={{ "--d": 1 } as CSSProperties}>
              <p className="pb-5 text-body text-muted">{data.coverageNote}</p>
              <ul className="flex flex-col">
                {others.map((b) => (
                  <li
                    key={b.city}
                    className="flex items-baseline justify-between gap-4 border-b border-navy-800/10 py-4 first:border-t"
                  >
                    <span className="text-[17px] font-semibold text-navy-800">
                      {data.label} – {b.city}
                    </span>
                    <span className="text-small text-right text-muted">
                      {b.region}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <MexicoMap
            highlight={[data.city]}
            activeLabel={`Base de MM Carga en ${data.label}`}
            linksLabel="Cómo llegar a la base"
          />
        </Container>
      </section>

      {/* Bloque 6 · FAQ */}
      <Faq
        title={`Preguntas frecuentes sobre transporte de carga en ${data.label}`}
        items={faq}
      />

      {/* Bloque 7 · Ubicación */}
      <section
        id="ubicacion"
        className="scroll-mt-24 bg-surface py-20 md:py-28"
      >
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionTitle
              kicker="Contacto"
              title={`Ubicación de MM Carga en ${data.label}`}
            />
            <dl data-reveal style={{ "--d": 1 } as CSSProperties}>
              <Row label="Dirección">{base.address}</Row>
              <Row label="Teléfono y WhatsApp">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tabular-nums hover:text-primary"
                >
                  {contact.phone}
                </a>
              </Row>
              <Row label="Correo">
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-primary"
                >
                  {contact.email}
                </a>
              </Row>
            </dl>
            <div className="flex flex-wrap gap-4">
              <Button href="/contacto/">Solicita una cotización</Button>
              <Button
                href={base.maps}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cómo llegar
              </Button>
            </div>
          </div>
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="min-h-[360px] overflow-hidden rounded-dialog border border-navy-800/8 bg-white"
          >
            <iframe
              src={mapSrc}
              title={`Ubicación de la base de MM Carga en ${data.label}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-[360px] border-0"
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaBand title={data.cta.title} text={data.cta.text} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
