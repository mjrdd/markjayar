/** @type {import('prettier').Config} */
const config = {
	useTabs: true,
	trailingComma: "none",
	printWidth: 100,
	bracketSameLine: true,
	plugins: [
		// require("prettier-plugin-svelte")
		require("prettier-plugin-tailwindcss")
	],
	pluginSearchDirs: ["."],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }]
};

module.exports = config;
