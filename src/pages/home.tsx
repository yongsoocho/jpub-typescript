import { useEffect } from "react";
import useDayJS from "../hooks/dayjs";
import Day from "../components/day";

const HomePage = () => {
  const date = new Date();

  const beforeDays: number = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  const afterDays: number =
    6 - new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

  const days = new Array(beforeDays)
    .fill(0)
    .concat(
      new Array(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate())
        .fill(0)
        .map((_, idx) => idx + 1)
    )
    .concat(new Array(afterDays).fill(0));
  return (
    <div>
      <div className="w-[800px] mx-auto box-border py-8">
        <div className="flex justify-center bg-amber-100 box-border py-8 rounded-lg mb-2">
          <span className="calendar-head">{date.getFullYear()}년</span>
          <span className="calendar-head">{date.getMonth() + 1}월</span>
        </div>

        <div>
          <ul className="flex justify-between">
            <li className="calendar-week text-red-500">일</li>
            <li className="calendar-week">월</li>
            <li className="calendar-week">화</li>
            <li className="calendar-week">수</li>
            <li className="calendar-week">목</li>
            <li className="calendar-week">금</li>
            <li className="calendar-week text-red-500">토</li>
          </ul>

          <ul className="flex justify-between flex-wrap">
            {days.map((e) => (
              <Day
                key={`${date.getFullYear()}-${date.getMonth() + 1}-${
                  e ? e : Math.random()
                }`}
                date={e}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
