import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/Service.module.css"


const Services = () => {
  return (
    <div className='bg-white'>
      <Navbar />
    
      <h1 className='mt-20 text-center text-[#0957BE]'>Type of Services </h1>
    
    <div class='right'>
      <div>
    <h3> Primary Care/Provider </h3>
    <p> 
         This is where you can find all </p>
     <p> the Primary care/Provider near you, or </p>
     <p> online. 
    </p>
    </div>
    
    <div>
      <h3>Therapy</h3>
      <p>
        This is where you can find all the </p>
      <p> therapists and what services they </p>
      <p>  provide near you, or online. 
      </p>
    </div>
    
    <div>
      <h3> Insurance </h3>
      <p> This is where you can find all types of
      </p>
      <p> insurances that could help you cover</p>
      <p> your transgender care needs.</p>
    </div>
    
    <div>
      <h3> Hormone Therapy </h3>
      <p>This is where you can learn what</p>
      <p> hormone therapy is, and where you </p>
      <p> can access hormone therapy</p>
      <p> care legally under a doctor.</p>
    </div>
   
    <div>
      <h3> Pharmacy </h3>
      <p> This is where you can learn what </p>
      <p> pharmacy is best suited for your</p>
      <p> care. </p>
    </div>
    
    <div> 
      <h3> Teens & Family </h3>
      <p> This is where you can learn more </p>
      <p> about transgender care for your kids </p>
      <p> that does not involve hormone </p>
      <p> therapy. Transgender care is not just </p>
      <p> about transitioning medically. </p>
     
    </div>
    </div>

    <h4>
    <a href='https://www.zocdoc.com/procedure/transgender-care-3937?utm_source=google&utm_medium=cpc_generic&utm_campaign=10842927721&utm_term=_&utm_content=106242772785&gad_source=1&gclid=Cj0KCQiAi_G5BhDXARIsAN5SX7ogQm62OMDAwmJTCn4B0UbmTQThzqiJWANT-2tQMMizJs404GeuDf0aAlIjEALw_wcB'>
   <img src='./Primary car.jpg' alt='primary'/>
   </a>
    </h4>

<h5>
  <a href='https://secure.helloalma.com/providers-landing/?utm_source=google&utm_medium=paid&utm_campaign=Google+%7C+Category+%7C+Client-TX+%7C+Demographics+%7C+Search&utm_id=16392207285&gclid=Cj0KCQiAi_G5BhDXARIsAN5SX7rON9quMUCz9Ev-KEK4S0d8jTO8e-l-yUHBYWrcRMQ9ORMKwJXwvgAaAo2pEALw_wcB'>
<img src='./therapy.png' alt='therapy'/>
</a>
</h5>

<h6>
  <a href='https://transhealthproject.org/'>
<img src='./insurance.png' alt='insurance'/>
</a>
</h6>

<h7>
  <a href='https://www.folxhealth.com/ad-pages/transfeminine-google-estrogenkeywords?utm_source=google&utm_medium=paidsearch&utm_campaign={Estrogen_NB_TX}&gclid=Cj0KCQiAi_G5BhDXARIsAN5SX7odacDpuDYav1Uf_lk_TZNTdcVoUq7DjWPvgRtOriHtbsQSn2evSHUaArTtEALw_wcB'>
  <img src='./hormone therapy.png' alt='hormone'/>
  
  </a>
</h7>

<h8>
  <a href='https://queerdoc.com/pharmacy-options/'>
  <img src='./pharmacy.png' alt='pharmacy'/>
  </a>
</h8>

<h9>
  <a href='https://www.transyouthequality.org/for-parents'>
  <img src='./teens and family.jpg' alt='teens and family'/>
  </a>
</h9>

<div className='mt-80'></div>
<Footer />
</div>
  )
}

export default Services
