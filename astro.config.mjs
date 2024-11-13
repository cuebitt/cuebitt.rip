// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
// @ts-ignore
import sectionize from "@hbsnow/rehype-sectionize";
import alpineIntersectHeading from "./src/util/rehype-alpine-intersect";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import opengraphImages, { presets } from "astro-opengraph-images";
import { readFileSync } from "fs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  }), icon(), alpinejs({ entrypoint: "/src/util/alpine-entrypoint" }), expressiveCode(), mdx(), sitemap(), opengraphImages({
    options: {
      fonts: [{
        name: "Montserrat",
        weight: 400,
        style: "normal",
        data: readFileSync("node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff2"),
      }]
    },
    render: presets.blackAndWhite
  })],
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  site: "https://cuebitt.rip",
  markdown: {
    rehypePlugins: [rehypeHeadingIds, sectionize, alpineIntersectHeading],
  },
});