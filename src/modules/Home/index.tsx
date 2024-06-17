import { Link } from 'react-router-dom'
import logoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'

const Home = () => {
  return (
    <div className="ms-16">
      <div className="text-zone absolute left-[10%] top-1/2 transform -translate-y-1/2 w-2/5 max-h-[90%]">
        <h1 className="text-white text-7xl font-normal font-coolvetica relative m-0">
          <span
            className="before:content-['<h1>']
	  before:font-la-belle-aurore
	  before:text-yellow-500
	  before:text-4xl
	  before:absolute
	  before:mt-[-40px]
	  before:left-[15px]
	  before:opacity-60
	  "
          >
            Hi, <br />
            <span className="inline-flex items-center">
              I'm Lui
              <img
                src={logoTitle}
                alt="developer"
                className="ml-1 w-8 opacity-0 animate-rotateIn delay-1400ms"
              />
            </span>
          </span>
          <br />
          Software Developer
          <span
            className="
	  after:content-['</h1>']
	  after:font-la-belle-aurore
	  after:text-yellow-500
	  after:text-4xl
	  after:absolute
	  after:mt-[18px]
	  after:ml-[20px]
	  after:opacity-60"
          ></span>
        </h1>
        <h2
          className="text-gray-400
	mt-5
	text-md
	font-normal
	font-sans
	tracking-wider"
        >
          Full Stack Developer / Mobile Developer / Traveler / Fitness
          Enthusiast
        </h2>
        <Link
          to="/contact"
          className="
	  bg-transparent
	  text-yellow-500
	  text-xl
	  font-normal
	  tracking-wider
	  font-sans
	  no-underline
	  py-2
	  px-4
	  border
	  border-yellow-500
	  mt-6
	  float-left
	  animate-fadeIn
	  delay-1000"
        >
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
