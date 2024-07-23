import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/React-Calendar.css';
import { Value } from 'react-calendar/dist/cjs/shared/types';

function App() {
  // 상태의 타입을 Date, [Date, Date], 또는 null로 설정
  const [date, setDate] = useState<Date | [Date, Date] | null>(null);

  // 날짜 선택 핸들러
  const handleDateChange = (value: Value) => {
    setDate(value as Date | [Date, Date] | null);
  };

  return (
    <>
      {Array.isArray(date) ? (
        <p className="flex justify-around">
          <span className="bold">시작일 : {date[0].toDateString()}</span>
          <span className="bold">종료일 : {date[1].toDateString()}</span>
        </p>
      ) : (
        <p className="flex justify-around">
          <span className="bold">시작일 : </span>
          <span className="bold">종료일 : </span>
        </p>
      )}
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} selectRange={true} />
      </div>
    </>
  );
}

export default App;
