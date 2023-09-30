<template>
  <span class="loading loading-ring w-12" v-if="isLoading"></span>
  <div class="relative flex flex-col gap-6" v-else>
    <div class="absolute select-none opacity-60 -top-12 -left-12">
      <i class="bx bxs-quote-alt-left text-neutral !text-7xl"></i>
    </div>
    <blockquote class="z-10 max-w-lg text-3xl">
      {{ quote.text }}
    </blockquote>
    <div class="flex items-center gap-4">
      <div class="avatar inline-block">
        <div class="w-12 mask mask-squircle">
          <img :src="quote.user.avatar" :alt="quote.user.name" />
        </div>
      </div>

      <span class="flex flex-col">
        <cite class="not-italic font-medium whitespace-nowrap">@{{ quote.user.name }}</cite>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getQuotes } = useQuotes()

const isLoading = computed(() => quote.text === '' && quote.user.name === '')

const quote = reactive({
  user: {
    name: '',
    // avatar: 'https://cdn.discordapp.com/avatars/1071044442598932560/a619d62eeeba62890a1ee282e6bbc0e8.webp?size=128',
    avatar: 'http://localhost:3555/api/files/profile-image/meow5.png',
  },
  text: '',
})

const generateRandom = (maxLimit = 100) => Math.floor(Math.random() * maxLimit)

onMounted(async () => {
  const res: any = await getQuotes(generateRandom(500))
  if (res) {
    quote.user.name = res.name
    quote.text = res.body
  }
})
</script>
