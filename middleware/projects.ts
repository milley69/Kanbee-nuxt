import { useProjects } from '@/stores/projects'
import { storeToRefs } from 'pinia'

export default defineNuxtRouteMiddleware((to, from) => {
  const { namesProjects } = storeToRefs(useProjects())

  if (!namesProjects.value.includes(to.path)) {
    return navigateTo('/')
  }
})
