export const useQuotes = () => {
  const getQuotes = async (id: number) => {
    const q = await $fetch('https://jsonplaceholder.typicode.com/comments/' + id)
    return q
  }

  return { getQuotes }
}
