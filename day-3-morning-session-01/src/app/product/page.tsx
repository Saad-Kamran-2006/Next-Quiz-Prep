import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
      <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-y-5'>
          <Link className='bg-gray-900 text-white px-3 py-1 rounded-md text-sm' href={'/product/1'}>Product 1</Link>
          <Link className='bg-gray-900 text-white px-3 py-1 rounded-md text-sm' href={'/product/2'}>Product 2</Link>
          <Link className='bg-gray-900 text-white px-3 py-1 rounded-md text-sm' href={'/product/3'}>Product 3</Link>
    </div>
  )
}

export default page