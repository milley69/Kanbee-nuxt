import type { User } from '@/types'
const headers = new Headers()
headers.append('Content-Type', 'application/json')
headers.append('Accept', 'application/json')

export const useAuth = () => {
  const { setUser } = useUser()
  const router = useRouter()
  const { $URL } = useNuxtApp()

  const signUp = async (email: string, password: string, username: string) => {
    const data = await $fetch(`${$URL}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
    })
    if (!data) return null
    router.push('/')
  }

  const signIn = async (email: string, password: string) => {
    // const data = await fetch('http://localhost:3555/api/auth/signin', {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: {
    //     // 'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    // if (!data) return null
    // return data

    try {
      const data = await fetch(`${$URL}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      })
      return data
    } catch (error) {
      console.log('error: ', error)
    }
  }

  const logOut = async () => {
    await $fetch(`${$URL}/auth/signout`, {
      method: 'GET',
    })
    router.push('/sign-in')
  }

  const initUser = async () => {
    console.log('$URL: ', $URL)
    const uid = useCookie('_uid').value
    if (!uid && typeof uid !== 'string') return
    try {
      const data = await $fetch<Record<'user', User> | null>(`${$URL}/users/${uid}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      if (data) setUser(data.user)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  return { signIn, signUp, logOut, initUser }
}
