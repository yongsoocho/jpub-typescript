import dayjs from "dayjs";
import "dayjs/locale/ko";

const useDayJS = () => {
  // const now: string = dayjs().format("YYYY-MM-DD");
  // const [year, month, _day] = now.split("-");

  return {
    date: new Date(),
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  };
};

export default useDayJS;
