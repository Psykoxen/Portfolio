import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import fr from "./fr.json";
import en from "./en.json";

const app = createApp({});

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "fr",
  messages: {
    en: en,
    fr: fr,
  },
});

app.use(i18n);

export { i18n }; // Exportez l'instance de Vue-i18n
