'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { animation } from '@/constants'

import { Divider } from '@/app/components/Divider'
import { Wrapper } from '../Wrapper'

import classes from './Approach.module.sass'

const Approach: React.FC = () => {
  return (
    <Wrapper classes={classes.container}>
      <motion.h3
        className={classes.title}
        initial="hidden"
        whileInView="visible"
        variants={animation}
      >
        About our service
      </motion.h3>
      <Divider />

      <motion.p
        className={classes.text}
        initial="hidden"
        whileInView="visible"
        variants={animation}
      >
        Paintless dent repair is a service for repairing car body damage without affecting the
        paint. Our company&apos;s specialists restore the car to its original appearance without the
        need for expensive and time-consuming repainting and without any signs of repair. We do this
        quickly, affordably, and with a quality guarantee. We use innovative PDR technology,
        offering a fast, efficient, and cost-effective solution for removing dents and damage.
      </motion.p>
    </Wrapper>
  )
}

export { Approach }
