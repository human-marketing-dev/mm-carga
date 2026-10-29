import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/sections";
import { contact } from "@/lib/site";

// Página legal: se mantiene fuera del índice; el texto requiere validación jurídica del cliente
export const metadata: Metadata = {
  title: "Aviso de privacidad | MM Carga",
  description:
    "Aviso de privacidad de MM Carga S.A. de C.V.: datos personales que recabamos, finalidades de su tratamiento y cómo ejercer tus derechos ARCO.",
  alternates: { canonical: "/aviso-de-privacidad/" },
  robots: { index: false, follow: true },
};

const UPDATED = "29 de octubre de 2026";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4 border-t border-navy-800/10 pt-10">
      <h2 className="text-[26px] leading-tight font-bold text-navy-800">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-body text-muted [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

const mail = (
  <a
    href={`mailto:${contact.email}`}
    className="font-semibold text-primary hover:underline"
  >
    {contact.email}
  </a>
);

export default function AvisoDePrivacidad() {
  return (
    <>
      {/* Bloque 1 · Hero */}
      <PageHero
        crumb="Aviso de privacidad"
        h1="Aviso de privacidad"
        subtitle="En MM Carga protegemos los datos personales que nos compartes y los tratamos de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares."
        primary={{ href: "/contacto/", label: "Contáctanos" }}
      />

      {/* Bloque 2 · Texto legal */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-10">
            <p className="text-small text-muted">
              Última actualización: {UPDATED}
            </p>

            <Block title="Identidad y domicilio del responsable">
              <p>
                <strong>MM Carga S.A. de C.V.</strong>, también conocida como
                Transportes MM (en adelante, “MM Carga”), con domicilio en{" "}
                {contact.address}, es responsable del tratamiento de los datos
                personales que nos proporcionas.
              </p>
            </Block>

            <Block title="Datos personales que recabamos">
              <p>
                Recabamos los datos que nos proporcionas directamente a través
                de nuestro sitio web, por correo electrónico, por teléfono o por
                WhatsApp:
              </p>
              <ul>
                <li>
                  Datos de identificación y contacto: nombre, empresa, puesto,
                  teléfono y correo electrónico.
                </li>
                <li>
                  Datos de la operación: servicio de interés, origen, destino,
                  tipo de carga y la información que incluyas en tu mensaje.
                </li>
                <li>
                  En el caso de proveedores: datos de la empresa y de la persona
                  de contacto.
                </li>
              </ul>
              <p>MM Carga no recaba datos personales sensibles.</p>
            </Block>

            <Block title="Finalidades del tratamiento">
              <p>
                Tus datos personales se utilizan para las siguientes
                finalidades, necesarias para la relación que tienes con
                nosotros:
              </p>
              <ul>
                <li>Atender tus solicitudes de información y de cotización.</li>
                <li>
                  Prestar, coordinar y dar seguimiento a los servicios de
                  transporte y almacenamiento contratados.
                </li>
                <li>
                  Facturar y dar cumplimiento a las obligaciones contraídas.
                </li>
                <li>Evaluar y dar seguimiento a propuestas de proveedores.</li>
              </ul>
              <p>
                De manera adicional, podremos utilizar tus datos para enviarte
                información sobre nuestros servicios. Si no deseas recibirla,
                puedes indicarlo en cualquier momento escribiendo a {mail}.
              </p>
            </Block>

            <Block title="Transferencia de datos">
              <p>
                MM Carga no vende ni comparte tus datos personales con terceros
                para fines distintos a los descritos en este aviso. Únicamente
                podrán transferirse cuando sea necesario para la prestación del
                servicio contratado o cuando lo exija una autoridad competente,
                en los casos previstos por la ley.
              </p>
            </Block>

            <Block title="Derechos ARCO y revocación del consentimiento">
              <p>
                Tienes derecho a acceder a tus datos personales, rectificarlos,
                cancelarlos u oponerte a su tratamiento (derechos ARCO), así
                como a revocar el consentimiento que nos hayas otorgado.
              </p>
              <p>
                Para ejercer estos derechos, envía tu solicitud a {mail} con tu
                nombre, un medio para comunicarte la respuesta, una copia de tu
                identificación oficial y la descripción clara del derecho que
                deseas ejercer. Responderemos en un plazo máximo de 20 días
                hábiles.
              </p>
            </Block>

            <Block title="Uso de cookies y tecnologías similares">
              <p>
                Nuestro sitio web puede utilizar cookies y tecnologías similares
                para analizar el uso del sitio y mejorar tu experiencia de
                navegación. Puedes desactivarlas desde la configuración de tu
                navegador.
              </p>
            </Block>

            <Block title="Cambios al aviso de privacidad">
              <p>
                MM Carga podrá modificar este aviso de privacidad para atender
                cambios legales o en nuestros procesos. Cualquier actualización
                se publicará en esta página con su fecha correspondiente.
              </p>
            </Block>
          </div>
        </Container>
      </section>
    </>
  );
}
