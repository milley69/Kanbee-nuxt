export default defineNuxtRouteMiddleware((to, from) => {
  const isAuth = Boolean(useCookie('token').value && useCookie('_uid'))

  if (!isAuth && to.path !== '/sign-in') {
    return navigateTo('/sign-in')
  } else if (isAuth && (to.path === '/sign-in' || from.path === '/sign-in')) {
    return navigateTo('/')
  }

  return true
})
