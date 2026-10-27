import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { bases, contact, services } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-8">
        <div className="flex flex-col gap-5">
          <Logo variant="white" className="h-9 self-start" />
          <p className="max-w-xs text-[15px] leading-relaxed">
            Logística, transporte de carga y almacenamiento con infraestructura propia en México desde hace más de 30
            años.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-[0.14em] text-white uppercase">Servicios</h2>
          <ul className="mt-5 flex flex-col gap-3 text-[15px]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={s.slug} className="hover:text-white">
                  {s.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-[0.14em] text-white uppercase">Empresa</h2>
          <ul className="mt-5 flex flex-col gap-3 text-[15px]">
            <li><Link href="/nosotros/" className="hover:text-white">Nosotros</Link></li>
            <li><Link href="/cobertura/" className="hover:text-white">Cobertura</Link></li>
            <li><Link href="/transporte-de-carga-en-monterrey/" className="hover:text-white">Transporte de carga en Monterrey</Link></li>
            <li><Link href="/contacto/" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-[0.14em] text-white uppercase">Contacto</h2>
          <ul className="mt-5 flex flex-col gap-3 text-[15px]">
            <li>
              <a href={contact.phoneHref} className="tabular-nums hover:text-white">{contact.phone}</a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
            </li>
            <li className="leading-relaxed">{contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-[13px] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>Bases: {bases.map((b) => b.city).join(" · ")}</p>
          <p className="flex gap-5">
            <span>© 2026 MM Carga</span>
            <Link href="/aviso-de-privacidad/" className="hover:text-white">Aviso de privacidad</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
