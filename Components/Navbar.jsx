import React from 'react'

function Navbar() {
  return (
    <div className='p-3 bg-fuchsia-400 flex justify-around'>
        <div>
        <p>Logo</p>

        </div>
       <div className='flex gap-10 text-white font-semibold'> 
        <p>About</p>
        <p>Contact</p>
        </div>
    </div>
  )
}

export default Navbar