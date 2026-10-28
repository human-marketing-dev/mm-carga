"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

// Sobre un hero oscuro (marcado con data-hero="dark") el header empieza transparente
// y se vuelve blanco al hacer scroll. En cualquier otra página queda blanco.
export function HeaderShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  // Valor inicial por ruta para que el primer render (SSR) ya salga correcto; luego se confirma en el DOM
  const [overHero, setOverHero] = useState(
    !pathname.startsWith("/design-system"),
  );
  const ref = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() =>
      setOverHero(!!document.querySelector('main > [data-hero="dark"]')),
    );
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const menu = ref.current?.querySelector("details");
    const onToggle = () => setMenuOpen(!!menu?.open);
    menu?.addEventListener("toggle", onToggle);
    return () => {
      window.removeEventListener("scroll", onScroll);
      menu?.removeEventListener("toggle", onToggle);
    };
  }, []);

  const top = overHero && !scrolled && !menuOpen;

  // Línea inferior como sombra interna: así el header mide exactamente h-18 y el hero del Home lo cubre sin hueco
  return (
    <header
      ref={ref}
      data-top={top}
      className={`group/h sticky top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        top
          ? "bg-transparent"
          : "bg-white/95 shadow-[inset_0_-1px_0_rgb(10_39_88/0.08)] backdrop-blur"
      }`}
    >
      {children}
    </header>
  );
}
