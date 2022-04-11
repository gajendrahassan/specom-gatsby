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
<p className='w-[80%] mx-auto text-[grey]'>
<b>What we do:</b>
<br/>

We believe in providing business agility and results, therefore we evaluate our performance by yours, and we think we can assist you in getting the most out of your technological investments. Specom provides a wide range of unique and diversified business solutions that will help your company break through all of the traditional IT obstacles and export solutions, allowing your company to survive in the long run.
</p>
<br/>
<div className='bg-[#0e0d0d] p-8 justify-center flex items-center'>
<ReadyToTalk/>
</div>
 <Footer/>
  </main>;
}
