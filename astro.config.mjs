// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
// @ts-ignore
import sectionize from "@hbsnow/rehype-sectionize";
import alpineIntersectHeading from "./src/util/rehype-alpine-intersect";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    alpinejs({entrypoint: '/src/util/alpine-entrypoint'}),
    mdx(),
  ],
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  site: "https://cuebitt.rip",
  markdown: {
    rehypePlugins: [rehypeHeadingIds, sectionize, alpineIntersectHeading],
  }
});
