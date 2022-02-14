import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Service from './service';
export default function SliderSec() {

    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const slideData = [
        {
            title:"Slide One",
            stitle:"sub title",
            desc:"lorem lorem jnfjgnkjdnfgjndgd lorem lorem",
            imge:'https://cdn.pixabay.com/photo/2019/08/09/18/34/shells-4395609__340.jpg'
        },
        {
            title:"Slide Two",
            stitle:"sub title",
            desc:"lorem lorem jnfjgnkjdnfgjndgd lorem lorem",
            imge:'https://cdn.pixabay.com/photo/2019/08/09/18/34/shells-4395609__340.jpg'
        },
        {
            title:"Slide Three",
            stitle:"sub title",
            desc:"lorem lorem jnfjgnkjdnfgjndgd lorem lorem",
            imge:'https://cdn.pixabay.com/photo/2019/08/09/18/34/shells-4395609__340.jpg'
        },
    ]

  return (
    <Slider {...settings}>
        {
slideData.map((item, i)=>{

    return <Service key={i} title={item.title}
    stitle={item.stitle} desc={item.desc}
     imge={item.imge}
    />
})
        }
    </Slider>
  )
}
