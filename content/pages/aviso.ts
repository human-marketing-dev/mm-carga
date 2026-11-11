import { mdToBlocks, type PTBlock } from "../../lib/portable-text";
import type { Seo } from "../types";

export type PrivacyContent = {
  seo: Seo;
  hero: { h1: string; subtitle: string };
  updated: string;
  sections: { title: string; body: PTBlock[] }[];
};

// Página legal: plantilla que requiere validación jurídica del cliente
export const aviso: PrivacyContent = {
  seo: {
    title: "Aviso de privacidad | MM Carga",
    description:
      "Aviso de privacidad de MM Carga S.A. de C.V.: datos personales que recabamos, finalidades de su tratamiento y cómo ejercer tus derechos ARCO.",
  },
  hero: {
    h1: "Aviso de privacidad",
    subtitle:
      "En MM Carga protegemos los datos personales que nos compartes y los tratamos de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
  },
  updated: "29 de octubre de 2026",
  sections: [
    {
      title: "Identidad y domicilio del responsable",
      body: mdToBlocks(
        "**MM Carga S.A. de C.V.** (en adelante, “MM Carga”), con domicilio en Carretera a Huinala km 6.5, 66673 Pesquería, N.L., es responsable del tratamiento de los datos personales que nos proporcionas.",
      ),
    },
    {
      title: "Datos personales que recabamos",
      body: mdToBlocks(`Recabamos los datos que nos proporcionas directamente a través de nuestro sitio web, por correo electrónico, por teléfono o por WhatsApp:

- Datos de identificación y contacto: nombre, empresa, puesto, teléfono y correo electrónico.
- Datos de la operación: servicio de interés, origen, destino, tipo de carga y la información que incluyas en tu mensaje.
- En el caso de proveedores: datos de la empresa y de la persona de contacto.

MM Carga no recaba datos personales sensibles.`),
    },
    {
      title: "Finalidades del tratamiento",
      body: mdToBlocks(`Tus datos personales se utilizan para las siguientes finalidades, necesarias para la relación que tienes con nosotros:

- Atender tus solicitudes de información y de cotización.
- Prestar, coordinar y dar seguimiento a los servicios de transporte y almacenamiento contratados.
- Facturar y dar cumplimiento a las obligaciones contraídas.
- Evaluar y dar seguimiento a propuestas de proveedores.

De manera adicional, podremos utilizar tus datos para enviarte información sobre nuestros servicios. Si no deseas recibirla, puedes indicarlo en cualquier momento escribiendo a [info@mmcarga.com](mailto:info@mmcarga.com).`),
    },
    {
      title: "Transferencia de datos",
      body: mdToBlocks(
        "MM Carga no vende ni comparte tus datos personales con terceros para fines distintos a los descritos en este aviso. Únicamente podrán transferirse cuando sea necesario para la prestación del servicio contratado o cuando lo exija una autoridad competente, en los casos previstos por la ley.",
      ),
    },
    {
      title: "Derechos ARCO y revocación del consentimiento",
      body: mdToBlocks(`Tienes derecho a acceder a tus datos personales, rectificarlos, cancelarlos u oponerte a su tratamiento (derechos ARCO), así como a revocar el consentimiento que nos hayas otorgado.

Para ejercer estos derechos, envía tu solicitud a [info@mmcarga.com](mailto:info@mmcarga.com) con tu nombre, un medio para comunicarte la respuesta, una copia de tu identificación oficial y la descripción clara del derecho que deseas ejercer. Responderemos en un plazo máximo de 20 días hábiles.`),
    },
    {
      title: "Uso de cookies y tecnologías similares",
      body: mdToBlocks(
        "Nuestro sitio web puede utilizar cookies y tecnologías similares para analizar el uso del sitio y mejorar tu experiencia de navegación. Puedes desactivarlas desde la configuración de tu navegador.",
      ),
    },
    {
      title: "Cambios al aviso de privacidad",
      body: mdToBlocks(
        "MM Carga podrá modificar este aviso de privacidad para atender cambios legales o en nuestros procesos. Cualquier actualización se publicará en esta página con su fecha correspondiente.",
      ),
    },
  ],
};
