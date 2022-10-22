import React from "react";
import { TemplateTransitoTransporte } from "../../src/components";
import BlurDocument from "../../src/components/Templates/TransitoTransporte/BlurDocument";
import { useTYT } from "../../src/context/transitoTransporte";

const SummaryForm = () => {
 
  const { valuesForm, generateForm } = useTYT();

  return (
    <>
      {generateForm ? (
        <>
          <TemplateTransitoTransporte
            valuesForm={valuesForm}
            Component={BlurDocument}
          />
         
        </>
      ) : (
        "Hubo un error intenta de nuevo"
      )}
    </>
  );
};

export default SummaryForm;
