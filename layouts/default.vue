<template>
  <Body class="transition duration-300">
    <Header>
      <main class="max-w-[100vw] px-6 pb-16 xl:pr-2">
        <nuxt-page />
      </main>
    </Header>
  </Body>
</template>

<script lang="ts" setup>
const { initUser } = useAuth()

onMounted(async () => {
  await initUser()
})
</script>
