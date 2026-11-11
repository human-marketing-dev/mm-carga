# Sanity Studio · MM Carga

Editor de contenido del sitio (textos, imágenes y SEO). Proyecto de Sanity `hbnkjqig`,
dataset `production`. Se publica en https://mm-carga.sanity.studio

Requiere Node 22.12 o superior.

## Primera vez (desde tu computadora)

```bash
cd studio
npm install
npx sanity login        # inicia sesión con la cuenta de Sanity
npm run migrar          # sube el contenido y las fotos actuales del sitio
npx sanity deploy       # publica el Studio en mm-carga.sanity.studio
```

`npm run migrar` no toca documentos que ya existan en Sanity. Para reemplazarlos con el
contenido del repo (se pierden los cambios hechos en el Studio): `npm run migrar -- --forzar`.

## Qué se edita y qué no

- **Editable:** textos, fotos (con alt obligatorio), título y descripción para Google, datos
  de contacto, bases, certificaciones, preguntas frecuentes y tarjetas.
- **Fijo en el código:** URLs, orden y diseño de las secciones, eyebrows, botones, el mapa
  y el formulario. Las páginas no se pueden crear ni borrar desde el Studio.
- **Enlaces dentro de un párrafo:** `[texto](/ruta/)`.

## Cómo llega el contenido al sitio

El sitio (Next.js) lee Sanity si tiene `NEXT_PUBLIC_SANITY_PROJECT_ID=hbnkjqig`. Si un
campo viene vacío o Sanity no responde, usa el contenido local de `content/`.

Al publicar en el Studio, un webhook de Sanity llama a `POST /api/revalidar` con el
encabezado `x-revalidar-secreto` (igual a `SANITY_REVALIDATE_SECRET` en el servidor) y el
cambio se ve en la siguiente visita.
