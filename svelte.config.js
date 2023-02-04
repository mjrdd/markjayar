import adapterAuto from "@sveltejs/adapter-auto";
import adapterNode from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: !process.env.ADAPTER_NODE ? adapterAuto() : adapterNode(),

		alias: {
			"$components/*": "src/components/*"
		}
	}
};

export default config;
