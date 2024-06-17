import {
  faEnvelope,
  faHome,
  faMicrochip,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  const isOnExcludedRoutes =
    location.pathname === '/channel' || location.pathname === '/playground'
  return (
    <nav
      className="flex
    flex-col
    items-center
    text-center
    absolute
    top-1/2
    transform
    -translate-y-1/2
    w-full"
    >
      <NavLink
        className={({ isActive }) =>
          `block
      text-4xl
      text-gray-500
      leading-[51px]
      h-[51px]
      relative
      hover:text-primary
      hover:bg-black
      transition-all
      ease-out
      duration-300
      after:content-[attr(data-content)]
      after:text-xl
      after:tracking-wider
      after:absolute
      after:-left-2
      after:bottom-6
      after:w-full
      after:transition-all
      after:ease-out
      after:duration-300
      after:opacity-0
      after:hover:opacity-100
      hover:text-primary
      ${
        isActive
          ? 'text-primary'
          : 'text-gray-500 hover:text-primary hover:bg-black hover:after:opacity-100'
      }`
        }
        to="/"
        data-content="HOME"
      >
        <FontAwesomeIcon icon={faHome} />
        <span className="sr-only">Home</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => `
      block
      text-4xl
      text-gray-500
      leading-[51px]
      h-[51px]
      relative
      hover:text-primary
      hover:bg-black
      transition-all
      ease-out
      duration-300
      after:content-[attr(data-content)]
      after:text-xl
      after:tracking-wider
      after:absolute
      after:-left-4
      after:bottom-6
      after:w-full
      after:transition-all
      after:ease-out
      after:duration-300
      after:opacity-0
      after:hover:opacity-100
      ${
        isActive
          ? 'text-primary'
          : 'text-gray-500 hover:text-primary hover:bg-black hover:after:opacity-100'
      }`}
        to="/about"
        data-content="ABOUT"
      >
        <FontAwesomeIcon icon={faUser} />
        <span className="sr-only">About</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => `contact-link
      block
      text-4xl
      text-gray-500
      leading-[51px]
      h-[51px]
      relative
      hover:text-primary
      hover:bg-black
      transition-all
      ease-out
      duration-300
      after:content-[attr(data-content)]
      after:text-base
      after:tracking-wider
      after:absolute
      after:-left-5
      after:bottom-7
      after:w-full
      after:transition-all
      after:ease-out
      after:duration-300
      after:opacity-0
      after:hover:opacity-100
            ${
              isActive
                ? 'text-primary'
                : 'text-gray-500 hover:text-primary hover:bg-black hover:after:opacity-100'
            }`}
        to="/contact"
        data-content="CONTACT"
      >
        <FontAwesomeIcon icon={faEnvelope} />
        <span className="sr-only">Contact</span>
      </NavLink>
      <NavLink
        className={`${isOnExcludedRoutes ? 'active text-primary' : 'tech-link'} block
	text-4xl
	text-gray-500
	leading-[51px]
	h-[51px]
	relative
	hover:text-primary
	hover:bg-black
	transition-all
	ease-out duration-300
      after:content-[attr(data-content)]
      after:text-sm
      after:tracking-wide
      after:absolute
      after:align-center
      after:-left-7
      after:bottom-8
      after:w-full
      after:transition-all
      after:ease-out
      after:duration-300
      after:opacity-0
      after:hover:opacity-100
	`}
        to={!isOnExcludedRoutes ? '/playground' : location.pathname}
        data-content="PLAYGROUND"
      >
        <FontAwesomeIcon icon={faMicrochip} />
        <span className="sr-only">Playground</span>
      </NavLink>
    </nav>
  )
}

export default NavBar
