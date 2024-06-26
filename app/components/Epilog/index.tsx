'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { Email } from '../Email'
import { animation } from '@/constants'

import classes from './Epilog.module.sass'

const Epilog: React.FC = () => {
  return (
    <Wrapper>
      <motion.h3
        className={classes.title}
        initial="hidden"
        whileInView="visible"
        variants={animation}
      >
        The dent won&apos;t go away on its own...
      </motion.h3>
      <motion.p
        className={classes.text}
        initial="hidden"
        whileInView="visible"
        variants={animation}
      >
        if you want to delete it, if you don&apos;t want to delete it, just send some photos of this
        dent and I will tell you how much it will cost to remove it, how long it will take and
        whether it is possible at all.
      </motion.p>
      <motion.div
        className={classes.container}
        initial="hidden"
        whileInView="visible"
        variants={animation}
      >
        <svg fill="#ffb800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 180">
          <path d="M54.1 109c-.8 0-1.6-.4-2-1.1-.8-1.1-.5-2.7.6-3.5 1.3-.9 6.8-4 11.6-6.6-15.9-1.3-29.2-8.3-38.5-20.2C8.9 56 8.5 24.1 13.2 3.4c.3-1.3 1.7-2.2 3-1.9 1.3.3 2.2 1.7 1.9 3-4.5 19.6-4.2 49.8 11.6 70 9 11.5 21.5 17.7 37.2 18.4l-1.8-2.3c-1.4-1.7-2.7-3.4-4.1-5.1-.7-.9-1.5-1.9-2.3-2.9-.9-1.1-.7-2.6.4-3.5 1.1-.9 2.6-.7 3.5.4 0 0 0 .1.1.1l6.4 7.9c.5.5.9 1.1 1.4 1.7 1.5 1.8 3.1 3.6 4.4 5.6 0 .1.1.1.1.2.1.3.2.5.3.8v.6c0 .2-.1.4-.2.6-.1.1-.1.3-.2.4-.1.2-.3.4-.5.6-.1.1-.3.2-.5.3-.1 0-.1.1-.2.1-1.2.6-16 8.6-18.1 10-.5.5-1 .6-1.5.6z"></path>
        </svg>
        <Email />
      </motion.div>
    </Wrapper>
  )
}

export { Epilog }
