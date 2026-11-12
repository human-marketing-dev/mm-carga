"use client";

import Script from "next/script";
import { useEffect } from "react";

// Google Tag Manager. GA4 y sus eventos se configuran dentro del contenedor de GTM.
export const GTM_ID = "GTM-5N8LBG8C";

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

/** Manda un evento al dataLayer de GTM (p. ej. generate_lead al enviar el formulario) */
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

export function Analytics() {
  // Clics a WhatsApp, teléfono y correo en cualquier parte del sitio
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a");
      const href = a?.getAttribute("href") ?? "";
      const page = window.location.pathname;
      if (href.startsWith("https://wa.me/")) trackEvent("whatsapp_click", { page });
      else if (href.startsWith("tel:")) trackEvent("phone_click", { page, phone: href.slice(4) });
      else if (href.startsWith("mailto:")) trackEvent("email_click", { page });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}
