import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import type { ReactNode } from "react";
import { PageHero } from "@/components/site/page-hero";
import { PortableText } from "@/components/site/portable-text";
import { Container } from "@/components/site/sections";
import { aviso } from "@/content/pages/aviso";
import { getDoc } from "@/lib/cms";

// Página legal: se mantiene fuera del índice; el texto requiere validación jurídica del cliente
const getContent = () => getDoc("page-aviso", aviso);

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return pageMetadata("/aviso-de-privacidad/", seo, { robots: { index: false, follow: true } });
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4 border-t border-navy-800/10 pt-10">
      <h2 className="text-[26px] leading-tight font-bold text-navy-800">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-body text-muted [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export default async function AvisoDePrivacidad() {
  const c = await getContent();
  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        crumb="Aviso de privacidad"
        h1={c.hero.h1}
        subtitle={c.hero.subtitle}
        primary={{ href: "/contacto/", label: "Contáctanos" }}
      />

      {/* Bloque 2 · Texto legal */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-10">
            <p className="text-small text-muted">
              Última actualización: {c.updated}
            </p>
            {c.sections.map((sec) => (
              <Block key={sec.title} title={sec.title}>
                <PortableText value={sec.body} />
              </Block>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
