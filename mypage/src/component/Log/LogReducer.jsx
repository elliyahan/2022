import React, { useReducer, useRef } from "react";

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