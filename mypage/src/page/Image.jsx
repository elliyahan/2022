import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './../component/Header';
import './../css/image.css';

const Image = () => {
  const navigate = useNavigate();

  const CloseTab = () => {
    navigate('/');
  }

  return (
    <div id='Image'>
      <div id='body'>
        <div className='body-camera'><div className='body-camera-lens'></div></div>
          <div className='content'>
            <Header />
            <div className='profile-content'>
              <div className='profile-content-left'>
                <div className='profile-content-left-btn-box'>
                  <button type='button' className='profile-red btn' onClick={CloseTab}></button>
                  <button type='button' className='profile-yellow btn'></button>
                  <button type='button' className='profile-green btn'></button>
                </div>
                <span className='profile-content-left-title'>전체 이력서</span>
              </div>
              <div className='profile-content-right'>
              </div>
            </div>
          </div>
      </div>
      <div id='bottom'>
        <div className='bottom-logo'><img src="/img/icon/apple.svg" alt="" /></div>
      </div>
    </div>
  );
};

export default Image;