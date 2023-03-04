import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import useDayJS from "../hooks/dayjs";

interface DayProps {
  date?: number | string;
}
const Day: React.FC<DayProps> = ({ date }) => {
  return (
    <Link
      to={`/detail/${date}`}
      className={`w-[13.6%] h-24 ${
        date ? "bg-gray-100" : "bg-gray-400"
      } rounded-md box-border mt-2 box-border p-4 ${
        date ? "hover:bg-gray-200 duration-300 transition ease-in-out" : ""
      }`}
    >
      {date ? date : ""}
    </Link>
  );
};
export default Day;
