import './index.scss';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Contact = () => {
    const form = useRef();
    const position = [43.651070, -79.347015];

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sqb3n6r', 'template_lypamj5', form.current, '8mXQBCUDW5SCGVbap')
            .then(() => {
                window.alert('Message sent successfully!');
            }, (error) => {
                window.alert('Message failed to send.');
                console.log(error.text);
            });
    };

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>Contact Me</h1>
                <p>
                    I am interested in all things coding related - especially
                    architectural design, web development, and data science.
                    If you have any questions or would like to work together,
                    don't hesitate to reach out!
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required>
                                </input>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required>
                                </input>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required>
                                </input>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' value='SEND' className='flat-button'></input>
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
                    Toronto, ON<br />
                    <br />
                </div>
                <MapContainer center={position} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={position}>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Contact;
