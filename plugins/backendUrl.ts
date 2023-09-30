export default defineNuxtPlugin((nuxtApp) => {
  const URL =
    import.meta.env.VITE_KANBEE === 'dev'
      ? 'http://localhost:3555/api'
      : 'https://kanbee-nest-production.up.railway.app/api'

  return {
    provide: {
      URL,
    },
  }
})
