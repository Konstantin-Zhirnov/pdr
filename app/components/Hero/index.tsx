'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { FilterButton } from './FilterButton'

import classes from './Hero.module.sass'

const buttons = ['On the bumper', 'On the hood', 'On the roof', 'On the fender', 'On the door']

const Hero: React.FC = () => {
  const [service, setService] = React.useState(0)

  const speed = -0.2
  const speed2 = 0.2
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, (value) => value * speed)
  const y2 = useTransform(scrollY, (value) => value * speed2)

  return (
    <Wrapper classes={classes.hero}>
      <motion.h1 className={classes.title} style={{ y: y }}>
        Paintless dent repair
      </motion.h1>

      <div className={classes.container}>
        <motion.div className={classes.buttons} style={{ y: y2 }}>
          {buttons.map((item, index) => (
            <FilterButton
              key={index}
              onClick={() => setService(index)}
              text={item}
              active={service === index}
            />
          ))}
        </motion.div>
        <div className={classes.car}>
          <img
            className={classes.image}
            src={`/images/service-${service}.png`}
            alt="paintless dent repair"
          />
        </div>
      </div>
    </Wrapper>
  )
}

export { Hero }
