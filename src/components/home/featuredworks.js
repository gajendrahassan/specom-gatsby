import React from 'react';
import HorizontalScroll from '../shared/horizontalScroll'
import styled from 'styled-components'
export default function Featuredworks() {


 const SampleCard = styled.div`
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
    .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
);


  return <div className='flex w-screen '>
 
 <HorizontalScroll>
          <SampleCards />
        </HorizontalScroll>
  </div>;
}
