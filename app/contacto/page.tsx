import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import type { CSSProperties, ReactNode } from "react";
import { SocialIcon } from "@/components/site/icons";
import { PageHero } from "@/components/site/page-hero";
import { QuoteForm } from "@/components/site/quote-form";
import { Container, SectionTitle } from "@/components/site/sections";
import { contacto } from "@/content/pages/contacto";
import { getDoc } from "@/lib/cms";
import { contactLinks, getSettings } from "@/lib/content";

const getContent = () => getDoc("page-contacto", contacto);

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return pageMetadata("/contacto/", seo);
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

const link = "hover:text-primary";

export default async function Contacto() {
  const [c, { contact, social }] = await Promise.all([
    getContent(),
    getSettings(),
  ]);
  const { whatsappHref, phoneAltHref } = contactLinks(contact);
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(`MM Carga, ${contact.address}`)}&output=embed`;
  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        crumb="Contacto"
        h1={c.hero.h1}
        subtitle={c.hero.subtitle}
        primary={{ href: whatsappHref, label: c.hero.whatsappLabel }}
      />

      {/* Bloque 2 · Formulario */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle
              kicker="Cotización"
              title={c.form.title}
              intro={c.form.intro}
            />
          </div>
          <div data-reveal style={{ "--d": 2 } as CSSProperties}>
            <QuoteForm withReason whatsapp={contact.whatsapp} />
          </div>
        </Container>
      </section>

      {/* Bloque 3 · Datos de contacto */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-10">
            <SectionTitle kicker="Contacto" title={c.info.title} />
            <dl data-reveal style={{ "--d": 1 } as CSSProperties}>
              <Row label="WhatsApp y teléfono">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link} tabular-nums`}
                >
                  {contact.phone}
                </a>
              </Row>
              <Row label="Teléfono adicional">
                <a href={phoneAltHref} className={`${link} tabular-nums`}>
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
              <Row label="Monitoreo">{c.info.monitoring}</Row>
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
    </>
  );
}
