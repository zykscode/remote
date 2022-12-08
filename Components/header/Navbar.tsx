
import Link from 'next/link'
import React from 'react'
import navs from '../../Libs/data/navs'
import Button from '../Button'
import Toggle from '../mobile/Toggle'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='navbar'>
      <div className="navbar-lhs">
        {navs.map((nav)=>{
          return <Link key={nav.name} href={`/${nav.link}`}>
            {nav.name}
          </Link>
        })}
      </div>
      <div className="navbar-rhs">
      <Button text='Get Started'/>
      <Toggle/>
      </div>
    </nav>
  )
}

export default Navbar