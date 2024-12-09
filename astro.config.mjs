// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import astroIcon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://ecuadorintech.org",
  integrations: [tailwind(), alpinejs(), astroIcon()]
});