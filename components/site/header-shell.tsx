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
  const closeMenu = useRef<(animate?: boolean) => void>(() => {});

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
    const summary = menu?.querySelector("summary");
    let timer: ReturnType<typeof setTimeout> | undefined;

    // Cierra el menú móvil con animación de salida (data-closing) y luego quita el open
    const close = (animate = true) => {
      if (!menu?.open) return;
      clearTimeout(timer);
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!animate || reduce) {
        menu.open = false;
        delete menu.dataset.closing;
        return;
      }
      menu.dataset.closing = "1";
      setMenuOpen(false);
      timer = setTimeout(() => {
        menu.open = false;
        delete menu.dataset.closing;
      }, 220);
    };
    const onSummary = (e: Event) => {
      if (menu?.open) {
        e.preventDefault();
        close();
      }
    };
    // Al tocar un enlace o el fondo, se cierra
    const onPanel = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a[href], [data-menu-close]")) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menu?.open) {
        close();
        summary?.focus();
      }
    };
    const onToggle = () => {
      if (!menu?.dataset.closing) setMenuOpen(!!menu?.open);
    };
    summary?.addEventListener("click", onSummary);
    menu?.addEventListener("click", onPanel);
    menu?.addEventListener("toggle", onToggle);
    document.addEventListener("keydown", onKey);
    closeMenu.current = close;
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      summary?.removeEventListener("click", onSummary);
      menu?.removeEventListener("click", onPanel);
      menu?.removeEventListener("toggle", onToggle);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Al cambiar de página, el menú queda cerrado
  useEffect(() => {
    closeMenu.current(false);
  }, [pathname]);

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
