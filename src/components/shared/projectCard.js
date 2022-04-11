import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'
const SampleCard = styled.div`
position: relative;
height: 400px;
width: 600px;
background-color: navy;
margin-right: 35px;
flex-shrink: 0;
background-repeat:no-repeat;
background-size:cover;
position: relative;
h2{
  padding: 1rem;
  position: absolute;
  top: 50%;
  left:40%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color:white;
  opacity: 0;
  transition: ease-in-out 0.2s;
  font-weight: 500;
  font-size: 1.7rem;
  letter-spacing: 2px;
}

&:hover {

  h2{
    opacity: 1;
    left:50%;

  }
}

`;

const  SampleCards = React.memo(({imge, title, slug}) =>{

return <Link to={`/projects/${slug}`}> <SampleCard>
      <Img fluid={imge} className="h-full" />
<h2>{title}</h2>
</SampleCard>
</Link>

})

export default SampleCards
