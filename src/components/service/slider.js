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
            title:"Software Development ",
            stitle:"sub title",
            desc:`We are Software combatant and developers expertise in developing native, react native,
            flutter apps development. 
           No technology is left untouched as we believe in adopting trends. Be it any platform such as IoT, artificial intelligence machine learning and artificial intelligence , we focus on your development
           requirement and business ideas from conceptualization to a well-developed app on 
           respective platforms. We are your IT partner for your all end to end needs forever.`,
            imge:'https://cdn.pixabay.com/photo/2021/08/05/12/36/software-development-6523979__340.jpg'
        },
        {
            title:"Digital Marketing ",
            stitle:"sub title",
            desc:`we offer a team of knowledgeable digital marketing excellent professionals that are committed to your triumph.
            We strive to drop-ship a client experience that organically develops to be a lasting relationship.
            we provide social media marketing, search engine optimization, search engine marketing 
            email marketing and content marketing `,
            imge:'https://cdn.pixabay.com/photo/2019/04/20/04/51/social-media-4140959__340.jpg'
        },
        {
            title:"BPO",
            stitle:"sub title",
            desc:`we expertise succour us to tailor customized rear end office 
            BPO ministration that cup tie your business necessitate. We aim to magnify your service delivery
             excellence while ensuring compliance with industry-followed idiosyncrasy and security banderole.
             we bring forth IT services, Back office BPO services, call center services, revenue cycle management service 
             e commerce support service. `,
            imge:'https://cdn.pixabay.com/photo/2020/11/23/03/56/handshake-5768632__340.jpg'
        },{
            title:"Data Entry",
            stitle:"sub title",
            desc:`we also extend our 4th finger towards data entry we have professional keyboard worriers 
            accurqacy is main goal keeper.our line up has preparedness to work under deadline
            for data processing programs to enter information into a database or documentation platform.
            we handle medical billing, medical annotation, medical summary, medical summary and  medical anotology `,
            imge:'https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593324__340.jpg'
        },{
            title:"Import and Export",
            stitle:"sub title",
            desc:`we accord other countries a sip of Indian species by exporting wide range of Turmeric, coffee, tea
            cardmom, pepper and cinnamom`,
            imge:'https://cdn.pixabay.com/photo/2018/09/16/21/38/delivery-3682472__340.jpg'
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
