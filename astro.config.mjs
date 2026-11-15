import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Placeholder hasta comprar el dominio definitivo (ver plan.md, fase 6).
export const SITE = "https://rodrigovillalba.workers.dev";

export default defineConfig({
  site: SITE,
  output: "static",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: "github-dark-default" },
  },
});
