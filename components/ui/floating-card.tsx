import type { ReactNode } from "react";

// Tarjeta tipo cristal sobre la imagen del hero (punto verde = "en operación")
export function FloatingCard({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex w-fit items-center gap-3 rounded-card-sm border border-white/18 bg-[rgba(3,29,73,0.74)] px-4.5 py-3.5 text-sm text-white shadow-floating backdrop-blur-[15px]">
      <span className="size-2.5 rounded-full bg-success shadow-[0_0_0_4px_rgba(33,212,125,0.2)]" aria-hidden="true" />
      {children}
    </div>
  );
}
