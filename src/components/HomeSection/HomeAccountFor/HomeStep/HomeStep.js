import Image from "next/image";
import React from "react";

const HomeStep = ({ title, description = "eh", image }) => {
  return (
    <div className="mx-4 flex flex-col justify-center items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 blur border rounded-full"></div>
        <div className="relative border bg-white border-gradient-to-r from-pink-600 to-purple-600  w-18 h-18 w-md-40 h-md-40 rounded-full flex items-center justify-center">
          <Image
            src={image}
            alt="step-title"
            className="object-cover  w-16 h-16 w-md-24 h-md-24"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="flex flex-col justify-start items-center my-6">
        <h2 className="text-lg md:font-[500] text-center justify-items-stretch">{title}</h2>
        <p className="text-md border">{description}</p>
      </div>
    </div>
  );
};

export default HomeStep;
