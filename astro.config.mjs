// @ts-check
import { defineConfig } from 'astro/config';

// BASE lets the same site build for a subpath (GitHub Pages project site) or the root (Netlify).
export default defineConfig({
  site: process.env.SITE_URL || 'https://conebook-demo.netlify.app',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
