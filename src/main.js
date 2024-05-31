import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// PrimeVue
import PrimeVue from "primevue/config";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// PrimeVue
app.use(PrimeVue);

app.mount("#app");
