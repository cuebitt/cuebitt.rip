// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    alpinejs(),
    mdx(),
  ],
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  site: "https://cuebitt.rip",
});
