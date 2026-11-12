"use client";

import { trackEvent } from "@/components/site/analytics";
import { useEffect, useRef, useState } from "react";

const TEASER_KEY = "mm-wa-teaser";

// Respuestas rápidas: llenan el mensaje que se envía a WhatsApp (la primera es el mensaje base)
const moreReplies = [
  "Hola, quiero información sobre sus servicios de transporte.",
  "Hola, quiero información sobre el servicio de almacenamiento.",
];

function WhatsAppIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.39 9.39 0 0 1-1.44-5.01c0-5.19 4.23-9.42 9.43-9.42a9.37 9.37 0 0 1 9.42 9.43c0 5.2-4.23 9.42-9.43 9.42Zm8.02-17.44A11.27 11.27 0 0 0 12.05.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.95 1.52 5.66L.62 23.62l6.02-1.58a11.3 11.3 0 0 0 5.4 1.38h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.31-8.02Z" />
    </svg>
  );
}

// Botón flotante de WhatsApp con mini chat: saluda, deja escribir o elegir un mensaje y abre WhatsApp
export function WhatsAppButton({
  number: WHATSAPP_NUMBER,
  message: WHATSAPP_MESSAGE,
}: {
  /** Formato internacional sin "+" ni espacios (ajustes generales) */
  number: string;
  message: string;
}) {
  const quickReplies = [WHATSAPP_MESSAGE, ...moreReplies];
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(true);
  const [teaser, setTeaser] = useState(false);
  const [message, setMessage] = useState(WHATSAPP_MESSAGE);
  const fieldRef = useRef<HTMLTextAreaElement>(null);

  // Burbuja de invitación una vez por sesión, a los pocos segundos de entrar
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(TEASER_KEY) === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => setTeaser(true), 5000);
    return () => clearTimeout(t);
  }, []);

  // Al abrir: indicador de "escribiendo" antes del saludo
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      setTyping(false);
      fieldRef.current?.focus();
    }, 900);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function dismissTeaser() {
    setTeaser(false);
    try {
      sessionStorage.setItem(TEASER_KEY, "1");
    } catch {}
  }

  function toggle() {
    dismissTeaser();
    setTyping(true);
    setOpen((v) => !v);
  }

  function send(e: React.FormEvent) {
    e.preventDefault();
    const text = message.trim() || WHATSAPP_MESSAGE;
    trackEvent("whatsapp_click", { page: window.location.pathname, source: "chat" });
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setOpen(false);
  }

  return (
    // pointer-events-none: el contenedor ocupa el espacio del chat aunque esté oculto y tapaba clics (p. ej. el botón del formulario)
    <div className="pointer-events-none fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      {/* Mini chat */}
      <div
        id="wa-chat"
        role="dialog"
        aria-label="Chat de WhatsApp con MM Carga"
        aria-hidden={!open}
        inert={!open}
        className={`w-[min(360px,calc(100vw-2rem))] origin-bottom-right overflow-hidden rounded-dialog bg-white shadow-dialog transition duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${open ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3 scale-90 opacity-0"}`}
      >
        <div className="flex items-center gap-3 bg-[#075e54] px-5 py-4 text-white">
          <span className="relative grid size-11 shrink-0 place-items-center rounded-full bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon.png" alt="Logo de MM Carga" className="size-8 rounded-full" />
            <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-[#075e54] bg-[#25d366]" />
          </span>
          <div className="flex-1">
            <p className="font-bold">MM Carga</p>
            <p className="text-xs text-white/75">Atención comercial</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar chat"
            className="grid size-9 place-items-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <svg viewBox="0 0 12 12" className="size-3" aria-hidden="true">
              <path
                d="M1 1l10 10M11 1 1 11"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </button>
        </div>

        <div className="flex min-h-36 flex-col gap-3 bg-[#efeae2] px-5 py-5">
          {typing ? (
            <div
              className="flex w-16 items-center justify-center gap-1 rounded-2xl rounded-tl-sm bg-white py-3.5 shadow-sm"
              aria-label="MM Carga está escribiendo"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="wa-dot size-1.5 rounded-full bg-muted"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          ) : (
            <div className="wa-msg max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-[14px] leading-relaxed text-ink shadow-sm">
              Hola, gracias por contactar a MM Carga. Cuéntanos qué necesitas
              transportar o almacenar y te atendemos por WhatsApp.
            </div>
          )}
          {!typing && (
            <div className="wa-msg flex flex-wrap gap-2 [animation-delay:150ms]">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setMessage(q)}
                  className={`rounded-full border px-3 py-1.5 text-left text-xs font-semibold transition ${message === q ? "border-[#25d366] bg-[#dcf8c6] text-[#075e54]" : "border-navy-800/12 bg-white text-navy-800 hover:border-[#25d366]"}`}
                >
                  {q === WHATSAPP_MESSAGE
                    ? "Solicitar una cotización"
                    : q.includes("almacenamiento")
                      ? "Almacenamiento"
                      : "Servicios de transporte"}
                </button>
              ))}
            </div>
          )}
        </div>

        <form onSubmit={send} className="flex items-end gap-2 bg-white p-3">
          <label htmlFor="wa-message" className="sr-only">
            Tu mensaje
          </label>
          <textarea
            id="wa-message"
            ref={fieldRef}
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                e.currentTarget.form?.requestSubmit();
              }
            }}
            className="flex-1 resize-none rounded-card-sm border border-navy-800/12 px-3 py-2 text-[14px] text-ink outline-none focus:border-[#25d366]"
          />
          <button
            type="submit"
            aria-label="Continuar en WhatsApp"
            className="grid size-11 shrink-0 place-items-center rounded-full bg-[#25d366] text-white transition hover:bg-[#1ebe5b]"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3.4 20.4 21.85 12 3.4 3.6 3.39 10.2 16.5 12 3.39 13.8z" />
            </svg>
          </button>
        </form>
        <p className="bg-white px-4 pb-3 text-center text-[11px] text-muted">
          Al enviar se abre WhatsApp con tu mensaje.
        </p>
      </div>

      {/* Invitación */}
      {teaser && !open && (
        <div className="wa-msg pointer-events-auto relative flex items-center gap-2 rounded-card-sm bg-white py-2.5 pr-2 pl-4 text-sm font-semibold text-navy-800 shadow-floating">
          <button type="button" onClick={toggle} className="text-left">
            ¿Necesitas una cotización? Escríbenos
          </button>
          <button
            type="button"
            onClick={dismissTeaser}
            aria-label="Cerrar mensaje"
            className="grid size-7 place-items-center rounded-full text-muted hover:bg-surface"
          >
            <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden="true">
              <path
                d="M1 1l10 10M11 1 1 11"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Botón */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="wa-chat"
        aria-label={
          open ? "Cerrar chat de WhatsApp" : "Escríbenos por WhatsApp"
        }
        className="pointer-events-auto relative grid size-15 place-items-center rounded-full bg-[#25d366] text-white shadow-floating transition hover:scale-105 hover:bg-[#1ebe5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366]"
      >
        {!open && (
          <span
            className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25d366]"
            aria-hidden="true"
          />
        )}
        <span
          className={`relative transition duration-300 ${open ? "scale-0 rotate-90 opacity-0" : "scale-100 opacity-100"}`}
        >
          <WhatsAppIcon />
        </span>
        <svg
          viewBox="0 0 12 12"
          className={`absolute size-4 transition duration-300 ${open ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`}
          aria-hidden="true"
        >
          <path
            d="M1 1l10 10M11 1 1 11"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
    </div>
  );
}
