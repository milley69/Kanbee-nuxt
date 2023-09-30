<template>
  <section
    class="bg-base-200 min-h-[calc(100vh-4.2rem)] z-0 w-full lg:w-5/12 lg:border-r-2 flex justify-center items-center overflow-y-hidden"
  >
    <LazyAuthForm />
  </section>
  <section
    class="bg-base-100 min-h-[calc(100vh-4.2rem)] hidden lg:w-7/12 lg:flex justify-center items-center overflow-y-hidden"
  >
    <LazyAuthQuote />
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>
