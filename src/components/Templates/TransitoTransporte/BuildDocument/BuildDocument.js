import React from "react";

const BuildDocument = ({
  placasVehiculo = "",
  ciudadMatricula = "",
  nombreInfractor = "",
  fechaComparendo = "",
  numeroComparendo = "",
  numeroResolucion = "",
}) => {
  return (
    <>
      <div>
        <h1 className="font-semibold text-center my-4">HECHOS:</h1>
        <ul className="list-decimal">
          <li>
            Soy el propietario del vehículo de placas {`${placasVehiculo}`}{" "}
            matriculado en la ciudad de {`${ciudadMatricula}`}
          </li>

          <li>
            En la actualidad reposa{`(n)`} en las bases de datos del SIMIT el{" "}
            {`(los)`} siguiente{`(s)`} comparendo{`(s)`} a mi cargo
            <div className="ml-8 my-6">
              <ul className="list-disc">
                <li className="font-semibold">
                  Infractor: {`${nombreInfractor}`}
                </li>
                <li className="font-semibold">
                  Fecha de comparendo: {`${fechaComparendo}`}.
                </li>
                <li className="font-semibold">
                  Número de comparendo: {`${numeroComparendo}`}
                </li>
                <li className="font-semibold">
                  Resoluciones: {`${numeroResolucion}`}
                </li>
              </ul>
            </div>
          </li>
          <li>
            Que la sentencia <b>C - 038 de 2020</b> de la Corte Constitucional
            declaró inexequible la responsabilidad solidaria entre el
            propietario del vehículo y el infractor de una norma de tránsito, en
            tal sentido dicha sentencia indicó:
          </li>
        </ul>

        <p>
          “La responsabilidad solidaria entre el conductor y el propietario del
          vehículo, por las infracciones detectadas por medios tecnológicos{" "}
          {`(fotomultas)`}, es inconstitucional, al no exigir expresamente, para
          ser sancionado con multa, que la falta le sea personalmente imputable
          y permitir, por lo tanto, una forma de responsabilidad sancionatoria
          por el hecho ajeno”
        </p>
        <br />

        <ol className="list-decimal" start={4}>
          <li>
            Que los mencionados comparendos no fueron notificados en debida
            forma, con lo que se ha vulnerado mi derecho constitucional al
            debido proceso consagrado en el artículo 29 de la Constitución
            Política de Colombia.
          </li>
          <li>
            Que el inciso 5º del Artículo 135 del Código Nacional de Tránsito
            indica que en el evento en que se realice un comparendo en virtud de
            una infracción detectada por medios técnicos o tecnológicos, como
            fotos o videos, la misma deberá ser notificada dentro de los tres{" "}
            {`(3)`} días hábiles siguientes por medio de correo, en el cual se
            enviará la infracción y sus soportes al propietario.
          </li>

          <li>
            Que los actos de apertura de los procedimientos contravencionales de
            tránsito que dieron origen a las mencionadas resoluciones nunca me
            fueron notificados de la forma debida, de acuerdo con lo establecido
            en la norma citada.{" "}
          </li>

          <li>
            Que por dicha falta de notificación, mi derecho fundamental de
            defensa consagrado en el artículo 29 de la Constitución Política me
            fue vulnerado al no permitirme exponer los respectivos argumentos y
            medios defensivos frente a las sanciones que finalmente me fueron
            impuestas; o por lo menos tener el derecho al descuento por “pronto
            pago” que consagra el Código Nacional de Tránsito.
          </li>

          <li>
            Que las resoluciones arriba mencionadas, tampoco fueron notificadas
            en debida formar, es decir realizando la respectiva notificación
            personal, y en subsidio la respectiva notificación por aviso de
            acuerdo con lo preceptuado en la ley 1437 de 2011, que establece en
            su artículo 67 que{" "}
            <i>
              “Las decisiones que pongan término a una actuación administrativa
              se notificarán personalmente al interesado”.
            </i>
          </li>
        </ol>

        <div>
          <p className="my-4">
            Y el artículo 68 de la ley 1437 de 2011 establece:
          </p>

          <p className="ml-4">
            “<strong>Citaciones para notificación personal.</strong> Si no hay
            otro medio más eficaz de informar al interesado, se le enviará una
            citación a la dirección, al número de fax o al correo electrónico
            que figuren en el expediente o puedan obtenerse del registro
            mercantil, para que comparezca a la diligencia de notificación
            personal. El envío de la citación se hará dentro de los cinco{" "}
            {`(5)`} días siguientes a la expedición del acto, y de dicha
            diligencia se dejará constancia en el expediente.”
          </p>

          <br />
          <p>
            Lo que representa otra vulneración a mi derecho de defensa, por no
            poder presentar los pertinentes recursos y/o solicitar en la
            oportunidad procesal pertinente la nulidad de dichas resoluciones.
          </p>
        </div>

        <ol className="list-decimal" start={9}>
          <li>
            Que dicha falta de notificaciones en su debido tiempo no sólo ha
            vulnerado mi derecho de defensa sino también mi derecho a la
            igualdad, al no permitirme, en iguales condiciones de los demás
            ciudadanos, el obtener los beneficios por pronto pago. Viéndome
            ahora en la posibilidad de asumir un embargo por la existencia de
            una sanción contravencional que no me fue notificada.{" "}
          </li>
        </ol>

        <p className="my-6">
          Es por todo lo anterior que le formulo las siguientes,
        </p>
      </div>

      <div>
        <h1 className="text-center font-semibold my-8">PRETENSIONES:</h1>

        <ol className="list-decimal" start={1}>
          <li>
            Se revoquen las siguientes sanciones contravencionales: {`1)`}{" "}
            Resolución {`${numeroResolucion}`} de fecha de comparendo:{" "}
            {`${fechaComparendo}`} con número de comparendo:{" "}
            {`${numeroComparendo}`}.
          </li>
          <li>
            En el vento de no acceder a la presente petición, le solicito
            amablemente se sirva indicar con claridad cuál fue el medio de
            prueba utilizado para determinar que era yo la persona que iba
            conduciendo el vehículo el día y hora en la que se realizó la
            infracción de tránsito que dio origen a la (s) sanción (es)
            contravencionales relacionadas en este escrito.{" "}
          </li>
          <li>
            En el evento de no acceder a la anterior pretensión, le solicito su
            señoría entrega de copia de las citaciones para notificación
            personal, así como de las respectivas notificaciones por aviso de
            los autos de apertura de los procedimientos contravencionales
            (comparendos) que terminaron con la expedición de las resoluciones
            arriba mencionadas. Así como la copia de las citaciones para
            notificación personal, como de las respectivas notificaciones por
            aviso de las resoluciones antes citadas. Lo anterior para efectos
            judiciales.{" "}
          </li>
          <li>
            En el evento de ordenar la expedición de las copias, solicito que
            las mismas sean entregadas de forma gratuita al referirse a la
            notificación de un acto administrativo, según los términos del
            artículo 67 de la ley 1437; o en su defecto sin superar el costo del
            valor de reproducción según lo indicado por el artículo 29 de la ley
            1755, que al ser ley estatutaria prevalece sobre cualquier acuerdo
            del Concejo, Decreto o Resolución de la Alcaldía, y el cual expresa:
            <ul className="ml-4 my-6">
              <li>
                “Artículo 29. Reproducción de documentos. En ningún caso el
                precio de las copias podrá exceder el valor de la reproducción.
                Los costos de la expedición de las copias correrán por cuenta
                del interesado en obtenerlas.
              </li>
              <li>
                El valor de la reproducción no podrá ser superior al valor
                comercial de referencia en el mercado.”
              </li>
            </ul>
          </li>
          <li>
            Retirar de la base de datos del SIMIT la información negativa de los
            comparendos mencionados en este escrito.{" "}
          </li>
        </ol>
      </div>

      <div>
        <h1 className="font-semibold text-center my-8">
          FUNDAMENTOS DE DERECHO:
        </h1>
        <p>
          Fundamento esta petición en lo consagrado en la sentencia{" "}
          <strong>C - 038 de 2020</strong> de la Corte Constitucional que
          indicó:
        </p>
        <p>
          “La responsabilidad solidaria entre el conductor y el propietario del
          vehículo, por las infracciones detectadas por medios tecnológicos{" "}
          {`(fotomultas)`}, es inconstitucional, al no exigir expresamente, para
          ser sancionado con multa, que la falta le sea personalmente imputable
          y permitir, por lo tanto, una forma de responsabilidad sancionatoria
          por el hecho ajeno”
        </p>
        <br />
        <p>
          Igualmente fundamento esta petición en lo señalado en el inciso 5º del
          Artículo 135 del Código Nacional de Tránsito, en los artículos 67 y 68
          de la ley 1437 de 2011; así como en la siguiente jurisprudencia:{" "}
        </p>
        <p>
          A todas luces las sanciones contravencionales impuestas vulneran el
          principio constitucional y administrativo del <b>DEBIDO PROCESO</b>,
          concretamente el derecho de audiencia y defensa consagrado en el
          artículo 29 de nuestra Constitución Política y el 137 y 138 de ley
          1437 de 2011; por cuanto no se tuvo en cuenta el procedimiento de
          notificación establecido en el artículo 135 del Código Nacional de
          Tránsito Terrestre, modificado por el artículo 22 de la ley 1383 de
          2010, que en su inciso 5 expresa:
          <ul className="ml-8 my-6">
            <li>
              “No obstante lo anterior, las autoridades competentes podrán
              contratar el servicio de medios técnicos y tecnológicos que
              permitan evidenciar la comisión de infracciones o contravenciones,
              el vehículo, la fecha, el lugar y la hora. &nbsp;{" "}
              <strong className="underline underline-offset-1">
                En tal caso se enviará por correo dentro de los tres (3) días
                hábiles siguientes la infracción y sus soportes al propietario,
              </strong>{" "}
              quien estará obligado al pago de la multa. Para el servicio
              público además se enviará por correo dentro de este mismo término
              copia del comparendo y sus soportes a la empresa a la cual se
              encuentre vinculado y a la Superintendencia de Puertos y
              Transporte para lo de su competencia.” (Negrillas y subrayas fuera
              de texto).
            </li>
          </ul>
        </p>
        <p>
          {" "}
          Notificación que no se realizó en la forma establecida por la norma en
          mención, y que como tal genera la nulidad de los actos impugnados, por
          cuanto, en los términos del artículo 137 de la ley 1437 hubo
          “desconocimiento del derecho de audiencia y de defensa”.
        </p>{" "}
        <br />
        <p>
          Es de recordar su señoría que no solo la norma de tránsito establece
          el deber de notificar el comparendo dentro de los tres días siguientes
          al momento de la supuesta infracción, sino que el Código de
          Procedimiento Administrativo establece el deber de publicaicón de los
          actos administrativos. En tal sentido el artículo 66 de la ley 1437 de
          2011 establece lo siguiente:
          <ul className="my-8 ml-8 italic">
            <li>
              <strong>
                “Artículo  66. Deber de notificación de los actos
                administrativos de carácter particular y concreto.
              </strong>{" "}
              Los actos administrativos de carácter particular deberán ser
              notificados en los términos establecidos en las disposiciones
              siguientes.{" "}
            </li>
          </ul>
        </p>
        <br />
        <p>Consecuente con lo anterior el artículo 67 del CPACA estableció</p>
        <br />
        <p>
          <ul className="ml-8 my-6 italic">
            <li>
              <strong>“Artículo  67. Notificación personal.</strong>Las
              decisiones que pongan término a una actuación administrativa se
              notificarán personalmente al interesado, a su representante o
              apoderado, o a la persona debidamente autorizada por el interesado
              para notificarse.
            </li>
            <li>
              En la diligencia de notificación se entregará al interesado copia
              íntegra, auténtica y gratuita del acto administrativo, con
              anotación de la fecha y la hora, los recursos que legalmente
              proceden, las autoridades ante quienes deben interponerse y los
              plazos para hacerlo.{" "}
            </li>
            <li>
              <i>
                <strong>
                  El incumplimiento de cualquiera de estos requisitos invalidará
                  la notificación.{" "}
                </strong>
              </i>
            </li>
            <li>{`(…)  (Negrillas fuera de texto)`}</li>
          </ul>
        </p>
        <p>
          Cuando se trata de atender el principio de publicidad de las
          decisiones administrativas, no puede la autoridad administrativa
          abrogarse una facultad que no le ha otorgado la Ley, pues no es un
          asunto discrecional considerar que los actos administrativos de
          contenido particular no necesitan de su notificación, la norma citada
          es clara en señalar que requieren de notificación personal, es decir
          de un Debido proceso, traducido en un derecho de contradicción.
        </p>
        <p>
          <br />
          <ul className="ml-8 my-8">
            <li>
              <strong>Corte Constitucional: Sentencia T-051 de 2016. </strong>{" "}
              En la que el alto tribunal constitucional expresó:{" "}
            </li>
            <br />
            <li>
              “Sobre la base de admitir que la notificación por correo es
              constitucionalmente admisible, la jurisprudencia constitucional ha
              hecho algunas precisiones en torno a su alcance y efectividad,
              destacando al respecto &nbsp;
              <strong className="underline">
                que la misma se entiende surtida solo cuando el acto
                administrativo objeto de comunicación ha sido efectivamente
                recibido por el destinatario, y no antes. En ese sentido, la
                eficacia y validez de esta forma de notificación depende de que
                el administrado haya conocido materialmente el acto que se le
                pretende comunicar, teniendo oportunidad cierta para
                controvertirlo e impugnarlo.
              </strong>{" "}
              (…) En virtud de esa interpretación, la sola remisión del correo
              no da por surtida la notificación de la decisión que se pretende
              comunicar, por cuanto lo que en realidad persigue el principio de
              publicidad, es que los actos jurídicos que exteriorizan la función
              pública administrativa, sean materialmente conocidos por los
              ciudadanos, sin restricción alguna, premisa que no se cumple con
              la simple introducción de una copia del acto al correo.”{" "}
              {`(Negrillas y subrayas fuera de texto)`}
            </li>
          </ul>
        </p>
        <p>
          <strong>
            Consejo de Estado, Sección Cuarta, Sentencia
            25000234200020130432901, sep. 26/13, M. P. Carmen Teresa
            Briceño.&nbsp;
          </strong>
          En donde el máximo tribunal de lo contencioso administrativo
          manifestó:
        </p>
        <br />
        <p>
          “En estas condiciones es claro que, al no realizar la respectiva
          notificación se le está vulnerando los derechos fundamentales al
          debido proceso y a la defensa del accionante, puesto que, el actor no
          podrá ejercer su derecho de contradecir e impugnar el comparendo y, si
          fuera el caso, allegar pruebas”
        </p>
      </div>

      <div className="my-8">
        <h1 className="text-center my-4 font-semibold">PRUEBAS:</h1>
        <p>
          Con ocasión de la ley antitrámites no se requiere aportar copia de las
          sanciones contravencionales de tránsito mencionadas en este escrito
          por cuanto ustedes cuentan con las mismas en sus bases de datos.
          Igualmente tampoco se requiere aportar copia de mi documento de
          identidad ni de la matrícula del vehículo mencionado en los hechos.{" "}
        </p>
      </div>
    </>
  );
};

export default BuildDocument;
