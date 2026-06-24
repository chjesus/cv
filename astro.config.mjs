import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'

import tailwindcss from '@tailwindcss/vite'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
	site: 'https://portfolio-jesus.com',
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
	integrations: [icon(), sitemap()],
  adapter: vercel(),
  image: {
    service: {
      // Forzar a Astro a usar el optimizador nativo de Vercel en la nube
      entrypoint: 'astro/assets/services/vercel'
    }
  }
})
