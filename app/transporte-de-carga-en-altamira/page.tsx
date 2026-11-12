import { BasePage, baseMetadata } from "@/components/site/base-page";

// Contenido editable en Sanity (Páginas por base); respaldo local en content/pages/bases.ts.
export const generateMetadata = () => baseMetadata("altamira");

export default function Page() {
  return <BasePage base="altamira" />;
}
