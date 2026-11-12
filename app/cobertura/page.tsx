import type { Metadata } from "next";
import { localPages } from "@/content/base-links";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { MobileSlider } from "@/components/site/mobile-slider";
import type { CSSProperties } from "react";
import { IconWarehouse } from "@/components/site/icons";
import { MexicoMap } from "@/components/site/mexico-map";
import { CoverageHero } from "@/components/site/coverage-hero";
import {
  Container,
  CtaBand,
  SectionTitle,
  ServiceCards,
} from "@/components/site/sections";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Rich } from "@/components/site/rich";
import { cobertura } from "@/content/pages/cobertura";
import type { Base } from "@/content/site";
import { getDoc } from "@/lib/cms";
import { getServices, getSettings } from "@/lib/content";

const getContent = () => getDoc("page-cobertura", cobertura);

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return pageMetadata("/cobertura/", seo);
}

// Monterrey primero: es la oficina corporativa
const monterreyFirst = (bases: Base[]) => [
  ...bases.filter((b) => b.city === "Monterrey"),
  ...bases.filter((b) => b.city !== "Monterrey"),
];

// Ancla de la ficha de cada base (p. ej. "Nuevo Laredo" → "nuevo-laredo")
const slugify = (city: string) =>
  city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

// Bases con almacén propio (confirmado por el cliente el 3 nov; Monterrey = Pesquería)
const withWarehouse = new Set(["Altamira", "Manzanillo", "Monterrey"]);


export default async function Cobertura() {
  const [c, services, { bases, contact }] = await Promise.all([
    getContent(),
    getServices(),
    getSettings(),
  ]);
  const ordered = monterreyFirst(bases);
  // Schema LocalBusiness por base, con la misma dirección que se muestra en la ficha
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": ordered.map((b) => ({
      "@type": "LocalBusiness",
      name: `MM Carga ${b.city}`,
      description: b.role,
      telephone: contact.phone,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.address,
        addressRegion: b.state,
        addressCountry: "MX",
      },
      hasMap: b.maps,
      parentOrganization: { "@type": "Organization", name: "MM Carga" },
    })),
  };

  return (
    <>
      {/* Bloque 1 · Hero */}
      <CoverageHero
        h1={c.hero.h1}
        subtitle={c.hero.subtitle}
        image={c.hero.image}
        bases={ordered.map((b) => ({
          city: b.city,
          state: b.state,
          region: b.region,
          anchor: `#base-${slugify(b.city)}`,
          warehouse: withWarehouse.has(b.city),
        }))}
      />

      {/* Bloque 2 · Mapa */}
      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle kicker="Cobertura" title={c.map.title} />
            {c.map.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal
                style={{ "--d": i + 1 } as CSSProperties}
                className="text-body text-muted"
              >
                <Rich text={p} />
              </p>
            ))}
          </div>
          <MexicoMap />
        </Container>
      </section>

      {/* Bloque 3 · Fichas de cada base */}
      <section id="bases" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionTitle kicker="Ubicaciones" title={c.bases.title} />
          <MobileSlider
            label={c.bases.title}
            className="gap-5.5 md:grid md:grid-cols-2 lg:grid-cols-3"
          >
            {ordered.map((b, i) => (
              <li
                key={b.city}
                id={`base-${slugify(b.city)}`}
                data-reveal
                style={{ "--d": i } as CSSProperties}
                className="flex scroll-mt-28 flex-col gap-4 rounded-card border border-navy-800/8 bg-white p-7 max-md:w-[86%]"
              >
                <p className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
                  {b.region}
                </p>
                <h3 className="text-[22px] font-bold text-navy-800">
                  MM Carga {b.city}
                </h3>
                <p className="text-small text-muted">{b.role}</p>
                {withWarehouse.has(b.city) && (
                  <p className="inline-flex items-center gap-2 self-start rounded-tag bg-brand-50 px-2.5 py-1 text-xs font-semibold text-primary">
                    <span className="[&_svg]:size-4" aria-hidden="true">
                      <IconWarehouse />
                    </span>
                    Cuenta con almacén
                  </p>
                )}
                <p className="flex gap-2.5 text-small text-ink">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-6.75-5.6-6.75-11.25a6.75 6.75 0 0 1 13.5 0C18.75 15.4 12 21 12 21Z" />
                    <circle cx="12" cy="9.75" r="2.5" />
                  </svg>
                  {b.address}
                </p>
                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 border-t border-navy-800/8 pt-5 text-sm font-bold">
                  <a
                    href={b.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Cómo llegar <ArrowIcon className="size-3.5" />
                  </a>
                  <Link
                    href="/contacto/"
                    className="inline-flex items-center gap-2 text-navy-800 hover:text-primary"
                  >
                    Solicita una cotización
                  </Link>
                  <Link
                    href={localPages[b.city].href}
                    className="inline-flex items-center gap-2 text-navy-800 hover:text-primary"
                  >
                    {localPages[b.city].label}
                  </Link>
                </div>
              </li>
            ))}
          </MobileSlider>
        </Container>
      </section>

      {/* Bloque 4 · Servicios disponibles */}
      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-10">
          <SectionTitle kicker="Servicios" title={c.services.title} />
          <ServiceCards items={services} />
        </Container>
      </section>

      {/* Bloque 5 · CTA */}
      <CtaBand kicker="Cotización" title={c.cta.title} text={c.cta.text} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
