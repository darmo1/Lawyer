import Image from "next/image";
import React from "react";

const MainImage = ({ img }) => {
  return (
    <div className="max-h-[200px] max-w-[250px] border ">
      <Image src={img} alt="" layout='intrinsic'
      width="250"
      height="200"
    className="w-full max-h-[100px]" />
    </div>
  );
};

export default MainImage;
