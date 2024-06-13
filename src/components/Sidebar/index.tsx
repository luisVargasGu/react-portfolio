import './index.scss';
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubstitle from '../../assets/images/logo_sub.png';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import NavBar from './Navbar';
import ChannelList from './ChannelList';
import { updateUserAvatar } from '@services/images';

const Sidebar = () => {
    const isAuthenticated = useIsAuthenticated();
    const signOut = useSignOut();
    const signOutFunc = () => {
        signOut();
    }
    const location = useLocation();
    const isOnExcludedRoutes = location.pathname === '/playground/channel';

    const handleUserSettings = () => {
        updateUserAvatar();
    }

    return (
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={LogoS} alt="logo"></img>
                <img className="sub-logo" src={LogoSubstitle} alt="slobodan"></img>
            </Link>
            {
                (isOnExcludedRoutes && isAuthenticated())
                    ? (
                        <ChannelList />
                    ) : <NavBar />
            }
            <ul>
                {
                    isAuthenticated() ? (
                        <li onClick={() => signOutFunc()}>
                            <NavLink className='logout-link' to="/playground">
                                <FontAwesomeIcon icon={faRightFromBracket} color="#4d4d4e" />
                            </NavLink>
                        </li>
                    ) : null
                }
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/luis-v-5122b8149/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/luisVargasGu">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li onClick={handleUserSettings}>
                    <div className="user-settings">
                        <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
