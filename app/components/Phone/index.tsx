'use client'

import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

import classes from './Phone.module.sass'

const Phone: React.FC = () => {
  return (
    <a href="tel:2508025654" className={classes.btn}>
      <FaPhoneAlt />
    </a>
  )
}

export { Phone }
