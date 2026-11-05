import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  IconFleet,
  IconIntegral,
  IconLayers,
  IconMonitoring,
} from "@/components/site/icons";
import { HeroSlider, type HeroSlide } from "@/components/site/hero-slider";
import { MexicoMap } from "@/components/site/mexico-map";
import { Photo } from "@/components/site/photo";
import {
  Certifications,
  Container,
  CtaBand,
  Faq,
  Figures,
  Points,
  SectionTitle,
  TextLink,
} from "@/components/site/sections";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Transporte de carga y almacenaje de mercancías en México | MM Carga",
  description:
    "20 años en el transporte de carga y almacenaje de mercancías, con flota, almacenes y bases propias en México. Solicita tu cotización.",
  alternates: { canonical: "/" },
};

// Hero: fotos de los distintos servicios para que no se lea solo como flota de camiones.
// ⚠️ Contenedores y carga suelta son fotos de 630 px: reemplazar por versiones de 2000 px o más.
const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero/hero-transporte-de-carga-mexico.webp",
    alt: "Flota de tractocamiones de MM Carga, empresa de transporte de carga y almacenaje de mercancías en México",
    label: "Transporte de carga",
    position: "60% 50%",
  },
  {
    src: "/images/servicios/almacenamiento-de-mercancias-mm-carga.webp",
    alt: "Almacén de MM Carga con mercancía paletizada",
    label: "Almacenaje de mercancías",
    position: "50% 60%",
  },
  {
    src: "/images/servicios/transporte-contenedores-maritimos-mm-carga.webp",
    alt: "Tractocamión de MM Carga transportando un contenedor marítimo",
    label: "Contenedores marítimos",
    position: "70% 50%",
  },
  {
    src: "/images/servicios/transporte-carga-suelta-plataforma-mm-carga.webp",
    alt: "Plataforma de MM Carga transportando rollos de acero",
    label: "Carga suelta en plataforma",
    position: "75% 50%",
  },
];

const figures = [
  { value: "20", label: "años de experiencia" },
  { value: "+200", label: "unidades full" },
  { value: "+100", label: "cajas secas de 53 pies" },
  { value: "200,000", unit: "m²", label: "de almacenamiento" },
];

const reasons = [
  {
    title: "Solución logística integral",
    icon: <IconIntegral />,
    text: "Centralizamos los servicios que tu mercancía necesita y coordinamos cada etapa de la operación, desde el origen hasta el destino, con distintas modalidades y equipos dentro de una misma empresa.",
  },
  {
    title: "Capacidad para grandes operaciones",
    icon: <IconFleet />,
    text: "Más de 200 unidades para operación full, más de 100 cajas secas de 53 pies, 100,000 m² de almacén techado y 100,000 m² de almacenamiento al aire libre.",
  },
  {
    title: "Control, tecnología y servicio 24/7",
    icon: <IconMonitoring />,
    text: "Unidades propias de modelos recientes con GPS y cámaras, un centro de monitoreo que opera las 24 horas, operadores certificados e integraciones vía API.",
  },
  {
    title: "Todo lo que tu operación necesita, en un solo lugar",
    icon: <IconLayers />,
    text: "Integramos transporte, almacenamiento y servicios especializados con un solo proveedor, desde el origen hasta el destino.",
  },
];

const faq = [
  {
    q: "¿Qué tipos de carga transportan?",
    a: "Nuestro equipo principal son las plataformas en full, con las que transportamos contenedores marítimos, carga suelta, acero y maquinaria. Además, contamos con tolvas para materiales a granel y con cajas secas de 53 pies para carga seca.",
  },
  {
    q: "¿Cuentan con cobertura nacional?",
    a: "Sí. Ofrecemos cobertura nacional desde y hacia nuestras bases en Monterrey, Altamira, Manzanillo, Nuevo Laredo, Silao y Coatzacoalcos.",
  },
  {
    q: "¿Cómo se da seguimiento a la carga?",
    a: "Todas nuestras unidades cuentan con GPS y cámaras, y son supervisadas por nuestro centro de monitoreo las 24 horas.",
  },
  {
    q: "¿Ofrecen servicio de almacenamiento?",
    a: "Sí. Contamos con almacenes en Altamira, Manzanillo y Pesquería, con 100,000 m² techados y 100,000 m² al aire libre, y control de inventarios mediante sistema WMS.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización?",
    a: "Comunícate por WhatsApp o completa el formulario de contacto con el origen, el destino y el tipo de carga. Nuestro equipo te enviará una propuesta.",
  },
];

