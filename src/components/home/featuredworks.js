import React from 'react';
import HorizontalScroll from '../shared/horizontalScroll'
import styled from 'styled-components'
import { Link } from 'gatsby';
export default function Featuredworks() {


 const SampleCard = styled.div`
 background: url('https://cdn.pixabay.com/photo/2021/01/23/18/40/child-5943323__340.jpg');
  position: relative;
  height: 300px;
  width: 500px;
  background-color: navy;
  margin-right: 75px;
  flex-shrink: 0;
`;

const SampleCards = React.memo(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => <Link to='/project'> <SampleCard key={`sampleCard-${i}`} /></Link>)
);


  return <div className='flex w-screen '>
 
 <HorizontalScroll>
          <SampleCards />
        </HorizontalScroll>
  </div>;
}
