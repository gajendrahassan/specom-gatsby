import React, {useState} from 'react'
import {data} from './data'
import {AiFillCaretRight} from 'react-icons/ai'
export default function Navbar2() {

  const [state, setState ] = useState();

  const [cstate, setCState ] = useState();


  console.log( cstate);






   const handleHover = (title) =>{

    setState(title)

   } 
 const handleHoverC = () =>{

    setCState(true)

   }
const handleLeave = () =>{

    (state != 'BPO Services' && state != 'Software Development' && state != 'Import Export') && setCState(false)

   }
  return (
    <nav className=' shadow-md bg-[#111314] py-4 sticky top-0 z-20'>
     <div className=' flex justify-between items-center container mx-auto '>
     <div className="logo">
         <h1 className='text-2xl font-bold text-white'>LOGO</h1>
     </div>
     <div>
         <ul className='flex space-x-12'>

{
    data.map((item, i)=>{

        return <> 
        
        <li onMouseOver={handleHoverC} className='text-[#bbbbbb] hover:text-[#ebebeb] relative parent  hover:underline cursor-pointer font-medium tracking-wider  text-xl' key={i}>{item.title} </li>
                 <ul onMouseLeave={handleLeave} className='m-0 w-[240px] rounded child   bg-gray-300 absolute top-[95%]  transform translate-x-12'>{
                     cstate && item?.child?.map((citem, k)=>{

                        return <> <li onMouseOver={()=>handleHover(citem?.title)} className={`px-4 py-1 ${(state == citem?.title) ? 'bg-[#000000] text-[#d6d5d5]' : '' }  text-md cursor-pointer font-medium flex items-center justify-between  relative`} key={k}>{citem?.title} {citem?.child?.length > 0 ? <AiFillCaretRight className='text-[14px]'/> : ''}  </li>

                      <ul className={`w-[210px]  ${(state == 'BPO Services') ? 'top-[0%]' : 'top-[19%]'} rounded   bg-gray-300 absolute left-[102%]`}>
                            {
                             (state == citem?.title) &&  citem?.child?.map((nitem, n)=>{

                                    return <li className='px-4 py-1 font-medium text-md nchild cursor-pointer hover:bg-[#000000] hover:text-[#d6d5d5]' key={n}>{nitem?.title}</li>
                                })
                            }
                        </ul>
              
</>
                        
                     })
                 }

                 </ul>
                
</>
 
  

    })
}
</ul>
     </div>

    
     </div>
    </nav>
  )
}
