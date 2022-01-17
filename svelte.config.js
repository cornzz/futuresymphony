import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	onwarn: (warning, handler) => {
		const { code, frame } = warning;
		if (code === "css-unused-selector")
			return;

		handler(warning);
	},

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),

		router: false,

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
