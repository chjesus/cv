import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import react from '@astrojs/react'

import tailwindcss from '@tailwindcss/vite'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
	server: { port: 8080, host: true, open: true },
	output: 'server',
	vite: {
		resolve: {
			alias: {
				'@': '/src',
				'@app': '/src/app',
				'@pages': '/src/pages',
				'@shared': '/src/shared',
				'@widgets': '/src/widgets',
				'@entities': '/src/entities',
			},
		},
		plugins: [tailwindcss()],
	},
	integrations: [icon(), react()],
	adapter: vercel(),
})
