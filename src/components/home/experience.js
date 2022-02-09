import { Link } from 'gatsby'
import React from 'react'
import { MdFlipCameraAndroid } from 'react-icons/md'

export default function Experience() {

    const Card = ({title, desc, path}) =>{

        return <div className='h-[250px] py-3 px-1 flex flex-col justify-between'>
            <div>
                <MdFlipCameraAndroid className='text-brandColor text-3xl '/>
            </div>
            <div>
                <h6 className='text-brandColor text-xl font-semibold'>{title}</h6>
                <p className='text-brandColor text-md'>{desc}</p>
                <br/>
                <Link className='text-md text-brandColor' to={path}>Lear More</Link>
                <hr className='w-[30%] '/>
            </div>
        </div>
    }

  return (
    <div className=' container mx-auto w-[80%] '>
<h2 className='text-brandColor text-2xl font-bold '>we buid experience</h2>

<hr/>
<br/>
<br/>


<div className='grid grid-cols-3 gap-x-8 '>
    <div className='col-span-1 bg-[#202020] p-3 rounded'>
       <Card title="title" path="/more" desc="description" Icon="1"/> 
    </div>
    <div className='col-span-1 bg-[#202020] p-3 bg-center rounded bg-[url(https://cdn.pixabay.com/photo/2021/01/23/18/40/child-5943323__340.jpg)]' >
    {/* <Card title="title" path="/more" desc="description" Icon="2"/>  */}

    </div>
    <div className='col-span-1 bg-[#202020] p-3 rounded'>
    <Card title="title" path="/more" desc="description" Icon="2"/> 

    </div>


</div>
<br/>
<div className='grid grid-cols-3 gap-x-8 '>
    <div className='col-span-1 bg-[#202020] p-3 rounded'>
       <Card title="title" path="/more" desc="description" Icon="1"/> 
    </div>
    <div className='col-span-1 bg-[#202020] p-3 bg-center rounded bg-[url(https://cdn.pixabay.com/photo/2021/01/23/18/40/child-5943323__340.jpg)]' >
    {/* <Card title="title" path="/more" desc="description" Icon="2"/>  */}

    </div>
    <div className='col-span-1 bg-[#202020] p-3 rounded'>
    <Card title="title" path="/more" desc="description" Icon="2"/> 

    </div>


</div>

    </div>
  )
}
