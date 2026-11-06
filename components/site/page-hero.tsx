import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Photo } from "@/components/site/photo";
import { Container } from "@/components/site/sections";
import { Button } from "@/components/ui/button";

type Crumb = { href: string; label: string };

export type HeroFact = { icon: ReactNode; label: string; value: string };

type Props = {
  /** Migas intermedias entre Inicio y la página actual */
  parents?: Crumb[];
  crumb: string;
  h1: string;
  subtitle: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  /** Sin src muestra el relleno "Foto pendiente"; sin image el hero va a una columna */
  image?: { src?: string; alt: string; label?: string };
  /** Etiqueta sobre el H1 (páginas de servicio: bases principales) */
  badge?: string;
  /** Datos clave en una barra blanca que monta el borde inferior del hero (páginas de servicio) */
  facts?: HeroFact[];
};

// Hero azul de las páginas internas: miga, H1, subtítulo, botones y foto a la derecha
export function PageHero({
  parents = [],
  crumb,
  h1,
  subtitle,
  primary = { href: "/contacto/", label: "Solicita una cotización" },
  secondary,
  image,
  badge,
  facts,
}: Props) {
  return (
    <>
      <section
        data-hero="dark"
        className="relative isolate -mt-18 overflow-hidden bg-(image:--gradient-hero) pt-18 text-white"
      >
        {/* Trama de puntos y brillo para dar profundidad al fondo azul */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(rgb(255_255_255/.9)_1px,transparent_1.4px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_80%_40%,black,transparent_70%)]"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 right-[-12%] -z-10 size-[560px] rounded-full bg-brand-500/30 blur-[130px]"
          aria-hidden="true"
        />
        {facts && (
          /* Ruta punteada decorativa con un punto que la recorre */
          <svg
            viewBox="0 0 1440 560"
            preserveAspectRatio="none"
            className="hero-route absolute inset-0 -z-10 size-full max-lg:hidden"
            aria-hidden="true"
          >
            <path
              id="hero-route-path"
              d="M-40 470 C 260 420, 420 520, 640 430 S 1020 250, 1200 300 S 1420 170, 1500 120"
              fill="none"
              stroke="rgb(255 255 255 / .16)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />
            <circle r="4" fill="var(--color-brand-400)">
              <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                <mpath href="#hero-route-path" />
              </animateMotion>
            </circle>
          </svg>
        )}
        {facts && image && (
          /* Servicios: foto a sangre en la mitad derecha con corte diagonal */
          <div className="hero-photo absolute inset-y-0 right-0 -z-10 hidden w-[50%] [clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)] lg:block">
            <Photo
              src={image.src}
              alt={image.alt}
              label={image.label}
              tone="dark"
              sizes="50vw"
              className="size-full"
              priority
            />
            <div
              className="absolute inset-0 bg-linear-to-r from-navy-900/55 via-navy-900/10 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-navy-950/50 to-transparent"
              aria-hidden="true"
            />
            {/* Sombra superior para que el menú se lea sobre la foto */}
            <div
              className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-navy-950/70 to-transparent"
              aria-hidden="true"
            />
            <span className="absolute top-32 left-[22%] flex items-center gap-2.5 rounded-full bg-white/92 py-2 pr-4 pl-3 text-sm font-semibold text-navy-800 shadow-tag backdrop-blur">
              <span className="relative grid size-2.5 place-items-center">
                <span className="absolute size-2.5 animate-pulse-ring rounded-full bg-success" />
                <span className="size-2 rounded-full bg-success" />
              </span>
              Monitoreo 24/7
            </span>
          </div>
        )}
        <Container
          className={`grid items-center gap-12 pt-10 lg:pt-14 ${facts ? "pb-24 lg:pb-32" : "pb-16 lg:pb-20"} ${image ? "lg:grid-cols-[1fr_1.05fr] lg:gap-16" : ""}`}
        >
          <div className="hero-in flex flex-col items-start gap-6">
            <nav
              aria-label="Ruta de navegación"
              className="text-sm text-white/65"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Inicio
                  </Link>
                </li>
                {parents.map((p) => (
                  <li key={p.href} className="flex items-center gap-2">
                    <span aria-hidden="true">/</span>
                    <Link href={p.href} className="hover:text-white">
                      {p.label}
                    </Link>
                  </li>
                ))}
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-semibold text-white">
                  {crumb}
                </li>
              </ol>
            </nav>
            {badge && (
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/18 bg-white/8 py-1.5 pr-4 pl-2 text-[13px] font-semibold text-white/90 backdrop-blur">
                <span className="grid size-6 place-items-center rounded-full bg-primary">
                  <svg
                    viewBox="0 0 20 20"
                    className="size-3.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 18s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle cx="10" cy="8" r="2.2" fill="currentColor" />
                  </svg>
                </span>
                {badge}
              </span>
            )}
            <h1 className="max-w-3xl text-[clamp(36px,4.2vw,56px)] leading-[1.08] font-heavy">
              {h1}
            </h1>
            <p className="max-w-xl text-lead text-white/78">{subtitle}</p>
            <div className="flex flex-wrap gap-4 pt-1">
              <Button href={primary.href}>{primary.label}</Button>
              {secondary && (
                <Button href={secondary.href} variant="outline">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
          {image && (
            <div
              className={`hero-photo relative ${facts ? "-mx-5 [clip-path:polygon(0_12%,100%_0,100%_100%,0_100%)] lg:hidden" : ""}`}
            >
              {/* Marco desfasado detrás de la foto */}
              <span
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-dialog border border-white/18 max-lg:hidden"
                aria-hidden="true"
              />
              <Photo
                src={image.src}
                alt={image.alt}
                label={image.label}
                tone="dark"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={`aspect-[4/3] ${facts ? "" : "rounded-dialog shadow-dialog"}`}
                priority
              />
              {facts && (
                <span className="absolute top-12 left-5 flex items-center gap-2.5 rounded-full bg-white/92 py-2 pr-4 pl-3 text-sm font-semibold text-navy-800 shadow-tag backdrop-blur">
                  <span className="relative grid size-2.5 place-items-center">
                    <span className="absolute size-2.5 animate-pulse-ring rounded-full bg-success" />
                    <span className="size-2 rounded-full bg-success" />
                  </span>
                  Monitoreo 24/7
                </span>
              )}
            </div>
          )}
        </Container>
      </section>
      {facts && (
        <Container className="relative z-10 -mt-14 lg:-mt-16">
          <dl
            className={`grid overflow-hidden rounded-card bg-white shadow-dialog ring-1 ring-navy-800/6 sm:grid-cols-2 ${facts.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
          >
            {facts.map((f, i) => (
              <div
                key={f.label}
                data-reveal="fade"
                style={{ "--d": i } as CSSProperties}
                className="flex items-center gap-4 border-navy-800/8 p-5 max-sm:border-t max-sm:first:border-t-0 sm:max-lg:[&:nth-child(n+3)]:border-t sm:max-lg:even:border-l lg:p-6 lg:not-first:border-l"
              >
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-btn bg-brand-50 text-primary"
                  aria-hidden="true"
                >
                  {f.icon}
                </span>
                <span className="flex flex-col gap-0.5">
                  <dt className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                    {f.label}
                  </dt>
                  <dd className="text-[15px] leading-snug font-bold text-navy-800">
                    {f.value}
                  </dd>
                </span>
              </div>
            ))}
          </dl>
        </Container>
      )}
    </>
  );
}
