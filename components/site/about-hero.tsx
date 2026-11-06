import Image from "next/image";
import { HeroCrumbs } from "@/components/site/page-hero";
import { Container } from "@/components/site/sections";
import { Button } from "@/components/ui/button";

type Props = {
  h1: string;
  subtitle: string;
  secondary: { href: string; label: string };
  image: { src: string; alt: string };
  /** Sellos que se listan bajo los botones (certificaciones) */
  seals: string[];
};

// Hero de Nosotros: texto centrado con un "20" de fondo y foto panorámica que cruza
// del azul al blanco. Distinto al hero de servicios (foto a la derecha + barra de datos).
export function AboutHero({ h1, subtitle, secondary, image, seals }: Props) {
  return (
    <section
      data-hero="dark"
      className="relative isolate -mt-18 overflow-hidden bg-(image:--gradient-hero) pt-18 text-white"
    >
      {/* Trama de puntos y brillo centrado */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(rgb(255_255_255/.9)_1px,transparent_1.4px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_50%_30%,black,transparent_65%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[18%] left-1/2 -z-10 size-[620px] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[140px]"
        aria-hidden="true"
      />
      {/* "20" de contorno detrás del título */}
      <span
        className="pointer-events-none absolute top-14 left-1/2 -z-10 -translate-x-1/2 text-[clamp(220px,32vw,480px)] leading-none font-heavy tracking-tighter text-transparent select-none [-webkit-text-stroke:1.5px_rgb(255_255_255/.11)]"
        aria-hidden="true"
      >
        20
      </span>
      {/* Franja blanca inferior: la foto queda montada entre el azul y el blanco */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-[22%] bg-white md:h-[30%]"
        aria-hidden="true"
      />

      <Container className="flex flex-col items-center gap-12 pt-10 lg:gap-16 lg:pt-14">
        <div className="hero-in flex max-w-4xl flex-col items-center gap-6 text-center">
          <HeroCrumbs crumb="Nosotros" />
          <h1 className="text-[clamp(36px,4.6vw,60px)] leading-[1.06] font-heavy text-balance">
            {h1}
          </h1>
          <p className="max-w-2xl text-lead text-white/78">{subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 pt-1">
            <Button href="/contacto/">Solicita una cotización</Button>
            <Button href={secondary.href} variant="outline">
              {secondary.label}
            </Button>
          </div>
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-2 pt-2 text-xs font-semibold tracking-[0.12em] text-white/60 uppercase">
            {seals.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                {i > 0 && (
                  <span
                    className="size-1 rounded-full bg-brand-400"
                    aria-hidden="true"
                  />
                )}
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-photo relative w-full">
          {/* Sombra difusa bajo la foto */}
          <span
            className="absolute inset-x-16 -bottom-8 h-16 rounded-[50%] bg-navy-950/45 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-dialog shadow-[0_45px_90px_-30px_rgba(0,4,30,0.7)] ring-1 ring-navy-800/10 sm:aspect-[16/8] lg:aspect-[21/8]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="object-cover object-[50%_55%]"
            />
          </div>
          {/* Sello de 20 años sobre la esquina de la foto */}
          <div className="absolute -top-8 left-6 flex items-center gap-4 rounded-card bg-primary px-5 py-4 text-white shadow-dialog sm:left-10 lg:-top-10 lg:px-6 lg:py-5">
            <span className="text-[44px] leading-none font-heavy lg:text-[56px]">
              20
            </span>
            <span className="text-sm leading-tight font-semibold text-white/90">
              años en
              <br />
              transporte de carga
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
