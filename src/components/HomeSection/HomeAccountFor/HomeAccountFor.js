import React from "react";
import HomeStep from "./HomeStep/HomeStep";

const HomeAccountFor = () => {
  return (
    <div id="HomeAccountFor">
      <h1 className="text-center text-2xl md:text-4xl my-8">
        ¿Cómo es elaborar tu peticion de revocatoria en unos simples pasos?
      </h1>
      <div className="flex flex-wrap justify-center items-center">
      <HomeStep title={"Llena el formulario"} description={""} image={"/fill-form.png"} />
      <HomeStep title={"Paga online"} description={""} image={"/money.png"} />
      <HomeStep title={"Descarga el formulario"} description={""} image={"/download-pdf.png"} />
      <HomeStep title={"Presentalo"} description={""} image={"/presentacion.png"} />

      </div>
  
    </div>
  );
};

export default HomeAccountFor;
