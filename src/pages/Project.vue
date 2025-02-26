<script setup lang="ts">
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const content = ref();

onMounted(async () => {
  const response = await fetch(`/src/content/projects/${route.params.slug}.md`);
  const text = await response.text();
  console.log("🚀 ~ onMounted ~ text:", text);
  const parsed = matter(text);
  console.log("🚀 ~ onMounted ~ parsed:", parsed);

  content.value = new MarkdownIt().render(parsed.content);
});
</script>
<template>
  <article class="prose dark:prose-invert" v-html="content"></article>
</template>
