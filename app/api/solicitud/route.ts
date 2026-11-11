// Recibe los formularios de cotización (Home, servicios y Contacto) y los envía por Brevo.
// Variables de entorno (en el servidor, nunca en el repo):
//   BREVO_API_KEY      clave de API de Brevo (obligatoria)
//   FORM_TO_EMAIL      correo(s) que reciben las solicitudes, separados por coma (obligatoria)
//   FORM_SENDER_EMAIL  remitente verificado en Brevo (obligatoria), p. ej. web@mmcarga.com
//   FORM_SENDER_NAME   nombre del remitente (opcional, por defecto "Sitio web MM Carga")
//   BREVO_LIST_ID      ID numérico de la lista donde guardar el contacto (opcional)

const BREVO = "https://api.brevo.com/v3";

const FIELDS = [
  ["motivo", "Motivo"],
  ["nombre", "Nombre"],
  ["empresa", "Empresa"],
  ["telefono", "Teléfono"],
  ["correo", "Correo"],
  ["servicio", "Servicio de interés"],
  ["origen", "Origen"],
  ["destino", "Destino"],
  ["mensaje", "Mensaje"],
  ["pagina", "Página"],
] as const;

type Key = (typeof FIELDS)[number][0];

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function clean(v: unknown, max = 2000) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

async function brevo(path: string, apiKey: string, body: unknown) {
  return fetch(`${BREVO}${path}`, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const to = (process.env.FORM_TO_EMAIL ?? "")
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
  const sender = process.env.FORM_SENDER_EMAIL;
  if (!apiKey || !to.length || !sender) {
    console.error("[solicitud] Faltan variables de entorno de Brevo");
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let raw: Record<string, unknown>;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Campo trampa para bots: si viene lleno, se responde OK sin enviar nada
  if (clean(raw.sitio_web)) return Response.json({ ok: true });

  const data = Object.fromEntries(
    FIELDS.map(([k]) => [k, clean(raw[k])]),
  ) as Record<Key, string>;

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo);
  if (!data.nombre || !data.telefono || !emailOk) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const motivo = data.motivo || "Cotización";
  const rows = FIELDS.filter(([k]) => data[k])
    .map(
      ([k, label]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top"><b>${label}</b></td><td style="padding:6px 0;white-space:pre-wrap">${escape(data[k])}</td></tr>`,
    )
    .join("");
  const text = FIELDS.filter(([k]) => data[k])
    .map(([k, label]) => `${label}: ${data[k]}`)
    .join("\n");

  const res = await brevo("/smtp/email", apiKey, {
    sender: {
      email: sender,
      name: process.env.FORM_SENDER_NAME || "Sitio web MM Carga",
    },
    to: to.map((email) => ({ email })),
    replyTo: { email: data.correo, name: data.nombre },
    subject: `${motivo} desde el sitio web: ${data.nombre}${data.empresa ? ` (${data.empresa})` : ""}`,
    htmlContent: `<p>Nueva solicitud desde el sitio web de MM Carga.</p><table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows}</table>`,
    textContent: `Nueva solicitud desde el sitio web de MM Carga.\n\n${text}`,
  }).catch((e: unknown) => e);

  if (!(res instanceof Response) || !res.ok) {
    console.error(
      "[solicitud] Brevo /smtp/email",
      res instanceof Response ? `${res.status} ${await res.text()}` : res,
    );
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  // Guardar en lista (opcional). Si falla, la solicitud ya se envió por correo.
  const listId = Number(process.env.BREVO_LIST_ID);
  if (listId) {
    const c = await brevo("/contacts", apiKey, {
      email: data.correo,
      attributes: { FIRSTNAME: data.nombre },
      listIds: [listId],
      updateEnabled: true,
    }).catch((e: unknown) => e);
    if (!(c instanceof Response) || !c.ok) {
      console.error(
        "[solicitud] Brevo /contacts",
        c instanceof Response ? `${c.status} ${await c.text()}` : c,
      );
    }
  }

  return Response.json({ ok: true });
}
