import React from 'react'
import Employe from './employe'

export default function Team() {

const data = [
    {
        name:'tokiyo tim',
        desc:'lorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum text lorem ipsum text',
        designition:'web developer',
        image:'',
        reverse: false
    },

    {
        name:'tokiyo tim',
        desc:'lorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum text lorem ipsum text',
        designition:'web developer',
        image:'',
        reverse: true

    }
]

  return (
    <div className='container mx-auto w-[80%]'>
        <br/>
<h1 className='text-6xl  text-brandColor tracking-wider font-light '>From Tokiyo to saigon <br/>
We Come from All <br/> over the World
</h1>
<br/>
<br/>
{
    data.map((item, i)=>{

        return <Employe key={i} name={item.name}
        desc={item.desc} reverse={item.reverse} desgnition={item.designition}
        />
    })
}

    </div>
  )
}
