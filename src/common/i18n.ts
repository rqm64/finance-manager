import i18next, {InitOptions} from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";

const options: InitOptions = {
    debug: false,
    load: 'currentOnly',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: require('Locales/en.json'),
        },
    },
};

i18next.use(LanguageDetector).use(initReactI18next).init(options);

export default i18next;
