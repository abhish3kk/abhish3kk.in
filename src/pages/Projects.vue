<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

interface Project {
  path: string;
  title: string;
  description: string;
  stack: string[];
}

const projects = ref<Project[]>([]);
const query = ref<string>("");

onMounted(() => {
  const mdFiles = import.meta.glob("/src/content/projects/*.md", {
    eager: true,
  });
  projects.value = Object.entries(mdFiles).map(([path, mode]: any) => {
    const { title, description, stack } = mode;
    return {
      path: path.replace("/src/content/projects/", "").replace(".md", ""),
      title: title || "Untitled",
      description: description || "No description available",
      stack: stack.split(",") || [],
    };
  });
});

const filteredProjects = computed<Project[]>(() =>
  query.value === ""
    ? projects.value
    : projects.value.filter(
        (project) =>
          project.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.value.toLowerCase().replace(/\s+/g, "")) ||
          project.description
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.value.toLowerCase().replace(/\s+/g, "")) ||
          project.stack.some((stack) =>
            stack
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.value.toLowerCase().replace(/\s+/g, "")),
          ),
      ),
);
</script>
<template>
  <div class="max-w-4xl mx-auto p-6 font-mono">
    <input
      type="text"
      v-model="query"
      placeholder="Search..."
      class="w-full p-2 mb-4 border rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white"
    />
    <div class="space-y-2">
      <div
        v-for="project in filteredProjects"
        :key="project.path"
        class="flex flex-col md:flex-row items-start md:items-center justify-between p-2 shadow-lg rounded-lg border dark:border-gray-700 hover:shadow transition dark:shadow-[0_0px_10px_rgba(34,197,94,0.15)] dark:hover:shadow-[0_0px_15px_rgba(34,197,94,0.2)]"
      >
        <div class="w-full p-2 rounded-b-lg">
          <h2 class="text-lg font-semibold dark:text-green-400">
            <RouterLink
              :to="`/project/${project.path}`"
              class="hover:text-blue-400"
            >
              {{ project.title }}
            </RouterLink>
          </h2>
          <p class="text-sm dark:text-gray-300">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2 mt-2">
            <span
              v-for="stack in project.stack"
              :key="stack"
              class="text-xs font-medium px-2 py-1 bg-gray-200 dark:bg-gray-700 dark:text-green-300 rounded-lg"
            >
              {{ stack }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
