import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TemplateTransitoTransporte } from "../../src/components";
import BuildDocument from "../../src/components/Templates/TransitoTransporte/BuildDocument/BuildDocument";
import { jsPDF } from "jspdf";
import GlobalLayout from "../../src/Layout/GlobalLayout";
import { toast } from 'react-toastify';


const Response = () => {
  const router = useRouter();
  const { query } = router;
  const [responsePayment, setResponsePayment] = useState(null);
  const [valuesForm, setValuesForm] = useState(null);


  const handleDownloadPdf = async () => {
    const doc = new jsPDF("p", "pt", "letter");
    const margin = 20;
    // const d = doc.internal.pageSize.width
    // const  b = document.body.scrollWidth
    const scale = (612 - margin * 2) /( 1077  );
     
    doc.html(document.getElementById("print"), {
      x: margin,
    
      html2canvas: {
        scale,
       
      },
      margin: [58,10, 58, 55],
     
     

      callback: function (pdf) {
        pdf.save("doc.pdf");
        toast("Wow ✅🎉✨ Has descargado el pdf exitosamente!, vuelve pronto", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
          setTimeout( () => {
            router.push('/')
            localStorage.removeItem('valForm')
          }, 5000)
      },
    });
  };

  useEffect(() => {
    const valForm = window.localStorage.getItem("valForm");
    const valuesForm = JSON.parse(valForm);
    setValuesForm(valuesForm);
  }, []);

  const url = `https://secure.epayco.co/validation/v1/reference/${query?.ref_payco}`;

  useEffect(() => {
    async function getStatusPayment() {
      try {
        const response = await fetch(url);
        const { data } = await response.json();
        setResponsePayment(data);
      } catch (err) {
        console.log(err);
      }
    }
    if (query.ref_payco) {
      getStatusPayment();
    }
  }, [query.ref_payco, url]);

  return (
    <div>
      {responsePayment && responsePayment.x_cod_response === 1 ? (
        <GlobalLayout statusPayment={responsePayment.x_cod_response} >
          <div className="flex justify-center bg-[#121f3d] my-2"> 
          <p className="text-break py-2 px-4 text-white"> 🛑 Si estás en un teléfono móvil. Es recomendado que el proceso lo hagas desde un computador</p>
          </div>
          <div className="flex justify-center">
          <button className=" w-2/4 text-center border py-2 bg-sky-400 rounded-xl" onClick={handleDownloadPdf}>Descargar PDF</button>
          </div>
          <TemplateTransitoTransporte
            valuesForm={valuesForm}
            Component={BuildDocument}
          />
           <div className="flex justify-center relative">
          <button className=" w-2/4 text-center border py-2 bg-sky-400 rounded-xl" onClick={handleDownloadPdf}>Descargar PDF</button>
          </div>
          <div className="w-full min-h-[200px] absolute bg-gray-50 mt-2"></div>
        </GlobalLayout>
      ) : (
        "anything"
      )}
    </div>
  );
};

export default Response;
