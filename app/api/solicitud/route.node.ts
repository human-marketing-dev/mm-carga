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

// Dominios desde los que se aceptan envíos (sitio final, sitio de prueba y local)
const ALLOWED_ORIGIN = /^https?:\/\/(([a-z0-9-]+\.)*mmcarga\.com|([a-z0-9-]+\.)*humanmarketing\.mx|localhost(:\d+)?)$/i;

// Límite de envíos por IP: 5 cada 10 minutos. Vive en memoria del proceso (un solo
// servidor), así que se reinicia con cada despliegue; suficiente contra bots simples.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_IP = 5;
const hits = new Map<string, number[]>();

function tooMany(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_IP) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // Limpieza para que el mapa no crezca sin fin
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

function clientIp(request: Request) {
  const fwd = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return fwd || request.headers.get("x-real-ip") || "desconocida";
}

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
  // Solo envíos desde el propio sitio (los navegadores siempre mandan Origin en un POST)
  const origin = request.headers.get("origin");
  if (!origin || !ALLOWED_ORIGIN.test(origin)) {
    return Response.json({ ok: false, error: "forbidden" }, { status: 403 });
  }
  if (Number(request.headers.get("content-length") ?? 0) > 20_000) {
    return Response.json({ ok: false, error: "bad_request" }, { status: 413 });
  }
  if (tooMany(clientIp(request))) {
    console.warn("[solicitud] Límite de envíos alcanzado", clientIp(request));
    return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

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
