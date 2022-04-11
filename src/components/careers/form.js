import React from 'react'
import styled from 'styled-components'
import { useForm, ValidationError } from '@formspree/react';

export default function CareerForm() {
  const [state, handleSubmit] = useForm("xpzbyqlq");
  
    if(state.succeeded){


      setTimeout(()=>{
        window.location.reload()


      }, 2000)
    }


  return (
    <ContactFormWrap>
        <h2 className='text-brandColor sm:text-left text-center '>Contact Us</h2>
        <hr className='w-[17%] sm:mx-0.5  mx-auto'/>
        <br/>
        {state.succeeded && <div className=' bg-green-700 text-white rounded p-3'>
           <p>Thank you for Contacting Us!</p>
        </div>}
        <form onSubmit={handleSubmit}>

      <br/>
      <input placeholder='full name' name="name" type='text'/>
      <br/>
      <br/>

      <select name="role" type='text'>

<option value="front-end developer">front-end developer</option>
<option value="fullstack developer">fullstack developer</option>
<option value="back-end developer">back-end developer</option>


      </select>
      <br/> 
      <br/>

       <input placeholder='email' name="email" type='email'/>
      <br/>
      <br/>

        <input placeholder='phone number' name="phone_number" type='tel'/>
      <br/>
      <br/>
  
      <button disabled={state.submitting} type="submit">Submit</button>
</form>
    </ContactFormWrap>
  )
}


const ContactFormWrap =  styled.div`

textarea, select, input {
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