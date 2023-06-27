import React from 'react'
import emailjs from '@emailjs/browser'

import './index.scss'
import Loader from 'react-loaders'
import AnimateLatters from '../AnimatedLetters'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_1p4aqbo',
        'template_smopc5f',
        refForm.current,
        'mUy9HzJLd_QGf0i_w'
      )
      .then(
        () => {
          alert('Message Successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send Message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimateLatters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in exploring working opportunities that provide a
            platform for me to enhance my skills and acquire new knowledge.
            However, if you have any other requests or questions, please feel
            free to reach out to me using the form below. I am open to exploring
            various possibilities and eager to engage in meaningful discussions.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Kishansinh Sodha,
          <br />
          Nadiad,387001
          <br />
          Gujarat, India
          <br />
          <span>skishansinh04@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[22.690005, 72.863505]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.671119, 72.879186]}></Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
