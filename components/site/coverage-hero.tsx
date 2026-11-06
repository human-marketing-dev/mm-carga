import Image from "next/image";
import { HeroCrumbs } from "@/components/site/page-hero";
import { Container } from "@/components/site/sections";
import { Button } from "@/components/ui/button";

type Base = {
  city: string;
  state: string;
  region: string;
  anchor: string;
  warehouse: boolean;
};

type Props = {
  h1: string;
  subtitle: string;
  image: { src: string; alt: string };
  bases: Base[];
};

// Hero de Cobertura: foto a sangre en la mitad derecha y, montado sobre la unión,
// un tablero con las seis bases (cada fila lleva a su ficha). Distinto al hero de servicios.
export function CoverageHero({ h1, subtitle, image, bases }: Props) {
  return (
    <section
      data-hero="dark"
      className="relative isolate -mt-18 overflow-hidden bg-(image:--gradient-hero) pt-18 text-white"
    >
      <div
        className="absolute inset-0 -z-20 opacity-[0.12] [background-image:radial-gradient(rgb(255_255_255/.9)_1px,transparent_1.4px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_20%_50%,black,transparent_65%)]"
        aria-hidden="true"
      />
      {/* Foto a sangre en la mitad derecha (escritorio) */}
      <div className="hero-photo absolute inset-y-0 right-0 -z-10 w-[42%] max-lg:hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="42vw"
          className="object-cover"
        />
        {/* Velo azul y borde de unión para integrar la foto al fondo */}
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgb(4_29_78/.85)_0%,rgb(4_29_78/.25)_22%,rgb(4_29_78/.1)_60%,rgb(3_22_61/.35)_100%)]"
          aria-hidden="true"
        />
        {/* Oscurece la parte alta para que el menú se lea sobre la foto */}
        <div
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy-950/70 to-transparent"
          aria-hidden="true"
        />
      </div>

      <Container className="grid items-center gap-10 pt-10 pb-16 lg:min-h-[560px] lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-0 lg:pt-14 lg:pb-20">
        <div className="hero-in flex flex-col items-start gap-6 lg:pr-24">
          <HeroCrumbs crumb="Cobertura" />
          <h1 className="max-w-2xl text-[clamp(36px,4.2vw,56px)] leading-[1.08] font-heavy">
            {h1}
          </h1>
          <p className="max-w-xl text-lead text-white/78">{subtitle}</p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Button href="/contacto/">Solicita una cotización</Button>
            <Button href="#bases" variant="outline">
              Ver bases de operación
            </Button>
          </div>
        </div>

        {/* Foto en móvil y tableta */}
        <div className="hero-photo relative aspect-[16/9] overflow-hidden rounded-card ring-1 ring-white/10 lg:hidden">
          <Image
            src={image.src}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Tablero de bases */}
        <div className="hero-in lg:-ml-24">
          <div className="rounded-card bg-navy-950/70 p-6 shadow-[0_40px_80px_-30px_rgba(0,4,30,0.9)] ring-1 ring-white/12 backdrop-blur-md lg:p-7">
            <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
              <p className="text-xs font-semibold tracking-[0.14em] text-white/60 uppercase">
                Bases de operación
              </p>
              <p className="text-[32px] leading-none font-heavy">
                {bases.length}
              </p>
            </div>
            <ul className="divide-y divide-white/8">
              {bases.map((b, i) => (
                <li key={b.city}>
                  <a
                    href={b.anchor}
                    className="group flex items-center gap-4 py-3.5 transition-colors hover:text-white"
                  >
                    <span className="relative grid size-3 shrink-0 place-items-center">
                      <span
                        className="absolute inline-flex size-3 animate-ping rounded-full bg-brand-400/50 motion-reduce:hidden"
                        style={{ animationDuration: "2.4s", animationDelay: `${i * 0.4}s` }}
                        aria-hidden="true"
                      />
                      <span className="relative size-2 rounded-full bg-brand-400" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="font-bold">{b.city}</span>
                      <span className="text-xs text-white/55">
                        {b.state} · {b.region}
                      </span>
                    </span>
                    {b.warehouse && (
                      <span className="rounded-tag bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-white/80">
                        Almacén
                      </span>
                    )}
                    <span
                      className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
