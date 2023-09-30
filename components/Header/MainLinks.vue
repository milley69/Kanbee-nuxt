<template>
  <ul class="menu menu-sm lg:menu-md px-4 py-0">
    <li v-for="link in links" :key="link.title">
      <nuxt-link :to="link.path" activeClass="active">
        <i :class="'bx ' + link.icon"></i>
        {{ link.title }}
      </nuxt-link>
    </li>
    <slot />
  </ul>
</template>

<script lang="ts" setup>
const links = [
  { path: '/', title: 'Inbox', icon: 'bx-popsicle' },
  { path: '/profile', title: 'My Activity', icon: 'bx-popsicle' },
  { path: '/time', title: 'Time', icon: 'bx-popsicle' },
]
</script>
