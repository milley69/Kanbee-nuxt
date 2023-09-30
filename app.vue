<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Kanbee | ${titleChunk}` : 'Kanbee'
  },
})
// import type { User } from '@/types'
// const { setUser } = useUser()

// const initUser = async () => {
//   const uid = useCookie('_uid').value
//   if (!uid && typeof uid !== 'string') return
//   const { data } = await useFetch<Record<string, User>>(`http://localhost:3555/api/users/${uid}`, {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//     credentials: 'include',
//   })
//   if (data.value) setUser(data.value.user)
// }

// onMounted(() => {
//   initUser()
//   // if ('_uid' in getCookie)
//   // initUser()
//   // setUser({
//   //   name: 'milley',
//   //   email: 'qwe@qwe.qwe',
//   //   avatar: 'https://cdn.discordapp.com/avatars/1071044442598932560/a619d62eeeba62890a1ee282e6bbc0e8.webp?size=128',
//   //   uid: '12315648756123',
//   // })
// })
</script>

<style>
.qwe {
  border: 1px solid salmon;
}
.qwe2 > * {
  border: 1px solid salmon;
}
.qwe3 * {
  border: 1px solid salmon;
}
</style>
