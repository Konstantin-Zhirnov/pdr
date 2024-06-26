'use client'

import React from 'react'
import { motion, useTransform, useSpring, useScroll } from 'framer-motion'

import classes from './Car.module.sass'

const Car: React.FC = () => {
  const ref = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 0.35], ['-50%', '0%'])
  const xSpring = useSpring(x, { stiffness: 100, damping: 20 })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
  const opacitySpring = useSpring(opacity, { stiffness: 100, damping: 20 })
  return (
    <motion.div
      className={classes.car}
      ref={ref}
      style={{
        x: xSpring || null,
        opacity: opacitySpring || null,
      }}
    >
      <img className={classes.image} src={`/images/bmw.png`} alt="paintless dent repair" />
    </motion.div>
  )
}

export { Car }
