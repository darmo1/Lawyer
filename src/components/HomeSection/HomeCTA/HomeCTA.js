import Image from "next/image";
import React from "react";

import Button from "../../common/Buttons/Button";

const HomeCTA = () => {

  return (
    <section className="flex">
      <div className=" md:w-1/2 flex flex-col justify-around">
        <h1 className="text-2xl  text-center text-break md:text-4xl">
          Genera tu Petición de revocatoria y subsidiaria petición de
          información
        </h1>
        <div className="flex justify-center items-center mt-8 mb-4 md:hidden">
          <Image
            src="/presentational.svg"
            width={120}
            height={100}
            alt="home-presentational-image"
          />
        </div>
        <div className="flex flex-col md-flex-row items-center my-8">
          <Button
            text="Elaborar mi peticion"
            link="/transito-y-transporte"
            className="flex justify-center md:font-semibold text-white items-center rounded-2xl w-3/4  bg-[#ff0066]"
          />
          {/* <Button text="Sobre Notros"  className="border border-r-orange-500 ml-4 flex justify-center items-center rounded rounded-2xl"/> */}
        </div>
      </div>
      <div className="hidden md:block w-md-1/2  justify-center">
        <Image src="/blob.svg" alt="Background-blob" width={500} height={500} />
      </div>
    </section>
  );
};

export default HomeCTA;
