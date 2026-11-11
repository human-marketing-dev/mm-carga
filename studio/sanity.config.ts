import { esESLocale } from "@sanity/locale-es-es";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes/documents";
import { SINGLETON_TYPES, structure } from "./structure";

export default defineConfig({
  name: "mm-carga",
  title: "MM Carga",
  projectId: "hbnkjqig",
  dataset: "production",
  plugins: [structureTool({ structure }), esESLocale()],
  schema: {
    types: schemaTypes,
    // Las páginas son fijas: no se crean documentos nuevos desde el botón "+"
    templates: (templates) =>
      templates.filter((t) => !SINGLETON_TYPES.has(t.schemaType)),
  },
  document: {
    // Ni duplicar ni borrar páginas: solo editar y publicar
    actions: (actions, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? actions.filter((a) =>
            ["publish", "discardChanges", "restore"].includes(a.action ?? ""),
          )
        : actions,
    newDocumentOptions: (prev) =>
      prev.filter((t) => !SINGLETON_TYPES.has(t.templateId)),
  },
});
