import type { ReactNode } from "react";

// Hero: "+30 años transportando la industria pesada"
export function Badge({ children, dot = true }: { children: ReactNode; dot?: boolean }) {
  return (
    <span className="inline-flex w-fit items-center gap-2.5 rounded-full bg-linear-135 from-brand-500 to-brand-550 px-4.5 py-2.75 text-eyebrow font-extrabold text-white max-sm:px-3.25 max-sm:py-2.25 max-sm:text-[9px] max-sm:tracking-[.85px]">
      {dot && <span className="size-1.5 rounded-full bg-white" aria-hidden="true" />}
      {children}
    </span>
  );
}

// Sección mapa: subtítulo en pastilla sobre fondo claro
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block w-fit rounded-full bg-brand-50 px-4.5 py-2.25 text-base leading-none whitespace-nowrap text-brand-700 max-[480px]:px-3.5 max-[480px]:py-2 max-[480px]:text-[13px]">
      {children}
    </span>
  );
}
