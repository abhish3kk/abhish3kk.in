import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Markdown from "unplugin-vue-markdown/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    tailwindcss(),
    Markdown({
      markdownItOptions: {
        html: true,
      },
    }),
    nodePolyfills(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
