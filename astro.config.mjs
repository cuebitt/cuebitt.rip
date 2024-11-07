// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    alpinejs(),
  ],
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  site: "https://cuebitt.rip",
});
