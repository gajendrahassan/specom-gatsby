import React from 'react'
import styled from 'styled-components'
export default function Header({title, imge}) {

  let firstword = title.split(" ")[0]

  let newtitle = title.replace(firstword, " ")

  return (
    <HeaderWrap style={{backgroundImage:`url(${imge})`}} className={`header  bg-cover  h-[300px]`}>
 
  <div className=' title container mx-auto flex items-center w-[80%] h-[100%]'>
<div>
<h2 className='sm:text-4xl text-3xl  font-semibold uppercase tracking-wider text-white'><span className='text-[#ff9900]'>{firstword}</span>{newtitle}</h2>
<hr className='h-[5px] mt-3 rounded-full w-[70%] bg-[#ffffff]'/>
</div>
  </div>
    
    </HeaderWrap>
  )
}

const HeaderWrap =  styled.div`
 position:relative;
 .title{

    position:relative;
 }
&::before {
 width:100%;
    height:100%;
    z-index:0;
    position:absolute;
    content:"";
    top:50%;
    left:50%; 
    transform:translate(-50%, -50%);
    background-color:rgba(0, 0, 0, 0.8);
}

`