'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { animation } from '@/constants'

import { Wrapper } from '../Wrapper'
import { Car } from './Car'
import { Button } from './Button'

import classes from './Video.module.sass'

const Video: React.FC = () => {
  return (
    <Wrapper>
      <motion.h3
        className={classes.title}
        initial="hidden"
        whileInView="visible"
        variants={animation}
      >
        An example of our work
      </motion.h3>
      <div className={classes.container}>
        <Car />
        <Button />
      </div>
    </Wrapper>
  )
}

export { Video }
