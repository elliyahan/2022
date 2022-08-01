import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div id='Header'>
      <header className='header-section'>
        <section className='header-inner'>
          <ul className='header-left-list'>
            <li><a href="/">New</a></li>
            <li><a href="/">Product</a></li>
            <li><a href="/">Form</a></li>
          </ul>
          <h1 className='header-title'><a href="/">Logo</a></h1>
          <ul className='header-right-list'>
            <li><a href="/">Cart</a></li>
            <li><a href="/">Review</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </section>
      </header>
    </div>
  );
};

export default Header;