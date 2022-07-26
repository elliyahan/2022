import React from 'react';
import SubHeader from './../component/SubHeader';
import Header from './../component/Header';
import './../css/folder.css'

const Folder = () => {
  return (
    <div id='Folder'>
      <div id='body'>
          <div className='body-camera'><div className='body-camera-lens'></div></div>
          <div className='content'>
            <Header />
            <SubHeader />
          </div>
        </div>
        <div id='bottom'>
          <div className='bottom-logo'><img src="/img/icon/apple.svg" alt="" /></div>
        </div>
    </div>
  );
};

export default Folder;