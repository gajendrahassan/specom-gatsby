import React, { useEffect, useRef, useState } from 'react'
import HorizontalScroll from '../shared/horizontalScroll'
import { Link, graphql, useStaticQuery } from 'gatsby';
import SampleCards from '../shared/projectCard';

export default function Featuredworks() {

  const ref = useRef()
  const [scrollPosition, setPosition] = useState()
  const [state, setState] = useState(false)

  useEffect(() => {
    function updatePosition() {
        setPosition(window.scrollY )
        setState(true)
    }
  
    window.addEventListener('scroll', updatePosition)
    updatePosition()
  
    return () => window.removeEventListener('scroll', updatePosition)
   }, [state])







const project  = useStaticQuery(graphql`
 query Projects {
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


  return <> 
  <div className={` ${scrollPosition > 4263 ? '' : 'sticky'}  top-[10%]`}>
      <h1 className={`text-white text-center font-bold text-4xl opacity-75 tracking-wider mb-4 `}>Our Projects</h1>
  <hr className='w-[7%] mx-auto'/>
   </div>
  <br/>
  <br/>
  <div ref={ref} className='flex w-screen  '>

 <HorizontalScroll>
 {projects.map((item, i)=>{

   return  <SampleCards key={i} slug={item.slug}
   title={item.title}
   imge={item.fornt_img.childImageSharp.fluid}  />
 })}
         
        </HorizontalScroll>
  </div>
  </>
}
