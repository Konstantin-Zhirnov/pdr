'use client'

import React from 'react'
import { motion, useTransform, useSpring, useScroll } from 'framer-motion'

import { VideoModal } from '../../Modal'

import classes from './Button.module.sass'

const Button: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false)

  const onOpen = () => {
    setOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const onClose = () => {
    setOpen(false)
    document.body.style.overflow = 'auto'
  }

  const ref = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 0.35], ['200%', '0%'])
  const xSpring = useSpring(x, { stiffness: 100, damping: 20 })

  const y = useTransform(scrollYProgress, [0, 0.35], ['200%', '0%'])
  const ySpring = useSpring(y, { stiffness: 100, damping: 20 })

  const opacity = useTransform(scrollYProgress, [0, 1.5], [0, 1])
  const opacitySpring = useSpring(opacity, { stiffness: 100, damping: 20 })

  return (
    <motion.div
      className={classes.video}
      ref={ref}
      style={{
        x: xSpring,
        y: ySpring,
        opacity: opacitySpring,
      }}
    >
      <p className={classes.text}>Watch the video</p>

      <button onClick={onOpen} className={classes.btn}>
        <img src="/images/play-editor.svg" alt="play" />
      </button>
      <VideoModal isOpen={isOpen} onClose={onClose} />
    </motion.div>
  )
}

export { Button }
