import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import icon from 'astro-icon';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    server: { port: 8080, host: true, open: true },
    vite: {
        resolve: {
            alias: {
                '@': '/src',
                '@app': '/src/app',
                '@pages': '/src/pages',
                '@shared': '/src/shared',
                '@widgets': '/src/widgets',
                '@features': '/src/features',
                '@entities': '/src/entities',
            },
        },
    },
    integrations: [tailwind(), icon(), react()],
})