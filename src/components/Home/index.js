import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimateLatters from '../AnimatedLetters'
import { useEffect } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 's', 'h', 'a', 'n', 's', 'i', 'n', 'h']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  })

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className="nowrap">
              <img src={LogoTitle} alt="developer" />
              <AnimateLatters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
            </span>
            <br />
            <span className="nowrap">
              <AnimateLatters
                letterClass={letterClass}
                strArray={jobArray}
                idx={25}
              />
            </span>
          </h1>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
