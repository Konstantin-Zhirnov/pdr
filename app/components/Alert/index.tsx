'use client'

import React from 'react'
import Image from 'next/image'

import { Wrapper } from '../Wrapper'

import classes from './Alert.module.sass'

const Alert: React.FC = () => {
  return (
    <Wrapper classes={classes.container}>
      <div className={classes.alert}>
        <Image src="/images/alert.svg" alt="Alert" width={31} height={31} />
        <div className={classes.text}>
          The cost of repair depends on the location of the dent (how difficult it is to access),
          the shape and nature of the damage (smooth or sharp points), the size and depth, as well
          as the thickness and type of metal (working with aluminum parts is more difficult and
          time-consuming).
        </div>
      </div>
    </Wrapper>
  )
}

export { Alert }
