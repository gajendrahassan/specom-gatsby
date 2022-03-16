import React from 'react'
import Img from 'gatsby-image'
export default function Feature({imge, data}) {
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 gap-8'>

        <div>
        <Img fluid={imge} className="h-full" />
        </div>
        <div>
            <br/>
            <p className='text-[#d6871f] font-semibold tracking-[2px]'>{data.sub_title}</p>
            <h2 className='text-3xl text-white font-thin tracking-[2px]'>{data.title}</h2>
            <br/>
            <p className='text-[#b1b1b1] tracking-[1px]'>{data.desc}</p>
       <br/>
       <button className='px-5 py-2 bg-slate-100 font-semibold rounded-full text-[#252525]'>Contact Now</button>
        </div>
    </div>
  )
}
