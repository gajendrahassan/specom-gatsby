import React from 'react'

export default function ProjectStat() {

    const statdata = [
        {
            title:"project",
            perc:'80%'
        },
        {
            title:"project",
            perc:'60%'
        },
        {
            title:"project",
            perc:'70%'
        },
        {
            title:"project",
            perc:'90%'
        },
    ]

  return (
    <div className='grid grid-cols-7 gap-x-8 container mx-auto w-[80%]'>
        <div className='col-span-3'>
            <img src="https://cdn.pixabay.com/photo/2021/01/26/09/48/york-minster-5950966_960_720.jpg" className='h-[400px] w-full'/> 
        </div>
        <div className='col-span-4'>
<h4 className='text-brandColor font-semibold'>Skills</h4>
<hr className='w-[8%]'/>
<br/>
<h1 className='text-5xl text-white font-medium'>Our Skills for <br/>
Super Projects
</h1> <br/>

<div  className='grid grid-cols-8 gap-x-6'>
{

    statdata.map((item)=>{

        return <>
        <div className='col-span-7'>
            <p className='text-brandColor mb-2'>{item.title}</p>
<div className={` w-[${item.perc}] h-1 bg-white rounded-full`}/>
<br/>

</div>
<div className='col-span-1'>
<h2 className='text-white text-xl font-semibold'>{ item.perc }</h2>
</div>


        </>
    })
}

</div>

        </div>
    </div>
  )
}
