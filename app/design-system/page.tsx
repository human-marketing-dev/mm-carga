import type { Metadata } from "next";
import { Badge, Eyebrow } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FloatingCard } from "@/components/ui/floating-card";
import { LocationTag, MapPin } from "@/components/ui/location-tag";
import { ServiceCard } from "@/components/ui/service-card";

export const metadata: Metadata = {
  title: "Design system | MM Carga",
  robots: { index: false, follow: false },
};

const colors = [
  ["navy-950", "#00083E"],
  ["navy-900", "#03163D"],
  ["navy-850", "#041D4E"],
  ["navy-800", "#062864"],
  ["navy-ink", "#011E58"],
  ["brand-800", "#073B83"],
  ["brand-700", "#0A48A1"],
  ["brand-650", "#1456A0"],
  ["brand-600", "#0B56B3"],
  ["brand-500", "#0757D5"],
  ["brand-550", "#0968EB"],
  ["brand-400", "#1674FF"],
  ["brand-50", "#EAF3FF"],
  ["ink", "#253046"],
  ["ink-soft", "#465675"],
  ["muted", "#667085"],
  ["muted-alt", "#555555"],
  ["slate-300", "#A5B4C8"],
  ["surface", "#F6F8FC"],
  ["success", "#21D47D"],
];

const bases = ["Altamira", "Monterrey", "Manzanillo", "Silao", "Nuevo Laredo", "Coatzacoalcos"];

export default function DesignSystem() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-16">
      <header className="flex flex-col gap-4">
        <Eyebrow>Design system</Eyebrow>
        <h1 className="text-h2 text-navy-ink max-md:text-[30px]">MM Carga</h1>
        <p className="max-w-2xl text-body text-muted-alt">
          Tokens y componentes extraídos de mmcarga.com. Página interna, no indexada.
        </p>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-navy-ink">Colores</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
          {colors.map(([name, hex]) => (
            <div key={name} className="overflow-hidden rounded-card-sm border border-black/8">
              <div className="h-20" style={{ background: hex }} />
              <div className="px-3 py-2 text-sm">
                <div className="font-semibold text-ink">{name}</div>
                <div className="text-muted">{hex}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-navy-ink">Tipografía (Inter)</h2>
        <div className="flex flex-col gap-6 rounded-card bg-surface p-8">
          <p className="text-h2 text-navy-ink">H2 sección · 45px / 600</p>
          <p className="text-card-title font-extrabold text-brand-800">Título de tarjeta · 21px / 800</p>
          <p className="text-body text-muted-alt">Texto de sección · 17px / 1.7</p>
          <p className="text-small text-muted">Descripción de tarjeta · 15px / 1.65</p>
        </div>
      </section>

      <section className="flex flex-col gap-8 rounded-dialog bg-(image:--gradient-hero) p-10 max-sm:p-6">
        <Badge>+30 AÑOS TRANSPORTANDO LA INDUSTRIA PESADA</Badge>
        <p className="max-w-180 text-display text-white max-md:text-[clamp(34px,10vw,46px)]">
          Empresa dedicada al transporte y almacenaje de mercancías
        </p>
        <p className="max-w-157.5 text-lead tracking-[.05px] text-white/78">
          Hero sobre degradado navy: H1 display, descripción y botones.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="/contacto">Cotizar por WhatsApp</Button>
          <Button href="/transporte-de-carga" variant="outline">
            Ver servicios
          </Button>
        </div>
        <FloatingCard>Rastreo 24/7 de toda la flota</FloatingCard>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-navy-ink">Botones sobre fondo claro</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button href="#" variant="solid">
            Ver más
          </Button>
          <Button href="#" variant="quote">
            Cotizar ahora
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-navy-ink">Ubicaciones</h2>
        <div className="flex flex-wrap gap-2.5">
          {bases.map((b) => (
            <LocationTag key={b}>{b}</LocationTag>
          ))}
        </div>
        <div className="relative h-40 rounded-card bg-brand-50">
          <MapPin x="30%" y="50%" label="Monterrey" />
          <MapPin x="65%" y="40%" label="Altamira" />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-navy-ink">Tarjeta de servicio</h2>
        <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Cajas secas de 53'"
            description="Transporte de carga general protegida en cajas secas de 53 pies."
            image="/images/placeholder.svg"
            href="/transporte-de-carga/caja-seca-53"
          />
          <ServiceCard
            title="Tolvas a granel"
            description="Traslado de materiales a granel en tolvas de gran capacidad."
            image="/images/placeholder.svg"
            href="/transporte-de-carga/tolva-a-granel"
          />
        </div>
      </section>
    </main>
  );
}
