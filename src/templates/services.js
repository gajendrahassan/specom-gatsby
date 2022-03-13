import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql } from 'gatsby'
import Header from "./serviceComponents/header"
import Feature from "./serviceComponents/feature"
import CoreService from "./serviceComponents/coreService"
import Navbar2 from "../components/global/navbar2"
import Footer from "../components/global/footer"

import OtherServices from "./serviceComponents/otherServices"
const ProjectDetails = ({ data }) => {
  // const { html } = data.markdownRemark
  const { title, bpo_services, featured_data,
    head_back_image,
    services_back_image,
  } = data.servicesJson


  return (
      <div className="">
        <Navbar2/>
        <Header title={title} imge={head_back_image.childImageSharp.fluid.src}  />
       <br/>
        <br/>
        <div className=" container mx-auto w-[80%]" >
         <Feature data={featured_data} imge={featured_data.featured_img.childImageSharp.fluid} />
   
        </div>
        <br/>
        <br/>

        <CoreServiceWrap style={{backgroundImage:`url(${services_back_image.childImageSharp.fluid.src})`}} className="bg-[100%] bg-cover bg-fixed">
    <br/>
    <br/>
    <h2 className='text-3xl relative text-white text-center  font-semibold tracking-[2px]'>Our Core Services</h2>
    <br/>
       <CoreService data={bpo_services} />
       <br/>
       </CoreServiceWrap>
     <br/> <br/>
     <OtherServices/>
     <br/> <br/>
       <Footer/>
      </div>
  )
}

const CoreServiceWrap = styled.div`
position: relative;
&::before {
 width:100%;
    height:100%;
    z-index:0;
    position:absolute;
    content:"";
    top:50%;
    left:50%; 
    transform:translate(-50%, -50%);
    background-color:rgba(0, 0, 0, 0.6);
}
`
 
export default ProjectDetails

export const query = graphql`
  query($slug: String!) {
    
    servicesJson(slug: {eq:$slug}) {
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
    title
    slug
    services_back_image {
      childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
      }
    }
    head_back_image {
      childImageSharp {
            fluid {
              src
            }
      }
    }
    bpo_services {
      desc
      sub_title
      title
    }
    }
    
  }
`