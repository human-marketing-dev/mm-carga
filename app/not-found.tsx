import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/sections";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Button } from "@/components/ui/button";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Página no encontrada | MM Carga",
  robots: { index: false, follow: true },
};

const more = [
  { href: "/transporte-de-carga/", label: "Transporte de carga" },
  { href: "/cobertura/", label: "Cobertura y bases" },
  { href: "/nosotros/", label: "Nosotros" },
  { href: "/contacto/", label: "Contacto" },
];

// Página 404: hero azul como las páginas internas y ligas a los servicios
export default async function NotFound() {
  const services = await getServices();
  const links = [
    ...services.map((s) => ({ href: s.slug, label: s.card.name })),
    ...more,
  ];
  return (
    <>
      <section
        data-hero="dark"
        className="relative isolate -mt-18 overflow-hidden bg-(image:--gradient-hero) pt-18 text-white"
      >
        <div
          className="absolute inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(rgb(255_255_255/.9)_1px,transparent_1.4px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_80%_40%,black,transparent_70%)]"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 right-[-12%] -z-10 size-[560px] rounded-full bg-brand-500/30 blur-[130px]"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute right-[-2%] bottom-[-8%] -z-10 text-[clamp(160px,28vw,420px)] leading-none font-heavy text-transparent select-none [-webkit-text-stroke:2px_rgb(255_255_255/.14)] max-sm:hidden"
          aria-hidden="true"
        >
          404
        </span>
        <Container className="flex min-h-[clamp(440px,62vh,600px)] items-center py-20 lg:py-24">
          <div className="hero-in flex max-w-2xl flex-col items-start gap-6">
            <p className="text-sm font-bold tracking-[0.14em] text-white/70 uppercase">
              Error 404
            </p>
            <h1 className="text-[clamp(34px,4.2vw,56px)] leading-[1.08] font-heavy">
              No encontramos esta página
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/80">
              Es posible que la dirección haya cambiado o que el enlace esté
              incompleto. Desde aquí puedes volver al inicio o ir directo a
              nuestros servicios.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/">Volver al inicio</Button>
              <Button href="/contacto/" variant="outline">
                Solicita una cotización
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 lg:py-20">
        <Container>
          <h2 className="text-2xl font-heavy text-navy-800">
            Páginas que te pueden interesar
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group flex items-center justify-between gap-4 rounded-card border border-navy-800/10 bg-white px-5 py-4 font-semibold text-navy-800 transition hover:border-primary/40 hover:text-primary"
                >
                  {l.label}
                  <ArrowIcon className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
