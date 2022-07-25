import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdLanguage, MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { BsEnvelopeOpen } from "react-icons/bs";

const ProfileTab1 = () => {
  return (
    <div className='profile-tab'>
      <section className='profile-tab-top'>
        <img src="/img/common/profile.jpg" alt="증명사진" />
        <h1 className='profile-heading'>한정아</h1>
      </section>
      <section className='profile-tab-mid'>
        <i className='on'><IoPersonCircleOutline size='28px' fill='#ffffff' /></i>
        <i><MdLanguage size='28px' fill='#BDBDBD' /></i>
        <i><MdOutlineBusinessCenter size='28px' fill='#BDBDBD' /></i>
        <i><MdOutlineSchool size='28px' fill='#BDBDBD' /></i>
        <i><BsEnvelopeOpen size='22px' fill='#BDBDBD' /></i>
      </section>
      <section className='profile-tab-bottom'>
        <div className='profile-tab-des'>
          <span>이름</span>
          <p>한정아 (Han JeongA)</p>
        </div>
        <div className='profile-tab-des'>
          <span>생년월일</span>
          <p>1995.10.16</p>
        </div>
        <div className='profile-tab-des'>
          <span>연락처</span>
          <p>mongndam@naver.com</p>
        </div>
        <div className='profile-tab-des'>
          <span>주소</span>
          <p>서울특별시 관악구</p>
        </div>
        <div className='profile-tab-des'>
          <span>한 줄 소개</span>
          <p>안녕하십니까. 저는 끝없이 파고 들어가 길을 만들어나가는 한정아입니다.
          <br />늘 궁금해하고 그를 제대로 해결해나가며 발전하는 프론트엔드 개발자가 되겠습니다.
          <br />감사합니다.</p>
        </div>
      </section>
    </div>
  );
};

export default ProfileTab1;