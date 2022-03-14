import React from 'react';
import Footer from '../global/footer';
import Navbar from '../global/navbar2';
import ReadyToTalk from '../shared/readyToTalk';
import About from './about';
import Vm from './vm';

export default function index() {
  return <main>

<Navbar/>
<div className='w-full bg-cover bg-[#615f5f] h-[200px] bg-[url(https://cdn.pixabay.com/photo/2016/05/17/15/54/banner-1398363__340.jpg)]'>

</div>
<br/>
<br/>
<About/>
<Vm/>
<br/>
<div className='bg-[#0e0d0d] p-8 justify-center flex items-center'>
<ReadyToTalk/>
</div>
 <Footer/>
  </main>;
}
