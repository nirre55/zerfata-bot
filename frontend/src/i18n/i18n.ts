import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import des fichiers de traduction
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// Configuration des ressources de traduction
const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
};

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next) // Intégration avec React
  .init({
    resources,
    fallbackLng: 'en', // Langue par défaut si la langue détectée n'est pas disponible
    interpolation: {
      escapeValue: false, // React échappe déjà les valeurs
    },
  });

export default i18n;