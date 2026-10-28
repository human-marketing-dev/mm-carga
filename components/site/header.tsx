import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { HeaderShell } from "./header-shell";
import { contact, services } from "@/lib/site";

const nav = [
  { href: "/almacenamiento-de-mercancias/", label: "Almacenamiento" },
  { href: "/cobertura/", label: "Cobertura" },
  { href: "/nosotros/", label: "Nosotros" },
  { href: "/contacto/", label: "Contacto" },
];

const QUOTE_HREF = "/contacto/";

const transport = services.filter(
  (s) => s.slug !== "/almacenamiento-de-mercancias/",
);

export function SiteHeader() {
  return (
    <HeaderShell>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link href="/" aria-label="MM Carga, inicio" className="shrink-0">
          <Logo className="h-9 group-data-[top=true]/h:hidden" />
          <Logo
            variant="white"
            className="hidden h-9 group-data-[top=true]/h:block"
          />
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-1 text-[15px] font-semibold text-navy-800 transition-colors group-data-[top=true]/h:text-white lg:flex"
        >
          <div className="group relative">
            <Link
              href="/transporte-de-carga/"
              className="flex items-center gap-1.5 rounded-tag px-3 py-2 hover:text-primary group-data-[top=true]/h:hover:text-brand-400"
            >
              Transporte de carga
              <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden="true">
                <path
                  d="M2 4l4 4 4-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </Link>
            <div className="invisible absolute top-full left-0 w-80 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="rounded-card-sm border border-navy-800/8 bg-white p-2 shadow-card">
                {transport.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={s.slug}
                      className="block rounded-tag px-3 py-2.5 font-medium text-ink hover:bg-surface hover:text-primary"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-tag px-3 py-2 hover:text-primary group-data-[top=true]/h:hover:text-brand-400"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Teléfono + cotización en un solo botón. Destino pendiente de definir: por ahora /contacto/ */}
        <Link
          href={QUOTE_HREF}
          className="hidden items-center gap-3 rounded-btn bg-linear-135 from-brand-500 to-[#1474ff] py-1.5 pr-1.5 pl-4.5 text-white shadow-btn-primary transition hover:from-[#0964e9] hover:to-[#197dff] lg:flex"
        >
          <span className="flex flex-col leading-tight">
            <span className="text-[11px] font-semibold text-white/80 tabular-nums">
              {contact.phone}
            </span>
            <span className="text-sm font-heavy">Solicita una cotización</span>
          </span>
          <span
            className="grid size-9 place-items-center rounded-btn-sm bg-white/16"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
            >
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
            </svg>
          </span>
        </Link>

        <details className="group lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-btn-sm border border-navy-800/12 text-navy-800 transition-colors group-data-[top=true]/h:border-white/30 group-data-[top=true]/h:text-white [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Abrir menú</span>
            <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </summary>
          <div className="absolute inset-x-0 top-18 border-b border-navy-800/8 bg-white px-5 pt-2 pb-6 shadow-card">
            <ul className="flex flex-col text-base font-semibold text-navy-800">
              <li>
                <Link href="/transporte-de-carga/" className="block py-3">
                  Transporte de carga
                </Link>
                <ul className="mb-2 border-l border-navy-800/10 pl-4 text-[15px] font-medium text-ink">
                  {transport.map((s) => (
                    <li key={s.slug}>
                      <Link href={s.slug} className="block py-2">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {nav.map((n) => (
                <li key={n.href} className="border-t border-navy-800/8">
                  <Link href={n.href} className="block py-3">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={QUOTE_HREF}
              className="mt-4 flex flex-col items-center rounded-btn bg-linear-135 from-brand-500 to-[#1474ff] px-4.5 py-3 text-white shadow-btn-primary"
            >
              <span className="text-xs font-semibold text-white/80 tabular-nums">
                {contact.phone}
              </span>
              <span className="text-sm font-heavy">
                Solicita una cotización
              </span>
            </Link>
          </div>
        </details>
      </div>
    </HeaderShell>
  );
}
