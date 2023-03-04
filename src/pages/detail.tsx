import React from "react";
import { useParams } from "react-router-dom";

const DetailPage: React.FC<{}> = () => {
  const { day } = useParams();

  return (
    <div className="flex justify-center items-center">
      <span className="text-3xl font-bold">haha!</span>
    </div>
  );
};

export default DetailPage;
