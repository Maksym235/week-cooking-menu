import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { constants } from './constants';
import { en_language } from './languages/en';
import { uk_language } from './languages/uk';
const resources = {
  [constants.EN]: {
    translation: en_language,
  },
  [constants.UK]: {
    translation: uk_language,
  },

  fr: {
    translation: {
      'Welcome to React': 'Bienvenue à React et react-i18next',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: constants.UK,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
