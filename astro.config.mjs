import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Update this to your custom domain when configured
  site: process.env.CF_PAGES_URL || 'https://tunadao.ipv.pt',
});
