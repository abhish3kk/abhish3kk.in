<script setup lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";
import { onMounted, ref, watch } from "vue";

const darkMode = ref<boolean>(
  localStorage.getItem("theme")
    ? localStorage.getItem("theme") === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches,
);

onMounted(() => {
  setTheme();
});

const setTheme = () => {
  if (darkMode.value) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.removeAttribute("data-theme");
  }
};

watch(darkMode, () => {
  setTheme();
});
</script>
<template>
  <button
    class="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md cursor-pointer"
    @click="darkMode = !darkMode"
  >
    <MoonIcon class="h-6 w-6 text-yellow-500" v-if="!darkMode" />
    <SunIcon class="h-6 w-6 text-yellow-500" v-else />
  </button>
</template>
