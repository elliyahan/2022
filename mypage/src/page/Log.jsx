import React, { useState, useContext, useEffect, useReducer, useRef } from 'react';
import SubHeader from './../component/SubHeader';
import Header from './../component/Header';
import './../css/log.css';
// import LogCalendar from '../component/Log/Calendar';
import { LogContext } from './../component/Log/LogContext';
import Calendar from 'react-calendar';
import moment from 'moment';
import LogDiary from '../component/Log/LogDiary';
import axios from 'axios';
import LogButton from './../component/Log/LogButton';
import LogHeader from './../component/Log/LogHeader';
import { DiaryStateContext } from "../App";
import LogList from './../component/Log/LogList';

const Log = () => {
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

  // getMonth를 하면 1월 = 0월 이라서 +1을 해야함
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  //curDate가 변화하는 순간에만 useEffecr로 년도와 월에 해당하는 일기 데이터만 뽑아옴
  useEffect(() => {
    // diaryList가 비어있는 상황에서는 동작될 필요가 없으므로 1 이상일 경우에만 동작해라
    if (diaryList.length >= 1) {
    }
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      // 이번년도 이번월의 1일이 됨
      1
    ).getTime();

    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      0
    ).getTime();

    setData(
      diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
    );
    // diaryList가 바꼈다는건 일기가 새로 추가 됐거나, 수정 됐거나, 삭제 됐다는걸 의미 => List도 변경 해야 함
  }, [diaryList, curDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  // 어떤 id를 가진 글을 수정할건지, 어떻게 변경 할건지 두개의 매개변수를 받아준다
  // 각각 모든 요소들이 현재 매개변수로 전달받은 targetId와 일치하는 Id를 갖는지 검사
  // 원본 데이터를 다 불러준다음 새로운 컨텐츠로 업데이트
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

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
                <LogHeader
                  headText={headText}
                  leftChild={<LogButton text={"<"} onClick={decreaseMonth} />}
                  rightChild={<LogButton text={">"} onClick={increaseMonth} />}/>
                <LogList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
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

export default Log;