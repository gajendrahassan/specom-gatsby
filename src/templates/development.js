import React from 'react'
import Header from './serviceComponents/header'
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql } from 'gatsby'
import Feature from './serviceComponents/feature'
import Navbar2 from "../components/global/navbar2"
import Footer from "../components/global/footer"
import ProjectStat from '../components/shared/projectStat'

export default function Development({ data }) {
 
  const { title, head_back_image, featured_data
  } = data.supportJson 

   return (
    <div>
              <Navbar2/>

      <Header title={title} imge={head_back_image.childImageSharp.fluid.src}  />
  <br/>
        <br/>
        <br className=' hidden sm:block'/>
        <div className='mx-auto container w-[90%] sm:w-[80%]' >
        <Feature data={featured_data} imge={featured_data.featured_img.childImageSharp.fluid} />
        </div>
        
        <br/> <br/>
        <ProjectStat/>
       <Footer/>
    </div>
  )
}



export const query = graphql`
  query($slug: String!) {
    
    supportJson(slug: {eq:$slug}) {
    desc
    title
    slug
    featured_data {
      desc
      sub_title
      featured_img {
      childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
      }
    }
      sub_title
      title
    }
    head_back_image {
      childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
      }
    }

    }
  }
`