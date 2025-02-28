import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore(
  "appStore",
  () => {
    const theme = ref<string>("");
    const setTheme = (value: string) => {
      theme.value = value;
      document.documentElement.setAttribute("data-theme", value);
    };

    return {
      theme,
      setTheme,
    };
  },
  {
    persist: true,
  },
);
