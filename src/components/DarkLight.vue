<script setup lang="ts">
import { useAppStore } from "@/store/appStore";
import { APP_THEMES } from "@/types";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";
import { onMounted, ref, watch } from "vue";

const { theme, setTheme } = useAppStore();

const darkMode = ref<boolean>();

onMounted(() => {
  darkMode.value = theme
    ? theme === APP_THEMES.DARK
    : window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(darkMode ? APP_THEMES.DARK : APP_THEMES.LIGHT);
});

watch(darkMode, (value) => {
  setTheme(value ? APP_THEMES.DARK : APP_THEMES.LIGHT);
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
