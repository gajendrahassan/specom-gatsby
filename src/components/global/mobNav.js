import React, {useState} from 'react'
import {Link} from 'gatsby'
import {data} from './data'
import {AiFillCaretRight} from 'react-icons/ai'
// import NavBar from './navbar'
import  { MdClose } from 'react-icons/md'
import { VscMenu } from "react-icons/vsc";
import logo from '../../images/logo.png'

export default function MobNavbar() {

  const [state, setState ] = useState();

  const [cstate, setCState ] = useState();





  const [open, setOpen] = useState(true)

  const handleOpen = () =>{

    setOpen(!open)
  }




   const handleHover = (title) =>{

    setState(title)

   } 
 const handleHoverC = (title) =>{

      setCState(title)

   }


const handleLeave = () =>{

    (state != 'BPO Services' && state != 'Software Development' && state != 'Import Export') && setCState(false)

   }
  return (
      <>
      <div className='bg-[#111314] p-2 flex items-center justify-between'>
      <Link to="/"> <img src={logo} className='w-[100px]'/></Link>
   { open &&   <VscMenu onClick={()=>handleOpen()} className=' font-thin  text-right cursor-pointer text-brandColor text-4xl'/>}
{  !open &&   <MdClose onClick={()=>handleOpen()} className=' font-thin  text-right cursor-pointer text-brandColor text-4xl'/>
}
      </div>
      
   { !open &&   <nav className=' shadow-md bg-[#111314] py-4 fixed top-0 z-20 w-[48%]'>
     <div className=' flex flex-col h-screen justify-start items-start container mx-auto w-[90%]'>
 
     <div>
     <div className="logo flex justify-between items-center">
        <Link to="/"> <img src={logo} className='w-[100px]'/></Link>

     </div>
     <br/>
         <ul className='flex space-y-5 flex-col'>

{
    data.map((item, i)=>{

        return <div key={i}> 
        <Link to={item?.path}>
        <li onMouseOver={()=>handleHoverC(item?.title)} className='text-[#bbbbbb] hover:text-[#ebebeb] relative parent  hover:underline cursor-pointer font-medium tracking-wider  text-xl' key={i}>
          {item.title} </li> </Link> 
                 <ul onMouseLeave={handleLeave} className='m-0 w-[180px] rounded child relative   bg-gray-300 '>{
                     (cstate == 'Services') && item?.child?.map((citem, k)=>{

                        return <><Link to={citem?.path}>  <li onMouseOver={()=>handleHover(citem?.title)} className={`px-4 py-1 ${(state == citem?.title) ? 'bg-[#000000] text-[#d6d5d5]' : '' }  text-md cursor-pointer font-medium flex items-center justify-between  relative`} key={k}>
                            {citem?.title} {citem?.child?.length > 0 ? <AiFillCaretRight className='text-[14px]'/> : ''}  </li></Link>

                      <ul className={`w-[150px]  ${(state == 'BPO Services') ? 'top-[0%]' : 'top-[19%]'} rounded   bg-gray-300 absolute left-[102%]`}>
                            {
                             (state == citem?.title) &&  citem?.child?.map((nitem, n)=>{

                                    return   <li className='px-4 py-1 font-medium text-md nchild cursor-pointer hover:bg-[#000000] hover:text-[#d6d5d5]' key={n}>
                                       <Link to={nitem?.path}>{nitem?.title}</Link></li>
                                })
                            }
                        </ul>
              
</>
                        
                     })
                 }

                 </ul>
                
</div>
 
  

    })
}
</ul>
     </div>

    
     </div>
    </nav> }
    </>

  )
}
