'use client'

import SocialLinks from '@/app/components/SocialLinks'
import { Wrapper } from '../Wrapper'

import classes from './Footer.module.sass'

export const Footer = () => {
  return (
    <Wrapper>
      <footer className={classes.footer}>
        <span>© {new Date().getFullYear()} PDR. All rights reserved</span>

        <div className={classes.links}>
          Follow us: <SocialLinks variant="footer" />
        </div>
      </footer>
    </Wrapper>
  )
}
