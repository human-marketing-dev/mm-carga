"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type HeroSlide = {
  src: string;
  alt: string;
  /** Nombre corto del servicio que se ve en la foto (pestaña del slider) */
  label: string;
  /** Encuadre de la foto (object-position), p. ej. "70% 50%" */
  position?: string;
};

const DURATION = 6500; // ms por imagen

// Fondo del hero del Home: fotos que rotan con fundido y zoom lento, y pestañas con barra de progreso.
// El texto (H1, botones) queda fijo encima: solo cambia la imagen.
export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false); // pausa del usuario (botón)
  const [hover, setHover] = useState(false); // pausa temporal (cursor o foco)
  const [auto, setAuto] = useState(false); // sin movimiento reducido y con JS

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAuto(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Pausa cuando la pestaña del navegador no está visible
  useEffect(() => {
    const onVis = () => setHover(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const running = auto && !paused && !hover;
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <>
      {/* Fotos */}
      <div className="hero-photo absolute inset-0 -z-10 bg-navy-950">
        {slides.map((s, i) => (
          <div
            key={s.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              loading={i === 0 ? undefined : "eager"}
              fetchPriority={i === 0 ? "high" : "low"}
              className={`hero-kb object-cover ${i === index ? "is-active" : ""}`}
              style={{ objectPosition: s.position ?? "50% 50%" }}
            />
          </div>
        ))}
      </div>

      {/* Pestañas: cada una cambia la foto; la activa muestra el avance */}
      <div
        className="absolute inset-x-0 bottom-0 z-10"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
      >
        {/* En móvil las pestañas no llevan texto: se muestra solo el nombre de la foto actual */}
        <p className="mx-auto max-w-7xl px-5 pb-0.5 text-xs font-semibold tracking-wide text-white/80 sm:hidden">
          <span className="tabular-nums opacity-70">
            {String(index + 1).padStart(2, "0")}
          </span>{" "}
          · {slides[index].label}
        </p>
        <div className="mx-auto flex w-full max-w-7xl items-stretch gap-3 px-5 max-sm:pr-24 lg:px-8">
          <ul
            className="grid flex-1 grid-cols-4 gap-2 sm:gap-4"
            aria-label="Imágenes de nuestros servicios"
          >
            {slides.map((s, i) => {
              const on = i === index;
              return (
                <li key={s.src}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-current={on}
                    aria-label={`Ver imagen ${i + 1} de ${slides.length}: ${s.label}`}
                    className="group/tab flex w-full cursor-pointer flex-col gap-2.5 pt-4 pb-14 text-left sm:pb-8"
                  >
                    <span className="relative block h-[3px] overflow-hidden rounded-full bg-white/22">
                      <span
                        key={on ? `${index}-on` : "off"}
                        onAnimationEnd={on ? next : undefined}
                        className={`absolute inset-0 origin-left rounded-full bg-white ${
                          on
                            ? auto
                              ? "hero-progress"
                              : "scale-x-100"
                            : "scale-x-0"
                        }`}
                        style={{
                          animationDuration: `${DURATION}ms`,
                          animationPlayState: running ? "running" : "paused",
                        }}
                      />
                    </span>
                    <span
                      className={`hidden items-baseline gap-2 text-sm font-semibold transition sm:flex ${
                        on ? "text-white" : "text-white/55 group-hover/tab:text-white/85"
                      }`}
                    >
                      <span className="text-xs tabular-nums opacity-70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          {auto && (
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Reanudar imágenes" : "Pausar imágenes"}
              className="mt-[1.5px] grid size-8 shrink-0 cursor-pointer place-items-center rounded-full border border-white/25 text-white/80 transition hover:border-white/60 hover:text-white"
            >
              <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden="true">
                {paused ? (
                  <path d="M3 1.5v9l7.5-4.5z" fill="currentColor" />
                ) : (
                  <path d="M3 1.5h2v9H3zM7 1.5h2v9H7z" fill="currentColor" />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

    </>
  );
}
