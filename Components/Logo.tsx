import Image from 'next/image'
import React from 'react'
import img from '../public/static/images/Group 56.png'

type Props = {}

const Logo = (props: Props) => {
  return (
   <Image alt='site logo' src={img}/>
  )
}

export default Logo