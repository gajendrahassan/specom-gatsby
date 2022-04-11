import { Link } from 'gatsby'
import React from 'react'
import { MdFlipCameraAndroid } from 'react-icons/md'
import bpoImg from '../../images/illustrate/bpo.jpg'
import bpoImg2 from '../../images/illustrate/services-2.jpg'

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


<div className='sm:grid hidden grid-cols-3 gap-x-8 '>
    <div className='col-span-1 bg-[#202020] p-3 rounded'>
       <Card title="BPO Services" path="/services/bpo-services" desc="Elevate Your Business with our communication services" Icon="1"/> 
    </div>
    <div className='col-span-1 bg-[#202020] p-3 bg-center rounded ' style={{backgroundImage:`url(${bpoImg})`}} >
    {/* <Card title="title" path="/more" desc="description" Icon="2"/>  */}

    </div>
    <div className='col-span-1 bg-[#202020] p-3 rounded'>
    <Card title="Software Development" path="/services/software-development" desc="We shift the boundaries of what's possible, allowing you to create the next big thing" Icon="2"/> 

    </div>

    
</div>
<br/>
<div className='grid sm:grid-cols-3 grid-cols-1 gap-x-8 gap-y-4 '>
    <div className='col-span-1 bg-[#202020] p-3 rounded'>
       <Card title="Import Export" path="/more" desc="We Providing quantitative and qualitative data on service consumption in Export Market " Icon="1"/> 
    </div>
    <div className='col-span-1 h-[250px] sm:h-full bg-[#202020] p-3 bg-center rounded' style={{backgroundImage:`url(${bpoImg2})`}} >
    {/* <Card title="title" path="/more" desc="description" Icon="2"/>  */}

    </div>
    <div className='col-span-1 bg-[#202020] p-3 rounded'>
    <Card title="Automation" path="/more" desc="Service automation is the condensation of many human-centric services into a streamlined, software-based online platform." Icon="2"/> 

    </div>


</div>

    </div>
  )
}
