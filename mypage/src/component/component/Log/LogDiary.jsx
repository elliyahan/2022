import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import LogEditor from './LogEditor';
import LogList from './LogList';

const LogDiary = () => {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  // 첫번째 인자로 전달한 callback 함수가 작성완료가 되었을때 추가하는 함수가 되고
  // 두번째 인자로 전달한 []는 빈배열로 전달하는데 mount되는 시점에 한번만 만들고 다음부터는 첫번째 만들었던 함수를 재사용 할 수 있도록 작성
  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    // 상태변화 함수인 setState 함수에 함수를 전달하는 것 => 함수형 업데이트
    // []를 비워도 항상 최신의 state를 인자를 참고 할 수 있게 되면서 []을 비울수 있도록 도움을 줌
    setData((data) => [newItem, ...data]);
  }, []);


  const onRemove = useCallback((targetId) => {
    // 최신 state를 이용하기 위해선 항상 인자 부분에 data를 사용해 줘야 함
    setData((data) => data.filter((it) => it.id !== targetId));
  }, []);


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

  // useMemo 함수는 첫번째 인자로 callback 함수를 받아서 callback 함수가 리턴하는 = 연산 을 최적화 할 수 있도록 도와주는 기능
  // useMemo 함수는 두번째로 배열을 전달해야 하는데 useEffect의 dependenct array랑 똑같은 배열
  // []에 data.length 가 변화할때만 useMemo의 첫번째 인자로 전달한 callback 함수가 다시 수행
  // useMemo 함수로 최적화를 하면 getDiaryAnalysis는 더이상 함수가 아니고 데이터를 리턴 받는다 => useMemo 함수는 callback 함수가 리턴하는 값을 그냥 리턴하기 때문에
  const getDiaryAnalysis = useMemo(() => {
    console.log("일기분석시작");

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  // DiaryItem의 부모 컨포넌트인 DiaryList에 전달
  return (
    <div className="LogDiary">
      <LogEditor onCreate={onCreate} />
      <div>전체일기 : {data.length}</div>
      <div>기분 좋은 일기 갯수 : {goodCount}</div>
      <div>기분 나쁜 일기 갯수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <LogList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};

export default LogDiary;