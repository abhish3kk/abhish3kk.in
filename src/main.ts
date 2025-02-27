import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import pinia from "./store";
import i18n from "./i18n";
import router from "./router";
import MermaidDiagram from "./components/MermaidDiagram.vue";

const app = createApp(App);
app.component("MermaidDiagram", MermaidDiagram);
app.use(pinia);
app.use(i18n);
app.use(router);
app.mount("#app");
