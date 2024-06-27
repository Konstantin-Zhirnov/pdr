import React from 'react'
import { Roboto_Condensed } from 'next/font/google'

import './globals.css'

export const metadata = {
  title: 'Paintless Dent Removal',
  description:
    'Paintless dent repair is a service for repairing car body damage without affecting the paint. Our company`s specialists restore the car to its original appearance without the need for expensive and time-consuming repainting and without any signs of repair. We do this quickly, affordably, and with a quality guarantee.',
  keywords: 'mobile applications, web applications, website',
  openGraph: {
    title: 'Paintless Dent Removal',
    description:
      'Paintless dent removal is a service for repairing car body damage without affecting the paint. Our company`s specialists restore the car to its original appearance without the need for expensive and time-consuming repainting and without any signs of repair. We do this quickly, affordably, and with a quality guarantee.',
    url: 'https://digital-nanaimo.ca',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const RobotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={RobotoCondensed.className}>
        {children}
      </body>
    </html>
  )
}
