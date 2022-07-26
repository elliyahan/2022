import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdLanguage, MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { BsEnvelopeOpen } from "react-icons/bs";

const ProfileTab4 = () => {
  return (
    <div className='profile-tab'>
      <section className='profile-tab-top'>
        <img src="/img/common/profile.jpg" alt="증명사진" />
        <h1 className='profile-heading'>한정아</h1>
      </section>
      <section className='profile-tab-mid'>
        <i><IoPersonCircleOutline size='28px' fill='#BDBDBD' /></i>
        <i><MdLanguage size='28px' fill='#BDBDBD' /></i>
        <i><MdOutlineBusinessCenter size='28px' fill='#BDBDBD' /></i>
        <i className='on'><MdOutlineSchool size='28px' fill='#ffffff' /></i>
        <i><BsEnvelopeOpen size='22px' fill='#BDBDBD' /></i>
      </section>
      <section className='profile-tab-bottom'>
        <div className='profile-tab-des'>
          <span>동아리</span>
          <p>취업 동아리 LUWA 임원으로 동아리 운영
            <br />활동기간 : 2018.03 ~ 2020.01
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>자격증</span>
          <p>증권투자권유대행인
            <br />취득일자 : 2018.03 ~ 2020.01
            <br />발행기관 : 금융투자협회
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>학술대회</span>
          <p>산학협력프로젝트로 한국방송미디어공학회 추계학술대회 참여
            <br />활동기간 : 2019.09 ~ 2019.12
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>학생회</span>
          <p>IT 단과대학 ‘POST IT’ 선거 활동 및 학생회 활동
            <br />활동기간 : 2015.01 ~ 2015.08
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>어학</span>
          <p>영어 : OPIc, TOEIC
            <br />취득일자 : 2020.12.21 / 2020.07.19
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>어학</span>
          <p>중국어 : HSK4급
            <br />취득일자 : 2019.04
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProfileTab4;