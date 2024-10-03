// svelte.config.js
import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
  },
};

