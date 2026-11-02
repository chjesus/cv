import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import sanity from '@sanity/astro'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://jesuschacon.dev',
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
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Sora',
      cssVariable: '--font-sora',
      weights: [400, 600, 700, 800],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [500, 700],
      fallbacks: ['monospace'],
    },
  ],
})
