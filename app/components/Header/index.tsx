'use client'

import React from 'react'
import Image from 'next/image'

import { Wrapper } from '../Wrapper'
import { Email } from '../Email'

import classes from './Header.module.sass'

const Header: React.FC = () => {
  return (
    <header>
      <Wrapper classes={classes.container}>
        <Image
          className={classes.logo}
          src={`/images/logo.png`}
          alt="paintless dent repair"
          width={140}
          height={52.5}
        />
        <Email />
      </Wrapper>
    </header>
  )
}

export { Header }
