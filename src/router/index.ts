import { createRouter, createWebHistory } from "vue-router";
import { navRoutes, projectRoutes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [...navRoutes, ...projectRoutes],
});

export default router;
