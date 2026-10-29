import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { MexicoMap } from "@/components/site/mexico-map";
import { PageHero } from "@/components/site/page-hero";
import {
  Container,
  CtaBand,
  Figures,
  SectionTitle,
  TextLink,
} from "@/components/site/sections";
import { certifications } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros | MM Carga, más de 30 años en transporte de carga",
  description:
    "Conoce a MM Carga (Transportes MM), empresa mexicana con más de 30 años en transporte de carga y almacenamiento, certificada C-TPAT, OEA e ISO 9001.",
  alternates: { canonical: "/nosotros/" },
};

const figures = [
  { value: "+30", label: "años de experiencia" },
  { value: "+200", label: "unidades full" },
  { value: "+100", label: "cajas secas de 53 pies" },
  { value: "200,000", unit: "m²", label: "de almacenamiento" },
  { value: "6", label: "bases de operación" },
  { value: "24/7", label: "monitoreo de unidades" },
];

const identity = [
  {
    title: "Misión",
    text: "Brindar servicios de transporte con personal calificado, equipo moderno y tecnología de vanguardia, generando seguridad y confianza en nuestros clientes.",
  },
  {
    title: "Visión",
    text: "Ser la empresa de transporte y logística de referencia en México, reconocida por un servicio seguro, rentable y de alta calidad.",
  },
  {
    title: "Valores",
    text: "Honestidad, responsabilidad y puntualidad.",
  },
];

// Mismo orden que lib/site.ts: los 4 primeros son certificaciones; CANACAR y D&B son afiliación y registro
const certTexts = [
  {
    title: "C-TPAT",
    text: "Programa de seguridad en la cadena de suministro para el comercio con Estados Unidos.",
  },
  {
    title: "OEA (Operador Económico Autorizado)",
    text: "Certificación del SAT que facilita y agiliza las operaciones de comercio exterior.",
  },
  {
    title: "ISO 9001:2015",
    text: "Sistema de gestión de la calidad certificado.",
  },
  {
    title: "Transporte Limpio",
    text: "Programa de SEMARNAT para la reducción de emisiones en el autotransporte.",
  },
];

export default function Nosotros() {
  const certs = certifications.slice(0, 4);
  const affiliations = certifications.slice(4);
  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        crumb="Nosotros"
        h1="MM Carga: más de 30 años en transporte de carga y logística en México"
        subtitle="Somos una empresa mexicana de transporte y almacenamiento con flota, almacenes y bases de operación propias."
        secondary={{
          href: "/transporte-de-carga/",
          label: "Conoce nuestros servicios",
        }}
        image={{
          src: "/images/nosotros/flota-de-tractocamiones-mm-carga-mexico.webp",
          alt: "Flota propia de tractocamiones de MM Carga, empresa de transporte de carga en México",
        }}
      />

      {/* Bloque 2 · Quiénes somos */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionTitle
            kicker="Quiénes somos"
            title="Empresa de transporte de carga pesada con infraestructura propia"
          />
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="flex flex-col gap-6 text-body text-muted lg:pt-9"
          >
            <p>
              MM Carga S.A. de C.V., también conocida como Transportes MM, es
              una empresa mexicana especializada en el transporte terrestre y el
              almacenamiento de carga para la industria pesada y el comercio
              exterior.
            </p>
            <p>
              Operamos desde nuestra oficina en Pesquería, Nuevo León, y seis
              bases ubicadas en puertos, la frontera norte y el Bajío. Contamos
              con más de 200 unidades, más de 100 cajas secas de 53 pies y
              200,000 m² de almacenamiento, lo que nos permite responder a
              operaciones de gran volumen sin depender de terceros.
            </p>
          </div>
        </Container>
      </section>

      {/* Bloque 3 · Misión, visión y valores */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionTitle kicker="Identidad" title="Misión, visión y valores" />
          <ul className="grid gap-5.5 md:grid-cols-3">
            {identity.map((it, i) => (
              <li
                key={it.title}
                data-reveal
                style={{ "--d": i } as CSSProperties}
                className="flex flex-col gap-3 rounded-card border border-navy-800/8 bg-white p-8"
              >
                <h3 className="text-[22px] font-bold text-navy-800">
                  {it.title}
                </h3>
                <p className="text-body text-muted">{it.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Bloque 4 · Cifras */}
      <section className="pt-20 md:pt-28">
        <Container>
          <SectionTitle
            kicker="Capacidad operativa"
            title="MM Carga en cifras"
          />
        </Container>
      </section>
      <Figures items={figures} label="MM Carga en cifras" />

      {/* Bloque 5 · Certificaciones */}
      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionTitle
            kicker="Calidad y seguridad"
            title="Certificaciones y estándares de operación"
            intro="Nuestras certificaciones avalan procesos auditados de seguridad, calidad y cuidado ambiental en cada operación."
          />
          <ul className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-4">
            {certs.map((c, i) => (
              <li
                key={c.file}
                data-reveal
                style={{ "--d": i } as CSSProperties}
                className="flex flex-col gap-4 rounded-card border border-navy-800/8 bg-white p-7"
              >
                <Image
                  src={`/images/certificaciones/${c.file}`}
                  alt={c.alt}
                  width={c.width}
                  height={c.height}
                  className="h-16 w-auto self-start"
                />
                <h3 className="text-[19px] font-bold text-navy-800">
                  {certTexts[i].title}
                </h3>
                <p className="text-small text-muted">{certTexts[i].text}</p>
              </li>
            ))}
          </ul>
          <div
            data-reveal
            className="flex flex-col gap-5 border-t border-navy-800/10 pt-8 sm:flex-row sm:items-center sm:gap-10"
          >
            <h3 className="text-[15px] font-bold text-navy-800">
              Afiliaciones y registros
            </h3>
            <ul className="flex flex-wrap items-center gap-8">
              {affiliations.map((c) => (
                <li key={c.file}>
                  <Image
                    src={`/images/certificaciones/${c.file}`}
                    alt={c.alt}
                    width={c.width}
                    height={c.height}
                    className={`w-auto opacity-80 ${c.width > 200 ? "h-7" : "h-14"}`}
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
            <SectionTitle kicker="Cobertura" title="Bases de operación" />
            <p
              data-reveal
              style={{ "--d": 1 } as CSSProperties}
              className="text-body text-muted"
            >
              Operamos desde seis bases propias en Monterrey, Nuevo Laredo,
              Altamira, Silao, Manzanillo y Coatzacoalcos, ubicadas en los
              principales puertos, la frontera norte y el Bajío.
            </p>
            <div className="pt-2">
              <TextLink href="/cobertura/">Conoce nuestra cobertura</TextLink>
            </div>
          </div>
          <MexicoMap />
        </Container>
      </section>

      {/* Bloque 7 · CTA */}
      <CtaBand
        kicker="Cotización"
        title="Un socio logístico con experiencia en la industria"
        text="Nuestro equipo está listo para analizar tus necesidades de transporte y almacenamiento y presentarte una propuesta."
      />
    </>
  );
}
