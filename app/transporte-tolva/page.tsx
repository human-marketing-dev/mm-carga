import type { Metadata } from "next";
import { UnderConstruction } from "@/components/site/under-construction";

// Provisional: sin indexar hasta que la página tenga contenido
export const metadata: Metadata = {
  title: "Transporte en tolva | MM Carga",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <UnderConstruction title="Transporte en tolva" />;
}
