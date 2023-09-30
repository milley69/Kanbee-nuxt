<template>
  <div class="drawer md:drawer-open">
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
      <aside class="bg-base-200 w-80 h-[inherit] border-r flex flex-col justify-between">
        <div>
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
        </div>
        <div class="px-4 mb-4">
          <header-actions />
        </div>
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
