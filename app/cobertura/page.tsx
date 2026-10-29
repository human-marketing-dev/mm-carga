import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { MexicoMap } from "@/components/site/mexico-map";
import { PageHero } from "@/components/site/page-hero";
import {
  Container,
  CtaBand,
  SectionTitle,
  ServiceCards,
} from "@/components/site/sections";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { bases, contact, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cobertura y bases de operación | MM Carga",
  description:
    "Bases de operación de MM Carga en Altamira, Manzanillo, Coatzacoalcos, Nuevo Laredo, Silao y Monterrey. Transporte de carga en puertos, frontera y Bajío.",
  alternates: { canonical: "/cobertura/" },
};

// Monterrey primero: es la oficina corporativa
const ordered = [
  ...bases.filter((b) => b.city === "Monterrey"),
  ...bases.filter((b) => b.city !== "Monterrey"),
];

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

export default function Cobertura() {
  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        crumb="Cobertura"
        h1="Bases de operación de MM Carga en México"
        subtitle="Seis bases propias en puertos, la frontera norte y el Bajío para atender con oportunidad cada operación."
        secondary={{ href: "#bases", label: "Ver bases de operación" }}
        image={{
          src: "/images/cobertura/patio-bases-de-operacion-transporte-de-carga-mm-carga.webp",
          alt: "Patio de MM Carga con tractocamiones y plataformas propias en una base de operación",
        }}
      />

      {/* Bloque 2 · Mapa */}
      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle
              kicker="Cobertura"
              title="Transporte de carga en puertos, frontera y Bajío"
            />
            <p
              data-reveal
              style={{ "--d": 1 } as CSSProperties}
              className="text-body text-muted"
            >
              Nuestra red de bases se ubica en los puntos de mayor actividad
              comercial del país: los puertos del Golfo y del Pacífico, el
              principal cruce fronterizo con Estados Unidos y el corredor
              industrial del Bajío. Esta presencia nos permite coordinar cada
              movimiento con equipo propio y tiempos de respuesta oportunos.
            </p>
          </div>
          <MexicoMap />
        </Container>
      </section>

      {/* Bloque 3 · Fichas de cada base */}
      <section id="bases" className="scroll-mt-24 bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionTitle
            kicker="Ubicaciones"
            title="Nuestras bases de operación"
          />
          <ul className="grid gap-5.5 md:grid-cols-2 lg:grid-cols-3">
            {ordered.map((b, i) => (
              <li
                key={b.city}
                data-reveal
                style={{ "--d": i } as CSSProperties}
                className="flex flex-col gap-4 rounded-card border border-navy-800/8 bg-white p-7"
              >
                <p className="text-xs font-bold tracking-[0.14em] text-primary uppercase">
                  {b.region}
                </p>
                <h3 className="text-[22px] font-bold text-navy-800">
                  MM Carga {b.city}
                </h3>
                <p className="text-small text-muted">{b.role}</p>
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
                  {b.city === "Monterrey" && (
                    <Link
                      href="/transporte-de-carga-en-monterrey/"
                      className="inline-flex items-center gap-2 text-navy-800 hover:text-primary"
                    >
                      Transporte de carga en Monterrey
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Bloque 4 · Servicios disponibles */}
      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-10">
          <SectionTitle
            kicker="Servicios"
            title="Servicios coordinados desde nuestras bases"
          />
          <ServiceCards items={services} />
        </Container>
      </section>

      {/* Bloque 5 · CTA */}
      <CtaBand
        kicker="Cotización"
        title="Coordinamos tu operación desde la base más cercana"
        text="Compártenos el origen, el destino y el tipo de carga, y nuestro equipo te presentará una propuesta."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
