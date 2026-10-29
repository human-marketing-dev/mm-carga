"use client";

import { useState, type FormEvent } from "react";
import { ArrowIcon } from "@/components/ui/arrow-icon";

export const serviceOptions = [
  "Caja seca de 53 pies",
  "Transporte en tolva",
  "Contenedores marítimos",
  "Carga suelta en plataforma",
  "Almacenamiento",
  "Requiero asesoría",
];

const field =
  "w-full rounded-btn-sm border border-navy-800/15 bg-white px-3.5 py-3 text-[15px] text-ink placeholder:text-muted/70 transition focus:border-primary focus:ring-3 focus:ring-primary/15 focus:outline-none";
const label = "flex flex-col gap-1.5 text-[13px] font-semibold text-navy-800";

// Pendiente: definir a dónde se envía (correo, CRM o WhatsApp). Por ahora no envía nada.
// withReason (página de Contacto): agrega "Motivo"; para proveedores se ocultan servicio, origen y destino
export function QuoteForm({
  service,
  withReason = false,
}: {
  service?: string;
  withReason?: boolean;
}) {
  const [sent, setSent] = useState(false);
  const [reason, setReason] = useState("Cotización");
  const isQuote = reason === "Cotización";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-dialog bg-white p-6 text-ink shadow-floating sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Nombre
          <input
            id="cot-nombre"
            name="nombre"
            required
            autoComplete="name"
            className={field}
          />
        </label>
        <label className={label}>
          Empresa
          <input
            id="cot-empresa"
            name="empresa"
            autoComplete="organization"
            className={field}
          />
        </label>
        <label className={label}>
          Teléfono
          <input
            id="cot-telefono"
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            className={field}
          />
        </label>
        <label className={label}>
          Correo
          <input
            id="cot-correo"
            name="correo"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </label>
        {withReason && (
          <label className={`${label} sm:col-span-2`}>
            Motivo
            <select
              id="cot-motivo"
              name="motivo"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className={field}
            >
              <option>Cotización</option>
              <option>Proveedores</option>
            </select>
          </label>
        )}
        {isQuote && (
          <>
            <label className={`${label} sm:col-span-2`}>
              Servicio de interés
              <select
                id="cot-servicio"
                name="servicio"
                defaultValue={service ?? ""}
                required
                className={field}
              >
                <option value="" disabled>
                  Selecciona un servicio
                </option>
                {serviceOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className={label}>
              Origen
              <input
                id="cot-origen"
                name="origen"
                placeholder="Ciudad o planta"
                className={field}
              />
            </label>
            <label className={label}>
              Destino
              <input
                id="cot-destino"
                name="destino"
                placeholder="Ciudad o planta"
                className={field}
              />
            </label>
          </>
        )}
        <label className={`${label} sm:col-span-2`}>
          Mensaje
          <textarea
            id="cot-mensaje"
            name="mensaje"
            rows={3}
            placeholder="Tipo de carga, volumen y frecuencia"
            className={`${field} resize-y`}
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Al enviar aceptas nuestro{" "}
          <a
            href="/aviso-de-privacidad/"
            className="underline underline-offset-2"
          >
            aviso de privacidad
          </a>
          .
        </p>
        <button
          type="submit"
          className="inline-flex min-h-14 items-center justify-between gap-5 rounded-btn bg-linear-135 from-brand-500 to-[#1474ff] py-1.75 pr-1.75 pl-6 text-sm font-heavy text-white shadow-btn-primary transition hover:from-[#0964e9] hover:to-[#197dff]"
        >
          Enviar solicitud
          <span
            className="grid size-10.5 place-items-center rounded-btn-sm bg-white/16"
            aria-hidden="true"
          >
            <ArrowIcon />
          </span>
        </button>
      </div>
      {sent && (
        <p
          role="status"
          className="mt-4 rounded-btn-sm bg-brand-50 px-4 py-3 text-sm text-brand-700"
        >
          El envío del formulario todavía no está conectado. Mientras tanto,
          escríbenos por WhatsApp.
        </p>
      )}
    </form>
  );
}
