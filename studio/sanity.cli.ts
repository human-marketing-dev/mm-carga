import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: { projectId: "hbnkjqig", dataset: "production" },
  // Studio publicado en https://mm-carga.sanity.studio
  studioHost: "mm-carga",
  deployment: { autoUpdates: true },
});
