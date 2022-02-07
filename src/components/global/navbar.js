import React, { useState } from 'react';
import { VscMenu } from "react-icons/vsc";
import Socialmedia from '../shared/socialmedia';
import Navlinks from './navlinks';

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const handleOpen = () =>{

    setOpen(!open)
  }

  return <><nav className=' sticky top-0 bg-[#111314] p-4 grid grid-cols-3 justify-between items-center'>

<div className='flex justify-start items-center '>
  <Socialmedia/>
</div>
<div>
  <h2 className=' text-center cursor-pointer text-brandColor text-2xl'>Tronic</h2>
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
