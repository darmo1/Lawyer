import React from 'react'

const MainLayout = ({ children }) => {
  return (
   
      <div className='max-w-4xl m-auto px-2 py-4 my-auto' id="print">
        {children}
      </div> 
  )
}

export default MainLayout