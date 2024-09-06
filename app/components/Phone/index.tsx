'use client'

import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

import classes from './Phone.module.sass'

const Phone: React.FC = () => {
  return (
    <button className={classes.btn}>
      <FaPhoneAlt />
    </button>
  )
}

export { Phone }
