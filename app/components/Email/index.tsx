import React from 'react'

import classes from './Email.module.sass'

const Email: React.FC = () => {
  return (
    <a
      href="mailto:westpointwest1979@gmail.com?subject=Paintless%20Dent%20Removal"
      className={classes.link}
    >
      Send Email
    </a>
  )
}

export { Email }
