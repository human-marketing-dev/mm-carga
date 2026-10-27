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
| Componentes | `components/ui/` (`Button`, `Badge`, `Eyebrow`, `LocationTag`, `MapPin`, `ServiceCard`, `FloatingCard`) |

## Incierto o no extraído

- **Paleta inconsistente en el original.** Cada bloque define sus propios azules (#0757D5, #073B83, #0A48A1, #0B56B3, #1456A0). Se conservaron todos como tokens; conviene que el equipo elija uno como primario.
- **Tipografía global del tema.** Solo el hero declara `Inter, Montserrat, …`. El resto hereda del tema, cuyo CSS no fue accesible; se asumió Inter en todo el sitio.
- **Header, footer, contadores, certificaciones, "Sobre nosotros".** Los estiliza el tema `pxl-` desde archivos CSS externos que no se pudieron leer. No hay tokens de ellos.
- **Icono dentro de los botones del hero.** Se sabe que es una flecha blanca; el tamaño y fondo de su caja (`bg-white/16`, 46px) son aproximados.
- **Logo, favicon e imágenes.** No se descargaron (el entorno bloquea mmcarga.com). Las imágenes de la vista previa se cargan remoto desde `mmcarga.com/wp-content/uploads` (configurado en `next.config.ts`, temporal). URLs del logo: `/wp-content/uploads/2023/11/logo-mm-carga.png` y `/wp-content/uploads/2026/06/logo-mm-carga-azul.png`.
- **Iconos.** El tema usa Flaticon (`flaticon-check`) e imágenes PNG; no hay set de iconos propio que migrar.
