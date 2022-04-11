import React from 'react';
import {Link} from 'gatsby'
import clogo1 from '../../images/clogos/clogo1.jpg'
import clogo2 from '../../images/clogos/clogo2.jpg'
import clogo3 from '../../images/clogos/clogo3.jpg'
import clogo4 from '../../images/clogos/clogo4.jpg'
import clogo5 from '../../images/clogos/clogo5.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import fimage from '../../images/illustrate/slides-1 (1).png'
export default function Clientlogo() {

    const logoData = [clogo1,
    clogo2,
    clogo3,
    clogo4,
    clogo2,
    clogo5

]

const settings = {
  dots: true,
  infinite: true,
  arrows:false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

};
  return <div className='container  mx-auto'>
    <br/>
    <br/>
      <h2 className='text-center text-brandColor sm:text-3xl text-lg font-bold tracking-[1.3px]'>
      We are enabling the business to meet <br/> its vision with end-to-end technology solutions.
        
        </h2>
  <br/>
  <br/>
  <div className='flex flex-col justify-center items-center'>
  <Link className='text-[18px] text-center text-brandColor  tracking-[1.5px]' to='/contact'>View Our Projects</Link>
  <hr className='w-[185px] border-[#bdbaba]'/>
  </div>
  <br/>
  <br/>
  <br className='sm:block hidden'/>
  <br className='sm:block hidden'/>
<div className=' sm:w-[70%] w-[90%] mx-auto'>
<Slider {...settings}>

  {

logoData.map((item, i) =>{

    return <div>
      <img className='cols-span-1 h-[120px] object-cover w-[90%] my-2 block m-auto' key={i} src={item} alt="logo"/>
      </div>
})
  }
  </Slider>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
<div className='grid grid-cols-2 gap-x-2 sm:w-[60%]  mx-auto'>

<div className='col-span-1'>
  <img src={fimage} alt="" className="h-[400px] w-full object-cover rounded" />
</div>
<div className='relative flex justify-center items-center'>

  <h6 className="text-white text-lg sm:w-[90%] mx-auto text-left ">

  Specom believes that the human components are important to any project's success and that it is here that emotional relationships between the company and its personnel are built. 
  </h6>
</div>


</div>

  <br/>
  <br/><br/>
  </div>;
}
