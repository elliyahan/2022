import React from 'react';
import Header from './Header';
import Menu from './Menu';
import './../css/body.css';

const Body = () => {
  return (
    <div className='body'>
      <div id='body'>
        <div className='body-camera'><div className='body-camera-lens'></div></div>
          <div className='content'>
            <Header />
            <Menu />
          </div>
      </div>
      <div id='bottom'>
        <div className='bottom-logo'><img src="/img/icon/apple.svg" alt="" /></div>
      </div>
    </div>
  );
};

export default Body;