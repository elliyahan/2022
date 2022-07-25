import React, { useState, useContext, useEffect, useReducer, useRef } from 'react';
import './../../css/log.css';
import Calendar from 'react-calendar';
import moment from 'moment';
import axios from 'axios';
import { DiaryStateContext } from "../../App";
import Header from '../../component/Header';
import SubHeader from './../../component/SubHeader';
import LogItem from './../../component/Log/LogItem';

const LogDaily = () => {
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState([]);
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);
  const dates = [];
  const [curDate, setCurDate] = useState(new Date());

  useEffect(() => {
    axios.get('/data/log_date.json')
      .then((response) => response.data)
      .then((response) => setMark(response));
  }, []);

  for(const key in Object.keys(mark)) {
    dates.push(mark[key].date);
  }

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div id='Log'>
      <div className='body'>
        <div id='body'>
          <div className='body-camera'><div className='body-camera-lens'></div></div>
          <div className='content'>
            <Header />
            <SubHeader />
            <div className='log-content'>
              <section className='log-section'>
                <Calendar
                  onChange={onChange}
                  formatDay={(locale, date) => moment(date).format("D")} // 날'일' 제외하고 숫자만 보이도록 설정
                  value={value}
                  showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
                  locale="ko-KO"
                  tileContent={({ date, view }) => { // 날짜 타일에 컨텐츠 추가하기 (html 태그)
                    // 추가할 html 태그를 변수 초기화
                    let html = [];
                    // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
                    if (dates.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                      html.push(<div className="dot" key={date}></div>);
                    }
                    // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
                    return (
                      <div className="flex justify-center items-center absoluteDiv">
                        {html}
                      </div>
                    );
                  }}
                  />
                  <div className="log-section-date">
                    {moment(value).format("YYYY년 MM월 DD일")} 
                  </div>
              </section>
              <section className='diary-section'>
                <LogItem />
              </section>
            </div>
          </div>
        </div>
        <div id='bottom'>
          <div className='bottom-logo'><img src="/img/icon/apple.svg" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default LogDaily;