/* USER PINIA */

export interface UserPinia {
  user: User | null
  id: string | null
  status: authStatus
  errorForm: userForm
}

export interface User {
  email: string
  username: string
  avatar: string
  createAt: Date
  updateAt: Date
  id: string
}

export type userForm = Record<'name' | 'email' | 'password', string>
export type authStatus = 'authenticated' | 'unauthenticated' | 'loading'
