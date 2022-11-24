import React from 'react';
import '../styles/globals.css';
import '../styles/certificate.css';
import Footer from '../Components/Footer'
import Header from '../Components/header/Header';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <div className="bg-pink-500">
          hello
        </div>
        {children}
        <Footer />
        </body>
    </html>
  );
}
