import React from 'react'

const Title = ({title}) => {
  return (
    <div className='mx-2'>
      <h1 className='text-xl font-semibold my-4 text-center hover:underline'>{title}</h1>
    </div>
  )
}

export default Title