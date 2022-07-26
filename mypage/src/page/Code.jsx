import React from 'react';
import Header from './../component/Header';
import './../css/code.css';
import { useNavigate } from 'react-router-dom';

const Code = () => {
  const navigate = useNavigate();

  const CloseTab = () => {
    navigate('/');
  }
  return (
    <div id='Code'>
      <div id='body'>
        <div className='body-camera'><div className='body-camera-lens'></div></div>
          <div className='content'>
            <Header />
            <div className='code-content'>
              <div class="code-editor">	
                <span class="control" onClick={CloseTab}></span>
                <span class="control"></span>
                <span class="control"></span>
                <div class="line-numbers">
                  <section class="language-css">
                    Microsoft Windows [Version 10.0.19044.1826]
                    <br />(c) Microsoft Corporation. All rights reserved.
                    <br />C:/User/HanJeongA
                    <br />
                    <br /><sub>/*
                    <br />Code Edior Section is
                    <br />Introduction og Portfolio's Slide
                    <br />Code Editor 영역은
                    <br />Portfolio Slide에 대한 소개를 다룹니다.
                    <br />*/</sub>
                    <br />
                    <br />
                    <strong>Slide1 : Kiffy</strong> <b>&#123;</b>
                    <br />HTML / CSS 이용
                    <br />Nav Hover 시 Depth2, Depth3가 나타나도록 적용
                    <br />이미지 Hover 시 이미지 변경
                    <br />이미지 Hover시 Transiton 적용(Scale 변경)
                    <br /><b>&#125;</b><br />
                    <br /><strong>Slide2 : MarketKurly</strong> <b>&#123;</b>
                    <br />HTML / CSS 이용
                    <br />Nav Hover 시 Depth2가 나타나도록 적용
                    <br />이미지 Hover시 Transiton 적용(Scale 변경)
                    <br /><b>&#125;</b><br />
                    <br /><strong>Slide3 : Twitch</strong> <b>&#123;</b>
                    <br />HTML / CSS 이용
                    <br />왼쪽 고정바만 스크롤 적용
                    <br />이미지 Hover시 Transition적용으로 입체감 부여
                    <br /><b>&#125;</b><br />
                    <br /><strong>Slide4 : Youtube</strong> <b>&#123;</b>
                    <br />HTML / CSS 이용
                    <br />Main, Channel, Popular 페이지 마크업
                    <br />각 페이지 포인트 클릭 시 페이지 이동
                    <br /><b>&#125;</b><br />
                    <br /><strong>Slide5 : 배달의민족</strong> <b>&#123;</b>
                    <br />HTML / CSS / JS 이용
                    <br />풀페이지(Fullpage.js) 적용
                    <br />페이지 변경시 Header Display 변경
                    <br />Pagination 페이지 변경 시 변경
                    <br />페이지 넘어갈 때마다 Animation 적용
                    <br /><b>&#125;</b><br />
                    <br /><strong>Slide6 : Zetaplan</strong> <b>&#123;</b>
                    <br />React 이용
                    <br />Component 재사용
                    <br />fullpage, swiper, editor 등 라이브러리 이용
                    <br />검색 기능, 로그인 후 글쓰기 기능 구현
                    <br />Transiton, Animation 이용으로 동적 이미지 구현
                    <br /><b>&#125;</b><br />
                    <br /><strong>Slide7 : </strong> <b>&#123;</b>
                    <br />
                    <br /><b>&#125;</b>
                    <span className='code-sursor'></span>
                  </section>
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

export default Code;