import React from 'react'

export default function Employe({name, desc, desgnition, reverse, pimg}) {
  return (
      <>
      <br/>
      <br className='hidden sm:block'/>
      <br className='hidden sm:block'/>
    <div className='sm:grid hidden grid-cols-3 gap-x-5 mb-10'>
<div className='flex items-end'>
    {reverse && <p className='text-brandColor transform translate-y-8'>{desc}</p>
 }
</div>
<div className='h-[400px] bg-cover bg-black relative ' style={{backgroundImage:`url(${pimg})`}}>
<p className='text-brandColor text-md opacity-60 transform -translate-y-7'>{desgnition}</p>
<h2 className={`text-[#e08c1c] font-bold capitalize text-3xl absolute top-[50%] ${reverse ? 'right-[-25%]' : 'left-[-25%]'} `}>{name}</h2>

</div>
<div className='flex items-end'>
{!reverse && <p className={`${reverse? 'text-right' : 'text-left'} text-brandColor  transform translate-y-8`}>{desc}</p>
}</div>



    </div>

    <div className='sm:hidden block'>
      <div>
        <img src={pimg} alt="" className='h-[300]'/>
      </div>
      <div className='py-2'>
        <h1 className='text-white font-semibold text-xl text-center'>{name}</h1>
        <p className='text-white opacity-40 text-center'>{desgnition}</p>
      </div>
    </div>
    <br/>
    <br/>
    </>
  )
}
