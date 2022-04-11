import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, graphql, useStaticQuery } from 'gatsby';

import SampleCards from '../shared/projectCard';
export default function Mfeaturework() {
 
    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

      const project  = useStaticQuery(graphql`
      query Projectsm {
        allProjectJson {
           nodes {
           slug
           title
           fornt_img {
             childImageSharp {
                   fluid {
                     ...GatsbyImageSharpFluid
                   }
             }
           }
           
         }
          }
      }
      `)
     
      const projects = project?.allProjectJson?.nodes
     

    return (
      <div className='w-[90%]'>
        <Slider {...settings}>
        {
projects.map((item, i)=>{

    return <SampleCards key={i} slug={item.slug}
    title={item.title}
    imge={item.fornt_img.childImageSharp.fluid}  />
})
        }
    </Slider>
    </div>
      )
}
