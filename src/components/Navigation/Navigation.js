import React, {useEffect, useState} from 'react';
import Logo from '../../assets/images/logo.svg'
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import {useTranslation} from "react-i18next";

function Navigation() {
    const { t } = useTranslation();
    const search_labels = [];
    for (let i = 1; i <= 8; i++) {
        search_labels.push('search_bar_' + i);
    }
    search_labels.sort((a, b) => {
        return 0.5 - Math.random();
    });
    const [phrases] = useState(search_labels); // Use translation keys
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const currentPhraseKey = phrases[currentPhraseIndex];
        const currentPhrase = t(currentPhraseKey);

        let currentIndex = 0;
        let typingInterval;

        if (typing) {
            typingInterval = setInterval(() => {
                if (currentIndex < currentPhrase.length) {
                    setCurrentText(currentPhrase.slice(0, currentIndex + 1));
                    currentIndex++;
                } else if (currentIndex === currentPhrase.length) {
                    setTyping(false);
                    setTimeout(() => {
                        setTyping(true);
                        setCurrentText('');
                        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                    }, 1000); // Adjust the pause duration before clearing and moving to the next phrase
                    clearInterval(typingInterval);
                }
            }, 200); // Adjust the typing speed as needed
        }

        return () => {
            clearInterval(typingInterval);
        };
    }, [currentPhraseIndex, typing, phrases, t]);

    return (
        <nav>
            <div className="fixed">
                <div className="nav-content">
                    <img src={Logo} className="logo" alt="Logo"/>
                    <div className="desktop-only">
                        <div className="search-guide">
                            <span className="search-icon"></span>
                            <span className="search-placeholder">{currentText}</span>
                        </div>
                    </div>
                    <div>
                        <LanguageSwitcher/>
                    </div>
                </div>
            </div>
            <div className="mock"></div>
        </nav>
    );
}

export default Navigation;