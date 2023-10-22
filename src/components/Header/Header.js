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
                        <a style={{textAlign: "center"}} href="https://docs.google.com/document/d/1pNSbwVquWMmSGHtRwPMyQTMUrdgdGuCj/edit?usp=sharing&ouid=118236266993243888484&rtpof=true&sd=true" target="_blank" rel="noreferrer"  className="button primary">{t('cv_label')}</a>
                    </div>
                    <div className="desktop-only">
                        <div className="details row">
                            <ul>
                                {stats.map((stat, key) => {
                                    stat = t(stat);
                                    const value = stat.split(' ')[0];
                                    const label = stat.split(' ').slice(1).join(' ');
                                    return (
                                        <li key={key}><span>{value}</span> {label}</li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="description row last">
                            <h1>{t('name')}</h1>
                            <span>
                                {t('bio')}
                                <br/>
                                {t('find_me_label')} <a href="https://linktr.ee/k_konuc" target="_blank" rel="noreferrer" >{t('here_label')}</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-info mobile-only">
                <div className="description row">
                    <h1>{t('name')}</h1>
                    <span>
                        {t('bio')}
                        <br/>
                        {t('find_me_label')} <a href="https://linktr.ee/k_konuc" target="_blank" rel="noreferrer" >{t('here_label')}</a>
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;
