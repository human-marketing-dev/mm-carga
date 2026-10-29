import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { SocialIcon } from "@/components/site/icons";
import { MexicoMap } from "@/components/site/mexico-map";
import { PageHero } from "@/components/site/page-hero";
import { QuoteForm } from "@/components/site/quote-form";
import { Container, SectionTitle, TextLink } from "@/components/site/sections";
import { contact, social } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto y cotizaciones | MM Carga",
  description:
    "Solicita una cotización de transporte de carga o almacenamiento con MM Carga. Contáctanos por WhatsApp, teléfono o formulario.",
  alternates: { canonical: "/contacto/" },
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`MM Carga, ${contact.address}`)}&output=embed`;

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

const link = "hover:text-primary";

export default function Contacto() {
  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        crumb="Contacto"
        h1="Solicita una cotización de transporte de carga"
        subtitle="Compártenos los detalles de tu operación y nuestro equipo te presentará una propuesta."
        primary={{ href: contact.whatsapp, label: "Escríbenos por WhatsApp" }}
      />

      {/* Bloque 2 · Formulario */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle
              kicker="Cotización"
              title="Formulario de cotización"
              intro="Indica el servicio, el origen y el destino de tu carga. Si eres proveedor, elige ese motivo y te pondremos en contacto con el área de compras."
            />
          </div>
          <div data-reveal style={{ "--d": 2 } as CSSProperties}>
            <QuoteForm withReason />
          </div>
        </Container>
      </section>

      {/* Bloque 3 · Datos de contacto */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-10">
            <SectionTitle kicker="Contacto" title="Información de contacto" />
            <dl data-reveal style={{ "--d": 1 } as CSSProperties}>
              <Row label="WhatsApp y teléfono">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link} tabular-nums`}
                >
                  {contact.phone}
                </a>
              </Row>
              <Row label="Teléfono adicional">
                <a
                  href={contact.phoneAltHref}
                  className={`${link} tabular-nums`}
                >
                  {contact.phoneAlt}
                </a>
              </Row>
              <Row label="Correo general">
                <a href={`mailto:${contact.email}`} className={link}>
                  {contact.email}
                </a>
              </Row>
              <Row label="Proveedores">
                <a href={`mailto:${contact.purchasing}`} className={link}>
                  {contact.purchasing}
                </a>
              </Row>
              <Row label="Oficina corporativa">{contact.address}</Row>
              <Row label="Monitoreo">Monitoreo de unidades 24/7</Row>
              <div className="flex flex-col gap-3 pt-5">
                <dt className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                  Síguenos
                </dt>
                <dd className="flex gap-2.5">
                  {social.map((n) => (
                    <a
                      key={n.name}
                      href={n.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`MM Carga en ${n.name}`}
                      className="grid size-11 place-items-center rounded-btn-sm border border-navy-800/12 text-navy-800 transition hover:border-primary hover:text-primary"
                    >
                      <SocialIcon name={n.name} />
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="min-h-[360px] overflow-hidden rounded-dialog border border-navy-800/8 bg-surface lg:min-h-0"
          >
            <iframe
              src={mapSrc}
              title="Ubicación de la oficina corporativa de MM Carga en Pesquería, N.L."
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-[360px] border-0"
            />
          </div>
        </Container>
      </section>

      {/* Bloque 4 · Bases */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle kicker="Cobertura" title="Bases de operación" />
            <p
              data-reveal
              style={{ "--d": 1 } as CSSProperties}
              className="text-body text-muted"
            >
              Operamos desde seis bases propias en Monterrey, Nuevo Laredo,
              Altamira, Silao, Manzanillo y Coatzacoalcos.
            </p>
            <div className="pt-2">
              <TextLink href="/cobertura/">Conoce nuestra cobertura</TextLink>
            </div>
          </div>
          <MexicoMap />
        </Container>
      </section>
    </>
  );
}
