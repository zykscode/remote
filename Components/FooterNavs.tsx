import Link from 'next/link'
import React from 'react'
type Links ={
    name:string
    path:string
}
type Props = {
    header:string
    links:Links[]

}

export default function FooterNavs({header, links}: Props) {
  return (
    <div className='footer-note-navs-links'>
        <h2>{header}</h2>
        {links.map((link)=>{
           return <Link key={link.name} href={link.path}>
                {link.name}
            </Link>
        })}
    </div>
  )
}