<template>
  <div>
    <pre>
    {{ user }}
   </pre
    >
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
const { user } = storeToRefs(useUser())

useHead({ title: user.value?.username ?? 'Profile' })
</script>
