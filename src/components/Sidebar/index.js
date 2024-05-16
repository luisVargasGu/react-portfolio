import './index.scss';
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubstitle from '../../assets/images/logo_sub.png';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { isLoggedIn, user } from '../../services/auth';
import NavBar from './Navbar';
import ChannelList from './ChannelList';

const Sidebar = () => {
    const signOut = useSignOut();
    const signOutFunc = () => {
        signOut();
        user.value = null;
    }
    const location = useLocation();
    const isOnExcludedRoutes = location.pathname === '/channel' || location.pathname === '/playground';

    return (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={LogoS} alt="logo"></img>
                <img className="sub-logo" src={LogoSubstitle} alt="slobodan"></img>
            </Link>
            {
                (isOnExcludedRoutes && isLoggedIn.value)
                    ? (
                        <ChannelList />
                    ) : <NavBar />
            }
            <ul>
                {
                    isLoggedIn.value ? (
                        <li onClick={() => signOutFunc()}>
                            <NavLink exact="true" className='logout-link' to="/playground">
                                <FontAwesomeIcon icon={faRightFromBracket} color="#4d4d4e">
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
