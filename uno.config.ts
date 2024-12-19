import {
  presetUno,
  presetTypography,
  presetIcons,
  presetWebFonts,
  defineConfig,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno({
      dark: "media",
    }),
    presetTypography({
      cssExtend: {
        h1: {
          "--uno-apply":
            "underline decoration-violet-300 dark:decoration-violet-500 font-bold",
        },
      },
    }),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        montserrat: "Montserrat",
      },
    }),
  ],
  transformers: [transformerDirectives()],
  theme: {
    transitionProperty: {
      "border-radius": "border-radius",
    },
  },
});
