import React from 'react'

export default function Service({stitle, title, imge, desc}) {
  return (
    <div className=' sm:grid sm:grid-cols-5 sm:gap-x-4 container mx-auto sm:w-[80%]'>

      <div className='p-6  col-span-3'>
        
        <p className='text-[#c97323] text-lg'>{stitle}</p>
        <h1 className='text-brandColor text-3xl mb-2'>{title}</h1>
        

        <p className='text-[gray] text-md'>{desc}</p>
        <br/>

        <button className='px-6 py-2 border-2 text-brandColor'>connect</button>
      </div>
      <div className='col-span-2'>

<img className='h-full w-full object-cover' src={imge} alt="" />

      </div>


    </div>
  )
}
