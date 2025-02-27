<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import mermaid from "mermaid";

const props = defineProps<{ code: string }>();
const diagram = ref("");

watch(
  () => props.code,
  async () => {
    console.log("🚀 ~ watch ~ props.code:", props.code);

    diagram.value = decodeURIComponent(props.code);
    await renderMermaid();
  },
  { immediate: true },
);

async function renderMermaid() {
  let theme = localStorage.getItem("theme");
  theme = theme && theme === "dark" ? theme : "base";
  mermaid.initialize({
    startOnLoad: false,
    theme: theme as "default" | "base" | "dark" | "forest" | "neutral" | "null",
    look: "handDrawn",
  });

  await mermaid.run();
}

onMounted(renderMermaid);
</script>

<template>
  <div class="mermaid" v-html="diagram"></div>
</template>
