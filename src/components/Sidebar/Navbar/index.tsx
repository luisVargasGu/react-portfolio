import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faMicrochip, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    const isOnExcludedRoutes = location.pathname === '/channel' || location.pathname === '/playground';
    return (
        <nav>
            <NavLink className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink className={isOnExcludedRoutes ? 'tech-link active' : 'tech-link'}
                to={!isOnExcludedRoutes ? '/playground' : location.pathname}>
                <FontAwesomeIcon icon={faMicrochip} color="#4d4d4e" />
            </NavLink>
        </nav>
    )
}

export default NavBar;
