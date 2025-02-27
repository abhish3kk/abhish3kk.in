import type { RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import Projects from "@/pages/Projects.vue";
import Project from "@/pages/Project.vue";

export const navRoutes: RouteRecordRaw[] = [
  { path: "/", component: Home, name: "Home" },
  { path: "/projects", component: Projects, name: "Projects" },
];

export const projectRoutes: RouteRecordRaw[] = [
  { path: "/project/:slug", component: Project, props: true },
];
