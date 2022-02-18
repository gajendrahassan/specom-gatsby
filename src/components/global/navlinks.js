import { Link } from 'gatsby';
import React from 'react';
import  { MdClose } from 'react-icons/md'
export default function Navlinks({handleOpen}) {

const navData = [{
    path:'/',
    title:'Home'
},
{
    path:'/team',
    title:'Team'
},
{
    path:'/services',
    title:'Services'
},
{
    path:'/about',
    title:'About'
},
{
    path:'/contact',
    title:'Contact'
},
]

  return <div className='flex justify-center items-center  fixed inset-0 z-20  h-screen bg-black'>
      <div className='w-full'>
      <MdClose onClick={()=>handleOpen()} className=' font-thin absolute top-[2%] right-[2%] text-right cursor-pointer text-brandColor text-4xl'/>

{
    navData.map((item, i)=>{

        return <Link to={item.path} key={i}>
           <h4 style={{transition:'0.3s'}} className='sm:text-6xl text-4xl hover:bg-brandColor hover:text-bgColor border-[#53525249] border-t-[1px] w-full tracking-[1.3] text-center text-brandColor font-bold p-5'>{item.title}</h4> 
        </Link>
    })
}
</div>
  </div>;
}
