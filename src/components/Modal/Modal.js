import React, {useEffect} from "react";
import "./Modal.css";

function Modal(props) {
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
            <div className="desktop-only close-cross">
                <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path d="M20.412 19L37.7076 1.70432C38.0975 1.31446 38.0975 0.682378 37.7076 0.292519C37.3176 -0.09734 36.6857 -0.09734 36.2957 0.292519L19 17.5881L1.70441 0.292394C1.31455 -0.0974647 0.682469 -0.0974647 0.292612 0.292394C-0.0973709 0.682253 -0.0973709 1.31434 0.292612 1.7042L17.5881 19L0.292487 36.2957C-0.0974956 36.6857 -0.0974956 37.3176 0.292487 37.7076C0.487416 37.9025 0.74287 38 0.998449 38C1.25403 38 1.50948 37.9025 1.70441 37.7076L19 20.4119L36.2957 37.7076C36.4907 37.9025 36.7461 38 37.0016 38C37.2572 38 37.5127 37.9025 37.7076 37.7076C38.0975 37.3176 38.0975 36.6857 37.7076 36.2957L20.412 19Z" fill="white"/>
                </svg>
            </div>
            <div className="dark-overlay" onClick={closeModal}></div>
            <div className="popup-body">
                {children}
            </div>
        </div>
    );
}

export default Modal;