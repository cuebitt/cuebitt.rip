import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import * as mdx from "eslint-plugin-mdx";

export default [
	...eslintPluginAstro.configs["jsx-a11y-recommended"],
	eslintConfigPrettier,
	{
		...mdx.flat,
		processor: mdx.createRemarkProcessor({
			lintCodeBlocks: true,
		}),
	},
	{
		...mdx.flatCodeBlocks,
		rules: {
			...mdx.flatCodeBlocks.rules,
		},
	},
];
