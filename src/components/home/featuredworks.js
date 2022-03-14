import React, { useEffect, useRef, useState } from 'react'
import HorizontalScroll from '../shared/horizontalScroll'
import styled from 'styled-components'
import { Link } from 'gatsby';
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



 const SampleCard = styled.div`
 background: url('https://cdn.pixabay.com/photo/2021/01/23/18/40/child-5943323__340.jpg');
  position: relative;
  height: 500px;
  width: 700px;
  background-color: navy;
  margin-right: 35px;
  flex-shrink: 0;
  background-repeat:no-repeat;
  background-size:cover;
`;

const SampleCards = React.memo(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => <Link to='/project'> <SampleCard key={`sampleCard-${i}`} /></Link>)
);


  return <> 
  <div className={` ${scrollPosition > 4263 ? '' : 'sticky'}  top-[10%]`}>
      <h1 className={`text-white text-center font-bold text-4xl opacity-75 tracking-wider mb-4 `}>Our Projects</h1>
  <hr className='w-[7%] mx-auto'/>
   </div>
  <br/>
  <br/>
  <div ref={ref} className='flex w-screen  '>

 <HorizontalScroll>
          <SampleCards />
        </HorizontalScroll>
  </div>
  </>
}
