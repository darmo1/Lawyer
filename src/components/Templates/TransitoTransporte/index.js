import React from "react";
import MainLayout from "../../../Layout";
import { useRouter } from "next/router";
import Script from "next/script";
import { becomeDate } from "../../../../utils/getDate";

export const TemplateTransitoTransporte = ({ valuesForm, Component }) => {
  const date = new Date();

  const {
    primerNombre,
    segundoNombre,
    primerApellido,
    segundoApellido,
    numeroIdentificacion,
    lugarExpedicion,
    placasVehiculo,
    ciudadMatricula,
    nombreInfractor,
    fechaComparendo,
    numeroComparendo,
    numeroResolucion,
    direccion,
    ciudad,
    departamento,
    telefono,
    email,
  } = valuesForm;
  const router = useRouter();
  const { route } = router;
  console.log(router);

  return (
    <MainLayout>
      <div className="text-base font-semibold my-4">
        {ciudad + "," + " " + becomeDate(date)}
      </div>

      <div>
        <p>
          <strong>Señores</strong>
        </p>
        <p>
          <strong>Secretaria o Dirección de Tránsito y Transporte</strong>
        </p>
        <p>{`${ciudad} (${departamento})`}</p>
        <p>
          <span className="mr-4">E.</span>
          <span className="mr-4">S.</span>
          <span className="mr-4">D.</span>
        </p>
        <p className="my-8">
          Ref:{" "}
          <strong>
            Petición de revocatoria y subsidiaria petición de información
          </strong>
        </p>
      </div>

      <main className="text-justify">
        <p className="justify-center">
          <span className="font-semibold">{`${primerNombre?.toUpperCase()} ${segundoNombre?.toUpperCase()} ${primerApellido?.toUpperCase()} ${segundoApellido?.toUpperCase()}`}</span>
          , persona mayor de edad, con domicilio en Medellín, identificado con
          cédula de ciudadanía Nro.
          <span className="font-semibold">{`${numeroIdentificacion}`}</span> de{" "}
          <span className="font-semibold">{`${lugarExpedicion}`}</span>,
          actuando en nombre propio; en ejercicio de mi derecho fundamental de
          petición consagrado en el artículo 23 de la Constitución Política de
          Colombia, y en los artículos 13 y s.s. la ley 1437 de 2011{" "}
          {`(Código de Procedimiento Administrativo y de lo contencioso Administrativo)`}
          , sustituido por el artículo 1 de la ley 1755 de 2015, por medio del
          presente escrito me permito elevar de la manera más respetuosa, la
          petición consagrada en este escrito.
        </p>

        <Component
          placasVehiculo={placasVehiculo}
          ciudadMatricula={ciudadMatricula}
          nombreInfractor={nombreInfractor}
          fechaComparendo={fechaComparendo}
          numeroComparendo={numeroComparendo}
          numeroResolucion={numeroResolucion}
        />

        <div>
          <h1 className="my-8 text-center font-semibold">
            DIRECCIÓN DE NOTIFICACIÓN:
          </h1>
          <p>
            Recibiré notificaciones en:
            <b> {`${direccion} ${ciudad} (${departamento})`}</b>, teléfono:{" "}
            <b>{`${telefono}`}</b>, Email: <b>{`${email}`}</b>
          </p>
        </div>

        <div className="my-8">Cordialmente,</div>

        <div className="my-4">
          <h4 className="font-semibold">{`${primerNombre.toUpperCase()} ${segundoNombre.toUpperCase()} ${primerApellido.toUpperCase()} ${segundoApellido.toUpperCase()}`}</h4>
          <p>
            C.C. Nro. &nbsp;{`${numeroIdentificacion}`} de{" "}
            {`${lugarExpedicion}`}
          </p>
        </div>
        <div className="border my-2 "></div>
      </main>

      { route !== '/response' &&
        <form className="flex  ">
          <button className="border bg-yellow-400">
            Obtener documento PDF - es momento de pagar
          </button>
          <Script
            src="https://checkout.epayco.co/checkout.js"
            data-epayco-key="78b991a2c6ca984511a225962a2aa860"
            className="epayco-button"
            data-epayco-amount="11900"
            data-epayco-tax="1900.00"
            data-epayco-tax-ico="0.00"
            data-epayco-tax-base="10000"
            data-epayco-name="Obtener documento"
            data-epayco-description="Obtener documento"
            data-epayco-currency="cop"
            data-epayco-country="CO"
            data-epayco-test="true"
            data-epayco-external="false"
            data-epayco-response="http://localhost:3000/response"
            epayco-rejected="http://localhost:3000/404"
            data-epayco-confirmation="http://localhost:3000/response"
            data-epayco-button="https://multimedia.epayco.co/dashboard/btns/btn3.png"
          ></Script>
        </form>
      }
    </MainLayout>
  );
};
