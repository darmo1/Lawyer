import React, { useState }from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import {TemplateTransitoTransporte} from '../src/components'




const TransitoYTransporte = () => {


  const initialState = {
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    numeroIdentificacion: '',
    lugarExpedicion: '',
    domicilio: '',
    placasVehiculo: '',
    ciudadMatricula: '',
    nombreInfractor: '',
    fechaComparendo: '',
    numeroComparendo: '',
    numeroResolucion: '',
    direccion: '',
    ciudad: '',
    municipio: '',
    telefono: '',
    email: ''
  }

  const [ valuesForm , setValuesForm ] = useState({})
  const [ generateForm, setGenerateForm ] = useState(false)




  return (
    <div>

      <Formik
        initialValues={initialState}
        validationSchema={Yup.object({
          primerNombre: Yup.string().required('Este campo es requerido'),
          segundoNombre: Yup.string().notRequired(),
          primerApellido: Yup.string().required('Este campo es requerido'),
          segundoApellido: Yup.string().notRequired(),
          numeroIdentificacion: Yup.number().required('Este campo es requerido'),
          lugarExpedicion: Yup.string().required('Este campo es requerido'),
          domicilio: Yup.string().required('Este campo es requerido'),
          placasVehiculo: Yup.string().required('Este campo es requerido'),
          ciudadMatricula: Yup.string().required('Este campo es requerido'),
          nombreInfractor: Yup.string().required('Este campo es requerido'),
          fechaComparendo: Yup.date().required('Este campo es requerido'),
          numeroComparendo: Yup.string().required('Este campo es requerido'),
          numeroResolucion: Yup.string().required('Este campo es requerido'),
          direccion: Yup.string().required('Este campo es requerido'),
          ciudad: Yup.string().required('Este campo es requerido'),
          municipio: Yup.string().required('Este campo es requerido'),
          telefono: Yup.number().required('Este campo es requerido'),
          email: Yup.string().email().required('Este campo es requerido'),
        })}
        onSubmit={( values ) => {

           console.log({values})
           setValuesForm({...values})
           setGenerateForm(true )

        }}
      >
        <Form>
          <div>
            <h1>Llena el siguiente formulario, para crear tu derecho de petición</h1>

            <div>
              <h1> Informacion básica  </h1>
              <div>
              <div>
                <label htmlFor="primerNombre">Primer Nombre</label>
                <Field name="primerNombre" type="text" />
                <ErrorMessage name="primerNombre" />
              </div>
              <div>
                <label htmlFor="segundoNombre">Segundo Nombre</label>
                <Field name="segundoNombre" type="text" />
                <ErrorMessage name="segundoNombre" />
              </div>

              <div>
                <label htmlFor="primerApellido">Primer Apellido</label>
                <Field name="primerApellido" type="text" />
                <ErrorMessage name="primerApellido" />
              </div>

              <div>
                <label htmlFor="segundoApellido">Segundo Apellido</label>
                <Field name="segundoApellido" type="text" />
                <ErrorMessage name="segundoApellido" />
              </div>
              </div>

              <div>
              <div>
                <label htmlFor="numeroIdentificacion">Número de Identificacón</label>
                <Field name="numeroIdentificacion" type="number" min={0} />
                <ErrorMessage name="numeroIdentificacion" />
              </div>

              <div>
                <label htmlFor="lugarExpedicion">Ciudad de expedición de identificación </label>
                <Field name="lugarExpedicion" type="text" />
                <ErrorMessage name="lugarExpedicion" />
              </div>

              <div>
                <label htmlFor="domicilio">Dirección de domicilio </label>
                <Field name="domicilio" type="text" />
                <ErrorMessage name="domicilio" />
              </div>
              </div>





            </div>

            <div>
              <h1> Información detallada del comparendo</h1>
              <div>

              <div>
                <label htmlFor="nombreInfractor">Nombre Completo de infractor</label>
                <Field name="nombreInfractor" type="text" />
                <ErrorMessage name="nombreInfractor" />
              </div>
                

              <div>
                <label htmlFor="placasVehiculo">Placas del vehículo</label>
                <Field name="placasVehiculo" type="text" />
                <ErrorMessage name="placasVehiculo" />
              </div>

              <div>
                <label htmlFor="ciudadMatricula">Ciudad donde está adscrito la matriculo del Vehículo</label>
                <Field name="ciudadMatricula" type="text" />
                <ErrorMessage name="ciudadMatricula" />
              </div>

              <div>
                <label htmlFor="fechaComparendo">Fecha de comparendo</label>
                <Field name="fechaComparendo" type="date" />
                <ErrorMessage name="fechaComparendo" />
              </div>

              <div>
                <label htmlFor="numeroComparendo">Número del comparendo</label>
                <Field name="numeroComparendo" type="text" />
                <ErrorMessage name="numeroComparendo" />
              </div>

              <div>
                <label htmlFor="numeroResolucion">Número de resolución</label>
                <Field name="numeroResolucion" type="text" />
                <ErrorMessage name="numeroResolucion" />
              </div>
              </div> 
            </div>


            <div>
              <h1> Información detallada donde serás notificado del proceso</h1>
              <div>

              <div>
                <label htmlFor="email">Correo electrónico</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
              </div>

              <div>
                <label htmlFor="direccion">Dirección</label>
                <Field name="direccion" type="text" />
                <ErrorMessage name="direccion" />
              </div>

              <div>
                <label htmlFor="ciudad">Ciudad</label>
                <Field name="ciudad" type="text" />
                <ErrorMessage name="ciudad" />
              </div>

              <div>
                <label htmlFor="municipio">Municipio</label>
                <Field name="municipio" type="text" />
                <ErrorMessage name="municipio" />
              </div>

              <div>
                <label htmlFor="telefono">telefono</label>
                <Field name="telefono" type="tel" />
                <ErrorMessage name="telefono" />
              </div>

              </div>
            </div>
          </div>

          <button type='submit'> Generar documento </button>

        </Form>
      </Formik>
      { generateForm ? <TemplateTransitoTransporte valuesForm={valuesForm} /> : null }
    </div>

  )
}

export default TransitoYTransporte