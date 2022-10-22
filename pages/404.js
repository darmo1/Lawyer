
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MainLayout from '../src/Layout'
import GlobalLayout from '../src/Layout/GlobalLayout'

const Custom404 = () => {
  return (
    <GlobalLayout>
      <MainLayout>
        <div className='text-2xl text-center text-break'>
          Oushhh!! - Página no encontrada | Error, algo ha salido mal, vuelve a empezar
        </div>
        <div className='flex flex-col justify-center items-center my-8'>
        <Image src="/icon-error.svg" width={500} height={500}  alt="" />
        <Link href="/">
          <a className='max-w-[400px] py-2 text-center bg-orange-400 w-2/3 my-4 rounded-2xl'>
            Regresar  a home 
          </a>
        </Link>

        </div>
      </MainLayout>
    </GlobalLayout>
  )
}

export default Custom404