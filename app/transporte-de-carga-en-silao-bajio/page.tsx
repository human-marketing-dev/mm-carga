import type { Metadata } from "next";
import { BasePage } from "@/components/site/base-page";
import { basePages } from "@/lib/base-pages";

const data = basePages.silao;

// Sin indexar ni enlazar hasta que el usuario confirme publicar las páginas por base
export const metadata: Metadata = {
  title: data.title,
  description: data.subtitle,
  alternates: { canonical: data.slug },
  robots: { index: false, follow: false },
};

export default function Page() {
  return <BasePage data={data} />;
}
