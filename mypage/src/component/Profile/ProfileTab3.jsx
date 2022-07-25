import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdLanguage, MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { BsEnvelopeOpen } from "react-icons/bs";

const ProfileTab3 = () => {
  return (
    <div className='profile-tab'>
      <section className='profile-tab-top'>
        <img src="/img/common/profile.jpg" alt="증명사진" />
        <h1 className='profile-heading'>한정아</h1>
      </section>
      <section className='profile-tab-mid'>
        <i><IoPersonCircleOutline size='28px' fill='#BDBDBD' /></i>
        <i><MdLanguage size='28px' fill='#BDBDBD' /></i>
        <i className='on'><MdOutlineBusinessCenter size='28px' fill='#ffffff' /></i>
        <i><MdOutlineSchool size='28px' fill='#BDBDBD' /></i>
        <i><BsEnvelopeOpen size='22px' fill='#BDBDBD' /></i>
      </section>
      <section className='profile-tab-bottom'></section>
    </div>
  );
};

export default ProfileTab3;