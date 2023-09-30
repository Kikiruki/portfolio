import React from "react";
import "./Popup.css";

function Popup(props) {
    const { content, closePopup } = props;

    return (
        <div className="popup-container">
            <div className="dark-overlay" onClick={closePopup}></div>
            <div className="popup-body">
                {content}
            </div>
        </div>
    );
}

export default Popup;