import type { CSSProperties, ReactNode } from "react";
import { IconWarehouse } from "@/components/site/icons";
import { MexicoMap } from "@/components/site/mexico-map";
import { PageHero } from "@/components/site/page-hero";
import {
  Container,
  CtaBand,
  Faq,
  SectionTitle,
  ServiceCards,
} from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import { bases, contact, services } from "@/lib/site";

// Marca de texto provisional: el cliente aún no envía los datos de la base
export const PENDIENTE = "[PENDIENTE CLIENTE]";

export type BasePageData = {
  slug: string;
  /** Debe coincidir con bases[].city en lib/site.ts */
  city: string;
  h1: string;
  subtitle: string;
  /** Nombre corto de la ciudad en títulos y miga */
  label: string;
  /** Solo Altamira, Manzanillo y Pesquería tienen almacén (cliente, 3 nov) */
  warehouse: boolean;
  /** Foto del hero; sin valor muestra el relleno "Foto pendiente" */
  image?: { src: string; alt: string };
  intro: { title: string; paragraphs: string[] };
  facilities: { title: string; text: string }[];
  services: { title: string; summaries: Record<string, string> };
  routes: { to: string; km: string; time: string }[];
  faq: { q: string; a: string }[];
  cta: { title: string; text: string };
};

// Cada marca se muestra como etiqueta; el texto que la sigue es borrador por confirmar
function Draft({ text }: { text: string }) {
  const parts = text.split(PENDIENTE);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && (
            <span className="mr-2 inline-flex rounded-tag bg-[#f9eeda] px-2 py-0.5 align-[2px] text-[11px] font-bold tracking-wide text-[#8a5a00]">
              {PENDIENTE}
            </span>
          )}
          {i > 0 ? part.trimStart() : part}
        </span>
      ))}
    </>
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

export function BasePage({ data }: { data: BasePageData }) {
  const base = bases.find((b) => b.city === data.city)!;
  const items = services.filter(
    (s) => data.warehouse || s.slug !== "/almacenamiento-de-mercancias/",
  );
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
                <Draft text={p} />
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
          <ul className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {data.facilities.map((f, i) => (
              <li
                key={f.title}
                data-reveal
                style={{ "--d": i } as CSSProperties}
                className="flex flex-col gap-3 rounded-card border border-navy-800/8 bg-white p-7"
              >
                <h3 className="text-[19px] font-bold text-navy-800">
                  {f.title}
                </h3>
                <p className="text-small text-muted">
                  <Draft text={f.text} />
                </p>
              </li>
            ))}
          </ul>
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
            <p className="text-small text-muted">
              <Draft
                text={`${PENDIENTE} Confirmar qué servicios se operan desde esta base.`}
              />
            </p>
          </div>
          <ServiceCards items={items} summaries={data.services.summaries} />
        </Container>
      </section>

      {/* Bloque 5 · Rutas frecuentes */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionTitle
              kicker="Rutas"
              title={`Rutas de transporte desde ${data.label}`}
            />
            <div data-reveal style={{ "--d": 1 } as CSSProperties}>
              <p className="pb-4 text-small text-muted">
                <Draft
                  text={`${PENDIENTE} Rutas, distancias y tiempos de referencia por validar con el cliente.`}
                />
              </p>
              <ul className="flex flex-col">
                {data.routes.map((r) => (
                  <li
                    key={r.to}
                    className="flex items-baseline justify-between gap-4 border-b border-navy-800/10 py-4 first:border-t"
                  >
                    <span className="text-[17px] font-semibold text-navy-800">
                      {data.label} – {r.to}
                    </span>
                    <span className="text-small whitespace-nowrap text-muted tabular-nums">
                      {r.km} · {r.time}
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
        items={data.faq}
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
                  href={contact.whatsapp}
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
