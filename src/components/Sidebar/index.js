import './index.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubstitle from '../../assets/images/logo_sub.png';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faMicrochip, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { isLoggedIn, user } from '../../services/auth';

const Sidebar = () => {
    const signOut = useSignOut();
    const signOutFunc = () => {
        signOut();
        user.value = null;
    }
    return (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={LogoS} alt="logo"></img>
                <img className="sub-logo" src={LogoSubstitle} alt="slobodan"></img>
            </Link>
            <nav>
                {user.value && <p>{user.value.userID}</p>}
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="tech-link" to="/playground">
                    <FontAwesomeIcon icon={faMicrochip} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                {
                    isLoggedIn.value ? (
                        <li onClick={() => signOutFunc()}>
                            <NavLink exact="true" className='logout-link' to="/playground">
                                <FontAwesomeIcon icon={faRightFromBracket} color="#FFD700">
                                </FontAwesomeIcon>
                            </NavLink>
                        </li>
                    ) : null
                }
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/luis-v-5122b8149/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e">
                        </FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/luisVargasGu">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e">
                        </FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
