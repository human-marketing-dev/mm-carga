import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tone?: "light" | "dark";
};

// Foto con relleno: mientras no hay imagen, muestra un bloque neutro con la descripción de la toma
export function Photo({ src, alt, label, className = "", sizes = "100vw", priority, tone = "light" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={`relative overflow-hidden ${dark ? "border border-white/10 bg-white/6" : "bg-[#dfe6f0]"} ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-end p-5">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                dark
                  ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 14px)"
                  : "repeating-linear-gradient(135deg, rgba(6,40,100,0.06) 0 1px, transparent 1px 14px)",
            }}
            aria-hidden="true"
          />
          <span className="relative rounded-tag bg-white/85 px-2.5 py-1 text-xs font-medium text-ink-soft">
            Foto pendiente · {label ?? alt}
          </span>
        </div>
      )}
    </div>
  );
}
