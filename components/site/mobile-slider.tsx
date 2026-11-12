"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

// En móvil, una lista de tarjetas se vuelve carrusel deslizable (scroll-snap) con puntos;
// desde el breakpoint indicado vuelve a ser la cuadrícula normal (clases de `className`).
// Cada <li> define su propio ancho en móvil (p. ej. max-md:w-[84%]).
const MOBILE = {
  // Debajo de 768 px
  md: "m-slider-md max-md:flex max-md:gap-4 max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:-mx-5 max-md:px-5 max-md:scroll-px-5 max-md:pt-1 max-md:pb-3 max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden max-md:[&>li]:shrink-0 max-md:[&>li]:snap-start",
  // Debajo de 640 px
  sm: "m-slider-sm max-sm:flex max-sm:gap-4 max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:-mx-5 max-sm:px-5 max-sm:scroll-px-5 max-sm:pt-1 max-sm:pb-3 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden max-sm:[&>li]:shrink-0 max-sm:[&>li]:snap-start",
} as const;

const DOTS_HIDDEN = { md: "md:hidden", sm: "sm:hidden" } as const;

export function MobileSlider({
  children,
  className = "",
  label,
  bp = "md",
}: {
  children: ReactNode;
  /** Clases de la lista en escritorio/tableta (grid, columnas, etc.) */
  className?: string;
  /** Nombre del carrusel para lectores de pantalla */
  label: string;
  /** Hasta qué ancho se comporta como carrusel */
  bp?: keyof typeof MOBILE;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const count = Children.count(children);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const items = Array.from(el.children) as HTMLElement[];
        if (!items.length) return;
        // Al final del recorrido marca el último punto aunque la tarjeta no llegue al borde
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
          setActive(items.length - 1);
          return;
        }
        const start = items[0].offsetLeft;
        let best = 0;
        let dist = Infinity;
        items.forEach((it, i) => {
          const d = Math.abs(it.offsetLeft - start - el.scrollLeft);
          if (d < dist) {
            dist = d;
            best = i;
          }
        });
        setActive(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const go = (i: number) => {
    const el = ref.current;
    const items = el ? (Array.from(el.children) as HTMLElement[]) : [];
    if (!el || !items[i]) return;
    el.scrollTo({ left: items[i].offsetLeft - items[0].offsetLeft, behavior: "smooth" });
  };

  return (
    <div className="min-w-0">
      <ul ref={ref} aria-label={label} className={`${MOBILE[bp]} ${className}`}>
        {children}
      </ul>
      {count > 1 && (
        <div className={`mt-4 flex justify-center gap-2 ${DOTS_HIDDEN[bp]}`}>
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir a la tarjeta ${i + 1} de ${count}`}
              aria-current={i === active}
              className="grid h-6 cursor-pointer place-items-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-primary" : "w-1.5 bg-navy-800/20"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
