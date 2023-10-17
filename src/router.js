import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home.vue";
import ProjectsPage from "./pages/Projects.vue";
import ProjectShowPage from "./pages/ProjectShow.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsPage,
  },
  {
    path: "/project/:slug",
    name: "project.show",
    component: ProjectShowPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };