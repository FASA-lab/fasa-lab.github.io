import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH are injected by the GitHub Actions workflow from the
// repository owner and name, so nothing here changes when the repo is
// transferred to an organization or a custom domain is attached.
// Local dev uses the defaults below.
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  // The search page has no indexable content of its own.
  integrations: [sitemap({ filter: (page) => !page.includes('/search/') })],
});
