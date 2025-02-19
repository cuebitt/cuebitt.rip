// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      components: {
        Head: "./src/components/Head.astro",
      },
      sidebar: [
        {
          label: "Characters",
          autogenerate: { directory: 'characters' },
        },
      ],
      customCss: [
        "./src/styles/global.css",
      ]
    }),

  ],

  vite: {
    plugins: [tailwindcss()],
  },
});