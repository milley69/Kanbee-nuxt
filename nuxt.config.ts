// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/color-mode'],
  app: {
    head: {
      title: 'Kanbee',
    },
  },
  imports: {
    dirs: ['stores'],
  },
})
