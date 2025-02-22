// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		}),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: false
		},
		alias: {
			$lib: 'src/lib',
			$routes: 'src/routes',
		},
		vite: {
			// per: https://github.com/sveltejs/kit/issues/4504#issuecomment-1135338008
			// NOTE: this must be ON during build, must be OFF during dev
			// ssr: { noExternal: ['pixi.js'] }
		}
	}
};

export default config;
