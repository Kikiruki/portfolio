import React from 'react';
import logoImage from '../../assets/images/profile-logo.jpg';
import { useTranslation } from 'react-i18next';

function Header(params) {
    const {stats} = params;
    const { t } = useTranslation();

    return (
        <header>
            <div className="header-grid">
                <div className="profile-pic">
                    <img src={logoImage} alt="Profile Logo" />
                </div>
                <div className="profile-info">
                    <div className="title row">
                        <h2>{t('nickname')}</h2>
                        <span className="verified-icon"></span>
                        <button className="primary">{t('cv_label')}</button>
                    </div>
                    <div className="desktop-only">
                        <div className="details row">
                            <ul>
                                {stats.map((stat, key) => {
                                    return (
                                        <li key={key}><span>{stat.value}</span> {stat.label}</li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="description row last">
                            <h1>{t('name')}</h1>
                            <span>
                                {t('bio')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-info mobile-only">
                <div className="description row">
                    <h1>Kiryl Kandukou</h1>
                    <span>
                        Hello! I'm Creative Copywriter.
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;
