import React from 'react';
import Header from '../Header/Header';
import MenuNav from '../Menu/MenuNav';
import './main.css';

const Main = () => {
  return (
    <div id='Main'>
      <div id='Body'>
        <div className='body-camera'><div className='body-camera-lens'></div></div>
          <div className='content'>
            <Header />
            <MenuNav />
          </div>
      </div>
      <div id='Bottom'>
        <div className='bottom-logo'><img src="/img/icon/apple.svg" alt="" /></div>
      </div>
    </div>
  );
};

export default Main;