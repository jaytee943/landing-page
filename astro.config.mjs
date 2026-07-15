// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Project page at https://jaytee943.github.io/landing-page/.
  // Switching to a custom domain later means dropping `base` and adding a CNAME.
  site: 'https://jaytee943.github.io',
  base: '/landing-page',
});
