# Design system MM Carga

Fuente: sitio actual https://mmcarga.com (WordPress + Elementor, tema con prefijo `pxl-`). Extraído el 27 oct 2026 del CSS inline de tres bloques personalizados:

- Hero slider (`#mmcarga-slider-…`): navy, botones, badge, tarjeta flotante, tipografía display.
- Sección mapa de bases (`.mmc-mapa-*`): H2, pastilla, etiquetas de ubicación, pines.
- Tarjetas de servicios (`#dh-servicios-…`): tarjetas, botón "Ver más", popup con "Cotizar Ahora".

Vista previa: `/design-system` (noindex).

## Dónde vive

| Qué | Archivo |
| --- | --- |
| Tokens (colores, texto, radios, sombras, animación) | `app/globals.css` (`@theme` de Tailwind v4) |
| Fuente Inter | `app/layout.tsx` (`next/font/google`, variable `--font-inter`) |
| Logo, favicon, certificaciones | `public/brand/`, `app/icon.png`, `public/images/certificaciones/` |
| Componentes | `components/ui/` (`Logo`, `Button`, `Badge`, `Eyebrow`, `LocationTag`, `MapPin`, `ServiceCard`, `FloatingCard`) |

## Incierto o no extraído

- **Paleta inconsistente en el original.** Cada bloque define sus propios azules (#0757D5, #073B83, #0A48A1, #0B56B3, #1456A0). Se conservaron todos como tokens; conviene que el equipo elija uno como primario.
- **Tipografía global del tema.** Solo el hero declara `Inter, Montserrat, …`. El resto hereda del tema, cuyo CSS no fue accesible; se asumió Inter en todo el sitio.
- **Header, footer, contadores, certificaciones, "Sobre nosotros".** Los estiliza el tema `pxl-` desde archivos CSS externos que no se pudieron leer. No hay tokens de ellos.
- **Icono dentro de los botones del hero.** Se sabe que es una flecha blanca; el tamaño y fondo de su caja (`bg-white/16`, 46px) son aproximados.
- **Logo:** solo hay WebP de 336×84 (azul `#0046A4` y blanco). Para nitidez en pantallas grandes conviene el SVG original. El trazo del logo parece Montserrat Bold; sin confirmar.
- **Favicon:** recortado del símbolo "mm" del logo azul (`app/icon.png`, 64px). Reemplazar si el cliente tiene uno oficial.
- **Certificaciones:** 1 Dun & Bradstreet, 2 CANACAR, 3 Transporte Limpio, 4 ISO 9001:2015, 5 OEA, 6 CTPAT (identificados a ojo; el alt de cada una está en `app/design-system/page.tsx`).
- **Imágenes de servicios y fotos:** pendientes; se usa `public/images/placeholder.svg`.
- **Iconos.** El tema usa Flaticon (`flaticon-check`) e imágenes PNG; no hay set de iconos propio que migrar.
