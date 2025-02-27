<script setup lang="ts">
import { Bars3BottomRightIcon } from "@heroicons/vue/24/solid";
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
import { navRoutes } from "../router/routes";

const showMenu = ref<boolean>(false);
const currentRoute = useRoute();
const dropdown = ref<HTMLElement | null>(null);

const closeDropdown = (event: MouseEvent) => {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
    showMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>
<template>
  <div class="w-full p-4 border-b border-gray-300 dark:border-gray-700">
    <div class="flex items-center justify-between">
      <RouterLink
        to="/"
        class="text-lg font-mono text-gray-900 dark:text-light-gray flex items-center"
      >
        <span class="pr-1">~/$</span>
        <span
          class="animate-blink w-2 h-5 bg-gray-900 dark:bg-light-gray"
        ></span>
      </RouterLink>
      <div class="hidden md:flex space-x-6 text-gray-900 dark:text-light-gray">
        <RouterLink
          v-for="route in navRoutes"
          :to="route.path"
          :key="route.name"
          :class="`hover:text-gray-500 ${currentRoute.path === route.path ? 'font-bold' : ''}`"
          >{{ route.name }}</RouterLink
        >
      </div>
      <div class="md:hidden" ref="dropdown">
        <div class="relative inline-block text-left">
          <div>
            <button
              class="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold shadow-xs hover:bg-gray-50 outline-none border-none"
              aria-expanded="true"
              aria-haspopup="true"
              @click="showMenu = !showMenu"
            >
              <Bars3BottomRightIcon class="h-6 w-6" />
            </button>
          </div>
          <div
            :class="`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  ring-1 shadow-lg ring-black/5 dark:ring-white/5 bg-white dark:bg-dark focus:outline-hidden transition-transform duration-100  ${showMenu ? 'opacity-100 scale-100 transform' : 'opacity-0 scale-95 transform pointer-events-none'}`"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <RouterLink
                v-for="route in navRoutes"
                :to="route.path"
                :key="route.name"
                @click="showMenu = !showMenu"
                :class="`hover:text-gray-500 block px-4 py-2 text-sm ${currentRoute.path === route.path ? 'bg-gray-200 dark:bg-black' : 'bg-white dark:bg-dark'}`"
                >{{ route.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
