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
    <div className="container contact-page">
      <div className="text-zone">
        <h1>Contact Me</h1>
        <p>
          I am interested in all things coding related - especially
          architectural design, web development, and data science. If you have
          any questions or would like to work together, don't hesitate to reach
          out!
        </p>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                ></input>
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                ></input>
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                ></input>
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  value="SEND"
                  className="flat-button"
                ></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="map-wrap">
        <div className="info-map">
          Luis Vargas,
          <br />
          Canada,
          <br />
          Toronto, ON
          <br />
          <br />
        </div>
        <MapContainer center={position} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position} icon={defaultIcon}></Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Contact
