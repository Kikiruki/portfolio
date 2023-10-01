import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const {  i18n } = useTranslation();

    useEffect(() => {
        // Retrieve the selected language from local storage on component mount
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const changeLanguage = (language) => {
        // Change the language and store it in local storage
        i18n.changeLanguage(language);
        localStorage.setItem('selectedLanguage', language);
    };

    return (
        <div>
            <button className={i18n.language === "en" ? "primary" : ""} onClick={() => changeLanguage('en')}>
                ENG
            </button>
            <button className={i18n.language === "ru" ? "primary" : ""} onClick={() => changeLanguage('ru')}>
                РУС
            </button>
        </div>
    );
}

export default LanguageSwitcher;