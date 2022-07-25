import React, { useReducer, useRef, useState } from "react";
import './App.css';
import './css/body.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Body from './component/Body';
import Profile from './page/Profile';
import Portfolio from './page/Portfolio';
import Log from './page/Log';
import Code from './page/Code';
import StoryBoard from './page/StoryBoard';
import Image from './page/Image';
import Sns from './page/Sns';
import Folder from './page/Folder';
import Contact from './page/Contact';
import LogDaily from './page/LogDiary/LogDaily';
import LogEdit from './page/LogDiary/LogEdit';
import LogNew from './page/LogDiary/LogNew';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      // targetId를 필터링한 나머지 요소들을 배열로 만들어서 newState로 바꾼다
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        // action.data.id가 일치하는 요소를 찾아낸 다음, 일치하는 요소에는 action.data를 전달함
        it.id === action.data.id
          ? {
              ...action.data,
            }
          : it
      );
      break;
    }
    default:
      return state;
  }
  // 변화한 newState를 반환해 상태 적절히 바뀐다
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의일기 1번",
    // date의 값은 ms로 넣어야 함
    date: 1658723693370,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의일기 2번",
    // date의 값은 ms로 넣어야 함
    date: 1658723694370,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의일기 2번",
    // date의 값은 ms로 넣어야 함
    date: 1658723695370,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의일기 4번",
    // date의 값은 ms로 넣어야 함
    date: 1658723696370,
  },
  {
    // 가장 최신의 일기글
    id: 5,
    emotion: 5,
    content: "오늘의일기 5번",
    // date의 값은 ms로 넣어야 함
    date: 1658723697370,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const [datas, setDatas] = useState([]);

  // 현재 date의 ms 구하는 방법
  console.log(new Date().getTime());

  const dataId = useRef(0);
  //CREATE
  // data,content,emotion을 받아서 새로운 일기 아이템을 객체로 만들어 data로 전달
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      // Id는 유지를 하면서 나머지 파라미터를 바꾼다
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    //context.provider가 컴포넌트 트리를 전역으로 감싸고 있다
    <DiaryStateContext.Provider value={data}>
    {/* dispatch 함수들도 context를 이용해 공급 */}
      <DiaryDispatchContext.Provider value={(onCreate, onRemove, onEdit)}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Body />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/log' element={<Log />} />
              <Route path="/log/new" element={<LogNew />} />
              <Route path="/log/edit" element={<LogEdit />} />
              <Route path="/log/diary/:id" element={<LogDaily />} />
              <Route path='/code' element={<Code />} />
              <Route path='/storyboard' element={<StoryBoard />} />
              <Route path='/image' element={<Image />} />
              <Route path='/sns' element={<Sns />} />
              <Route path='/folder' element={<Folder />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
