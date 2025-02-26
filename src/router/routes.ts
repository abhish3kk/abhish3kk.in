import type { RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home, name: "Home" },
  { path: "/projects", component: Projects, name: "Projects" },
];

export default routes;
