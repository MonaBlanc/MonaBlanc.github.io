import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Certifications from "./pages/Certifications.vue";
import Challenges from "./pages/Challenges.vue";
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";

export enum RouteName {
  Certifications = "/certifications/",
  Challenges = "/challenges/",
  Home = "/",
  Projects = "/projects/",
}

const routes: Array<RouteRecordRaw> = [
  {
    component: Home,
    name: "Home",
    path: RouteName.Home,
  },
  {
    component: Challenges,
    name: "Challenges",
    path: `${RouteName.Challenges}`,
  },
  {
    component: Certifications,
    name: "Certifications",
    path: RouteName.Certifications,
  },
  {
    component: Projects,
    name: "Projects",
    path: `${RouteName.Projects}`,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
