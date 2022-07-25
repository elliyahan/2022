import React, { useState, useContext } from 'react';
import SubHeader from './../component/SubHeader';
import Header from './../component/Header';
import './../css/log.css';
// import LogCalendar from '../component/Log/Calendar';
import { LogContext } from './../component/Log/LogContext';
import Calendar from 'react-calendar';
import moment, { Moment as MomentTypes } from 'moment';
import LogDiary from '../component/Log/LogDiary';

const Log = () => {
  const { dateSet } = useContext(LogContext);
  const [value, onChange] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const showDatePicker = () => {
    setOpenDatePicker(!openDatePicker);
  }

  const marks = [
    "15-07-2022",
    "03-07-2022",
    "07-07-2022",
    "12-07-2022",
    "13-07-2022",
    "15-07-2022",
  ];


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
                  value={value}
                  locale="en-EN"
                  tileClassName={({ date, view }) => {
                    if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
                        return "highlight";
                    }
                  }}
                  />
                  <div className="text-gray-500 mt-4">
                    {moment(value).format("YYYY년 MM월 DD일")} 
                  </div>
              </section>
              <section className='diary-section'>
                <LogDiary />
              </section>
            </div>
            {/*<div className='checkDate'>
              <button onClick={showDatePicker}>날짜 선택</button>
            </div>
            <div><LogCalendar showDatePicker={showDatePicker} /></div>*/}
          </div>
        </div>
        <div id='bottom'>
          <div className='bottom-logo'><img src="/img/icon/apple.svg" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Log;