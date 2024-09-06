'use client'

import React from 'react'

import { Wrapper } from '../Wrapper'
import { Email } from '../Email'

import classes from './Header.module.sass'

const Header: React.FC = () => {
  return (
    <header>
      <Wrapper classes={classes.container}>
        <img className={classes.logo} src={`/images/logo.png`} alt="paintless dent repair" />
        <a className={classes.phone} href="tel:2508025654">
          250.802.5654
        </a>
        <Email />
      </Wrapper>
    </header>
  )
}

export { Header }
