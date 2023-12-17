import './index.scss';
import { useEffect, useState } from 'react';

const About = () => {
    const carouselImages = [
        'http://localhost:8080/image?id=1',
        'http://localhost:8080/image?id=2',
        'http://localhost:8080/image?id=3',
        'http://localhost:8080/image?id=4',
        'http://localhost:8080/image?id=5',
        'http://localhost:8080/image?id=6',
        'http://localhost:8080/image?id=7',
        'http://localhost:8080/image?id=8',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageFadeClass, setImageFadeClass] = useState('carousel-image-fade');

    useEffect(() => {
        const interval = setInterval(() => {
            setImageFadeClass('carousel-image-fadeout');
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => {
                    return prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1;
                });
                setImageFadeClass('carousel-image-fadein');
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <div className='about-container'>
            <div className='carousel-container'>
                <img src={carouselImages[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className={`carousel-image ${imageFadeClass}`} />
            </div>
            <div className="about-description">
                <p>
                    Welcome to my portfolio! I'm a seasoned Full Stack Developer with 5-7 years of experience, specializing in the front-end.
                    Proficient in Java, Python, and Go. (Currently learning O🐫)
                </p>
                <p>
                    Beyond tech, I'm enthusiastic about exploring new places, fueling my creativity through travel.
                    In my free time, I enjoy working on diverse side projects that allow me to stretch my skills and think outside the box.
                </p>
            </div>
        </div>
    );
}

export default About;
