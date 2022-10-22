import Image from "next/image";
import React from "react";
import { becomeDate } from "../../../../../utils/getDate";

const Author = ({ authorImg, authorName, date }) => {
  return (
    <div className="flex items-center my-4 mx-2">
      <div className="mx-4">
        <Image
          className="rounded-full object-cover "
          src={authorImg}
          alt={authorName}
          width={50}
          height={50}
        />
      </div>
      <div>
        <h2 className="text-sm font-semibold">{authorName}</h2>
        <date className="text-sm text- my-2">{becomeDate(date)}</date>
      </div>
    </div>
  );
};

export default Author;
