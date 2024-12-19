// @ts-check
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
// @ts-ignore
import sectionize from "@hbsnow/rehype-sectionize";
import alpineIntersectHeading from "./src/util/rehype-alpine-intersect";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    alpinejs({ entrypoint: "/src/util/alpine-entrypoint" }),
    expressiveCode(),
    mdx(),
    sitemap(),
  ],
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  site: "https://cuebitt.rip",
  markdown: {
    rehypePlugins: [rehypeHeadingIds, sectionize, alpineIntersectHeading],
  },
});
