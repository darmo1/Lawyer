import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className='bg-indigo-900'>
      <div className='max-w-3xl mx-auto text-white py-4'>
        {children}
      </div>
    </div>
  )
}

export default MainLayout