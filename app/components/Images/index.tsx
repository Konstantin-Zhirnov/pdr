'use client'

import React from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { MdOutlineRotate90DegreesCw, MdZoomIn, MdZoomOut, MdOutlineHideImage } from 'react-icons/md'

import { Wrapper } from '../Wrapper'
import { imageAnimation } from '@/constants'

import 'react-photo-view/dist/react-photo-view.css'
import classes from './Images.module.sass'

const images = [
  '/images/repair-1.jpg',
  '/images/repair-2.jpg',
  '/images/repair-3.jpg',
  '/images/repair-4.jpg',
  '/images/repair-5.jpg',
]

const Images: React.FC = () => {
  return (
    <Wrapper classes={classes.container}>
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }
        toolbarRender={({ onScale, scale, rotate, onRotate }) => {
          return (
            <>
              <MdZoomIn
                className={cn('PhotoView-Slider__toolbarIcon', classes.icon)}
                onClick={() => onScale(scale + 1)}
              />
              <MdZoomOut
                className={cn('PhotoView-Slider__toolbarIcon', classes.icon)}
                onClick={() => onScale(scale - 1)}
              />
              <MdOutlineRotate90DegreesCw
                className={cn('PhotoView-Slider__toolbarIcon', classes.icon)}
                onClick={() => onRotate(rotate + 90)}
              />
            </>
          )
        }}
      >
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={imageAnimation}
              className={classes.image_container}
            >
              <img src={item} className={classes.image} alt="paintless dent repair" />
            </motion.div>
          </PhotoView>
        ))}
      </PhotoProvider>
    </Wrapper>
  )
}

export { Images }
