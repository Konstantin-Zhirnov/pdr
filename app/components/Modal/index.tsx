import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

import classes from './Modal.module.sass'
import Portal from '../Portal'

interface IProps {
  isOpen: boolean
  onClose: () => void
}

const VideoModal: React.FC<IProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <Portal>
      <div className={classes.container}>
        <div className={classes.content}>
          <button onClick={onClose} className={classes.btn}>
            <Image src="/images/close.svg" alt="close" width={20} height={20} />
          </button>
          <ReactPlayer url="/video/pdr.mp4" playing controls width="100%" height="100%" />
        </div>
      </div>
    </Portal>
  )
}

export { VideoModal }
