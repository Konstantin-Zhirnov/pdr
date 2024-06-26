import React from 'react'
import { motion } from 'framer-motion'

import styles from './Wrapper.module.sass'

interface IProps {
  children: React.ReactNode
  classes?: any
}

const Wrapper: React.FC<IProps> = ({ children, classes }) => (
  <motion.section className={`${styles.wrapper} ${classes || ''}`}>{children}</motion.section>
)

export { Wrapper }
