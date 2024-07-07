import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full space-x-10 ml-10 pt-2'>
      <Link className='bg-gray-900 text-white px-2 py-1 rounded ' href={"/"}>Home</Link>
      <Link className='bg-gray-900 text-white px-2 py-1 rounded ' href={"/about"}>About</Link>
      <Link className='bg-gray-900 text-white px-2 py-1 rounded ' href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}

export default Navbar