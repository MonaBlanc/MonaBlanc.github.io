import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Challenges from "./pages/Challenges.vue";
import Home from "./pages/Home.vue";

export enum RouteName {
  Challenges = "/challenges/",
  Home = "/",
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
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
