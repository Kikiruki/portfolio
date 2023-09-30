import React, {useEffect} from "react";
import "./Popup.css";

function Popup(props) {
    const CodeEsc = 27;

    const { children, close } = props;

    const closeModal = (e) => {
        e.stopPropagation();
        close();
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === CodeEsc) {
            closeModal(e);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    });

    return (
        <div className="popup-container">
            <div className="dark-overlay" onClick={closeModal}></div>
            <div className="popup-body">
                {children}
            </div>
        </div>
    );
}

export default Popup;