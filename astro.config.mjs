// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is served from https://bobby-jordan.github.io/little-astro-blog/
// If you ever rename the repo to bobby-jordan.github.io, delete the `base` line.
export default defineConfig({
  site: 'https://bobby-jordan.github.io',
  base: '/little-astro-blog',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed' },
  },
});
