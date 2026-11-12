import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import type { CSSProperties } from "react";
import { MexicoMap } from "@/components/site/mexico-map";
import { AboutHero } from "@/components/site/about-hero";
import {
  Container,
  CtaBand,
  Figures,
  isWide,
  SectionTitle,
  TextLink,
} from "@/components/site/sections";
import { Rich } from "@/components/site/rich";
import { nosotros } from "@/content/pages/nosotros";
import { getDoc } from "@/lib/cms";
import { getSettings } from "@/lib/content";

const getContent = () => getDoc("page-nosotros", nosotros);

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return pageMetadata("/nosotros/", seo);
}

export default async function Nosotros() {
  const [c, { certifications }] = await Promise.all([
    getContent(),
    getSettings(),
  ]);
  const certs = certifications.filter((c) => !c.affiliation);
  const affiliations = certifications.filter((c) => c.affiliation);
  return (
    <>
      {/* Bloque 1 · Hero */}
      <AboutHero
        h1={c.hero.h1}
        subtitle={c.hero.subtitle}
        secondary={{
          href: "/transporte-de-carga/",
          label: "Conoce nuestros servicios",
        }}
        image={c.hero.image}
        seals={c.hero.seals}
      />

      {/* Bloque 2 · Quiénes somos, con el collage de 20 años */}
      <section className="overflow-hidden py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle kicker="Quiénes somos" title={c.about.title} />
            {c.about.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal
                style={{ "--d": i + 1 } as CSSProperties}
                className="text-body text-muted"
              >
                <Rich text={p} />
              </p>
            ))}
            <dl
              data-reveal
              style={{ "--d": 3 } as CSSProperties}
              className="mt-2 grid grid-cols-2 border-t border-navy-800/10 pt-6"
            >
              <div className="flex flex-col gap-1 pr-6">
                <dt className="order-2 text-sm text-muted">
                  {c.about.foundedLabel}
                </dt>
                <dd className="order-1 text-[32px] leading-none font-heavy text-navy-800 tabular-nums">
                  {c.about.foundedYear}
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-l border-navy-800/10 pl-6">
                <dt className="order-2 text-sm text-muted">
                  {c.about.yearsLabel}
                </dt>
                <dd className="order-1 text-[32px] leading-none font-heavy text-primary tabular-nums">
                  {c.about.yearsValue}
                </dd>
              </div>
            </dl>
          </div>
          <div data-reveal="scale" style={{ "--d": 1 } as CSSProperties}>
            <Image
              src={c.about.image.src}
              alt={c.about.image.alt}
              width={c.about.image.width ?? 1524}
              height={c.about.image.height ?? 1020}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto w-full drop-shadow-[0_30px_40px_rgba(6,40,100,0.18)]"
            />
          </div>
        </Container>
      </section>

      {/* Bloque 3 · Misión, visión y valores (con foto de la flota) */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionTitle kicker="Identidad" title={c.identity.title} />
          <div className="grid gap-5.5 lg:grid-cols-[1.15fr_1fr] lg:items-stretch">
            <div
              data-reveal="scale"
              className="relative min-h-[280px] overflow-hidden rounded-card shadow-card-hover sm:min-h-[380px]"
            >
              <Image
                src={c.identity.image.src}
                alt={c.identity.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <ul className="flex flex-col gap-5.5">
              {c.identity.items.map((it, i) => (
                <li
                  key={it.title}
                  data-reveal
                  style={{ "--d": i } as CSSProperties}
                  className="flex flex-1 flex-col gap-3 rounded-card border border-navy-800/8 bg-white p-8"
                >
                  <h3 className="text-[22px] font-bold text-navy-800">
                    {it.title}
                  </h3>
                  <p className="text-body text-muted">{it.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Bloque 4 · Cifras */}
      <section className="pt-20 md:pt-28">
        <Container>
          <SectionTitle kicker="Capacidad operativa" title={c.figures.title} />
        </Container>
      </section>
      <Figures items={c.figures.items} label={c.figures.title} />

      {/* Bloque 5 · Certificaciones */}
      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionTitle
            kicker="Calidad y seguridad"
            title={c.certifications.title}
            intro={c.certifications.intro}
          />
          <ul className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-4">
            {certs.map((cert, i) => (
              <li
                key={cert.image.src}
                data-reveal
                style={{ "--d": i } as CSSProperties}
                className="flex flex-col gap-4 rounded-card border border-navy-800/8 bg-white p-7"
              >
                <Image
                  src={cert.image.src}
                  alt={cert.image.alt}
                  width={cert.image.width}
                  height={cert.image.height}
                  className="h-16 w-auto self-start"
                />
                <h3 className="text-[19px] font-bold text-navy-800">
                  {cert.name}
                </h3>
                <p className="text-small text-muted">{cert.text}</p>
              </li>
            ))}
          </ul>
          <div
            data-reveal
            className="flex flex-col gap-5 border-t border-navy-800/10 pt-8 sm:flex-row sm:items-center sm:gap-10"
          >
            <h3 className="text-[15px] font-bold text-navy-800">
              {c.certifications.affiliationsTitle}
            </h3>
            <ul className="flex flex-wrap items-center gap-8">
              {affiliations.map((a) => (
                <li key={a.image.src}>
                  <Image
                    src={a.image.src}
                    alt={a.image.alt}
                    width={a.image.width}
                    height={a.image.height}
                    className={`w-auto opacity-80 ${isWide(a.image) ? "h-7" : "h-14"}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Bloque 6 · Bases */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle kicker="Cobertura" title={c.bases.title} />
            {c.bases.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal
                style={{ "--d": i + 1 } as CSSProperties}
                className="text-body text-muted"
              >
                <Rich text={p} />
              </p>
            ))}
            <div className="pt-2">
              <TextLink href="/cobertura/">Conoce nuestra cobertura</TextLink>
            </div>
          </div>
          <MexicoMap />
        </Container>
      </section>

      {/* Bloque 7 · CTA */}
      <CtaBand kicker="Cotización" title={c.cta.title} text={c.cta.text} />
    </>
  );
}
