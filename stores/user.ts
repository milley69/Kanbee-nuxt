import type { User, UserPinia, authStatus } from '@/types'
import { defineStore } from 'pinia'

export const useUser = defineStore('UserPinia', {
  state: (): UserPinia => ({
    user: null,
    id: null,
    status: 'unauthenticated',
    errorForm: {
      name: '',
      email: '',
      password: '',
    },
  }),
  getters: {
    isAuth({ status, user }) {
      return status === 'authenticated' && !!user
    },
  },
  actions: {
    changeStatus(status: authStatus) {
      this.status = status
      if (status === 'authenticated') useCookie('isAuth').value = 'true'
      else if (status === 'unauthenticated') useCookie('isAuth').value = 'false'
    },
    setUser(user: User) {
      this.user = user
      this.id = user.id
      this.changeStatus('authenticated')
    },
    removeUser() {
      this.user = null
      this.id = null
      this.changeStatus('unauthenticated')
      useRouter().push('/sign-in')
    },
    setError(to: 'name' | 'email' | 'password', error: string) {
      this.errorForm[to] = error
    },
    removeError() {
      this.errorForm = { name: '', email: '', password: '' }
    },
  },
})
