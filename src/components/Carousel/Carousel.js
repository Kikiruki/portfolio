import React, {useState} from 'react';
import './Carousel.css';

const Carousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt={`${index}`}/>
                    </div>
                ))}
            </div>
            {images.length > 1 && (
                <div>
                    <button className="prev-button" onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path
                                d="M6.335 -6.18516e-08L7.75 1.4145L3.0805 6.002L7.75 10.5855L6.335 12L0.249999 6.002L6.335 -6.18516e-08Z"
                                fill="black"/>
                        </svg>
                    </button>
                    <button className="next-button" onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path
                                d="M1.665 12L0.25 10.5855L4.9195 5.998L0.25 1.4145L1.665 6.53404e-07L7.75 5.998L1.665 12Z"
                                fill="black"/>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Carousel;