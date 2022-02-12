import React from 'react';
import Footer from '../global/footer';
import Navbar from '../global/navbar';
import ReadyToTalk from '../shared/readyToTalk';
import About from './about';

export default function index() {
  return <main>

<Navbar/>
<div className='w-full bg-[#615f5f] h-[300px]'>

</div>
<br/>
<br/>
<About/>
<div className='bg-[#0e0d0d] p-8 justify-center flex items-center'>
<ReadyToTalk/>
</div>
 <Footer/>
  </main>;
}
