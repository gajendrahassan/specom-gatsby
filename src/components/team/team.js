import React from 'react'
import Employe from './team2'
import nethra from '../../images/team/Nethravathi.jpg'
import sathish from '../../images/team/sathish_m.jpg'
import sharan from '../../images/team/sharon.jpg'
import hoysala from '../../images/team/hoysala.jpg'
import ashwini from '../../images/team/ashwini.jpg'

import rajesh from '../../images/team/rajesh_palani.jpg'
export default function Team() {

const data = [
    {
        name:'Mr Rajesh Palani M',
        desc:`He has been actively involved in business over the last 35 Years in the fields of BPO Services,
        Auto Gas Industries, Star Hotel Industry, Transportation, Commercial Industries, Import &
        Export Company and Farming Industries. He is also actively involved in the affairs of entire
        organization.`,
        designition:'M D',
        image:rajesh,
        reverse: false
    },

    {
        name:'Nethravthi R',
        desc:`Nethravthi is committed to providing our customer with the highest level of quality,
        service and cost savings. Our goal is to exceed our customers' expectations by ensuring that their
        requirements are determined, understood, met, and regular reviewed with the intent of enhancing
        overall customer satisfaction.`,
        designition:'Director',
        image:nethra,
        reverse: true

    },
    // {
    //     name:'Sathish Mehata',
    //     desc:`Synergizing personal and professional self-development that contributes as a significant value
    //     addition to the organizational change/maturity for creating growth opportunities in new and
    //     existing business`,
    //     designition:'O P Manager',
    //     image:sathish,
    //     reverse: false
    // },
    // {
    //     name:'Sharan',
    //     desc:`Synergizing personal and professional self-development that contributes as a significant value
    //     addition to the organizational change/maturity for creating growth opportunities in new and
    //     existing business`,
    //     designition:'M I S Manager',
    //     image:sharan,
    //     reverse: true
    // },
    {
        name:'Hoysala M R',
        desc:`Our focus is on predicting success on the job rather than describing broad traits like
        "extroversion". We have researched and developed scales that measure the specific skills and
        behaviors needed to be successful on the job.`,
        designition:'C E O',
        image:hoysala,
        reverse: false
    },
    // {
    //     name:'Ashwini P',
    //     desc:`my expertise in the areas of Management practices to play a definitive role in organizational
    //     growth.`,
    //     designition:'HR Manager',
    //     image:ashwini,
    //     reverse: true
    // },
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
<p className=' text-md text-brandColor tracking-wider font-light '>
We have been in this industry for a while now, learning and collecting years of experience. All
that, empowered by our passion and ambition, helps us to create or grow your brand and
products to their full potential.
</p>


 <Employe empolyee={data} />
    


    </div>
  )
}
