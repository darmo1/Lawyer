import React from 'react'
import { TemplateTransitoTransporte } from '../../src/components'
import { useTYT } from '../../src/context/transitoTransporte'


const summaryForm = () => {

  const { valuesForm, generateForm } = useTYT()

  return (
    <>
      {generateForm 
      ? <TemplateTransitoTransporte valuesForm={valuesForm} /> 
      : 'hola'
      }
    </>)

}

export default summaryForm