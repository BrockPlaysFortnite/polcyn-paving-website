// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: swap to Polcyn's real domain when they own one.
// For now we deploy to GitHub Pages at <user>.github.io/<repo>/ — so we need a base path.
export default defineConfig({
  site: 'https://brockplaysfortnite.github.io',
  base: '/polcyn-paving-website',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
