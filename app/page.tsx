import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { IconFleet } from "@/components/site/icons";
import { HeroSlider } from "@/components/site/hero-slider";
import { Rich } from "@/components/site/rich";
import { MexicoMap } from "@/components/site/mexico-map";
import { Photo } from "@/components/site/photo";
import {
  Certifications,
  Container,
  CtaBand,
  Faq,
  Figures,
  ReasonsSection,
  SectionTitle,
  TextLink,
} from "@/components/site/sections";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { home } from "@/content/pages/home";
import { getDoc } from "@/lib/cms";
import { getServices } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getHome();
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: "/" },
  };
}

const getHome = () => getDoc("page-home", home);

export default async function Home() {
  const [c, services] = await Promise.all([getHome(), getServices()]);
  return (
    <>
      {/* Bloque 1 · Hero */}
      <section
        data-hero="dark"
        className="relative isolate -mt-18 overflow-hidden bg-navy-950 pt-18 text-white"
      >
        {/* Fotos de fondo que rotan (transporte, almacén, contenedores, carga suelta) con overlay para legibilidad */}
        <HeroSlider slides={c.hero.slides} />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-navy-950/90 via-navy-950/72 to-navy-950/45 lg:from-navy-950/95 lg:via-navy-950/75 lg:to-navy-950/25"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-linear-to-t from-navy-950/80 to-transparent"
          aria-hidden="true"
        />
        <Container className="flex min-h-[clamp(600px,84vh,800px)] items-center pt-16 pb-36 lg:pt-24 lg:pb-40">
          <div className="hero-in flex max-w-2xl flex-col items-start gap-7">
            <Badge dot={false}>{c.hero.badge}</Badge>
            <h1 className="text-[clamp(36px,4.4vw,60px)] leading-[1.08] font-heavy">
              {c.hero.h1}
            </h1>
            <p className="max-w-xl text-lead tracking-[.05px] text-white/80">
              {c.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <Button href="/contacto/">Solicita una cotización</Button>
              <Button href="/transporte-de-carga/" variant="outline">
                Conoce nuestros servicios
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Bloque 2 · Cifras */}
      <Figures items={c.figures} label="MM Carga en cifras" />

      {/* Bloque 3 · Presentación */}
      <section className="overflow-hidden py-20 md:py-28">
        <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
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
            <div
              data-reveal
              style={{ "--d": 3 } as CSSProperties}
              className="pt-2"
            >
              <TextLink href="/nosotros/">Conoce más sobre MM Carga</TextLink>
            </div>
          </div>

          {/* Foto del patio con dos datos flotantes */}
          <div
            data-reveal="scale"
            style={{ "--d": 1 } as CSSProperties}
            className="relative pb-10 lg:pb-0 lg:pl-10"
          >
            <span
              className="absolute -top-6 -right-6 -z-10 hidden size-40 rounded-card [background-image:radial-gradient(var(--color-primary)_1.3px,transparent_1.6px)] [background-size:14px_14px] opacity-30 lg:block"
              aria-hidden="true"
            />
            <Photo
              src={c.about.image.src}
              alt={c.about.image.alt}
              className="aspect-[5/4] rounded-dialog shadow-card-hover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-4 flex items-center gap-4 rounded-card bg-navy-800 py-4 pr-6 pl-4 text-white shadow-dialog lg:-bottom-8 lg:left-0">
              <span className="grid size-12 place-items-center rounded-btn bg-primary">
                <IconFleet />
              </span>
              <span className="flex flex-col">
                <span className="text-[28px] leading-none font-heavy tabular-nums">
                  {c.about.statValue}
                </span>
                <span className="text-sm text-white/70">
                  {c.about.statLabel}
                </span>
              </span>
            </div>
            <div className="absolute top-5 right-5 hidden items-center gap-2.5 rounded-full bg-white/92 py-2 pr-4 pl-2.5 text-sm font-semibold text-navy-800 shadow-tag backdrop-blur sm:flex">
              <span className="relative grid size-2.5 place-items-center">
                <span className="absolute size-2.5 animate-pulse-ring rounded-full bg-success" />
                <span className="size-2 rounded-full bg-success" />
              </span>
              Monitoreo 24/7
            </div>
          </div>
        </Container>
      </section>

      {/* Bloque 4 · Por qué MM Carga */}
      <ReasonsSection
        className="bg-surface"
        title={c.reasons.title}
        intro={c.reasons.intro}
        items={c.reasons.items}
      />

      {/* Bloque 5 · Servicios */}
      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              kicker="Servicios"
              title={c.services.title}
              intro={c.services.intro}
            />
          </div>
          <ul className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li
                key={s.slug}
                data-reveal
                style={{ "--d": i } as CSSProperties}
              >
                <Link
                  href={s.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-brand-800/8 bg-white shadow-card transition hover:-translate-y-1 hover:border-brand-800/22 hover:shadow-card-hover"
                >
                  <Photo
                    src={s.card.image.src}
                    alt={s.card.image.alt}
                    className="aspect-[16/10]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-card-title font-extrabold text-brand-800">
                      {s.card.name}
                    </h3>
                    <p className="flex-1 text-small text-muted">
                      {s.card.summary}
                    </p>
                    <span className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-primary">
                      Ver servicio
                      <ArrowIcon className="size-3.5 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
            <li data-reveal style={{ "--d": services.length } as CSSProperties}>
              <Link
                href="/transporte-de-carga/"
                className="group flex h-full min-h-72 flex-col justify-between gap-8 overflow-hidden rounded-card bg-(image:--gradient-hero) p-8 text-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="text-xs font-bold tracking-[0.16em] text-white/70 uppercase">
                  Todos los servicios
                </span>
                <span className="flex flex-col gap-3">
                  <span className="text-[26px] leading-tight font-bold">
                    {c.services.allTitle}
                  </span>
                  <span className="text-small text-white/75">
                    {c.services.allText}
                  </span>
                </span>
                <span className="grid size-12 place-items-center rounded-btn bg-white/14 transition group-hover:bg-white/22">
                  <ArrowIcon className="size-4.5 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* Bloque 6 · Cobertura */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle kicker="Cobertura" title={c.coverage.title} />
            {c.coverage.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal
                style={{ "--d": i + 1 } as CSSProperties}
                className="text-body text-muted"
              >
                <Rich text={p} />
              </p>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <TextLink href="/cobertura/">Conoce nuestra cobertura</TextLink>
              <TextLink href="/transporte-de-carga-en-monterrey/">
                Transporte de carga en Monterrey
              </TextLink>
            </div>
          </div>
          <MexicoMap />
        </Container>
      </section>

      {/* Bloque 7 · Certificaciones */}
      <Certifications
        title={c.certifications.title}
        intro={c.certifications.intro}
      />

      {/* Bloque 8 · FAQ */}
      <div className="bg-surface">
        <Faq title={c.faq.title} items={c.faq.items} />
      </div>

      {/* Bloque 9 · CTA */}
      <CtaBand title={c.cta.title} text={c.cta.text} />
    </>
  );
}
