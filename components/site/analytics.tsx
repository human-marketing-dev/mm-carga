import Script from "next/script";

// Google Analytics 4: solo medición de visitas (sin eventos personalizados).
// Las páginas vistas, desplazamiento y clics salientes los mide GA4 por su cuenta
// (medición mejorada, se configura en Analytics → Flujos de datos).
const GA_ID = "G-GEP1V636BF";

export function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
