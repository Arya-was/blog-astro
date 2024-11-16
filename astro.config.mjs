import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // atau '@astrojs/vercel/edge' jika menggunakan Edge Functions

export default defineConfig({
  output: 'server', // Wajib "server" untuk deploy di Vercel
  adapter: vercel(),
});
