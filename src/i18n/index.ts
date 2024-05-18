import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { constants } from "./constants";
import { en_language } from "./languages/en";
import { uk_language } from "./languages/uk";
import LanguageDetector from "i18next-browser-languagedetector";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	[constants.EN]: {
		translation: en_language,
	},
	[constants.UK]: {
		translation: uk_language,
	},

	fr: {
		translation: {
			"Welcome to React": "Bienvenue à React et react-i18next",
		},
	},
};

i18n
	.use(initReactI18next)
	.use(LanguageDetector) // passes i18n down to react-i18next
	.init({
		resources,
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
