import { defineNuxtConfig } from 'nuxt'
import manifestJson from './lib/context/context-manifest.json';
import type { ManifestV2 } from '@uniformdev/context';

export default defineNuxtConfig({
    modules: [
        [
            '@uniformdev/uniform-nuxt',
            {
                projectId: process.env.UNIFORM_PROJECT_ID,
                readOnlyApiKey: process.env.UNIFORM_API_KEY,
                manifest: manifestJson as ManifestV2,
                defaultConsent: true,
            },
        ],
    ],
    vite: {
        optimizeDeps: {
            include: ['rfdc', 'retry', 'p-throttle', 'p-retry'],
        },
    },
    build: {
        transpile: [
            '@uniformdev/uniform-nuxt',
            '@uniformdev/canvas-vue',
            '@uniformdev/context-vue',
            '@uniformdev/canvas',
            '@uniformdev/context',
            // uncomment this for netlify build
            // process.env.NODE_ENV === 'production' && 'contentful',
        ],
    },
})
