import React from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdLanguage, MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { BsEnvelopeOpen } from "react-icons/bs";

const ProfileTab2 = () => {
  return (
    <div className='profile-tab'>
      <section className='profile-tab-top'>
        <img src="/img/common/profile.jpg" alt="증명사진" />
        <h1 className='profile-heading'>한정아</h1>
      </section>
      <section className='profile-tab-mid'>
        <i><IoPersonCircleOutline size='28px' fill='#BDBDBD' /></i>
        <i className='on'><MdLanguage size='28px' fill='#ffffff' /></i>
        <i><MdOutlineBusinessCenter size='28px' fill='#BDBDBD' /></i>
        <i><MdOutlineSchool size='28px' fill='#BDBDBD' /></i>
        <i><BsEnvelopeOpen size='22px' fill='#BDBDBD' /></i>
      </section>
      <section className='profile-tab-bottom'>
        <div className='profile-tab-des'>
          <span>HTML & CSS</span>
          <p>웹 표준 & 웹 접근성 & 기본 HTML태그
            <br />동적, 정적, 고정형, 반응형 페이지 구분
            <br />시맨틱 태그 구분 사용, 마크업
            <br />외부 CSS, JS, font 파일 등 연결
            <br />Float을 이용한 배치
            <br />position(sticky, relative, absolute, fixed) 사용
            <br />flex, grid를 이용한 element 배치
            <br />background 속성 및 shadow 속성 이용
            <br />transition & animation 사용
            <br />미디어쿼리를 이용한 반응형 웹 퍼블리싱
            <br />font & text & overflow 이용
            <br />hover, display, 특정 영역 지정 속성 추가 가능
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>Javascript</span>
          <p>자바스크립트 기초 문법
            <br />(변수, for, if, function, array, object)
            <br />모달창, 탭 등 기본 웹 UI 구현
            <br />애니메이션 & 이벤트 처리
            <br />이메일 형식 검사와 간단한 정규식
            <br />생산성 향상을 위한 jQuery 함수들
            <br />유저 입력에 따라 반응하는 form기능
            <br />Ajax로 서버 통신, 객체 상태 및 자바스크립트 모듈 관리
            <br />슬라이드 터치 & 스와이프 기능, 타이머 기능
            <br />html 재생성, 재렌더링 식으로 웹 개발
            <br />array, object, json 이용
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>React</span>
          <p>리액트 프로젝트 생성, 관리, 빌드
            <br />컴포넌트, props, state를 이용한 모던 웹 개발 
            <br />JSX for 반복문, 이벤트 핸들러 등 UI기능 구현
            <br />라우터로 페이지 나누기
            <br />Redux와 context API로 state 관리하기
            <br />Ajax 등으로 서버 API 통신
            <br />외부 라이브러리 (Bootstrap, Styled component, SASS)
            <br />lazy loading 등 간단한 성능 개선, 서버프로젝트와 리액트 연동
            <br />PWA 앱 구현웹 표준 & 웹 접근성 & 기본 HTML태그
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>Typescript</span>
          <p>string, number, array, object 타입 사용
            <br />any, unknown, boolean, 사용자 타입 사용
            <br />유니언 타입, 함수에 타입 적용
            <br />인터페이스 작성
            <br />컴파일러 이용 컴파일 후 자바스크립트 파일 생성
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>Zeplin & Figma</span>
          <p>Figma를 이용한 UI 디자인
            <br />Figma-Zeplin 연동 UI 디자인 구현
            <br />Photoshop-Zeplin 연동 UI 디자인 구현
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>Release / 협업 툴</span>
          <p>Vercel 이용 웹 앱 배포, AWS S3 이용 웹 앱 배포
            <br />Ubuntu 서버를 통한 웹 앱 배포 (nginx)
            <br />github를 이용한 프로젝트 개발
          </p>
        </div>
        <div className='profile-tab-des'>
          <span>Python</span>
          <p>기본 변수 및 자료형(문자열, 숫자열, 딕셔너리, 튜플, 리스트, 집합, 불 등)
            <br />if, while, for문 등 제어문 사용
            <br />함수(매개변수, lambda 등), 파일 입출력, 사용자 입출력
            <br />클래스, 모듈, 패키지, 예외 처리
            <br />정규 표현식 이용
            <br />라이브러리 이용 (pandas, numpy, matplotlib 등)
            <br />머신러닝(AI) 관련 툴 – tensorflow, pytorch, google colab 사용
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProfileTab2;