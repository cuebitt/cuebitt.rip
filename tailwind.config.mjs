import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        topographicLight: "url('/src/pages/_index/topographic-light.svg')",
        topographicDark: "url('/src/pages/_index/topographic-dark.svg')",
        wavesLight: "url('/src/pages/_index/waves-light.svg')",
        wavesDark: "url('/src/pages/_index/waves-dark.svg')",
      },
      transitionProperty: {
        "border-radius": "border-radius",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        asap: ["Asap", "sans-serif"],
      },
    },
  },
  plugins: [typography()],
};
