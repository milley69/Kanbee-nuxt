<template>
  <nuxt-link to="/help" class="btn w-full justify-start group" ref="infoBtn">
    <span class="w-10">
      <i class="bx bx-info-circle bx-sm" :class="{ 'bx-tada': isHoverInfo }"></i>
    </span>
    Help
  </nuxt-link>
  <div class="dropdown dropdown-top w-full" v-if="user">
    <label tabindex="0" class="btn w-full justify-start">
      <div class="w-10">
        <img :src="user?.avatar" :alt="user?.username" class="mask mask-squircle" />
      </div>
      {{ user?.username }}
    </label>
    <ul tabindex="0" class="mb-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a class="justify-between">
          Profile
          <span class="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li @click="logOut"><a>Logout</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useElementHover } from '@vueuse/core'
import { storeToRefs } from 'pinia'

const { logOut } = useAuth()

const { user } = storeToRefs(useUser())

const infoBtn = ref<HTMLParagraphElement | null>()
const isHoverInfo = useElementHover(infoBtn)
</script>
