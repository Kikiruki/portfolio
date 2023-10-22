import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ruTranslation from './assets/messages/ru.json';
import enTranslation from './assets/messages/en.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: ruTranslation,
            },
            en: {
                translation: enTranslation,
            }
        },
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
