// Completa la exportación estática (carpeta out/) para el hosting de IONOS, que no tiene Node:
//  1. Copias redimensionadas de las fotos de public/ (calidad 90) para deploy/image-loader.ts
//  2. .htaccess con HTTPS, redirecciones 301 del WordPress, encabezados de seguridad, 404 y caché
//  3. Formulario en PHP (deploy/ionos/) y su config.php con los datos de Brevo (de variables
//     de entorno; en GitHub vienen de los secretos del repo)
// Uso: npm run build:static
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import sharp from "sharp";
import { robotsTxt, sitemapXml } from "../lib/seo-files.ts";

const OUT = "out";
const PUBLIC = "public";
const WIDTHS = [96, 256, 384, 640, 828, 1200, 1920, 2560]; // imageSizes + deviceSizes de next.config.ts
const rules = JSON.parse(readFileSync("deploy/rules.json", "utf8"));

if (!existsSync(OUT)) throw new Error("No existe out/: corre primero STATIC_EXPORT=1 next build");

// 1 · Imágenes
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
const photos = walk(PUBLIC).filter(
  (p) => /\.(webp|jpe?g|png)$/i.test(p) && !p.startsWith(join(PUBLIC, "og")),
);
let count = 0;
for (const file of photos) {
  const rel = relative(PUBLIC, file).replace(/\.(jpe?g|png)$/i, ".webp");
  const { width: original = 0 } = await sharp(file).metadata();
  for (const w of WIDTHS) {
    const dest = join(OUT, "img", String(w), rel);
    mkdirSync(dirname(dest), { recursive: true });
    await sharp(file)
      .resize({ width: Math.min(w, original), withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(dest);
    count++;
  }
}
console.log(`✓ ${count} imágenes redimensionadas (${photos.length} fotos × ${WIDTHS.length} anchos)`);

// 2 · .htaccess
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const redirectLines = rules.redirects.map((r) => {
  const path = esc(r.from.slice(1));
  const pattern = r.prefix ? `^${path}` : `^${path.replace(/\/$/, "")}/?$`;
  return `RewriteRule ${pattern} ${r.to} [R=301,L]`;
});
const headerLines = rules.securityHeaders.map(
  (h) => `  Header always set ${h.key} "${h.value.replace(/"/g, '\\"')}"`,
);
const htaccess = `# Generado por deploy/build-static.mjs a partir de deploy/rules.json. No editar a mano.
Options -Indexes
DirectoryIndex index.html index.php
ErrorDocument 404 /404.html

<Files "config.php">
  Require all denied
</Files>

<IfModule mod_rewrite.c>
RewriteEngine On

# HTTPS (también detrás del proxy de IONOS) y sin www
RewriteCond %{HTTPS} off
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L]

# Redirecciones 301 de las URLs del WordPress anterior
${redirectLines.join("\n")}
</IfModule>

<IfModule mod_headers.c>
${headerLines.join("\n")}
  Header always unset X-Powered-By
  # Fuera del dominio final (subdominio de prueba, URL temporal de IONOS): no indexar
  <If "%{HTTP_HOST} !~ m#^(www\\.)?mmcarga\\.com$#i">
    Header always set X-Robots-Tag "noindex, nofollow"
  </If>
  # Archivos con hash en el nombre: caché de un año. Fotos: un mes. Páginas: siempre revalidar.
  <If "%{REQUEST_URI} =~ m#^/_next/static/#">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </If>
  <ElseIf "%{REQUEST_URI} =~ m#^/(img|images|brand|og)/#">
    Header set Cache-Control "public, max-age=2592000"
  </ElseIf>
  <ElseIf "%{REQUEST_URI} =~ m#(/|\\.html)$#">
    Header set Cache-Control "no-cache"
  </ElseIf>
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml text/plain application/xml
</IfModule>
`;
writeFileSync(join(OUT, ".htaccess"), htaccess);
console.log(`✓ .htaccess (${rules.redirects.length} redirecciones)`);

// 2b · sitemap.xml y robots.txt (los mismos que sirve el sitio en Node)
writeFileSync(join(OUT, "sitemap.xml"), sitemapXml());
writeFileSync(join(OUT, "robots.txt"), robotsTxt());
console.log(`✓ sitemap.xml (${rules.sitemap.length} URLs) y robots.txt`);

// 3 · Formulario en PHP + config.php
cpSync("deploy/ionos", OUT, { recursive: true });
const env = process.env;
if (env.BREVO_API_KEY && env.FORM_TO_EMAIL && env.FORM_SENDER_EMAIL) {
  const config = {
    BREVO_API_KEY: env.BREVO_API_KEY,
    FORM_TO_EMAIL: env.FORM_TO_EMAIL,
    FORM_SENDER_EMAIL: env.FORM_SENDER_EMAIL,
    FORM_SENDER_NAME: env.FORM_SENDER_NAME ?? "",
    BREVO_LIST_ID: env.BREVO_LIST_ID ?? "",
  };
  const php = Object.entries(config)
    .map(([k, v]) => `  '${k}' => ${JSON.stringify(String(v)).replace(/\$/g, "\\$")},`)
    .join("\n");
  writeFileSync(
    join(OUT, "api/solicitud/config.php"),
    `<?php\n// Generado en el despliegue. No subir al repo.\nreturn [\n${php}\n];\n`,
  );
  console.log("✓ api/solicitud/config.php con los datos de Brevo");
} else {
  console.warn("⚠ Sin BREVO_API_KEY / FORM_TO_EMAIL / FORM_SENDER_EMAIL: el formulario responderá 503");
}
