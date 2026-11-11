import { ServicePage, serviceMetadata } from "@/components/site/service-page";

// Contenido editable en Sanity (Servicios); respaldo local en content/services.ts
const SLUG = "/transporte-tolva/";

export const generateMetadata = () => serviceMetadata(SLUG);

export default function Page() {
  return <ServicePage slug={SLUG} />;
}
