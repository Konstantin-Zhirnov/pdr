'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Wrapper } from '../Wrapper'
import { animation } from '@/constants'

import classes from './Cards.module.sass'

const Cards: React.FC = () => {
  return (
    <Wrapper classes={classes.container}>
      <motion.h2
        className={classes.title}
        initial="hidden"
        whileInView="visible"
        variants={animation}
      >
        Why Paintless Dent Removal?
      </motion.h2>
      <motion.ul
        className={classes.list}
        initial="hidden"
        whileInView="visible"
        variants={animation}
      >
        <li className={classes.item}>
          <Image
            width={110}
            height={110}
            src="/images/arrows.svg"
            alt="Repair of dents using PDR"
          />
          <h4 className={classes.title}>HIGH SPEED</h4>
          <p className={classes.text}>
            Repair of dents using PDR technology will take significantly less time than
            straightening and painting of the body element. On average,
            <span className={classes.text_bold}> it takes 30 to 90 minutes</span> to remove a dent.
          </p>
        </li>

        <li className={classes.item}>
          <Image width={110} height={110} src="/images/justice.svg" alt="Paintless dent removal" />
          <h4 className={classes.title}>STABILITY</h4>
          <p className={classes.text}>
            You do not need to worry about whether the repair will be noticeable, you do not need to
            worry about whether the master will get into the color when painting.
            <span className={classes.text_bold}> Removing dents using PDR technology </span>
            will not affect the paintwork of your car.
          </p>
        </li>

        <li className={classes.item}>
          <h4 className={classes.title}>AFFORDABLE PRICES</h4>
          <p className={classes.text}>
            <span className={classes.text_bold}>
              Bodywork is always expensive, but not in our case.
            </span>
            <br />
            Removing dents using PDR technology will significantly save your budget. The price is
            announced immediately and will not change during the repair process.
          </p>
        </li>

        <li className={classes.item}>
          <h4 className={classes.title}>WITHOUT REMOVING THE PARTS</h4>
          <p className={classes.text}>
            After the repair, there are no traces even on the edges of the bolts and in the future
            there will be no questions why the part was removed. The part acquires its original
            appearance.
            <br />
            <br />
            There are no traces of rough straightening, shagreen after painting and other defects,
            which means that it is not possible to establish the fact of damage.
          </p>
        </li>
      </motion.ul>
    </Wrapper>
  )
}

export { Cards }
