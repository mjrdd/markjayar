/** @type {import('prettier').Config} */
const config = {
	useTabs: true,
	trailingComma: "none",
	printWidth: 120,
	bracketSameLine: true,
	plugins: [
		require("prettier-plugin-svelte"),
		require("prettier-plugin-css-order"),
		require("prettier-plugin-tailwindcss")
	],
	pluginSearchDirs: false,
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }]
};

module.exports = config;
