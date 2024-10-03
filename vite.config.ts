import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from 'dotenv';

dotenv.config();

export default {
  plugins: [sveltekit()],
  define: {
    'process.env': process.env,
  },
};

