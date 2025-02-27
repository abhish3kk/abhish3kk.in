<script setup lang="ts">
import md from "@/utils/markdown";
import matter from "gray-matter";
import { compile, computed, onMounted, shallowRef } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const rawContent = shallowRef("");
const mdFiles = import.meta.glob<{ default: string }>(
  "/src/content/projects/*.md",
  { eager: true, query: "raw" },
);

const compiledContent = computed(() => compile(rawContent.value));

onMounted(async () => {
  const filePath = `/src/content/projects/${route.params.slug}.md`;
  const mdFileText = mdFiles[filePath].default;

  const parsed = matter(mdFileText, {
    engines: {},
  });

  rawContent.value = md.render(parsed.content);
});
</script>
<template>
  <article class="prose dark:prose-invert">
    <component :is="compiledContent" />
  </article>
</template>
<style lang="css" scoped>
.prose {
  max-width: 100ch;
}
</style>
