import Image from 'next/image'
import React from 'react'
import Button from '../Components/Button'
import Certificate from "../public/static/images/certificate.png";


type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='hero'>
        <div className='info'>
          <div className='info-text'>
            <h2>
              Create and download your <span> professional certificates</span>{" "}
              for <span>free</span>
            </h2>
            <p>
              Generate professionally designed certificates for your staff,
              students etc.
            </p>
          </div>
         
          <Button text='Create a Certificate Now' />
        </div>

        <div className='img px-4'>
          <Image alt='certificate' src={Certificate} />
        </div>
      </div>
  )
}

export default Hero