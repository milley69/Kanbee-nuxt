<template>
  <div class="drawer lg:drawer-open">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div
        class="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur-md transition duration-300 border-b-2"
      >
        <nav class="navbar w-full">
          <div class="flex flex-1 md:gap-1 lg:gap-2">
            <span class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip="Menu">
              <label aria-label="Open menu" for="drawer" class="btn btn-square btn-ghost drawer-button lg:hidden">
                <i class="bx bx-menu bx-sm"></i>
              </label>
            </span>
            <div class="flex items-center gap-2 lg:hidden">
              <nuxt-link to="/"> Kanbee </nuxt-link>
            </div>
          </div>
          <div class="flex-0">
            <ui-theme-switcher />
            <!-- <UiThemeSwitcher /> -->
          </div>
        </nav>
      </div>
      <slot />
    </div>
    <div class="drawer-side z-40">
      <label for="drawer" class="drawer-overlay" aria-label="Close menu"></label>
      <aside class="bg-base-200 w-80 h-[inherit] border-r">
        <div
          class="bg-base-200 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 py-2 backdrop-blur lg:flex h-16 pl-4"
        >
          <i class="bx bx-hash"></i>
          <nuxt-link to="/"> Kanbee </nuxt-link>
        </div>
        <header-main-links>
          <div class="h-4"></div>

          <lazy-header-projects />
        </header-main-links>
        <!--  -->
        <div class="flex-shrink-0">
          <div class="dropdown dropdown-top">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img :src="user?.avatar" :alt="user?.username" />
              </div>
              <h3>{{ user?.username }}</h3>
            </label>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
        <!--  -->
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const { user } = storeToRefs(useUser())
</script>
