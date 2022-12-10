import React from 'react';
import '../styles/globals.css';
import '../styles/certificate.scss';
import Footer from '../Components/Footer'
import Header from '../Components/header/Header';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log({
    todo:"Navbar animation too fast"
  })
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next.js App Directory Playground</title>
        <meta
          name="description"
          content="Next.js App Directory Playground"
          key="desc"
        />
      </head>
      <body className="app">
        <Header/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
