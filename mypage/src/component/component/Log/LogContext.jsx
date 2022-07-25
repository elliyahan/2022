import { createContext, useState } from "react";

export const LogContext = createContext({
  onDateSetting: (a, b) => { },
  dateSet: {start: "", end: "" },
});

const Store = (props) => {
  const [dateSet, setDateSet] = useState({ start: "", end: "" });

  const onDateSetting = (start, end) => { //날짜 문자열로 세팅
    if (start && end) {
      const startDay = start.getFullYear().toString() + `.` +
      (start.getMonth() + 1).toString() + `.` +
      start.getDate().toString();
      const endDay = end.getFullYear().toString() + `.` +
      (end.getMonth() + 1).toString() + `.` +
      end.getDate().toString();

      return setDateSet({ start: startDay, end: endDay });
    } else {
      return;
    }
  }
}