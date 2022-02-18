import React, { useState } from 'react';
import { VscMenu } from "react-icons/vsc";
import Socialmedia from '../shared/socialmedia';
import Navlinks from './navlinks';
import { Link } from 'gatsby'
export default function Navbar() {

  const [open, setOpen] = useState(false)

  const handleOpen = () =>{

    setOpen(!open)
  }

  return <><nav className='z-20 sticky top-0 bg-[#111314] p-4 flex sm:grid grid-cols-3 justify-between items-center'>

<div className='sm:flex hidden justify-start items-center '>
  <Socialmedia/>
</div>
<div>
  <h2 className=' text-center font-extrabold tracking-widest cursor-pointer text-brandColor text-3xl'>
   <Link  to='/'>
   Tronic
     </Link> </h2>
</div>
<div className="flex justify-end items-center">
  <VscMenu onClick={handleOpen} className=' text-right cursor-pointer text-brandColor text-3xl'/>
</div>

  </nav>
{ open &&  <Navlinks handleOpen={handleOpen} />
} 

 </>
  ;
}
