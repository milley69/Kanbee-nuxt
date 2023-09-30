<template>
  <section
    class="bg-base-200 min-h-[calc(100vh-4.2rem)] z-0 w-full lg:w-5/12 lg:border-r-2 flex justify-center items-center overflow-y-hidden"
  >
    <LazyAuthForm />
  </section>
  <section
    class="bg-base-100 min-h-[calc(100vh-4.2rem)] hidden lg:w-7/12 lg:flex justify-center items-center overflow-y-hidden"
  >
    <ClientOnly>
      <LazyAuthQuote v-if="!isMobile" />
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
definePageMeta({ layout: 'auth' })
useHead({ title: 'Authorization' })

const isMobile = useBreakpoints({ lg: 1024 }).smallerOrEqual('lg')

onMounted(() => {
  const isAuth = Boolean(useCookie('token').value && useCookie('_uid').value)
  if (isAuth) useRouter().push('/')
})
</script>
