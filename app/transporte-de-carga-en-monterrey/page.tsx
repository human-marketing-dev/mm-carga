import type { Metadata } from "next";
import type { CSSProperties } from "react";
import {
  IconCertified,
  IconFleet,
  IconMonitoring,
  IconRoute,
} from "@/components/site/icons";
import { MexicoMap } from "@/components/site/mexico-map";
import { PageHero } from "@/components/site/page-hero";
import {
  Container,
  CtaBand,
  Faq,
  Points,
  SectionTitle,
  ServiceCards,
} from "@/components/site/sections";
import { bases, contact, services } from "@/lib/site";

const SLUG = "/transporte-de-carga-en-monterrey/";

export const metadata: Metadata = {
  title: "Transporte de carga en Monterrey | MM Carga",
  description:
    "Empresa de transporte de carga en Monterrey con flota propia: caja seca de 53 pies, tolvas, contenedores y plataformas, con monitoreo 24/7.",
  alternates: { canonical: SLUG },
};

// Resumen de cada servicio visto desde la base de Monterrey
const summaries: Record<string, string> = {
  "/caja-seca-53-pies/": "Rutas nacionales y de exportación vía Nuevo Laredo.",
  "/transporte-tolva/":
    "Traslado de materiales a granel para la industria regional.",
  "/transporte-de-contenedores-maritimos/":
    "Movimientos entre Monterrey y los puertos de Altamira y Manzanillo.",
  "/transporte-de-carga-suelta/":
    "Acero, maquinaria y madera con equipo especializado de sujeción.",
  "/almacenamiento-de-mercancias/":
    "Almacenes y maniobras para la gestión de inventario.",
};

const routes = [
  { to: "Nuevo Laredo", note: "Cruce fronterizo" },
  { to: "Puerto de Altamira", note: "Golfo de México" },
  { to: "Puerto de Manzanillo", note: "Pacífico" },
  { to: "Bajío (Silao)", note: "Corredor industrial" },
];

const reasons = [
  {
    title: "Presencia local",
    icon: <IconMonitoring />,
    text: "Oficina corporativa y patio propios en el área metropolitana de Monterrey.",
  },
  {
    title: "Flota propia",
    icon: <IconFleet />,
    text: "Más de 200 unidades y más de 100 cajas secas de 53 pies.",
  },
  {
    title: "Conexión con puertos y frontera",
    icon: <IconRoute />,
    text: "Bases propias en Altamira, Manzanillo y Nuevo Laredo.",
  },
  {
    title: "Procesos certificados",
    icon: <IconCertified />,
    text: "C-TPAT, OEA e ISO 9001:2015.",
  },
];

const faq = [
  {
    q: "¿Dónde se ubican en Monterrey?",
    a: "Nuestra oficina corporativa y base se encuentran en Carretera a Huinala km 6.5, Pesquería, N.L., en el área metropolitana de Monterrey.",
  },
  {
    q: "¿Realizan envíos de Monterrey a Estados Unidos?",
    a: "Sí. Ofrecemos servicio de exportación en caja seca de 53 pies vía Nuevo Laredo.",
  },
  {
    q: "¿Trasladan contenedores entre Monterrey y los puertos?",
    a: "Sí. Realizamos movimientos de contenedores de importación y exportación, con bases propias en Altamira y Manzanillo.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización en Monterrey?",
    a: "Comunícate por WhatsApp o completa el formulario con el origen, el destino y el tipo de carga.",
  },
];

const monterrey = bases.find((b) => b.city === "Monterrey")!;

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`MM Carga, ${contact.address}`)}&output=embed`;

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

export default function TransporteMonterrey() {
  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        parents={[{ href: "/cobertura/", label: "Cobertura" }]}
        crumb="Monterrey"
        h1="Transporte de carga en Monterrey"
        subtitle="Soluciones de transporte y almacenamiento para la industria de Nuevo León, con flota propia y monitoreo las 24 horas."
        secondary={{ href: "#servicios", label: "Ver servicios en Monterrey" }}
        image={{
          src: "/images/monterrey/empresa-de-transporte-de-carga-en-monterrey-mm-carga.webp",
          alt: "Tractocamiones de MM Carga para transporte de carga en Monterrey, Nuevo León",
        }}
      />

      {/* Bloque 2 · Presentación local */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionTitle
            kicker="Presencia local"
            title="Empresa de transporte en Monterrey con base propia"
          />
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="flex flex-col gap-6 text-body text-muted lg:pt-9"
          >
            <p>
              Nuestra oficina corporativa se ubica en Pesquería, en el área
              metropolitana de Monterrey. Desde esta base atendemos a la
              industria de Nuevo León con unidades propias para carga seca,
              materiales a granel, contenedores y carga suelta, y coordinamos
              traslados hacia los puertos, la frontera y el centro del país.
            </p>
            <p>
              Nuestro equipo conoce las rutas y los parques industriales de la
              región, lo que nos permite planear cada traslado de acero,
              maquinaria, granel o mercancía de importación con precisión.
            </p>
          </div>
        </Container>
      </section>

      {/* Bloque 3 · Servicios en Monterrey */}
      <section
        id="servicios"
        className="scroll-mt-24 bg-surface py-20 md:py-28"
      >
        <Container className="flex flex-col gap-10">
          <SectionTitle
            kicker="Servicios"
            title="Servicios de transporte de carga desde Monterrey"
          />
          <ServiceCards items={services} summaries={summaries} />
        </Container>
      </section>

      {/* Bloque 4 · Rutas frecuentes */}
      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionTitle
              kicker="Rutas"
              title="Rutas de transporte desde Monterrey"
            />
            <ul
              data-reveal
              style={{ "--d": 1 } as CSSProperties}
              className="flex flex-col"
            >
              {routes.map((r) => (
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
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionTitle
            kicker="Por qué MM Carga"
            title="¿Por qué elegir a MM Carga en Nuevo León?"
          />
          <Points items={reasons} />
        </Container>
      </section>

      {/* Bloque 6 · Ubicación */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionTitle
              kicker="Contacto"
              title="Ubicación de MM Carga en Monterrey"
            />
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
                        href={contact.whatsapp}
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
            className="min-h-[360px] overflow-hidden rounded-dialog border border-navy-800/8 bg-surface"
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
      <div className="bg-surface">
        <Faq
          kicker="FAQs"
          title="Preguntas frecuentes sobre transporte de carga en Monterrey"
          items={faq}
        />
      </div>

      {/* Bloque 8 · CTA */}
      <CtaBand
        kicker="Cotización"
        title="Transporte de carga en Monterrey con respaldo de más de 30 años"
        text="Nuestro equipo está listo para analizar tu operación y presentarte una propuesta."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
