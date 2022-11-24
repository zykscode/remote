import React from 'react';
import FooterForm from './FooterForm';
import FooterNavs from './FooterNavs';
import Logo from './Logo';
import Socials from './Socials';

const footerNavs = [
  {
    header: 'Company',
    links: [
      {
        name: 'About',
        path: '/',
      },
      {
        name: 'Contact',
        path: '/',
      },
      {
        name: 'Our Team',
        path: '/',
      },
    ],
  },
  {
    header: 'Product',
    links: [
      {
        name: 'How it works',
        path: '/',
      },
      {
        name: 'Pricing',
        path: '/',
      },
      {
        name: 'Terms of Service',
        path: '/',
      },
      {
        name: 'Privacy Policy',
        path: '/',
      },
    ],
  },
  {
    header: 'Resources',
    links: [
      {
        name: 'Blog',
        path: '/',
      },
      {
        name: 'Help',
        path: '/',
      },
      {
        name: 'FAQs',
        path: '/',
      },
    ],
  },
];

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="footer-note">
        <div className="footer-note-navs">
          {footerNavs.map((footerNav) => {
            return (
              <FooterNavs
                key={footerNav.header}
                header={footerNav.header}
                links={footerNav.links}
              />
            );
          })}
        </div>
        <FooterForm />
      </div>
      <div className="footer-socials">
        <div className="logo-area">
          <Logo />
          <h3 className="logo-text">Info@certawi.com</h3>
        </div>
        <Socials />
        <h3>
          © Copyright 2022 <span className="span">Team Headlight</span> . All
          rights reserved.
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
