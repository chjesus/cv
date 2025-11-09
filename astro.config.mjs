import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	server: {
		port: 8080,
		host: true,
		open: true,
	},
	integrations: [tailwind()],
})
