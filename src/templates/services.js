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
import ProjectStat from "../components/shared/projectStat"
const ProjectDetails = ({ data }) => {
  // const { html } = data.markdownRemark
  const { title, bpo_services, featured_data,
    head_back_image, core_title,
    services_back_image,
  } = data.servicesJson


  return (
      <div className="">
        <Navbar2/>
        <Header title={title} imge={head_back_image.childImageSharp.fluid.src}  />
       <br/>
        <br className="hidden sm:block"/>
        <div className=" container mx-auto w-[90%] sm:w-[80%]" >
         <Feature data={featured_data} imge={featured_data.featured_img.childImageSharp.fluid} />
   
        </div>
        <br/>
        <br/>

      {  bpo_services?.length > 0 && <CoreServiceWrap style={{backgroundImage:`url(${services_back_image.childImageSharp.fluid.src})`}} className="bg-[100%] bg-cover bg-fixed">
    <br/>
    <br/>
    <h2 className='text-3xl relative text-white text-center  font-semibold tracking-[2px]'>{core_title}</h2>
    <br/>
       <CoreService data={bpo_services} title={title} />
       <br/>
       </CoreServiceWrap> }
     <br/> <br/>
     {/* <OtherServices/> */}
     <br/> <br/>
     <ProjectStat/>
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
    core_title
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
      slug
    }
    }
    
  }
`