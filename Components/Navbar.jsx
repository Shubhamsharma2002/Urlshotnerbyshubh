import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='p-3 bg-blue-600 flex justify-around'>
        <div>
        <p>Logo</p>

        </div>
       <div className='flex gap-10 text-white font-semibold'> 
          <Link href="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar