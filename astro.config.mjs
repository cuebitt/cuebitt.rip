// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://cuebitt.rip",
	image: {
		domains: ["lh3.googleusercontent.com"],
	},
	integrations: [
		starlight({
			title: "😇 Cuebitt's Notebook",
			favicon: "/favicon.ico",
			social: [
				{ icon: "blueSky", label: "Bluesky", href: "https://bsky.app/profile/cuebitt.rip" },
				{ icon: "github", label: "GitHub", href: "https://github.com/cuebitt/cuebitt.rip" }
			],
			components: {
				Head: "./src/components/Head.astro",
			},
			sidebar: [
				{
					label: "Characters",
					autogenerate: { directory: "characters" },
				},
				{
					label: "Web Dev",
					autogenerate: { directory: "web-dev" },
				}
			],
			customCss: ["./src/styles/global.css"],
		}),
	],

	vite: {
		// @ts-ignore
		plugins: [tailwindcss()],
	},
});
