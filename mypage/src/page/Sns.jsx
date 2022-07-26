import React from 'react';
import Header from './../component/Header';
import './../css/sns.css';

const Sns = () => {
  return (
    <div id='Sns'>
      <div id='body'>
          <div className='body-camera'><div className='body-camera-lens'></div></div>
          <div className='content'>
            <Header />
            <div className='sns-content'></div>
          </div>
        </div>
        <div id='bottom'>
          <div className='bottom-logo'><img src="/img/icon/apple.svg" alt="" /></div>
        </div>
    </div>
  );
};

export default Sns;