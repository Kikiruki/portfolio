import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        // Change the language and store it in local storage
        i18n.changeLanguage(language);

        // Update the title and description based on the selected language
        document.title = t('meta-title');
        document.querySelector('meta[name="description"]').setAttribute('content', t('meta-description'));
    };

    const { t } = useTranslation(); // Get the translation function

    return (
        <div>
            <button className={i18n.language === 'en' ? 'primary' : ''} onClick={() => changeLanguage('en')}>
                ENG
            </button>
            <button className={i18n.language === 'ru' ? 'primary' : ''} onClick={() => changeLanguage('ru')}>
                РУС
            </button>
        </div>
    );
}

export default LanguageSwitcher;
