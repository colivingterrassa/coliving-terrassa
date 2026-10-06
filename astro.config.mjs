import { defineConfig } from 'astro/config';
import optimitzaFotos from './src/integrations/optimitza-fotos.mjs';

export default defineConfig({
  integrations: [optimitzaFotos()]
});
