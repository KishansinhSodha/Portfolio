import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import './index.scss'
import AnimateLatters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  })

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimateLatters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a highly ambitious front-end developer with no prior
            professional experience, looking for a role in an established IT
            company with the opportunity to work with the latest technologies on
            challenging and diverse projects.
          </p>
          <p align="LEFT">
            As a newcomer to the industry, I bring a fresh perspective,
            enthusiasm, and a strong drive to learn and grow in the field . I am
            confident in my abilities, naturally curious, and consistently
            dedicated to honing my skills with every opportunity.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faBootstrap} color="#563d76" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
