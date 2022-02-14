import React from 'react'
import styled from 'styled-components'

export default function ContactForm() {

    const handleClick = (values) =>{

        console.log(values);
    }



  return (
    <ContactFormWrap>
        <h2 className='text-brandColor '>Contact Us</h2>
        <hr className='w-[17%]'/>
      
      <br/>
      <input name="name" type='text'/>
      <br/>
      <br/>

      <input name="company_name" type='text'/>
      <br/> 
      <br/>

       <input name="email" type='email'/>
      <br/>
      <br/>

        <input name="phone_number" type='tel'/>
      <br/>
      <br/>
  
      <textarea name="project_details" rows={3} type='text'/>
      <br/>
<br/>
      <button onClick={handleClick}>Submit</button>

    </ContactFormWrap>
  )
}


const ContactFormWrap =  styled.div`

textarea, input {
    width: 100%;
    border: 1px solid grey;
    opacity:0.5;
    border-radius:6px;
    background-color:#111314;
    padding:0.2rem;
    color:white;
}

button{

    padding: 0.5rem 7rem;
    color: block;
    background: white;
    border: 1px solid white;
  
    border-radius:1rem;
    font-weight:600;

}

`