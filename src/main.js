import { createApp } from "vue"; // Importez createApp depuis Vue 3
import "./assets/main.css";
import App from "./App.vue";
import { i18n } from "./assets/locales/i18n";

const app = createApp(App);
app.use(i18n);
app.mount("#app");
