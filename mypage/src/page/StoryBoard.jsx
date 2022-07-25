import React, { useState } from 'react';
import Header from '../component/Header';
import SubHeader from '../component/SubHeader';
import './../css/storyboard.css';
import StoryBoard1 from './../component/StoryBoard/StoryBoard1';
import StoryBoard2 from './../component/StoryBoard/StoryBoard2';
import StoryBoard3 from './../component/StoryBoard/StoryBoard3';
import { MAP_DATA_STORYBOARD } from './../component/StoryBoard/map_data';
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from 'react-router-dom';
import StoryBoard4 from './../component/StoryBoard/StoryBoard4';


const StoryBoard = () => {
  const [content, setContent] = useState('first');

  const buttonValueSetting = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <StoryBoard1 />,
    second: <StoryBoard2 />,
    third: <StoryBoard3 />,
    fourth: <StoryBoard4 />
  };
  return (
    <div id='StoryBoard'>
      <div className='body'>
        <div id='body'>
          <div className='body-camera'><div className='body-camera-lens'></div></div>
          <div className='content'>
            <Header />
            <SubHeader />
            <div className='storyboard-header'>
              <div className='storyboard-title'>
                <img src="/img/icon/figma.svg" alt="" />
                <div className='storyboard-text'>
                  <h6>JeongA Han's</h6>
                  <span>StoryBoard</span>
                </div>
                <BiChevronDown />
              </div>
            </div>
            <div className='storyboard-content'>
              <div className='storyboard-content-left'>
                <div className='storyboard-content-tab'>
                {MAP_DATA_STORYBOARD.map(data => {return (
                <button className={content === data.name? 'storyboard-content-tab-list active' : 'storyboard-content-tab-list'} onClick={buttonValueSetting} name={data.name} key={data.id}>
                  <div>
                    <img src={data.logo} alt="" />
                    <span>{data.text}</span>
                  </div>
                  <BsArrowRight size='17px' fill='#333' />
                </button>
                );
                })}
                </div>
                <div className="storyboard-content-left-mid">
                  <div className='storyboard-content-left-mid-title'>
                    <AiFillCaretDown size='10px' />
                    <span>To Portfolio</span>
                  </div>
                  <Link to='/portfolio' className='storyboard-content-left-mid-box'>
                    <span>button</span>
                    <div className='storyboard-content-left-mid-img-wrap'>
                      <img src='/img/common/portfolio_logo.jpg' alt='' />
                    </div>
                  </Link>
                </div>
                <div className="storyboard-content-left-bottom">
                  <div className='storyboard-content-left-bottom-title'>
                    <AiFillCaretDown size='10px' />
                    <span>Teams</span>
                  </div>
                  <div className='storyboard-content-left-bottom-box'>
                    <span>button</span>
                    <p>JeongAHan's team</p>
                  </div>
                </div>
              </div>
              <div className='storyboard-content-right'>
                {content && <div className='detail-tab-content'>{selectComponent[content]}</div>}
              </div>
            </div>
          </div>
        </div>
        <div id='bottom'>
          <div className='bottom-logo'><img src="/img/icon/apple.svg" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default StoryBoard;