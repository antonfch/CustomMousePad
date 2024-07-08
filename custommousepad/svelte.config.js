import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	adapter: adapter({
		runtime: 'nodejs18.x'
	})
};

export default config;
