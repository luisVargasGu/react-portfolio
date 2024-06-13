import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import logoTitle from '@assets/images/logo-s.png';
import Logo from './Logo';

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                    Lui
                    <img src={logoTitle} alt='developer' />
                    <br />
                    Software Developer
                </h1>
                <h2>Full Stack Developer / Mobile Developer / Traveler / Fitness Enthusiast</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home;
