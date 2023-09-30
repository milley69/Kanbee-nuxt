import type { Quotes } from '@/types'

export const useQuotes = () => {
  const { $URL } = useNuxtApp()
  const getQuotes = async () => {
    const quote = await $fetch<Quotes>(`${$URL}/quotes`)
    return quote
  }

  return { getQuotes }
}
