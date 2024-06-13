import React, { useEffect, useState } from 'react';
import ErrorBoundary from '../Errorhandler';
import './index.scss';

const Carousel = ({ imgSrc }) => {
    const [imageFadeClass, setImageFadeClass] = useState('');
    const [errorState, setErrorState] = useState(false);

    const handleImageError = () => {
        setErrorState(true);
    };


    useEffect(() => {
        setErrorState(false);
        setImageFadeClass('carousel-image-fadein');
        setTimeout(() => {
            setImageFadeClass('carousel-image-fadeout');
        }, 4000);
    }, [imgSrc]);

    return (
        <ErrorBoundary>
            <div className="carousel-container">
                {errorState && (
                    <div className={`loading-state ${imageFadeClass}`}>
                        Loading...
                        <div className="loading-box"></div>
                    </div>
                )}

                {!errorState && (
                    <img
                        src={imgSrc}
                        alt="life is good"
                        className={`carousel-image ${imageFadeClass}`}
                        onError={handleImageError}
                    />
                )}
            </div>
        </ErrorBoundary>
    );
};

export default Carousel;
