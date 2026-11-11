import { BasePage, baseMetadata } from "@/components/site/base-page";

// Contenido editable en Sanity (Páginas por base); respaldo local en content/pages/bases.ts.
// Sin indexar ni enlazar hasta que el usuario confirme publicar las páginas por base.
export const generateMetadata = () => baseMetadata("silao");

export default function Page() {
  return <BasePage base="silao" />;
}
