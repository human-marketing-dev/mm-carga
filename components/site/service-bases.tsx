import type { CSSProperties } from "react";
import { Container, TextLink } from "@/components/site/sections";
import { getSettings } from "@/lib/content";

type Props = {
  title: string;
  text: string;
  /** Bases principales del servicio; sin valor, se muestran las 6 por igual */
  highlight?: string[];
  /** true: solo operan esas bases (almacenamiento) y no se listan las demás */
  exclusive?: boolean;
};

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4.5" aria-hidden="true">
      <path
        d="M10 18s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="10" cy="8" r="2.2" fill="currentColor" />
    </svg>
  );
}

function OutIcon() {
  return (
    <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden="true">
      <path
        d="M4 2h6v6M10 2 3 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

// Cobertura de las páginas de servicio: en lugar del mapa (que ya está en el Home),
// tarjetas con las bases principales del servicio y, debajo, el resto de la red.
export async function ServiceBases({
  title,
  text,
  highlight,
  exclusive,
}: Props) {
  const { bases } = await getSettings();
  // Respeta el orden en que la página lista sus bases principales
  const main = highlight
    ? highlight.flatMap((c) => bases.filter((b) => b.city === c))
    : bases;
  const rest =
    highlight && !exclusive
      ? bases.filter((b) => !highlight.includes(b.city))
      : [];
  const label = highlight
    ? exclusive
      ? "Bases con almacén propio"
      : main.length === 1
        ? "Base principal del servicio"
        : "Bases principales del servicio"
    : "Opera desde nuestras seis bases";
  const big = main.length <= 3;
  const single = main.length === 1;

  return (
    <section
      id="cobertura"
      className="relative isolate scroll-mt-24 overflow-hidden bg-navy-900 bg-(image:--gradient-hero) py-20 text-white md:py-28"
    >
      {/* Trama de puntos y brillo de fondo */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.14] [background-image:radial-gradient(rgb(255_255_255/.9)_1px,transparent_1.4px)] [background-size:22px_22px] [mask-image:linear-gradient(110deg,transparent_25%,black_75%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 right-[-10%] -z-10 size-[620px] rounded-full bg-brand-500/25 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="grid gap-12 lg:grid-cols-[1fr_1.55fr] lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          <div data-reveal className="flex flex-col gap-4">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-brand-400 uppercase">
              <span
                className="h-0.5 w-6 rounded-full bg-brand-400"
                aria-hidden="true"
              />
              Cobertura
            </p>
            <h2 className="text-[30px] leading-[1.15] font-semibold md:text-[40px]">
              {title}
            </h2>
          </div>
          <p
            data-reveal
            style={{ "--d": 1 } as CSSProperties}
            className="text-body text-white/75"
          >
            {text}
          </p>
          <div
            data-reveal
            style={{ "--d": 2 } as CSSProperties}
            className="flex flex-col gap-3 pt-2 [&_a]:text-white [&_a_span]:decoration-white/35 [&_a:hover_span]:decoration-white"
          >
            <TextLink href="/cobertura/">Conoce nuestra cobertura</TextLink>
            <TextLink href="/transporte-de-carga-en-monterrey/">
              Transporte de carga en Monterrey
            </TextLink>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p
              data-reveal
              className="flex items-center gap-3 text-sm font-semibold text-white/85"
            >
              <span className="h-px w-8 bg-brand-400" aria-hidden="true" />
              {label}
            </p>
            <ul
              className={`grid gap-4 ${
                big
                  ? main.length === 1
                    ? ""
                    : main.length === 2
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-3"
                  : "sm:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              {main.map((b, i) => (
                <li
                  key={b.city}
                  data-reveal
                  style={{ "--d": i } as CSSProperties}
                >
                  <a
                    href={b.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver la base de ${b.city} en Google Maps`}
                    className={`group flex h-full flex-col rounded-card border border-white/12 bg-white/[0.06] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1] ${
                      big ? "gap-5 p-6 md:p-7" : "gap-4 p-5"
                    } ${single ? "sm:flex-row sm:items-center sm:gap-7" : ""}`}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="grid size-10 place-items-center rounded-btn bg-primary text-white shadow-btn-primary">
                        <PinIcon />
                      </span>
                      {!single && (
                        <span className="text-xs font-semibold tracking-[0.12em] text-white/50 uppercase tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                    </span>
                    <span className="flex flex-col gap-1">
                      <span
                        className={`leading-tight font-bold ${big ? "text-[26px]" : "text-[21px]"}`}
                      >
                        {b.city}
                      </span>
                      <span className="text-sm text-white/60">
                        {b.region} · {b.state}
                      </span>
                    </span>
                    <span
                      className={`mt-auto flex flex-col gap-3 border-t border-white/10 pt-4 ${single ? "sm:mt-0 sm:ml-auto sm:max-w-64 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-7" : ""}`}
                    >
                      <span className="text-[13px] leading-snug text-white/65">
                        {b.address}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-400 transition group-hover:text-white">
                        Cómo llegar <OutIcon />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {rest.length > 0 && (
            <div
              data-reveal
              style={{ "--d": 2 } as CSSProperties}
              className="flex flex-col gap-4 rounded-card border border-white/10 p-5 md:flex-row md:items-center md:gap-6 md:p-6"
            >
              <p className="shrink-0 text-sm font-semibold text-white/85">
                También operamos desde
              </p>
              <ul className="flex flex-wrap gap-2">
                {rest.map((b) => (
                  <li key={b.city}>
                    <a
                      href={b.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver la base de ${b.city} en Google Maps`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1.5 text-[13px] font-semibold text-white/85 transition hover:border-white/40 hover:text-white"
                    >
                      <span
                        className="size-1.5 rounded-full bg-brand-400"
                        aria-hidden="true"
                      />
                      {b.city}
                      <OutIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
