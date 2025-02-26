<script setup lang="ts">
import DarkLight from "./components/DarkLight.vue";
import Nav from "./components/Nav.vue";
</script>

<template>
  <div
    class="flex flex-col min-h-screen bg-gray-100 dark:bg-dark text-gray-900 dark:text-light-gray transition-colors duration-300"
  >
    <div class="flex flex-1 justify-center sm:px-6 lg:px-8">
      <div class="w-full sm:max-w-4xl rounded-lg p-0 sm:p-4 space-y-4">
        <Nav />
        <div class="px-4">
          <RouterView />
        </div>
      </div>
    </div>
    <DarkLight />
  </div>
</template>
