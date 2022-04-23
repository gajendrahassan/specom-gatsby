import { Link } from 'gatsby'
import React from 'react'
import iso from '../../images/cerficate.pdf'
export default function Iso() {
  return (
    <div className='hidden sm:block z-30 bg-white text-gray-900 p-2 fixed top-[30%] right-0 rounded-l-full'>
{/* <a href={iso} className="text-right" download>
ISO 
Certificate

</a> */}
<p className='z-30 bg-white text-gray-900 p-2 fixed top-[30%] right-0 rounded-l-full '> <Link to="/careers">We are Hiring</Link></p>
    </div>
  )
}
