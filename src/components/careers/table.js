import React from 'react'
import Interweave from 'interweave'
import { useState } from 'react'
export default function Table() {


    const [state, setState] = useState()

    const data= [

        {

            title:"Call Center Operations Manager Job Responsibilities",
           short:`Conduct staff performance reviews, assess needs, cost/benefit analysis, and other operational strategy assessments.`,
            desc:`Call Center Operations Manager Job Responsibilities <br/>
            • Conduct staff performance reviews, assess needs, cost/benefit analysis, and other operational strategy assessments. <br/>
            • Establish a high standard for productivity, quality, and customer service as well as define user guidelines. <br/>
            • Develop company systems for customer interaction and voice response and control the implementation process. <br/>
            • Manage and improve center performance through performance monitoring, problem resolution, system audits, and quality assurance measures. <br/>
            • Aid the human resources department in the recruitment process by interviewing potential hires and outlining clear job expectations. <br/>
            • Prepare annual budget after estimating necessities, correcting overspending, analyzing cost variance, and scheduling expenses. <br/>
            • Summarize, collect, and analyze call center trends and data for regular performance reports. <br/>
            • Oversee system maintenance and upgrade implementation. Call for repairs and troubleshooting as needed. <br/>
            • Maintain consistent professional improvement through company-provided workshops, tracking call center trends, and active participation in team projects.<br/> Call Centre Operations Manager Qualifications <br/>
            `
        },
        {

            title:"HR Manager",
            short:`Degree in Human Resources Management or related discipline`,

            desc:`REQUIREMENTS & QUALIFICATIONS Bachelor’s :<br/>
            • Degree in Human Resources Management or related discipline<br/>
            • 5+ years’ experience in BPO <br/>
            • HR recruitment Skills of accessing Job Portals , sorting of candidates . <br/>
            • Expertise in HR policies and procedures Strong knowledge of hiring processes <br/>
            • Understanding of HR best practices and current regulations <br/>
            • Sound judgment and problem-solving skills <br/>
            • Employee-focused attitude, with high level of professionalism and discretion <br/>
            • Familiarity with MS Office suite <br/>
            • Excellent communication skills <br/>
            
            
            `
        },
        
   {

            title:"Customer Care Executive",
            short:`Graduated high school, but a bachelor ' s degree in commerce or related fields is preferred.`,
            desc:`REQUIRMENTS:<br/>
            • Graduated high school, but a bachelor ' s degree in commerce or related fields is preferred. <br/>
            • Prior experience with customer service / telesales and call centers in relevant job roles with atleast 2 years experience . <br/>
            • Good knowledge of CRM practices and systems. <br/>
            • Customer oriented attitude with professionalism. <br/>
            • Strong multitasking, time management, and target achieving skills. <br/>
            • Excellent communication and listening skills with good command over the English language <br/>
            
            
            Responsibilities :<br/>
            • Handle many inbound and outbound calls to customers and clients. <br/>
            • Identify the needs of customers, resolve issues and provide solutions. <br/>
            • Upsell other products wherever possible. <br/>
            • Ensure you follow the customer service script provided by the company for uniformity.<br/> 
            • Also, be well read on company policies and the website for FAQs or policy related answers.<br/> Maintain good customer relations. Meet personal targets and work towards meeting team targets. 
            • Maintain records of the conversations with the customer and analyze the data. <br/>
            • Write and submit timely reports on performance, targets and customer queries. <br/>
            
            
      
            `
        },


    ]


  return (
    <div>
   <table>
  <tr>
    <th>Sl No</th>
    <th>Role</th>
    <th>Description</th>
  </tr>

  {


data.map((item, i)=>{

    return <tr>
        <td>{i+1}</td>
        <td>{item?.title}</td>

        <td
>
{
    <>
    <p>{item?.short}</p>

    {state == i ? <div dangerouslySetInnerHTML={{ __html: ` ${item.desc} ` }}   />: 
    <button className='px-3 py-1 rounded-full my-2 bg-white text-[black]' onClick={()=>setState(i)}>View More</button>
  
 }
</>
}
    </td>
        
        </tr>
})
  }


</table>
    </div>
  )
}
