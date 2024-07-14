import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';
import en from './en/translations.json';
import pt from './pt/translations.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  },
} as const;

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async (callback: any) => {
    const storedLanguage = await AsyncStorage.getItem('@AppIntl:language');
    if (storedLanguage) {
      return callback(storedLanguage);
    }
    return callback(Localization.getLocales()[0].languageCode);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    cleanCode: true,
  });

export default i18n;
