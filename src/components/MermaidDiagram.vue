<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import mermaid from "mermaid";
import { useAppStore } from "@/store/appStore";
import { storeToRefs } from "pinia";

const props = defineProps<{ code: string }>();
const diagram = ref<string>("");
const mermaidRef = ref<HTMLDivElement | null>(null);
const uniqueId = `mermaid-${Date.now()}`;
const { theme } = storeToRefs(useAppStore());

watch(
  () => props.code,
  async () => {
    diagram.value = decodeURIComponent(props.code);
    await renderMermaid();
  },
  { immediate: true },
);

async function renderMermaid() {
  let mermaidTheme = theme.value === "dark" ? theme.value : "forest";
  diagram;
  mermaid.initialize({
    startOnLoad: false,
    theme: mermaidTheme as
      | "default"
      | "base"
      | "dark"
      | "forest"
      | "neutral"
      | "null",
  });

  if (mermaidRef.value) {
    const { svg } = await mermaid.render(
      uniqueId,
      decodeURIComponent(props.code),
    );
    mermaidRef.value.innerHTML = svg;
  }
  await mermaid.run();
}

watch(
  () => theme.value,
  async () => {
    await renderMermaid();
  },
);

onMounted(renderMermaid);
</script>

<template>
  <div ref="mermaidRef"></div>
</template>
