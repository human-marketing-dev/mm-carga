"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

// En el Home el header empieza transparente sobre el hero y se vuelve blanco al hacer scroll
export function HeaderShell({ children }: { children: ReactNode }) {
  const isHome = usePathname() === "/";
  const ref = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const top = isHome && !scrolled && !menuOpen;

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
