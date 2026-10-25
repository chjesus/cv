import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import sanity from '@sanity/astro'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

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
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes('/admin'),
    }),
    sanity({
      projectId: 'd1c9n3s6',
      dataset: 'production',
      apiVersion: '2026-10-01',
      useCdn: true,
      studioBasePath: '/admin',
    }),
    react(),
  ],
  adapter: vercel(),
})
