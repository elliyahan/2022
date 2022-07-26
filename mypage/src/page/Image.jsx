import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './../component/Header';
import './../css/image.css';
import { AiFillGithub, AiFillFolder } from "react-icons/ai";
import SubHeader from './../component/SubHeader';

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
          <SubHeader />
          <div className='image-content'>
            <div className='image-left'>
                <span>앨범</span>
                <Link to='/' className='image-left-btn-box'>
                  <img src="/img/icon/home.svg" alt="Home" className='image-left-btn' />
                  <span>Home</span>
                </Link>
                <Link to='/profile' className='image-left-btn-box'>
                  <img src="/img/icon/identify.svg" alt="Profile" className='image-left-btn' />
                  <span>Profile</span>
                </Link>
                <Link to='/portfolio' className='image-left-btn-box'>
                  <img src="/img/icon/edge.svg" alt="Portfolio" className='image-left-btn' />
                  <span>Portfolio</span>
                </Link>
                <Link to='/storyboard' className='image-left-btn-box'>
                  <img src="/img/icon/figma.svg" alt="StoryBoard" className='image-left-btn' />
                  <span>StoryBoard</span>
                </Link>
                <Link to='/contact' className='image-left-btn-box'>
                  <img src="/img/icon/contact.svg" alt="Contact" className='image-left-btn' />
                  <span>Contact</span>
                </Link>
                <a href='https://github.com/hanjeonga' className='image-left-btn-box'>
                  <AiFillGithub size='20px' className='image-left-btn' />
                  <span>GitHub</span>
                </a>
                <button className='image-left-btn-box'>
                  <AiFillFolder size='32px' className='image-left-btn' fill='#88CFF6' />
                  <span>나의 앨범</span>
                </button>
                <button className='image-left-btn-box'>
                  <AiFillFolder size='32px' className='image-left-btn' fill='#88CFF6' />
                  <span>사람 및 장소</span>
                </button>
                <button className='image-left-btn-box'>
                  <AiFillFolder size='32px' className='image-left-btn' fill='#88CFF6' />
                  <span>미디어유형</span>
                </button>
            </div>
            <div className='image-right'>
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