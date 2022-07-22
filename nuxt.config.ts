import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        [
            '@uniformdev/uniform-nuxt',
            {
                projectId: process.env.UNIFORM_PROJECT_ID,
                readOnlyApiKey: process.env.UNIFORM_API_KEY,
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
