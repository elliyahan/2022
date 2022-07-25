import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "../components/DiaryList";

const LogHome = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());

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
      0,
      23,
      59,
      59
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

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default LogHome;