import React from 'react'

export default function Employe({name, desc, desgnition, reverse}) {
  return (
      <>
      <br/>
      <br/>
      <br/>
    <div className='grid grid-cols-3 gap-x-5 mb-10'>
<div className='flex items-end'>
    {reverse && <p className='text-brandColor transform translate-y-8'>{desc}</p>
 }
</div>
<div className='h-[400px] bg-black relative'>
<p className='text-brandColor text-md opacity-60 transform -translate-y-7'>{desgnition}</p>
<h2 className={`text-brandColor capitalize text-2xl absolute top-[50%] ${reverse ? 'right-[-16%]' : 'left-[-16%]'} `}>{name}</h2>

</div>
<div className='flex items-end'>
{!reverse && <p className={`${reverse? 'text-right' : 'text-left'} text-brandColor  transform translate-y-8`}>{desc}</p>
}</div>



    </div>
    <br/>
    <br/>
    </>
  )
}
