export default defineNuxtPlugin((nuxtApp) => ({
  provide: {
    URL:
      import.meta.env.VITE_KANBEE === 'dev'
        ? 'http://localhost:3555/api'
        : 'https://kanbee-nest-production.up.railway.app/api',
  },
}))
