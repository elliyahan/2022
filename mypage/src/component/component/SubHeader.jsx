import React from 'react';
import './../css/header.css';
import { useNavigate } from 'react-router-dom';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const SubHeader = ({Pref, Nref}) => {
  const navigate = useNavigate();

  const CloseTab = () => {
    navigate('/');
  }

  return (
    <div id='SubHeader'>
      <div className='subheader-left'>
        <button type='button' className='subheader-red Btn' onClick={CloseTab}></button>
        <button type='button' className='subheader-yellow Btn'></button>
        <button type='button' className='subheader-green Btn'></button>
        <button type='button' className='subheader-prev btn' ref={Pref}><GrFormPrevious /></button>
        <button type='button' className='subheader-next btn' ref={Nref}><GrFormNext /></button>
      </div>
      <div className='subheader-right'>
        pagination
      </div>
    </div>
  );
};

export default SubHeader;