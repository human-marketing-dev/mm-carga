"use client";

import { useRef, useState, type MouseEvent } from "react";

// Pregunta frecuente con animación de abrir y cerrar (también en Safari/iPhone).
// Sigue siendo un <details>: sin JS abre y cierra igual, solo sin animación.
export function FaqItem({ q, a }: { q: string; a: string }) {
  const details = useRef<HTMLDetailsElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const anim = useRef<Animation | null>(null);
  const [open, setOpen] = useState(false);

  const onClick = (e: MouseEvent) => {
    const d = details.current;
    const b = body.current;
    if (!d || !b || typeof b.animate !== "function") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpen(!d.open);
      return;
    }
    e.preventDefault();
    // Si una animación sigue en curso, parte de la altura actual
    const from = anim.current ? b.offsetHeight : null;
    anim.current?.cancel();
    anim.current = null;
    const opening = !d.open || d.dataset.closing === "1";
    delete d.dataset.closing;
    setOpen(opening);
    if (opening) {
      d.open = true;
      const h = b.scrollHeight;
      anim.current = b.animate(
        [
          { height: `${from ?? 0}px`, opacity: from === null ? 0 : 1 },
          { height: `${h}px`, opacity: 1 },
        ],
        { duration: 380, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)" },
      );
      anim.current.onfinish = () => (anim.current = null);
    } else {
      d.dataset.closing = "1";
      anim.current = b.animate(
        [
          { height: `${from ?? b.offsetHeight}px`, opacity: 1 },
          { height: "0px", opacity: 0 },
        ],
        { duration: 300, easing: "cubic-bezier(0.4, 0, 0.2, 1)" },
      );
      anim.current.onfinish = () => {
        d.open = false;
        delete d.dataset.closing;
        anim.current = null;
      };
    }
  };

  return (
    <details
      ref={details}
      onToggle={(e) => {
        // Sincroniza el icono si se abre sin pasar por el clic (p. ej. buscar en la página)
        const d = e.currentTarget;
        if (!d.dataset.closing) setOpen(d.open);
      }}
    >
      <summary
        onClick={onClick}
        className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden"
      >
        <h3 className="text-[17px] leading-snug font-semibold text-navy-800">
          {q}
        </h3>
        <span
          className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border text-navy-800 transition duration-300 ${
            open ? "rotate-45 border-primary/50 text-primary" : "border-navy-800/20"
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 12 12" className="size-2.5">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
      </summary>
      <div ref={body} className="overflow-hidden">
        <p className="max-w-2xl pb-6 text-small text-muted">{a}</p>
      </div>
    </details>
  );
}
