/**
 * Copia a Sanity el SEO (title y description) de las 5 páginas por base tal como está
 * en content/pages/bases.ts. Solo toca esos dos campos; lo demás queda igual.
 * Correr desde studio/ con una sesión de Sanity iniciada:
 *
 *   npx sanity login
 *   npm run seo-bases
 */
import { getCliClient } from "sanity/cli";
import { basePages } from "../../content/pages/bases";

const client = getCliClient({ apiVersion: "2025-02-19" });

async function main() {
  for (const [key, page] of Object.entries(basePages)) {
    const id = `base-${key}`;
    const seo = { "seo.title": page.seo.title, "seo.description": page.seo.description };
    for (const docId of [id, `drafts.${id}`]) {
      const exists = await client.getDocument(docId);
      if (!exists) continue;
      await client.patch(docId).set(seo).commit();
      console.log(`✓ ${docId}: ${page.seo.title}`);
    }
  }
  console.log("Listo. El sitio se actualiza solo por el webhook de revalidación.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
