import adapterAuto from "@sveltejs/adapter-auto";
import adapterNode from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: !process.env.BUILD_NODE ? adapterAuto() : adapterNode()
	}
};

export default config;
