import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useTYT } from '../src/context/transitoTransporte'
import { useRouter } from 'next/router'
import MainLayout from '../src/Layout'




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
    departamento: '',
    telefono: '',
    email: ''
  }

  const router = useRouter()
  const { setValuesForm, setGenerateForm } = useTYT();

  return (
    <MainLayout>

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
          ciudadComparendo: Yup.string().required('Este campo es requerido'),
          departamentoComparendo: Yup.string().required('Este campo es requerido'),
          numeroComparendo: Yup.string().required('Este campo es requerido'),
          numeroResolucion: Yup.string().required('Este campo es requerido'),
          direccion: Yup.string().required('Este campo es requerido'),
          ciudad: Yup.string().required('Este campo es requerido'),
          departamento: Yup.string().required('Este campo es requerido'),
          telefono: Yup.number().required('Este campo es requerido'),
          email: Yup.string().email().required('Este campo es requerido'),
        })}
        onSubmit={(values) => {
          setValuesForm({ ...values });
          setGenerateForm(true);
          router.push('/peticion-tyt/summaryForm')
        }}
      >
        <Form>
          <div>
            <h1 className='text-xl my-2 text-center'>Llena el siguiente formulario, para crear tu derecho de petición</h1>

            <div className='border rounded-lg border-white p-4 my-4'>
              <h1 className='text-center font-bold '> Informacion básica  </h1>
              <div>
                <div className='mb-5'>
                  <label htmlFor="primerNombre">Primer Nombre</label>
                  <Field name="primerNombre" type="text" />
                  <ErrorMessage name="primerNombre" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="segundoNombre">Segundo Nombre</label>
                  <Field name="segundoNombre" type="text" />
                  <ErrorMessage name="segundoNombre" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="primerApellido">Primer Apellido</label>
                  <Field name="primerApellido" type="text" />
                  <ErrorMessage name="primerApellido" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="segundoApellido">Segundo Apellido</label>
                  <Field name="segundoApellido" type="text" />
                  <ErrorMessage name="segundoApellido" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="numeroIdentificacion">Número de Identificacón</label>
                  <Field name="numeroIdentificacion" type="number" min={0} />
                  <ErrorMessage name="numeroIdentificacion" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="lugarExpedicion">Ciudad de expedición de identificación </label>
                  <Field name="lugarExpedicion" type="text" />
                  <ErrorMessage name="lugarExpedicion" />
                </div>

                <div className='mb-4'>
                  <label htmlFor="domicilio">Dirección de domicilio </label>
                  <Field name="domicilio" type="text" />
                  <ErrorMessage name="domicilio" />
                </div>
              </div>
            </div>

            <div className='border rounded-lg border-white p-4 my-4'>
              <h1 className='text-center font-bold'> Información detallada del comparendo</h1>
              <div>

                <div className='mb-5'>
                  <label htmlFor="nombreInfractor">Nombre Completo de infractor</label>
                  <Field name="nombreInfractor" type="text" />
                  <ErrorMessage name="nombreInfractor" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="departamentoComparendo">Departamento donde fue impuesto el comparendo</label>
                  <Field name="departamentoComparendo" type="text" />
                  <ErrorMessage name="departamentoComparendo" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="ciudadComparendo">Ciudad donde fue impuesto el comparendo</label>
                  <Field name="ciudadComparendo" type="text" />
                  <ErrorMessage name="ciudadComparendo" />
                </div>


                <div className='mb-5'>
                  <label htmlFor="placasVehiculo">Placas del vehículo</label>
                  <Field name="placasVehiculo" type="text" />
                  <ErrorMessage name="placasVehiculo" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="ciudadMatricula">Ciudad donde está adscrito la matriculo del Vehículo</label>
                  <Field name="ciudadMatricula" type="text" />
                  <ErrorMessage name="ciudadMatricula" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="fechaComparendo">Fecha de comparendo</label>
                  <Field name="fechaComparendo" type="date" />
                  <ErrorMessage name="fechaComparendo" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="numeroComparendo">Número del comparendo</label>
                  <Field name="numeroComparendo" type="text" />
                  <ErrorMessage name="numeroComparendo" />
                </div>

                <div className='mb-4'>
                  <label htmlFor="numeroResolucion">Número de resolución</label>
                  <Field name="numeroResolucion" type="text" />
                  <ErrorMessage name="numeroResolucion" />
                </div>
              </div>
            </div>


            <div className='border rounded-lg border-white p-4 my-4'>
              <h1 className='text-center font-bold'> Información detallada donde serás notificado del proceso</h1>
              <div>

                <div className='mb-6'>
                  <label htmlFor="email">Correo electrónico</label>
                  <Field name="email" type="email" />
                  <ErrorMessage name="email" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="direccion">Dirección</label>
                  <Field name="direccion" type="text" />
                  <ErrorMessage name="direccion" />
                </div>


                <div className='mb-5'>
                  <label htmlFor="departamento">Departamento</label>
                  <Field name="departamento" type="text" />
                  <ErrorMessage name="departamento" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="ciudad">Ciudad</label>
                  <Field name="ciudad" type="text" />
                  <ErrorMessage name="ciudad" />
                </div>


                <div className='mb-4'>
                  <label htmlFor="telefono">telefono</label>
                  <Field name="telefono" type="tel" />
                  <ErrorMessage name="telefono" />
                </div>

              </div>
            </div>
          </div>

          <button type='submit' className='flex justify-center border bg-blue-400 px-4 py-1 rounded-lg text-white mx-auto border-none'> Generar documento </button>

        </Form>
      </Formik>
    </MainLayout>

  )
}

export default TransitoYTransporte