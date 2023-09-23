import React from 'react';
import Logo from '../../assets/images/logo.svg'

function Navigation() {
    return (
        <nav>
            <div className="fixed">
                <div className="nav-content">
                    <img src={Logo} className="logo" alt="Logo"/>
                    <div className="desktop-only">
                        <div className="search-guide">
                            <span className="search-icon"></span>
                            <span className="search-placeholder">Search</span>
                        </div>
                    </div>
                    <div>
                        <button className="primary">ENG</button>
                        <button>RUS</button>
                    </div>
                </div>
            </div>
            <div className="mock"></div>
        </nav>
    );
}

export default Navigation;