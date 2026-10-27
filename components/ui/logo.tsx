import Image from "next/image";

// "color" (azul) sobre fondo claro; "white" sobre navy o fotos
export function Logo({ variant = "color", className = "" }: { variant?: "color" | "white"; className?: string }) {
  return (
    <Image
      src={variant === "white" ? "/brand/logo-mm-carga.webp" : "/brand/logo-mm-carga-azul.webp"}
      alt="MM Carga"
      width={336}
      height={84}
      className={`h-10 w-auto ${className}`}
      priority
    />
  );
}
