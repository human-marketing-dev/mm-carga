import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import type { CSSProperties } from "react";
import { Facilities } from "@/components/site/base-page";
import { MexicoMap } from "@/components/site/mexico-map";
import { PageHero } from "@/components/site/page-hero";
import {
  Container,
  CtaBand,
  Faq,
  ReasonsSection,
  SectionTitle,
  ServiceCards,
} from "@/components/site/sections";
import { Rich } from "@/components/site/rich";
import { monterrey as monterreyPage } from "@/content/pages/monterrey";
import { getDoc } from "@/lib/cms";
import { contactLinks, getServices, getSettings } from "@/lib/content";

const SLUG = "/transporte-de-carga-en-monterrey/";

const getContent = () => getDoc("page-monterrey", monterreyPage);

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return pageMetadata(SLUG, seo);
}

export default async function TransporteMonterrey() {
  const [c, services, { bases, contact }] = await Promise.all([
    getContent(),
    getServices(),
    getSettings(),
  ]);
  const { whatsappHref } = contactLinks(contact);
  const monterrey = bases.find((b) => b.city === "Monterrey")!;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`MM Carga, ${contact.address}`)}&output=embed`;
  const summaries = Object.fromEntries(
    c.services.summaries.map((s) => [s.slug, s.text]),
  );
  // Mismo LocalBusiness que la ficha de Monterrey en /cobertura/
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MM Carga Monterrey",
    description: monterrey.role,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carretera a Huinala km 6.5",
      postalCode: "66673",
      addressLocality: "Pesquería",
      addressRegion: "Nuevo León",
      addressCountry: "MX",
    },
    hasMap: monterrey.maps,
    areaServed: "Monterrey, Nuevo León",
  };

  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        parents={[{ href: "/cobertura/", label: "Cobertura" }]}
        crumb="Monterrey"
        h1={c.hero.h1}
        subtitle={c.hero.subtitle}
        secondary={{ href: "#servicios", label: "Ver servicios en Monterrey" }}
        image={c.hero.image}
      />

      {/* Bloque 2 · Presentación local */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionTitle kicker="Presencia local" title={c.intro.title} />
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="flex flex-col gap-6 text-body text-muted lg:pt-9"
          >
            {c.intro.paragraphs.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Bloque 2b · Base central (cliente, 6 nov) */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionTitle kicker="Instalaciones" title={c.facilities.title} />
          <Facilities items={c.facilities.items} />
        </Container>
      </section>

      {/* Bloque 3 · Servicios en Monterrey */}
      <section id="servicios" className="scroll-mt-24 py-20 md:py-28">
        <Container className="flex flex-col gap-10">
          <SectionTitle kicker="Servicios" title={c.services.title} />
          <ServiceCards items={services} summaries={summaries} />
        </Container>
      </section>

      {/* Bloque 4 · Rutas frecuentes */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionTitle kicker="Rutas" title={c.routes.title} />
            <ul
              data-reveal
              style={{ "--d": 1 } as CSSProperties}
              className="flex flex-col"
            >
              {c.routes.items.map((r) => (
                <li
                  key={r.to}
                  className="flex items-baseline justify-between gap-4 border-b border-navy-800/10 py-4 first:border-t"
                >
                  <span className="text-[17px] font-semibold text-navy-800">
                    Monterrey – {r.to}
                  </span>
                  <span className="text-small text-muted">{r.note}</span>
                </li>
              ))}
            </ul>
          </div>
          <MexicoMap
            highlight={[
              "Monterrey",
              "Nuevo Laredo",
              "Altamira",
              "Manzanillo",
              "Silao",
            ]}
            activeLabel="Base en una ruta frecuente desde Monterrey"
            linksLabel="Cómo llegar a estas bases"
          />
        </Container>
      </section>

      {/* Bloque 5 · Por qué */}
      <ReasonsSection title={c.reasons.title} items={c.reasons.items} />

      {/* Bloque 6 · Ubicación */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionTitle kicker="Contacto" title={c.location.title} />
            <dl
              data-reveal
              style={{ "--d": 1 } as CSSProperties}
              className="flex flex-col"
            >
              {[
                ["Dirección", contact.address],
                ["Teléfono y WhatsApp", contact.phone],
                ["Correo", contact.email],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-col gap-1 border-b border-navy-800/10 py-5 first:pt-0"
                >
                  <dt className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                    {k}
                  </dt>
                  <dd className="text-[17px] font-semibold text-navy-800">
                    {k === "Correo" ? (
                      <a href={`mailto:${v}`} className="hover:text-primary">
                        {v}
                      </a>
                    ) : k === "Teléfono y WhatsApp" ? (
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tabular-nums hover:text-primary"
                      >
                        {v}
                      </a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={monterrey.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-[15px] font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
            >
              Cómo llegar
            </a>
          </div>
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="min-h-[360px] overflow-hidden rounded-dialog border border-navy-800/8 bg-white"
          >
            <iframe
              src={mapSrc}
              title="Ubicación de MM Carga en Pesquería, área metropolitana de Monterrey"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-[360px] border-0"
            />
          </div>
        </Container>
      </section>

      {/* Bloque 7 · FAQ */}
      <div>
        <Faq kicker="FAQs" title={c.faq.title} items={c.faq.items} />
      </div>

      {/* Bloque 8 · CTA */}
      <CtaBand kicker="Cotización" title={c.cta.title} text={c.cta.text} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
