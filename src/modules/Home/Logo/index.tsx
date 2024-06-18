import Logo2 from '@/assets/images/logo-new-l.svg'
import { useRef } from 'react'
import './index.scss'

const Logo = () => {
  const bgRef = useRef(null)

  return (
    <div
      className="logo-container z-0 absolute top-0 bottom-[16%] right-[20%] my-auto"
      ref={bgRef}
    >
      <img
        className="solid-logo absolute top-auto right-auto left-0 my-auto w-full transform rotate-[20deg] z-1 animate-fadeIn"
        src={Logo2}
        alt="L"
      />
    </div>
  )
}

export default Logo
