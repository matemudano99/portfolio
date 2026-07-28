// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // TODO: cambia esto por tu dominio final cuando lo tengas.
  site: 'https://tu-dominio.com',
  integrations: [react()],
});
