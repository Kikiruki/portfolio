import React from 'react';
import logoImage from '../../assets/images/profile-logo.jpg';

function Header() {
    const statistics = [
        {
            "label": "followers",
            "value": "25.1m"
        },
        {
            "label": "following",
            "value": "6"
        },
        {
            "label": "projects",
            "value": "722"
        },
        {
            "label": "matches",
            "value": "341"
        },
        {
            "label": "salary",
            "value": "100m"
        },
    ];


    const shuffledStats = shuffle(statistics).slice(0, 3);

    return (
        <header>
            <div className="header-grid">
                <div className="profile-pic">
                    <img src={logoImage} alt="Profile Logo" />
                </div>
                <div className="profile-info">
                    <div className="title row">
                        <h2>k_konuc</h2>
                        <span className="verified-icon"></span>
                        <button className="primary">Curriculum Vitae</button>
                    </div>
                    <div className="desktop-only">
                        <div className="details row">
                            <ul>
                                {shuffledStats.map((stat, key) => {
                                    return (
                                        <li key={key}><span>{stat.value}</span> {stat.label}</li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="description row last">
                            <h1>Kiryl Kandukou</h1>
                            <span>
                                Hello! I'm Creative Copywriter.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-info mobile-only">
                <div className="description row">
                    <h1>apple</h1>
                    <span>
                        Everyone has a story to tell.
                    </span>
                </div>
            </div>
        </header>
    );

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
}

export default Header;
