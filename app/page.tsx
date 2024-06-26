import React from 'react'

import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/Hero'
import { Approach } from '@/app/components/Approach'
import { Cards } from '@/app/components/Cards'
import { Alert } from '@/app/components/Alert'
import { Video } from '@/app/components/Video'
import { Images } from '@/app/components/Images'
import { Epilog } from '@/app/components/Epilog'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Approach />
      <Alert />
      <Video />
      <Images />
      <Cards />
      <Epilog />
    </>
  )
}
