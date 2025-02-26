import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import pinia from "./store";
import i18n from "./i18n";
import router from "./router";

const app = createApp(App);
app.use(pinia);
app.use(i18n);
app.use(router);
app.mount("#app");
