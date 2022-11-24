'use client'

import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import './header.css';



type Props = {};

export default function Header({}: Props) {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
}
