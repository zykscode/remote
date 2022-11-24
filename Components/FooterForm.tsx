import React from 'react'

type Props = {}

export default function FooterForm({}: Props) {
  return (
    <form className='footer-form'>
        <h3 className=' smallText'>Stay up to date with our Product</h3>
        <div className="footer-form-input">
        <input title='email' placeholder='Your Email' type="email" />
        <button type='submit'> subcribe</button>
        </div>
    </form>
  )
}