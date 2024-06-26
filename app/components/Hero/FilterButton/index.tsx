import React from 'react'
import cn from 'classnames'

import classes from './FilterButton.module.sass'

interface IProps {
  text: string
  onClick: () => void
  active: boolean
}

const FilterButton: React.FC<IProps> = ({ text, onClick, active }) => {
  return (
    <button className={cn(classes.btn, { [classes.active]: active })} onClick={onClick}>
      <div className={classes.figure} />
      <div className={classes.text}>{text}</div>
    </button>
  )
}

export { FilterButton }