export default function Home() {
  return (
    <>
      {/* Bloque 1 · Hero */}
      <section
        data-hero="dark"
        className="relative isolate -mt-18 overflow-hidden bg-navy-950 pt-18 text-white"
      >
        {/* Fotos de fondo que rotan (transporte, almacén, contenedores, carga suelta) con overlay para legibilidad */}
        <HeroSlider slides={heroSlides} />
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
            <Badge dot={false}>20 AÑOS DE EXPERIENCIA</Badge>
            <h1 className="text-[clamp(36px,4.4vw,60px)] leading-[1.08] font-heavy">
              Transporte de carga y almacenaje de mercancías en México
            </h1>
            <p className="max-w-xl text-lead tracking-[.05px] text-white/80">
              Servicio integral para el manejo, almacenaje y transporte de tu
              mercancía, con flota, almacenes y bases propias y 20 años de
              experiencia.
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
      <Figures items={figures} label="MM Carga en cifras" />

      {/* Bloque 3 · Presentación */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <SectionTitle
            kicker="Quiénes somos"
            title="Empresa de transporte y almacenaje con infraestructura propia en México"
          />
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="flex flex-col gap-6 text-body text-muted lg:pt-9"
          >
            <p>
              MM Carga es una empresa mexicana dedicada al transporte terrestre
              de carga y al almacenaje de mercancías. Desde hace 20 años
              facilitamos las operaciones de nuestros clientes con un servicio
              integral para el manejo, almacenaje y transporte de su mercancía,
              respaldado por infraestructura propia: flota, cajas secas,
              almacenes y bases de operación.
            </p>
            <p>
              Nuestra principal fortaleza es el transporte en plataformas en
              full, con el que movemos acero, carga suelta y contenedores de
              importación y exportación. Además, operamos cajas secas de 53 pies
              y tolvas para materiales a granel. Nuestras unidades cuentan con
              rastreo GPS y cámaras, supervisadas por un centro de monitoreo que
              opera las 24 horas.
            </p>
          </div>
        </Container>
      </section>

      {/* Bloque 4 · Por qué MM Carga */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionTitle
            kicker="Por qué MM Carga"
            title="¿Por qué elegir a MM Carga para el transporte y almacenaje de tu mercancía?"
            intro="Nos encargamos de tu mercancía de principio a fin."
          />
          <Points items={reasons} />
          {/* Cierre destacado: frase del sitio actual, a petición del cliente */}
          <div
            data-reveal
            className="flex flex-col gap-3 rounded-card bg-(image:--gradient-hero) p-8 text-white md:flex-row md:items-center md:gap-10 md:p-10 lg:col-span-2"
          >
            <p className="shrink-0 text-[clamp(24px,2.4vw,32px)] leading-tight font-bold">
              Una sola operación. Todo bajo control.
            </p>
            <p className="text-body text-white/78">
              Integramos transporte, almacenamiento y coordinación logística
              para simplificar tus procesos de principio a fin.
            </p>
          </div>
        </Container>
      </section>

      {/* Bloque 5 · Servicios */}
      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              kicker="Servicios"
              title="Soluciones integrales de transporte de carga y almacenamiento"
              intro="Ofrecemos el equipo adecuado para cada tipo de carga, con monitoreo permanente y coordinación de origen a destino."
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
                    src={s.image}
                    alt={s.imageAlt}
                    className="aspect-[16/10]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-card-title font-extrabold text-brand-800">
                      {s.name}
                    </h3>
                    <p className="flex-1 text-small text-muted">{s.summary}</p>
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
                    Ver servicios de transporte de carga
                  </span>
                  <span className="text-small text-white/75">
                    Conoce el equipo, el alcance y la cobertura de cada
                    servicio.
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
            <SectionTitle
              kicker="Cobertura"
              title="Presencia en los principales puertos, la frontera norte y el Bajío"
            />
            <p
              data-reveal
              style={{ "--d": 1 } as CSSProperties}
              className="text-body text-muted"
            >
              Contamos con bases de operación propias en Altamira, Manzanillo,
              Coatzacoalcos, Nuevo Laredo, Silao y Monterrey, y ofrecemos
              cobertura nacional desde y hacia cada una de ellas. Esta red nos
              permite atender con oportunidad las operaciones portuarias del
              Golfo y del Pacífico, el comercio con Estados Unidos y el corredor
              industrial del centro del país.
            </p>
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
        title="Certificaciones y afiliaciones"
        intro="Nuestras operaciones cumplen con estándares nacionales e internacionales de seguridad, calidad y cuidado ambiental."
      />

      {/* Bloque 8 · FAQ */}
      <div className="bg-surface">
        <Faq
          title="Preguntas frecuentes sobre transporte de carga y almacenaje"
          items={faq}
        />
      </div>

      {/* Bloque 9 · CTA */}
      <CtaBand
        title="Soluciones de transporte y almacenaje a la medida de tu operación"
        text="Nuestro equipo está listo para analizar tus necesidades de transporte y almacenamiento y presentarte una propuesta."
      />
    </>
  );
}
