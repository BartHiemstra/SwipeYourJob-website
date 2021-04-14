import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationNL from "./locales/nl/translation.json";
import translationEN from "./locales/en/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "nl",
    fallbackLng: "en",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      nl: {
        translations: translationNL,
      },
      en: {
        translations: translationEN,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;