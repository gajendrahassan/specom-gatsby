import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import iso from '../../images/cerficate.pdf'
export default function CookieAcept() {

    const [view, setView] = useState();

    const handleClick = () =>{

        setView(false)
        localStorage.setItem('cookie', 'true')
    }

    useEffect(()=>{

      let c =  localStorage?.getItem('cookie')

       setTimeout(()=>{

       return   c == 'true' ? null : setView(true) 
        }, 2000)

    }, [])

  return (
    <div className={` transition-all ease-in-out w-full z-20 flex justify-center items-center bg-white text-gray-900 p-2 fixed ${view ? 'bottom-[0%]' : 'bottom-[-10%]'} `}>
<p className='text-center'>We use cookies to improve user experience and analyze website traffic. By clicking “Accept“, you agree to our website's cookie use as described in our Cookie Policy.</p>
<div className='flex w-[20%]'>
    <button onClick={handleClick} className='px-4 rounded-full cursor-pointer text-white bg-black'>Accept</button>
  &nbsp;    &nbsp;  

  <button onClick={handleClick} className='px-4 cursor-pointer rounded-full text-[black] bg-[#cac9c9]'>Reject</button>


</div>
    </div>
  )
}
