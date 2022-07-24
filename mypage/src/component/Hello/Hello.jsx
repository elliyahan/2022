import React, { useState } from 'react';
import './hello.css';

const Hello = ({state}) => {
  return (
    <div id='Hello' className={state ? 'close' : 'open'}>
      <span>안녕하세요</span>
      <em>방문을 환영합니다 :)</em>
      <span>하단의 메뉴는 오른쪽부터</span>
      <span>Home - Profile - Portfolio - Log</span>
      <span>- Code - StoryBoard - Image</span>
      <span>- SNS - Folder - Contact</span>
      <span>순으로 이어집니다.</span>
      <p>'<strong>Contact</strong>'를 통해 연락주시면 <br />
      빠르게 답변드리도록 하겠습니다.</p>
      <em>감사합니다 :)</em>
    </div>
  );
};

export default Hello;