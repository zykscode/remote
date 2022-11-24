
import Image from 'next/image'
import React from 'react'
import logo from '../../public/static/images/logo.png'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className=''>
      <Image id='logo' alt='logo' height={logo.height} width={logo.width} src={logo}/>
    </div>
  )
}

export default Logo