import { createI18n } from "vue-i18n";
import { DEFAULT_LOCALE } from "../../config";

const messages = {
  en: {
    welcome: "Welcome!",
    // Add more translations as needed
  },
  ar: {
    welcome: "أهلاً وسهلاً!",
    // Add more translations as needed
  },
  fr: {
    welcome: "Bienvenue!",
    // Add more translations as needed
  },
  es: {
    welcome: "¡Bienvenido!",
    // Add more translations as needed
  },
};

const i18n = createI18n({
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages,
});

export default i18n;
