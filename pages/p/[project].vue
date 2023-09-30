<template>
  <div>
    {{ project.replaceAll('—', ' ') }}
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: ['projects'] })
const { params } = useRoute()

const project = computed(() => (typeof params.project === 'string' ? params.project : params.project[0]))

useHead({ title: project.value })
</script>
