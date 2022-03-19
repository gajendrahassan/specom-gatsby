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

        return <Employe key={i} name={item.name}
        desc={item.desc} reverse={item.reverse} desgnition={item.designition}
        />
    })
}

    </div>
  )
}
