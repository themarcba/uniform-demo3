import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
            contentfulDeliveryApiKey: process.env.CONTENTFUL_DELIVERY_API_KEY,
        },
    },
    modules: [
        '@uniformdev/uniform-nuxt',
    ],
    uniform: {
        projectId: process.env.UNIFORM_PROJECT_ID,
        readOnlyApiKey: process.env.UNIFORM_API_KEY,
    }
})
