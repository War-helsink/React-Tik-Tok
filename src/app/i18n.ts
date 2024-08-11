import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "shared/locales/en.json";
import ruTranslation from "shared/locales/ru.json";
import ukTranslation from "shared/locales/uk.json";
import languages from "shared/locales/languages.json";

const DEFAULT_LNG = import.meta.env.VITE_DEFAULT_LNG;

const resources = {
	en: {
		translation: enTranslation,
		languages: languages,
	},
	ru: {
		translation: ruTranslation,
		languages: languages,
	},
	uk: {
		translation: ukTranslation,
		languages: languages,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: DEFAULT_LNG,
	fallbackLng: DEFAULT_LNG,
	ns: ["translation", "languages"],
	defaultNS: "translation",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
