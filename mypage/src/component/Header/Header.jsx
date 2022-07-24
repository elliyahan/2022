import React, { useState } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import Search from './../Search/Search';
import Hello from './../Hello/Hello';

const Header = () => {
  const [isActive, setActive] = useState("false");

  const setTime = () => {
    let now = new Date();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let todayMonth = month[now.getMonth()];
    let todayDate = now.getDate();
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayOfWeek = week[now.getDay()];
    let hours = now.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;

    return dayOfWeek + "   " + todayMonth + "   " + todayDate + "   " + strTime;
  }

  const handleToggle = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <div id='Header'>
      <div className='header-left'>
        <ul className='header-left-list'>
          <li><Link to="/"><img src="/img/icon/apple.svg" alt="Home" /></Link></li>
          <li><Link to="/"><Search /></Link></li>
          <li><Link to="/profile">Info</Link></li>
          <li><a href="https://github.com/hanjeonga">Git</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className='header-right'>
        <ul className='header-right-list'>
          <li className='header-right-wifi'><img src="/img/icon/wifi.svg" alt="Wifi" /></li>
          <li className='header-right-notice'>
            <button type='button' onClick={handleToggle}>
              <img src="/img/icon/notice.svg" alt="Notice" />
            </button>
            <Hello state={isActive} />
          </li>
          <li className='header-right-time'>{setTime()}</li>
        </ul>
        <span className='header-right-notice-new'>N</span>
      </div>
    </div>
  );
};

export default Header;