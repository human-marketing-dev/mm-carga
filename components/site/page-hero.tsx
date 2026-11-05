import Link from "next/link";
import { Photo } from "@/components/site/photo";
import { Container } from "@/components/site/sections";
import { Button } from "@/components/ui/button";

type Crumb = { href: string; label: string };

type Props = {
  /** Migas intermedias entre Inicio y la página actual */
  parents?: Crumb[];
  crumb: string;
  h1: string;
  subtitle: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  /** Sin src muestra el relleno "Foto pendiente"; sin image el hero va a una columna */
  image?: { src?: string; alt: string; label?: string };
};

// Hero azul de las páginas internas: miga, H1, subtítulo, botones y foto a la derecha
export function PageHero({
  parents = [],
  crumb,
  h1,
  subtitle,
  primary = { href: "/contacto/", label: "Solicita una cotización" },
  secondary,
  image,
}: Props) {
  return (
    <section
      data-hero="dark"
      className="relative isolate -mt-18 overflow-hidden bg-(image:--gradient-hero) pt-18 text-white"
    >
      {/* Trama de puntos y brillo para dar profundidad al fondo azul */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(rgb(255_255_255/.9)_1px,transparent_1.4px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_80%_40%,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-[-12%] -z-10 size-[560px] rounded-full bg-brand-500/30 blur-[130px]"
        aria-hidden="true"
      />
      <Container
        className={`grid items-center gap-12 pt-10 pb-16 lg:pt-14 lg:pb-20 ${image ? "lg:grid-cols-[1fr_1.05fr] lg:gap-16" : ""}`}
      >
        <div className="hero-in flex flex-col items-start gap-6">
          <nav
            aria-label="Ruta de navegación"
            className="text-sm text-white/65"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              {parents.map((p) => (
                <li key={p.href} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  <Link href={p.href} className="hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">
                {crumb}
              </li>
            </ol>
          </nav>
          <h1 className="max-w-3xl text-[clamp(36px,4.2vw,56px)] leading-[1.08] font-heavy">
            {h1}
          </h1>
          <p className="max-w-xl text-lead text-white/78">{subtitle}</p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Button href={primary.href}>{primary.label}</Button>
            {secondary && (
              <Button href={secondary.href} variant="outline">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
        {image && (
          <div className="hero-photo relative">
            {/* Marco desfasado detrás de la foto */}
            <span
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-dialog border border-white/18 max-lg:hidden"
              aria-hidden="true"
            />
            <Photo
              src={image.src}
              alt={image.alt}
              label={image.label}
              tone="dark"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="aspect-[4/3] rounded-dialog shadow-dialog"
              priority
            />
          </div>
        )}
      </Container>
    </section>
  );
}
