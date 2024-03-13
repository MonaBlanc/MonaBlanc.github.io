import { computed, createApp, ref, type Ref } from 'vue';
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import App from './App.vue';
import './assets/css/bootstrap.css';
import './assets/css/nav.css';
import './assets/css/style.css';
import Challenges from './Challenges.vue';
import Home from './Home.vue';
import NotFound from './NotFound.vue';

interface RouteMap {
  [key: string]: any;
}

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: App },
  { path: '/challenges', component: Challenges },
  { path: '/home', component: Home },
  // Add a catch-all route for non-existent paths
  { path: '/:pathMatch(.*)', component: NotFound }
];

// Create the router instance
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// Create a ref to hold the current path
const currentPath: Ref<string> = ref(window.location.hash);

// Update the current path when the hash changes
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

// Compute the current view based on the current path
const currentView = computed(() => {
  const route = routes.find(r => r.path === currentPath.value);
  return route ? route.component : NotFound;
});

const app = createApp(App)
app.use(router);
app.mount('#app')
