<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Project {
  path: string;
  title: string;
  description: string;
  stack: string[];
}

const projects = ref<Project[]>([]);

onMounted(async () => {
  const mdFiles = import.meta.glob("/src/content/projects/*.md", {
    eager: true,
  });
  console.log("🚀 ~ onMounted ~ mdFiles:", mdFiles);
  projects.value = Object.entries(mdFiles).map(([path, mode]: any) => {
    const { title, description, stack } = mode;
    return {
      path: path.replace("/src/content/projects/", "").replace(".md", ""), // Extract slug
      title: title || "Untitled",
      description: description || "No description available",
      stack: stack.split(",") || [],
    };
  });
});
</script>
<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="space-y-4">
      <div
        v-for="project in projects"
        :key="project.path"
        class="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition"
      >
        <div>
          <h2 class="text-lg font-semibold text-gray-800">
            <RouterLink
              :to="`/project/${project.path}`"
              class="hover:text-blue-600"
            >
              {{ project.title }}
            </RouterLink>
          </h2>
          <p class="text-sm text-gray-600">{{ project.description }}</p>
        </div>
        <div class="flex flex-wrap gap-2 mt-2 md:mt-0">
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="text-xs font-medium px-2 py-1 bg-gray-100 rounded-lg"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
