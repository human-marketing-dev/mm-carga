import type { ReactNode } from "react";

export function LocationTag({
  href,
  children,
  className: extra = "",
}: {
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const className =
    `${extra} inline-block rounded-tag border border-brand-700/18 bg-brand-50 px-3 py-1.75 text-[15px] font-bold text-brand-700 shadow-tag transition duration-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:text-white hover:shadow-tag-hover max-sm:px-2.5 max-sm:py-1.5 max-sm:text-[13px]`;
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <span className={className}>{children}</span>
  );
}

// Pin del mapa de bases, posicionado en % sobre la imagen del mapa
export function MapPin({ x, y, label }: { x: string; y: string; label: string }) {
  return (
    <span
      className="group absolute size-4.5 -translate-1/2 rounded-full border-3 border-white bg-brand-700 shadow-[0_0_0_6px_rgba(10,72,161,0.18)] max-sm:size-4 max-sm:border-2"
      style={{ left: x, top: y }}
      tabIndex={0}
    >
      <span
        className="absolute -inset-2 animate-pulse-ring rounded-full bg-brand-700/22"
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute bottom-7.5 left-1/2 -translate-x-1/2 rounded-tag bg-brand-700 px-3.5 py-2 text-sm font-bold whitespace-nowrap text-white opacity-0 shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-250 group-hover:opacity-100 group-focus:opacity-100">
        {label}
      </span>
    </span>
  );
}
