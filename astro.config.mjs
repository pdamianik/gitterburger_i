// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  site: import.meta.env.PROD ? "https://pdamianik.github.io" : undefined,
  base: import.meta.env.PROD ? "gitterburger_i/" : "",
});
