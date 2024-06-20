import LogoS from '@/assets/images/logo-new-l.svg'
import LogoSubstitle from '@/assets/images/logo_sub.png'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateUserAvatar } from '@services/images'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ChannelList from './ChannelList'
import NavBar from './Navbar'
import './index.scss'

const Sidebar = () => {
  const isAuthenticated = useIsAuthenticated()
  const signOut = useSignOut()
  const signOutFunc = () => {
    signOut()
  }
  const location = useLocation()
  const isOnExcludedRoutes = location.pathname === '/playground/channel'

  const handleUserSettings = () => {
    updateUserAvatar()
  }
  return (
    <div className="nav-bar bg-gray-900 w-24 h-full absolute top-0 z-30 min-h-[500px]">
      <Link className="block py-2" to="/">
        <img
          src={LogoS}
          alt="logo"
          className="block mx-auto w-16 h-auto mb-2"
        />
        <img
          src={LogoSubstitle}
          alt="slobodan"
          className="block mx-auto w-20 h-auto"
        />
      </Link>
      {isOnExcludedRoutes && isAuthenticated ? <ChannelList /> : <NavBar />}
      <ul className="absolute bottom-5 w-full text-center list-none p-0 m-0">
        {isAuthenticated ? (
          <li className="py-2">
            <NavLink
              to="/playground"
              onClick={signOutFunc}
              className="block bg-gray-800 text-white p-2 rounded"
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-gray-500 text-2xl hover:text-primary"
              />
            </NavLink>
          </li>
        ) : null}
        <li className="py-2">
          <a
            href="https://www.linkedin.com/in/luis-v-5122b8149/"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </a>
        </li>
        <li className="py-2">
          <a
            href="https://github.com/luisVargasGu"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </a>
        </li>
        <li className="py-2" onClick={handleUserSettings}>
          <div className="block">
            <FontAwesomeIcon
              icon={faGear}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
