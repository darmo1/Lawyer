import Image from "next/image";
import React from "react";

import Button from "../../common/Buttons/Button";


const HomeCTA = () => {
  return (
    <section className="flex">
      <div className=" w-md-1/2 flex flex-col justify-around">
        <h1 className="text-2xl  text-center text-md-3xl">
          Genera tu Petición de revocatoria y subsidiaria petición de
          información
        </h1>
        <div className="flex flex-col md-flex-row items-center my-8">
          <Button
            text="Elaborar mi peticion"
            link="/transito-y-transporte"
            className="flex justify-center items-center rounded-2xl bg-sky-300 w-3/4 "
          />
          {/* <Button text="Sobre Notros"  className="border border-r-orange-500 ml-4 flex justify-center items-center rounded rounded-2xl"/> */}
        </div>
      </div>
      <div className="hidden md:block w-md-1/2  justify-center">
        <Image
          src="/blob.svg"
          alt="Background-blob"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HomeCTA;
