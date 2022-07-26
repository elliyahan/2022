import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './../component/Header';
import './../css/contact.css';
import { SiKakaotalk } from "react-icons/si";
import { BsMic, BsPerson } from "react-icons/bs";
import { MdInsertEmoticon } from "react-icons/md";
import { BiRightArrow } from "react-icons/bi";

const Contact = () => {
  const navigate = useNavigate();

  const CloseTab = () => {
    navigate('/');
  }

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

  return (
    <div id='Contact'>
      <div id='body'>
        <div className='body-camera'><div className='body-camera-lens'></div></div>
        <div className='content'>
          <Header />
          <div className='contact-content'>
            <div className='contact-content-left'>
              <div className='contact-content-left-btn-box'>
                <button type='button' className='contact-red btn' onClick={CloseTab}></button>
                <button type='button' className='contact-yellow btn'></button>
                <button type='button' className='contact-green btn'></button>
              </div>
              <a href='https://open.kakao.com/o/s0afM2re' className='contact-left-title'>
                <SiKakaotalk className='kakao-icon' size='24px' fill='#F9E000' />
                <span>오픈채팅 바로가기</span>
                <BiRightArrow className='arrow-icon' size='16px' fill='#eee' />
              </a>
              <div className='contact-profile-box'>
                <div className='contact-profile-img'><BsPerson size='56px' fill='#eee' /></div>
                <div className='contact-profile'>
                  <h6>Han Jeong A</h6>
                  <p>안녕하세요. 한정아입니다. 자세한 대화를 원하시는 분은 상단의 카카오톡 오픈채팅방을 이용해주세요 :)</p>
                </div>
              </div>
            </div>
            <div className='contact-content-right'>
              <div className='contact-content-right-top'>
                <div className='contact-content-right-txt'>
                  <h6>대화상대 : <strong>한정아</strong></h6>
                  <button>세부사항</button>
                </div>
              </div>
              <div className='contact-content-right-bottom'>
                <div className='contact-content-right-content'>
                  <p>---- {setTime()} ----</p>
                  <span>안녕하세요.</span>
                  <span>한정아입니다 :)</span>
                  <span>빠른 답변과 대화를 원하시면</span>
                  <span>좌측의 '카카오톡 오픈채팅방'을 이용해주세요!</span>
                </div>
                <div className='contact-content-right-input'>
                  <input type="text" placeholder='iMessage' name="" id="" />
                  <MdInsertEmoticon className='contact-input-icon' fill='#aaa' size='24px' />
                  <BsMic className='contact-mic-icon' fill='#aaa' size='22px' />
                </div>
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

export default Contact;