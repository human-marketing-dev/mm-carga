import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/site/photo";
import { BaseList, Container, CtaBand, Faq, Points, SectionTitle, TextLink } from "@/components/site/sections";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Button } from "@/components/ui/button";
import { otherServiceSummary, services } from "@/lib/site";

const SLUG = "/caja-seca-53-pies/";

export const metadata: Metadata = {
  title: "Transporte en caja seca de 53 pies | MM Carga",
  description:
    "Transporte en caja seca de 53 pies con más de 100 cajas propias. Rutas nacionales y de exportación vía Laredo, Drop & Hook y monitoreo 24/7.",
  alternates: { canonical: SLUG },
};

const audience = [
  "Empresas manufactureras y maquiladoras con operaciones de exportación",
  "Fabricantes y distribuidores de producto terminado y refacciones",
  "Industrias que trasladan insumos empacados o en tarimas",
  "Empresas que requieren cajas disponibles en sus instalaciones (Drop & Hook)",
];

const scope = [
  { title: "Rutas nacionales", text: "Traslados punto a punto hacia distintos destinos del país." },
  { title: "Exportación vía Laredo", text: "Servicio cross-border con cruce por Nuevo Laredo." },
  {
    title: "Drop & Hook",
    text: "Colocación de cajas en las instalaciones del cliente para su carga programada, con recolección al término del proceso.",
  },
  { title: "Arrastres e intercambios", text: "Movimientos de cajas entre patios, plantas y recintos aduanales." },
  { title: "Monitoreo 24/7", text: "Rastreo GPS, cámaras y supervisión permanente durante todo el trayecto." },
];

const specs = [
  ["Largo exterior", "53 pies (16.15 m)"],
  ["Medidas interiores aprox.", "15.9 m de largo × 2.5 m de ancho × 2.7 m de alto"],
  ["Volumen aprox.", "100 a 110 m³"],
  ["Tarimas estándar", "26 a 30"],
  ["Flota MM Carga", "Más de 100 cajas de 53 pies"],
];

const reasons = [
  { title: "Disponibilidad de equipo", text: "Más de 100 cajas propias para atender la demanda de cada operación." },
  {
    title: "Exportación certificada",
    text: "Certificaciones C-TPAT y OEA que agilizan el cruce de mercancías a Estados Unidos.",
  },
  { title: "Presencia en la frontera", text: "Base propia en Nuevo Laredo para la coordinación del cruce." },
  { title: "Visibilidad permanente", text: "Monitoreo 24/7 de cada unidad en ruta." },
];

const faq = [
  {
    q: "¿Cuál es la capacidad de una caja seca de 53 pies?",
    a: "Como referencia, una caja de 53 pies tiene capacidad para 26 a 30 tarimas estándar y alrededor de 100 m³ de volumen. La capacidad final se confirma según el tipo de carga.",
  },
  {
    q: "¿Realizan envíos a Estados Unidos?",
    a: "Sí. Contamos con servicio de exportación vía Laredo y certificaciones C-TPAT y OEA.",
  },
  {
    q: "¿En qué consiste el servicio Drop & Hook?",
    a: "Consiste en dejar una caja en las instalaciones del cliente para que realice la carga en sus propios tiempos. Al concluir, recolectamos la caja y, si se requiere, la reemplazamos por otra.",
  },
  {
    q: "¿Cómo se da seguimiento a la carga?",
    a: "Todas nuestras unidades cuentan con GPS y cámaras, supervisadas por nuestro centro de monitoreo las 24 horas.",
  },
];

