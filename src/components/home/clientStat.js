import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import {  MdOutlineGroupWork  } from 'react-icons/md'
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
<h2 className='text-brandColor text-center sm:text-left text-2xl font-bold '>Our Client </h2>

<hr className='w-[10%] mx-auto sm:w-full'/>
<br/>
<br/>
{ (scrollPosition > 3800) && <div className=' grid grid-cols-2 gap-y-4 sm:flex justify-around items-center'>
  <div  className='flex justify-center items-center gap-x-5'>
      <div>

<MdOutlineGroupWork className='text-[#faf6f691] text-6xl'/>

      </div>
      <div>
            <div>
  <CountUp
        className='text-white text-3xl font-bold'
        end={100}
        duration={2}
        suffix='+'
        />
                <h2 className='text-2xl text-brandColor'>stat title </h2>
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
        end={60}
        duration={2}
        suffix='+'

        />
                <h2 className='text-2xl text-brandColor'>stat title </h2>
</div>
  </div>
  <div className='flex justify-center items-center gap-x-5'>
  <div>

<MdOutlineGroupWork className='text-[#faf6f691] text-6xl'/>

      </div>
      <div>
  <CountUp
        className='text-white text-3xl font-bold'
        end={74}
        duration={2}
        suffix='+'

        
        />
                <h2 className='text-2xl text-brandColor'>stat title </h2>
</div>
  </div>
  <div className='flex justify-center items-center gap-x-5'>
  <div >

<MdOutlineGroupWork className='text-[#faf6f691] text-6xl'/>

      </div>
      <div>
  <CountUp
        className='text-white text-3xl font-bold'
        end={47}
        duration={2}
        suffix='+'

        />
        <h2 className='text-2xl text-brandColor'>stat title </h2>
        </div>
  </div>

</div> }
       

    </div>
  )
}
