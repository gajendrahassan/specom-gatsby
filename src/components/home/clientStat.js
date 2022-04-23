import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import fimage from '../../images/illustrate/slides-1 (1).png'

import {  MdOutlineGroupWork  } from 'react-icons/md'
import { Link } from 'gatsby'
export default function ClientStat() {

  const ref = useRef()
  const [scrollPosition, setPosition] = useState()
  const [state, setState] = useState(false)

  useEffect(() => {
  function updatePosition() {
      setPosition(window.scrollY )
      setState(true)
  }

  window.addEventListener('scroll', updatePosition)
  updatePosition()

  return () => window.removeEventListener('scroll', updatePosition)
 }, [state])

  return (
    <div ref={ref} className=' container mx-auto sm:w-[80%] '>
<h2 className='text-brandColor text-center sm:text-left text-2xl font-bold '>Our Projects </h2>

<hr className='w-[10%] mx-auto sm:w-full'/>
<br/>
<br/>
 <div className=' grid grid-cols-2 gap-y-4 sm:flex justify-around items-center'>
  <div  className='flex justify-center items-center gap-x-5'>
      <div>

<MdOutlineGroupWork className='text-[#faf6f691] text-6xl'/>

      </div>
      <div>
            <div>
  <CountUp
        className='text-white text-3xl font-bold'
        end={133}
        duration={2}
        suffix='+'
        />
                <h2 className='text-2xl text-brandColor'>Happy Clients</h2>
</div>
 </div>

  </div>
  <div className='flex justify-center items-center gap-x-5'>
  <div>

<MdOutlineGroupWork className='text-[#faf6f691] text-6xl'/>

      </div>
      <div>
  <CountUp
        className='text-white text-3xl font-bold'
        end={9}
        duration={2}
        suffix='+'

        />
                <h2 className='text-2xl text-brandColor'>Happy Clients</h2>
</div>
  </div>
  <div className='flex justify-center items-center gap-x-5'>
  <div>

<MdOutlineGroupWork className='text-[#faf6f691] text-6xl'/>

      </div>
      <div>
  <CountUp
        className='text-white text-3xl font-bold'
        end={17}
        duration={2}
        suffix='K+'

        
        />
                <h2 className='text-2xl text-brandColor'>Hours Support </h2>
</div>
  </div>
  <div className='flex justify-center items-center gap-x-5'>
  <div >

<MdOutlineGroupWork className='text-[#faf6f691] text-6xl'/>

      </div>
      <div>
  <CountUp
        className='text-white text-3xl font-bold'
        end={120}
        duration={2}
        suffix='+'

        />
        <h2 className='text-2xl text-brandColor'>Hard Workers </h2>
        </div>
  </div>

</div> 
       
<br/>
  <br/>
  <br/>
  <br/>
  <h1 className={`text-white text-center font-bold text-4xl opacity-75 tracking-wider mb-4 `}>About Us</h1>
  <hr className='w-[7%] mx-auto'/>
<br/>
<br/>

<div className='grid grid-cols-2 gap-x-2 sm:w-[80%]  mx-auto'>

<div className='col-span-1'>
  <img src={fimage} alt="" className="h-[400px] w-full  rounded" />
</div>
<div className='relative flex justify-center items-center'>

  <h6 className="text-white text-lg sm:w-[90%] mx-auto text-left ">

  Specom believes that the human components are important to any project's success and that it is here that emotional relationships between the company and its personnel are built. 
 <br/>
 <br/>

 <Link to="about">
    <button className='px-5 py-1 rounded-full text-md bg-white text-black'>No More</button>
  </Link>
  </h6>
 
</div>


</div>

  <br/>
  <br/><br/>
    </div>
  )
}
