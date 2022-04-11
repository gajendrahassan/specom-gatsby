import React from 'react'
import { Link } from 'gatsby';
export default function CoreService({data, title}) {

  const  truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (

    <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 p-5 container mx-auto relative'>
        {
            data.map((item, i)=>{

                return <div key={i} className=" cursor-pointer border-[1px] rounded bg-[#3b3b3bb6] border-[#555555] p-5 ">
                    
                    <h2 className='text-2xl text-white  font-semibold tracking-[2px]'>{item.title}</h2>
                    <p className='text-[#acacac] tracking-[1px]'>{truncateString(item.desc, 220)}</p>
                {  title == 'Our BPO Services' &&  <><br/>
 <Link to={`/services/${item.slug}`}>
                      <butoon className="px-5 py-1 rounded-full text-black bg-slate-200 ">View More</butoon> 
                      </Link></>}
                </div>
            })
        }
    </div>
  )
}
