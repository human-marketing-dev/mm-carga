import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { CSSProperties } from "react";
import { MexicoMap } from "@/components/site/mexico-map";
import { PageHero } from "@/components/site/page-hero";
import { Photo } from "@/components/site/photo";
import {
  Container,
  CtaBand,
  Faq,
  ReasonsSection,
  SectionTitle,
  TextLink,
} from "@/components/site/sections";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Rich } from "@/components/site/rich";
import { transporte } from "@/content/pages/transporte";
import { getDoc } from "@/lib/cms";
import { getServices } from "@/lib/content";

const SLUG = "/transporte-de-carga/";

const getContent = () => getDoc("page-transporte-de-carga", transporte);

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getContent();
  return pageMetadata(SLUG, seo);
}

export default async function TransporteDeCarga() {
  const [c, services] = await Promise.all([getContent(), getServices()]);
  // Solo los servicios de transporte; almacenamiento se enlaza desde "Por qué MM Carga"
  const transport = services.filter(
    (s) => s.slug !== "/almacenamiento-de-mercancias/",
  );
  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        crumb="Transporte de carga"
        h1={c.hero.h1}
        subtitle={c.hero.subtitle}
        secondary={{ href: "#servicios", label: "Ver servicios" }}
        image={c.hero.image}
      />

      {/* Bloque 2 · Presentación */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionTitle kicker="Quiénes somos" title={c.about.title} />
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="flex flex-col gap-6 text-body text-muted lg:pt-9"
          >
            {c.about.paragraphs.map((p, i) => (
              <p key={i}>
                <Rich text={p} />
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Bloque 3 · Servicios de transporte */}
      <section
        id="servicios"
        className="scroll-mt-24 bg-surface py-20 md:py-28"
      >
        <Container className="flex flex-col gap-12">
          <SectionTitle
            kicker="Servicios"
            title={c.services.title}
            intro={c.services.intro}
          />
          <ul className="grid gap-5.5 sm:grid-cols-2">
            {transport.map((s, i) => (
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
                    className="aspect-[16/9]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-7">
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
          </ul>
        </Container>
      </section>

      {/* Bloque 4 · Guía de selección */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionTitle
            kicker="Guía de selección"
            title={c.guide.title}
            intro={c.guide.intro}
          />
          <div
            data-reveal
            style={{ "--d": 1 } as CSSProperties}
            className="overflow-hidden rounded-card border border-navy-800/10"
          >
            <table className="w-full text-left">
              <thead className="bg-surface text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Tipo de carga
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Equipo recomendado
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.guide.rows.map((g) => (
                  <tr key={g.href} className="border-t border-navy-800/10">
                    <td className="px-6 py-5 text-small text-ink">{g.cargo}</td>
                    <td className="px-6 py-5">
                      <Link
                        href={g.href}
                        className="text-[15px] font-bold text-primary hover:underline"
                      >
                        {g.equipment}
                        <ArrowIcon className="ml-1.5 inline size-3.5 align-[-2px]" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Bloque 5 · Cobertura */}
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

      {/* Bloque 6 · Por qué MM Carga */}
      <ReasonsSection
        title={c.reasons.title}
        items={c.reasons.items}
        aside={
          <div data-reveal style={{ "--d": 1 } as CSSProperties}>
            <TextLink href="/almacenamiento-de-mercancias/">
              Conoce nuestro servicio de almacenamiento
            </TextLink>
          </div>
        }
      />

      {/* Bloque 7 · FAQ */}
      <div className="bg-surface">
        <Faq title={c.faq.title} items={c.faq.items} />
      </div>

      {/* Bloque 8 · CTA */}
      <CtaBand title={c.cta.title} text={c.cta.text} />
    </>
  );
}
