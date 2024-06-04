import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  //para hacerlo modo servidor : 
  output:'server'
  //hybrid => pero se puede usar 2 en nla pag que queremos
  // const prerender = false
});