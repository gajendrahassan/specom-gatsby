import React from 'react'

export default function OtherServices() {

    const data = [{

        title:"Title Other",
        image:"https://cdn.pixabay.com/photo/2021/12/02/12/17/happy-new-year-6840369__340.png",
        desc: ` Consectetur odio, ratione corrupti repudiandae dolorum ea voluptatem quis soluta et tenetur mollitia sit, hic eligendi ex libero repellendus minima! Est, optio.`
    }, 
    {

        title:"Title Other",
        image:"https://cdn.pixabay.com/photo/2021/12/02/12/17/happy-new-year-6840369__340.png",
        desc: ` Consectetur odio, ratione corrupti repudiandae dolorum ea voluptatem quis soluta et tenetur mollitia sit, hic eligendi ex libero repellendus minima! Est, optio.`
    }, 
    {

        title:"Title Other",
        image:"https://cdn.pixabay.com/photo/2021/12/02/12/17/happy-new-year-6840369__340.png",
        desc: ` Consectetur odio, ratione corrupti repudiandae dolorum ea voluptatem quis soluta et tenetur mollitia sit, hic eligendi ex libero repellendus minima! Est, optio.`
    }, 
    {

        title:"Title Other",
        image:"https://cdn.pixabay.com/photo/2021/12/02/12/17/happy-new-year-6840369__340.png",
        desc: ` Consectetur odio, ratione corrupti repudiandae dolorum ea voluptatem quis soluta et tenetur mollitia sit, hic eligendi ex libero repellendus minima! Est, optio.`
    }]

  return (
    <div className='grid grid-cols-4 gap-12 p-5 container mx-auto relative'>

        {
            data.map((item, i)=>{

                return <div key={i} className=" cursor-pointer rounded bg-[#3b3b3bb6]   shadow ">

                 <img className='bg-[gray] w-full' src={item.image} alt=""/>
 <div className='p-4'>
                <h2 className='text-2xl text-white  font-semibold tracking-[2px]'>{item.title}</h2>
                <p className='text-[#acacac] tracking-[1px]'>{item.desc}</p>
</div>

            </div>
            })
        }
    </div>
  )
}
