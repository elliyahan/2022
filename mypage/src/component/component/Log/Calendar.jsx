import React, { useContext, useRef, useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LogContext } from './LogContext';

const LogCalendar = ({showDatePicker}) => {
  const { onDateSetting } = useContext(LogContext);
  registerLocale("ko", ko); // 한국어 설정

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [currentDate, setCurrentDate] = useState();
  const calendar = useRef(null);

  const cancelDatePicker = () => {
    setStartDate(currentDate);
    calendar.current.setOpen(false);
  };
  
  const openDatePicker = () => {
    calendar.current.setOpen(true);
  };
  
  const closeDatePicker = () => {
    setCurrentDate(startDate);
    calendar.current.setOpen(false);
  };

  const months = [
    "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"
  ]

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDateSetting(start, end);
    console.log(onDateSetting)
    if ( start && end ) {
      showDatePicker();
    }
  };

  return (
    <div id='LogCalendar'>
      <DatePicker
        withPortal
        className="date date-record"
        locale="ko"
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        dateFormat="yyyy.MM.dd(eee)"
        useWeekdaysShort={true}
        // shouldCloseOnSelect={false}
        ref={calendar}
        // onInputClick={() => openDatePicker()}
        onChange={onChange}
        renderCustomHeader={({
          date,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div style={{ margin: 10, display: "flex", justifyContent: "center",}}>
            <div className="btn_month btn_month-prev" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <IoIosArrowBack />
            </div>
            <div className="month-day"> {getYear(date)}.{months[getMonth(date)]}</div>
            <div className="btn_month btn_month-next" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <IoIosArrowForward />
            </div>
          </div>
        )}>
          <div className="button-container">
            <div className="btn_ctrl btn_ctrl-cancel" onClick={cancelDatePicker}>
              {" "} 취소
            </div>
            <div className="btn_ctrl btn_ctrl-confirm" onClick={closeDatePicker}>
              선택
            </div>
          </div>
      </DatePicker>
    </div>
  );
};

export default LogCalendar;