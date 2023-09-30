<template>
  <li v-for="(link, idx) in namesProjects" :key="idx">
    <nuxt-link :to="link" active-class="active">
      <i class="bx bx-hash text-primary"></i>
      {{ link.slice(1).replaceAll('—', ' ') }}
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const { namesProjects } = storeToRefs(useProjects())
</script>
