import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowIcon } from "./arrow-icon";

type Variant = "primary" | "outline" | "solid" | "quote" | "secondary";

const base =
  "inline-flex items-center justify-between font-heavy transition-[transform,box-shadow,border-color,background] duration-250 ease-out focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-650/30";

const variants: Record<Variant, string> = {
  // Hero: "Cotizar por WhatsApp"
  primary:
    "min-h-15 min-w-60 gap-5.5 rounded-btn border border-transparent bg-linear-135 from-brand-500 to-[#1474ff] py-1.75 pr-1.75 pl-6 text-sm text-white shadow-btn-primary hover:from-[#0964e9] hover:to-[#197dff] hover:shadow-btn-primary-hover max-sm:min-h-14",
  // Hero: "Ver Servicios" (sobre fondo oscuro)
  outline:
    "min-h-15 min-w-51 gap-5.5 rounded-btn border border-white/48 bg-white/[.035] py-1.75 pr-1.75 pl-6 text-sm text-white backdrop-blur-sm hover:border-white hover:bg-white/10 max-sm:min-h-14",
  // Tarjeta de servicio: "Ver más"
  solid:
    "min-h-11 gap-2 rounded-btn-sm bg-primary px-4.5 py-3 text-sm text-white shadow-btn-solid hover:bg-primary-hover",
  // Secundario sobre fondo claro
  secondary:
    "min-h-15 gap-5.5 rounded-btn border border-navy-800/20 bg-white py-1.75 pr-1.75 pl-6 text-sm text-navy-800 hover:border-navy-800/50 max-sm:min-h-14",
  // Popup de servicio: "Cotizar Ahora"
  quote:
    "min-h-13.5 gap-5 rounded-[11px] bg-brand-600 py-2 pr-2.25 pl-6 text-[15px] font-extrabold text-white shadow-[0_10px_24px_rgba(11,86,179,0.2)] hover:bg-brand-800",
};

const iconBox: Partial<Record<Variant, string>> = {
  primary: "bg-white/16 text-white",
  outline: "bg-white/12 text-white",
  quote: "bg-white text-brand-600",
  secondary: "bg-brand-50 text-primary",
};

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
};

export function Button({ variant = "primary", className = "", children, ...props }: Props) {
  const box = iconBox[variant];
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      <span>{children}</span>
      {box ? (
        <span className={`grid size-11.5 shrink-0 place-items-center rounded-btn-sm ${box} max-sm:size-10.5`}>
          <ArrowIcon />
        </span>
      ) : (
        <ArrowIcon className="size-3.5" />
      )}
    </Link>
  );
}
