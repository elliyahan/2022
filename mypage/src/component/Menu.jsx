import React from 'react';
import './../css/menu.css';
import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
  return (
    <div id='main-menu'>
      <ul className='main-nav'>
        <li>
          <Link to="/">
            <img src="/img/icon/home.svg" alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img src="/img/icon/identify.svg" alt="Profile" />
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <img src="/img/icon/edge.svg" alt="Portfolio" />
          </Link>
        </li>
        <li>
          <Link to="/log">
            <img src="/img/icon/calendar.svg" alt="Log" />
          </Link>
        </li>
        <li>
          <Link to="/code">
            <img src="/img/icon/data.svg" alt="Code" />
          </Link>
        </li>
        <li>
          <Link to="/storyboard">
            <img src="/img/icon/figma.svg" alt="StoryBoard" />
          </Link>
        </li>
        <li>
          <Link to="/image">
            <img src="/img/icon/gallery.svg" alt="Gallery" />
          </Link>
        </li>
        <li>
          <Link to="/sns">
            <img src="/img/icon/instagram.svg" alt="SNS" />
          </Link>
        </li>
        <li className='menu-line'></li>
        <li>
          <Link to="/folder">
            <img src="/img/icon/folder.svg" alt="Folder" />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img src="/img/icon/contact.svg" alt="Contact" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;