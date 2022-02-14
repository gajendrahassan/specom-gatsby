import React from 'react'

export default function Service({stitle, title, imge, desc}) {
  return (
    <div className='grid grid-cols-2 gap-x-4 container mx-auto w-[80%]'>

      <div className='p-6 pl-8'>
        <br/>
        <p className='text-[#c97323] text-lg'>{stitle}</p>
        <h1 className='text-brandColor text-3xl'>{title}</h1>
        <br/>

        <p className='text-[gray] text-lg'>{desc}</p>
        <br/>
        <br/>

        <button className='px-6 py-2 border-2 text-brandColor'>connect</button>
      </div>
      <div>

<img src={imge} alt="" />

      </div>


    </div>
  )
}
