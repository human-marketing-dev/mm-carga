import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/site/analytics";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { RevealObserver } from "@/components/site/reveal";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { getSettings } from "@/lib/content";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MM Carga",
  description: "Transporte de carga y almacenaje de mercancías en México.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: [DEFAULT_OG_IMAGE] },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { contact, whatsappMessage } = await getSettings();
  return (
    <html
      lang="es-MX"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppButton number={contact.whatsapp} message={whatsappMessage} />
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  );
}
