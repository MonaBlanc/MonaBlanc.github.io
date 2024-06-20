import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import { messages } from "./locales/home";
import router from "./router";

const i18n = createI18n({
  fallbackLocale: "en",
  legacy: false,
  locale: "en",
  messages,
});

createApp(App).use(router).use(BootstrapVue3).use(i18n).mount("#app");
