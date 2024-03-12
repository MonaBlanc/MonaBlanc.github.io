import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'; // Assuming this is your main App component
import Challenges from './Challenges.vue'; // Import the Challenges component
import './assets/css/bootstrap.css';
import './assets/css/nav.css';
import './assets/css/style.css';

// Define route records as an array of RouteRecordRaw objects
const routes = [
    { path: '/', component: App }, // Use the App component for the home page
    { path: '/challenges', component: Challenges } // Use the Challenges component for the challenges page
];

// Create the router instance and configure routes
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// Create the Vue app instance and mount it with the router
createApp(App).use(router).mount('#app');

export default router;
