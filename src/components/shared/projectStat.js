import React from 'react'
import office from '../../images/office/office1.jpeg'
export default function ProjectStat() {

    const statdata = [
        {
            title:"BPO Service",
            perc:'93%'
        },
        {
            title:"Software Development",
            perc:'100%'
        },
        {
            title:"Automation",
            perc:'100%'
        },
        {
            title:"Import & Export",
            perc:'80%'
        },
    ]

  return (
    <div className='sm:grid grid-cols-7 gap-x-8 p-4 sm:p-0 container mx-auto w-[95%] sm:w-[80%]'>
        <div className='col-span-3'>
            <img src={office} className='h-[400px] w-full'/> 
        </div>
        <div className='col-span-4 '>
<h4 className='text-brandColor font-semibold'>Skills</h4>
<hr className='w-[8%]'/>
<br/>
<h1 className='sm:text-5xl text-3xl text-white font-lighter tracking-widest'>Our Skills for <br/>
Super Projects
</h1> <br/>

<div  className='grid grid-cols-8 gap-x-6 p-4 sm:p-0'>
{

    statdata.map((item)=>{

        return <>
        <div className='col-span-7'>
            <p className='text-brandColor mb-2'>{item.title}</p>
<div style={{width:item.perc}} className={` h-1 bg-white rounded-full`}/>
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
