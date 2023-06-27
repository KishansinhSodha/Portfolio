import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap-trial'
import { motion } from 'framer-motion'

import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 20,
      },
    },
  }

  useEffect(() => {
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img src={LogoS} alt="K" className="solid-logo" ref={solidLogoRef} />
      <svg
        width="700pt"
        height="900pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <motion.path
            ref={outlineLogoRef}
            xmlns="http://www.w3.org/2000/svg"
            d="M2430 3667 c-3 -3 -82 -13 -175 -22 -134 -14 -225 -16 -427 -12 l-257 6 -6 -32 c-2 -18 -10 -60 -15 -95 -6 -34 -8 -67 -5 -72 3 -6 49 -10 101 -10 110 0 146 -14 163 -61 15 -45 15 -1797 0 -1869 -21 -96 -80 -137 -222 -155 l-55 -7 -16 -72 c-9 -39 -19 -86 -23 -105 l-6 -34 239 5 c131 3 345 2 474 -2 129 -3 236 -6 238 -5 6 5 39 200 35 211 -3 9 -38 11 -126 7 -145 -5 -184 8 -204 67 -16 48 -16 246 2 885 26 910 30 1006 48 1047 20 47 74 82 162 105 l70 19 8 74 c8 76 6 136 -3 127z m-27 -104 c-3 -38 -7 -69 -8 -71 -2 -2 -29 -10 -62 -18 -89 -24 -137 -56 -164 -111 -26 -55 -31 -125 -49 -803 -6 -228 -15 -555 -20 -727 -12 -411 -4 -462 81 -505 26 -14 59 -18 147 -18 83 0 112 -3 112 -12 -1 -7 -6 -40 -13 -73 l-13 -60 -439 4 c-242 2 -441 4 -443 5 -1 2 4 32 11 67 l13 64 81 17 c119 24 150 44 189 118 17 33 19 86 27 835 9 926 7 1059 -23 1121 -27 55 -59 67 -167 65 l-86 -1 7 61 c4 33 9 66 12 72 3 9 89 12 327 13 177 1 351 6 387 11 108 17 100 22 93 -54z
            M2796 3632 c-3 -15 -11 -58 -17 -96 -14 -84 -9 -90 81 -100 155 -18 196 -82 123 -190 -15 -22 -141 -158 -279 -301 -138 -143 -305 -317 -372 -386 -112 -116 -122 -130 -122 -164 0 -33 40 -92 354 -529 195 -270 379 -520 410 -556 72 -84 156 -153 234 -192 52 -26 74 -31 130 -30 73 0 311 37 323 49 4 5 12 39 18 76 14 80 6 97 -43 97 -47 0 -145 28 -185 52 -109 65 -176 141 -521 592 -113 147 -247 322 -297 388 -80 104 -91 123 -80 138 30 42 669 704 760 787 99 90 184 143 253 158 31 6 32 8 43 81 13 91 14 117 2 129 -6 6 -50 7 -108 4 -199 -14 -462 -7 -660 16 -39 4 -42 3 -47 -23z m527 -26 l269 1 -7 -55 c-9 -73 -21 -102 -42 -102 -9 0 -51 -17 -92 -37 -68 -33 -98 -59 -272 -233 -206 -206 -672 -694 -677 -710 -3 -8 250 -342 635 -840 90 -116 212 -241 274 -281 61 -39 148 -69 198 -69 22 0 42 -3 44 -7 2 -5 -1 -32 -6 -61 -7 -41 -13 -53 -30 -57 -51 -11 -255 -35 -298 -35 -111 0 -265 126 -431 355 -394 539 -648 900 -648 919 0 15 104 129 333 367 417 433 436 454 458 507 28 65 25 108 -10 142 -31 28 -125 60 -177 60 -17 0 -33 2 -36 5 -5 5 8 105 18 133 3 11 26 12 117 5 61 -4 233 -7 380 -7z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