export default function CajaSeca() {
  const others = services.filter((s) => s.slug !== SLUG);
  return (
    <>
      {/* Bloque 1 · Hero */}
      <section className="border-b border-navy-800/8">
        <Container className="grid items-center gap-12 pt-10 pb-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:pt-14 lg:pb-20">
          <div className="flex flex-col items-start gap-6">
            <nav aria-label="Ruta de navegación" className="text-sm text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-primary">Inicio</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/transporte-de-carga/" className="hover:text-primary">Transporte de carga</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-semibold text-navy-800">Caja seca de 53 pies</li>
              </ol>
            </nav>
            <h1 className="text-[clamp(36px,4.2vw,56px)] leading-[1.08] font-heavy text-navy-ink">
              Transporte en caja seca de 53 pies
            </h1>
            <p className="max-w-xl text-lead text-muted">
              Traslado seguro y monitoreado de carga seca en rutas nacionales y de exportación, con más de 100 cajas
              propias.
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <Button href="/contacto/">Solicita una cotización</Button>
              <Button href="#especificaciones" variant="secondary">
                Ver medidas y capacidad
              </Button>
            </div>
          </div>
          <Photo
            alt="Caja seca de 53 pies de MM Carga en carretera"
            label="caja seca de 53 pies en carretera"
            className="aspect-[4/3] rounded-dialog"
            priority
          />
        </Container>
      </section>

      {/* Bloque 2 · Sobre el servicio */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionTitle title="Caja seca de 53 pies para carga nacional y de exportación" />
            <p className="text-body text-ink">
              La caja seca de 53 pies es un remolque cerrado que protege la mercancía de la intemperie, el polvo y el
              riesgo de robo durante el trayecto. Es el equipo de mayor uso para carga seca paletizada o empacada, ya
              que combina gran capacidad volumétrica con altos niveles de seguridad.
            </p>
            <p className="text-body text-muted">
              MM Carga cuenta con más de 100 cajas de 53 pies propias, que operan en rutas nacionales y en servicio de
              exportación a Estados Unidos vía Laredo. Todas las unidades cuentan con rastreo GPS y cámaras,
              supervisadas por nuestro centro de monitoreo las 24 horas.
            </p>
          </div>
          <aside className="self-start rounded-card bg-surface p-8">
            <p className="text-sm font-bold text-navy-800">Este servicio está dirigido a:</p>
            <ul className="mt-5 flex flex-col gap-4">
              {audience.map((a) => (
                <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                  <svg viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true">
                    <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  {a}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      {/* Bloque 3 · Alcance */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionTitle title="Alcance del servicio de transporte en caja seca" />
          <ul className="grid gap-px overflow-hidden rounded-card border border-navy-800/10 bg-navy-800/10 md:grid-cols-2 lg:grid-cols-3">
            {scope.map((s) => (
              <li key={s.title} className="flex flex-col gap-3 bg-white p-7">
                <h3 className="text-[19px] font-bold text-navy-800">{s.title}</h3>
                <p className="text-small text-muted">{s.text}</p>
              </li>
            ))}
            <li className="flex flex-col justify-between gap-6 bg-navy-800 p-7 text-white">
              <p className="text-[19px] font-bold">¿Tu operación requiere otro esquema?</p>
              <Link
                href="/contacto/"
                className="inline-flex items-center gap-2 self-start text-sm font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                Cuéntanos tu operación <ArrowIcon className="size-3.5" />
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* Bloque 4 · Especificaciones */}
      <section id="especificaciones" className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <SectionTitle title="Caja seca de 53 pies: medidas y capacidad" />
            <p className="text-small text-muted">
              Valores de referencia. La capacidad final se confirma según el tipo de carga.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left">
              <caption className="sr-only">Medidas y capacidad de la caja seca de 53 pies</caption>
              <tbody>
                {specs.map(([k, v]) => (
                  <tr key={k} className="border-b border-navy-800/10 first:border-t">
                    <th scope="row" className="w-2/5 py-5 pr-6 text-[15px] font-semibold text-muted">
                      {k}
                    </th>
                    <td className="py-5 text-[17px] font-semibold text-navy-800 tabular-nums">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Bloque 5 · Cobertura */}
      <section className="bg-surface py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle title="Cobertura del servicio de caja seca" />
            <p className="text-body text-muted">
              Operamos el servicio de caja seca desde nuestras bases en Monterrey, Nuevo Laredo y Silao, con conexión
              entre la industria del noreste, el Bajío y la frontera con Estados Unidos.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <TextLink href="/cobertura/">Conoce nuestra cobertura</TextLink>
              <TextLink href="/transporte-de-carga-en-monterrey/">Transporte de carga en Monterrey</TextLink>
            </div>
          </div>
          <BaseList highlight={["Monterrey", "Nuevo Laredo", "Silao"]} />
        </Container>
      </section>

      {/* Bloque 6 · Por qué */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionTitle title="¿Por qué elegir a MM Carga para el transporte en caja seca?" />
          <Points items={reasons} />
        </Container>
      </section>

      {/* Bloque 7 · FAQ */}
      <div className="bg-surface">
        <Faq title="Preguntas frecuentes sobre la caja seca de 53 pies" items={faq} />
      </div>

      {/* Bloque 8 · Otros servicios */}
      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-10">
          <SectionTitle title="Otros servicios de MM Carga" />
          <ul className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.slug}
                  className="group flex h-full flex-col gap-3 rounded-card border border-brand-800/8 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-800/22 hover:shadow-card-hover"
                >
                  <h3 className="text-[19px] leading-snug font-extrabold text-brand-800">{s.name}</h3>
                  <p className="flex-1 text-small text-muted">{otherServiceSummary[s.slug]}</p>
                  <span className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-primary">
                    Ver servicio <ArrowIcon className="size-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Bloque 9 · CTA */}
      <CtaBand
        title="Solicita tu cotización de transporte en caja seca de 53 pies"
        text="Compártenos el origen, el destino y el tipo de carga, y te enviaremos una propuesta con la disponibilidad de equipo."
        whatsapp={false}
      />
    </>
  );
}
