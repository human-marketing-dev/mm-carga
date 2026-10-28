import { BASE_POINTS, MX_PATH, MX_VIEWBOX } from "@/lib/mexico-map";
import { LocationTag } from "@/components/ui/location-tag";
import { bases } from "@/lib/site";

const [, , VW, VH] = MX_VIEWBOX.split(" ").map(Number);
const HQ = "Monterrey";
// Lado de la etiqueta para que no se encimen
const labelLeft = new Set(["Manzanillo", "Silao", "Monterrey"]);

// highlight: bases que operan el servicio; las demás se muestran en gris
export function MexicoMap({ highlight }: { highlight?: string[] }) {
  const hq = BASE_POINTS[HQ];
  const active = (city: string) => !highlight || highlight.includes(city);
  const linked = bases.filter((b) => active(b.city));
  return (
    <figure data-reveal className="mx-map relative">
      <div className="relative" style={{ aspectRatio: `${VW} / ${VH}` }}>
        <svg
          viewBox={MX_VIEWBOX}
          className="absolute inset-0 size-full"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="mx-dots"
              width="9"
              height="9"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.3" fill="#0a48a1" opacity="0.22" />
            </pattern>
          </defs>
          <path
            d={MX_PATH}
            fill="#eaf3ff"
            stroke="#0a48a1"
            strokeOpacity="0.28"
            strokeWidth="1.2"
          />
          <path d={MX_PATH} fill="url(#mx-dots)" />
          {bases
            .filter((b) => b.city !== HQ && active(b.city))
            .map((b, i) => {
              const [x, y] = BASE_POINTS[b.city];
              return (
                <line
                  key={b.city}
                  x1={hq[0]}
                  y1={hq[1]}
                  x2={x}
                  y2={y}
                  pathLength={1}
                  className="mx-route"
                  style={{ "--i": i } as React.CSSProperties}
                />
              );
            })}
        </svg>

        <ul>
          {bases.map((b, i) => {
            const [x, y] = BASE_POINTS[b.city];
            const left = labelLeft.has(b.city);
            const on = active(b.city);
            return (
              <li
                key={b.city}
                className="mx-pin absolute"
                style={
                  {
                    left: `${(x / VW) * 100}%`,
                    top: `${(y / VH) * 100}%`,
                    "--i": i,
                  } as React.CSSProperties
                }
              >
                <a
                  href={b.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver la base de ${b.city} en Google Maps`}
                  className="group/pin block"
                >
                  <span
                    className={`absolute size-4 -translate-1/2 rounded-full border-[3px] border-white max-sm:size-3 max-sm:border-2 ${
                      on
                        ? "bg-brand-700 shadow-[0_0_0_5px_rgba(10,72,161,0.16)]"
                        : "bg-slate-300"
                    }`}
                  >
                    {on && (
                      <span
                        className="absolute -inset-2 animate-pulse-ring rounded-full bg-brand-700/22"
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <span
                    className={`mx-label absolute top-0 -translate-y-1/2 rounded-tag bg-white px-2.5 py-1 text-[13px] font-bold whitespace-nowrap shadow-tag ring-1 ring-brand-700/12 transition ${
                      on ? "text-brand-700" : "text-muted opacity-80"
                    } group-hover/pin:bg-brand-700 group-hover/pin:text-white group-focus-visible/pin:bg-brand-700 group-focus-visible/pin:text-white max-sm:px-1.5 max-sm:py-0.5 max-sm:text-[10px] ${
                      left
                        ? "right-3.5 max-sm:right-2.5"
                        : "left-3.5 max-sm:left-2.5"
                    }`}
                  >
                    {b.city}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <p className="text-sm font-semibold text-navy-800">
          {highlight
            ? "Cómo llegar a las bases de este servicio"
            : "Cómo llegar a cada base"}
        </p>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {linked.map((b) => (
            <li key={b.city}>
              <LocationTag href={b.maps} className="w-full">
                <span className="flex items-center justify-between gap-1.5">
                  {b.city}
                  <svg
                    viewBox="0 0 12 12"
                    className="size-2.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 2h6v6M10 2 3 9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
              </LocationTag>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
        <span className="flex items-center gap-2">
          <span
            className="size-2.5 rounded-full bg-brand-700"
            aria-hidden="true"
          />{" "}
          {highlight
            ? "Base que opera este servicio"
            : "Base de operación propia"}
        </span>
        {highlight && (
          <span className="flex items-center gap-2">
            <span
              className="size-2.5 rounded-full bg-slate-300"
              aria-hidden="true"
            />{" "}
            Otras bases de MM Carga
          </span>
        )}
        <span className="flex items-center gap-2">
          <span
            className="w-5 border-t-2 border-primary/55"
            aria-hidden="true"
          />{" "}
          Coordinación desde Monterrey
        </span>
      </figcaption>
    </figure>
  );
}
