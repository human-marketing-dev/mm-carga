import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site";
import { Container } from "./sections";

// Página provisional para las rutas del menú que aún no tienen contenido
export function UnderConstruction({ title }: { title: string }) {
  return (
    <section
      data-hero="dark"
      className="-mt-18 bg-(image:--gradient-hero) pt-18 text-white"
    >
      <Container className="flex min-h-[clamp(480px,70vh,680px)] flex-col items-start justify-center gap-6 py-20">
        <p className="rounded-tag border border-white/20 px-3 py-1.5 text-xs font-bold tracking-[0.16em] text-brand-400 uppercase">
          Página en construcción
        </p>
        <h1 className="max-w-3xl text-[clamp(34px,4vw,52px)] leading-[1.1] font-heavy">
          {title}
        </h1>
        <p className="max-w-xl text-lead text-white/78">
          Estamos preparando esta sección. Mientras tanto, nuestro equipo puede
          atenderte por WhatsApp o teléfono al{" "}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white tabular-nums underline-offset-4 hover:underline"
          >
            {contact.phone}
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button href="/">Volver al inicio</Button>
          <Button href="/caja-seca-53-pies/" variant="outline">
            Ver transporte en caja seca
          </Button>
        </div>
      </Container>
    </section>
  );
}
