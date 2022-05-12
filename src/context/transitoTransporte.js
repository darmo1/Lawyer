import * as React from 'react';

const TYTContext = React.createContext();

export const TYTProvider = ({ children }) => {

  const [valuesForm, setValuesForm] = React.useState({})
  const [generateForm, setGenerateForm] = React.useState(false)


  return <TYTContext.Provider value={{
    valuesForm,
    setValuesForm,
    generateForm,
    setGenerateForm
  }}>
    {children}
  </TYTContext.Provider>
}

export const useTYT = () => {
  const ctx = React.useContext(TYTContext)
  return ctx
}

