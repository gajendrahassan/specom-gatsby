import React from 'react'
import Employe from './employe'
import nethra from '../../images/team/Nethravathi.jpg'
import sathish from '../../images/team/sathish_m.jpg'
import sharan from '../../images/team/sharon.jpg'
import hoysala from '../../images/team/hoysala.jpg'
import ashwini from '../../images/team/ashwini.jpg'

import rajesh from '../../images/team/rajesh_palani.jpg'
export default function Team() {

const data = [
    {
        name:'Rajesh Palani M',
        desc:'lorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum text lorem ipsum text',
        designition:'M D',
        image:rajesh,
        reverse: false
    },

    {
        name:'Nethravthi R',
        desc:'lorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum text lorem ipsum text',
        designition:'Director',
        image:nethra,
        reverse: true

    },
    {
        name:'Sathish Mehata',
        desc:'lorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum text lorem ipsum text',
        designition:'O P Manager',
        image:sathish,
        reverse: false
    },
    {
        name:'Sharan',
        desc:'lorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum text lorem ipsum text',
        designition:'M I S Manager',
        image:sharan,
        reverse: true
    },
    {
        name:'Hoysala M R',
        desc:'lorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum text lorem ipsum text',
        designition:'C E O',
        image:hoysala,
        reverse: false
    },
    {
        name:'Ashwini P',
        desc:'lorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum textlorem ipsum text lorem ipsum text',
        designition:'HR Manager',
        image:ashwini,
        reverse: true
    },
]

  return (
    <div className='container mx-auto w-[80%]'>
        <br/>
<h1 className='sm:text-6xl mb-3 text-3xl text-[#f7b437e3] tracking-wider font-semibold '>
Can we make it better?

</h1>
<p className=' text-md text-brandColor tracking-wider font-light '>
We're a creative team passionate about design, focused on building amazing products and brands while turning them into award-winning projects. We can build things from scratch or simply make them look better.
</p>
<br/>
<br/>
{
    data.map((item, i)=>{

        return <Employe key={i} pimg = {item.image} name={item.name}
        desc={item.desc} reverse={item.reverse} desgnition={item.designition}
        />
    })
}

    </div>
  )
}
