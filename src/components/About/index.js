import './index.scss';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faGolang, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Carousel from '../Carousel';

const About = () => {
    const carouselImages = [
        'http://localhost:8080/api/v1/image?id=1',
        'http://localhost:8080/api/v1/image?id=2',
        'http://localhost:8080/api/v1/image?id=3',
        'http://localhost:8080/api/v1/image?id=4',
        'http://localhost:8080/api/v1/image?id=5',
        'http://localhost:8080/api/v1/image?id=6',
        'http://localhost:8080/api/v1/image?id=7',
        'http://localhost:8080/api/v1/image?id=8',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                return prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1;
            });
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <div className='about-container'>
            <div className='carousel-container'>
                {/*TODO: Separate photos by size (width/height)*/}
                <Carousel imgSrc={carouselImages[currentImageIndex]} />
                <div className='tech-stack-cube'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGolang} color='#28A4D9' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-description">
                <h3>About me</h3>
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
