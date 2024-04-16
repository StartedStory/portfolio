import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1>Christian Tauli Montero</h1>
        <h3 className="text-light">I am here to bring your vision to life!</h3>
        <p>A detail-oriented, and Agile driven software developer, I am passionate about developing innovative web solutions that contribute to the efficiency and effectiveness of organizational success. I am resilient and believe in going the extra mile to get the job done!</p>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
