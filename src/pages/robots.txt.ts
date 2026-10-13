import type { APIRoute } from 'astro';
import { url } from '../utils';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(url('sitemap-index.xml'), site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`);
};
