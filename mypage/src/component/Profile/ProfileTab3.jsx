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
      <section className='profile-tab-bottom'>
        <div className='profile-tab-des'>
          <span>교육이수</span>
          <p>기업연계형 프론트엔드 실무 프로젝트 과정
            <br />수료일자 : 2022.08.02
            <br />교육기관 : 서울산업진흥원 & 엑스퍼트컨설팅
            <br />교육내용 : HTML / CSS / JS / React
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>경력사항</span>
          <p>서울특별시 소셜임팩트사업 웹 프론트엔드 파트
            <br />근무기간 : 2021.09 ~ 2021.12
            <br />근무기업 : 서울특별시
            <br />근무내용 : 웹 프론트엔드 파트 인턴(계약직)
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>교육이수</span>
          <p>인공지능 교육 과정(5기) 고급과정(언어) 주말반
            <br />수료일자 : 2021.09.04
            <br />교육기관 : 한국IT비즈니스진흥협회
            <br />교육내용 : Python, tensorflow
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>교육이수</span>
          <p>파이썬을 활용한 머신러닝 프로젝트
            <br />수료일자 : 2021.08.30
            <br />교육기관 : 한국IT교육재단
            <br />교육내용 : Python, Tensorflow, Pytorch
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>경력사항</span>
          <p>네이버 스토어 등 온라인 쇼핑몰 운영
            <br />근무일자 : 2018.05 ~ 2020.01
            <br />근무기관 : 그루공방 (대표)
            <br />근무내용 : 온라인 공방(쇼핑몰) 기획 제작 및 운영
          </p>
        </div>
        <div className='profile-tab-des profile-tab-3'>
          <span>경력사항</span>
          <p>홈페이지 유지보수 및 SNS 마케팅 관리
            <br />근무일자 : 2018.12 ~ 2019.02
            <br />근무기관 : ㈜네오컬쳐
            <br />근무내용 : 기획 팀 보조, 홈페이지 유지보수 및 카드뉴스 기획
          </p>
        </div>
        <div className='profile-tab-des profile-tab-3'>
          <span>교육이수</span>
          <p>서안 서북대학교 어학연수
            <br />수료일자 : 2016.07.06
            <br />교육기관 : 중국 서북대학교 국제교류원
            <br />교육내용 : 중국어 및 중국문화 연수
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProfileTab3;