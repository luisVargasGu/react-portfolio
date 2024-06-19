import emailjs from '@emailjs/browser'
import L, { LatLngExpression } from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import React, { FormEvent, useRef } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import './index.scss'

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const position: LatLngExpression = [43.65107, -79.347015]
  const defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  })

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()
    if (!form.current) {
      return
    }
    emailjs
      .sendForm(
        'service_sqb3n6r',
        'template_lypamj5',
        form.current,
        '8mXQBCUDW5SCGVbap'
      )
      .then(
        () => {
          window.alert('Message sent successfully!')
        },
        (error) => {
          window.alert('Message failed to send.')
          console.log(error.text)
        }
      )
  }
  return (
    <div className="flex m-auto contact-page">
      <div className="text-zone m-auto ml-[15%] me-0 w-[35%] flex flex-col items-center justify-center max-h-[90%]">
        <h1 className="text-[53px] font-coolvetica text-primary font-normal mt-0 relative mb-1.5">
          Contact Me
        </h1>
        <p className="text-[16px] leading-[2] text-white font-sans max-w-fit animate-pulseOnce">
          I am interested in all things coding related - especially
          architectural design, web development, and data science. If you have
          any questions or would like to work together, don't hesitate to reach
          out!
        </p>
        <div className="contact-form w-full mt-5">
          <form ref={form} onSubmit={sendEmail}>
            <ul className="p-0 m-0">
              <li
                className="half
	      w-[49%]
	      ml-[2%]
	      float-left
	      clear-none
	      mb-2.5
	      opacity-0
	      overflow-hidden
	      relative
	      animate-fadeInUp
	      animation-delay-[2s]
	      animation-fill-mode-forwards"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full
		  border-0
		  bg-[#115173]
		  h-[50px]
		  text-[16px]
		  text-white
		  p-5
		  box-border"
                ></input>
              </li>
              <li
                className="half
	      w-[49%]
	      ml-[2%]
	      float-left
	      clear-none
	      mb-2.5
	      opacity-0
	      overflow-hidden
	      relative
	      animate-fadeInUp
	      animation-delay-[2s]
	      animation-fill-mode-forwards"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full
		  border-0
		  bg-[#115173]
		  h-[50px]
		  text-[16px]
		  text-white
		  p-5
		  box-border"
                ></input>
              </li>
              <li
                className="mb-2.5
	      opacity-0
	      overflow-hidden
	      relative
	      animate-fadeInUp
	      animation-delay-[2s]
	      animation-fill-mode-forwards"
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full
		  border-0
		  bg-[#115173]
		  h-[50px]
		  text-[16px]
		  text-white
		  p-5
		  box-border"
                ></input>
              </li>
              <li
                className="mb-2.5
	      opacity-0
	      overflow-hidden
	      relative
	      animate-fadeInUp
	      animation-delay-[2s]
	      animation-fill-mode-forwards"
              >
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="w-full
		  border-0
		  bg-[#115173]
		  text-[16px]
		  text-white
		  p-8
		  box-border
		  min-h-[150px]"
                ></textarea>
              </li>
              <li
                className="float-right
	      mb-2.5
	      opacity-0
	      overflow-hidden
	      relative
	      animate-fadeInUp
	      animation-delay-[2s]
	      animation-fill-mode-forwards"
              >
                <input
                  type="submit"
                  value="SEND"
                  className="
		  bg-transparent
		  text-primary
		  text-2xl
		  font-normal
		  tracking-wider
		  font-sans
		  no-underline
		  py-4
		  px-8
		  border
		  border-primary
		  mt-6
		  "
                ></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div
        className="map-wrap
      bg-[rgba(8,253,216,0.1)]
      float-right
      w-[412px]
      h-[312px]
      mt-[6%]
      m-auto"
      >
        <div
          className="info-map
	bg-black
	z-[999999]
	w-[70%]
	h-[100px]
	p-5
	text-white
	font-['Helvetica']
	text-[16px]
	animate-fadeIn
	animation-delay-[1.5s]
	animation-fill-mode-forwards"
        >
          Luis Vargas,
          <br />
          Canada,
          <br />
          Toronto, ON
          <br />
          <br />
        </div>
        <MapContainer
          center={position}
          zoom={13}
          className="leaflet-container
	  relative
	  w-full
	  h-full
	  opacity-0
	  animate-backInRight
	  animation-delay-[1.2s]
	  animation-fill-mode-forwards"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} icon={defaultIcon}></Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Contact
