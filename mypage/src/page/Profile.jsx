import React, { useState } from 'react';
import './../css/profile.css';
import Header from './../component/Header';
import { useNavigate } from 'react-router-dom';
import ProfileTab1 from './../component/Profile/ProfileTab1';
import ProfileTab2 from './../component/Profile/ProfileTab2';
import ProfileTab3 from './../component/Profile/ProfileTab3';
import ProfileTab4 from './../component/Profile/ProfileTab4';
import ProfileTab5 from './../component/Profile/ProfileTab5';
import { MAP_DATA_PROFILE } from './../component/Profile/map_data';

const Profile = () => {
  const navigate = useNavigate();

  const CloseTab = () => {
    navigate('/');
  }

  const [content, setContent] = useState('first');

  const buttonValueSetting = e => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <ProfileTab1 />,
    second: <ProfileTab2 />,
    third: <ProfileTab3 />,
    fourth: <ProfileTab4 />,
    fifth: <ProfileTab5 />
  };

  return (
    <div id='Profile'>
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
                <div className='profile-right-tap'>
                  <div className='profile-right-tap-header'>이력서 항목</div>
                  {MAP_DATA_PROFILE.map(data => {return (
                  <button className={content === data.name? 'profile-right-tap-list active' : 'profile-right-tap-list'} onClick={buttonValueSetting} name={data.name} key={data.id}>
                    {data.text}
                  </button>
                  );
                  })}
                </div>
                <div className='profile-right-tap-content'>
                  {content && <div className='profile-tab-content'>{selectComponent[content]}</div>}
                </div>
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

export default Profile;