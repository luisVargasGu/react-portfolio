import Carousel from '@components/Carousel'
import {
  faCss3,
  faGitAlt,
  faGolang,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import './index.scss'

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
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        return prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      })
    }, 5000)
    return () => clearInterval(interval)
  })
  return (
    <div className="about-container max-w-[800px] mx-auto p-8 opacity-0 animate-fadeIn">
      <div className="carousel-container mt-24 flex items-center justify-between mt-5">
        <Carousel imgSrc={carouselImages[currentImageIndex]} />
        <div className="tech-stack-cube w-1/2 h-full overflow-hidden pt-[14%] absolute right-0 top-0">
          <div className="cubespinner animate-cubespinner transform-origin-[100px_100px_0] ml-[calc(50%-100px)]">
            <div
              className="face1
	    absolute
	    w-[200px]
	    h-[200px]
	    border
	    border-gray-300
	    bg-white/80
	    flex
	    justify-center
	    items-center
	    text-[100px]
	    shadow-[0_0_16px_0_lightyellow]
	    "
            >
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div
              className="face2
	    absolute
	    w-[200px]
	    h-[200px]
	    border
	    border-gray-300
	    bg-white/80
	    flex
	    justify-center
	    items-center
	    text-[100px]
	    shadow-[0_0_16px_0_lightyellow]
	    "
            >
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div
              className="face3
	    absolute
	    w-[200px]
	    h-[200px]
	    border
	    border-gray-300
	    bg-white/80
	    flex
	    justify-center
	    items-center
	    text-[100px]
	    shadow-[0_0_16px_0_lightyellow]
	    "
            >
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div
              className="face4
	    absolute
	    w-[200px]
	    h-[200px]
	    border
	    border-gray-300
	    bg-white/80
	    flex
	    justify-center
	    items-center
	    text-[100px]
	    "
            >
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div
              className="face5
	    absolute
	    w-[200px]
	    h-[200px]
	    border
	    border-gray-300
	    bg-white/80
	    flex
	    justify-center
	    items-center
	    text-[100px]
	    shadow-[0_0_16px_0_lightyellow]
	    "
            >
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div
              className="face6
	    absolute
	    w-[200px]
	    h-[200px]
	    border
	    border-gray-300
	    bg-white/80
	    flex
	    justify-center
	    items-center
	    text-[100px]
	    shadow-[0_0_16px_0_lightyellow]
	    "
            >
              <FontAwesomeIcon icon={faGolang} color="#28A4D9" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-20
      text-white
      grid
      gap-y-6
      font-sans
      text-lg
      leading-[1.5]
      before:content-['<p>']
	before:font-la-belle-aurore
	before:text-primary
	before:text-4xl
	before:opacity-60
	before:relative
	before:top-[45px]
	before:-left-[35px]
      after:content-['</p>']
	after:font-la-belle-aurore
	after:text-primary
	after:text-4xl
	after:opacity-60
	after:relative
	after:-top-[25px]
	after:left-[100%]
      "
      >
        <h3 className="text-primary text-4xl text-center my-1">About me</h3>
        <p className="mt-0 text-2xl animate-pulse delay-[200ms]">
          Welcome to my portfolio! I'm a seasoned Full Stack Developer with 5-7
          years of experience, specializing in the front-end. Proficient in
          Java, Python, and Go. (Currently learning O🐫)
        </p>
        <p className="mt-0 text-2xl animate-pulse delay-[400ms]">
          Beyond tech, I'm enthusiastic about exploring new places, fueling my
          creativity through travel. In my free time, I enjoy working on diverse
          side projects that allow me to stretch my skills and think outside the
          box.
        </p>
      </div>
    </div>
  )
}

export default About
