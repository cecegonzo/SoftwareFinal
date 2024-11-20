import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/Service.module.css"


const Services = () => {
  return (
    <div className='bg-white'>
      <Navbar />
    
      <h1 className='mt-20 text-center'>Type of Services </h1>
    
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
    <a href='https://www.phntx.org/services/transgender-care/'>
   <img src='./Primary car.jpg' alt='primary'/>
   </a>
    </h4>

<h5>
  <a href='https://transcare.ucsf.edu/guidelines/overview'>
<img src='./therapy.png' alt='therapy'/>
</a>
</h5>

<h6>
  <a href='https://www.bcbstx.com/'>
<img src='./insurance.png' alt='insurance'/>
</a>
</h6>

<h7>
  <a href='https://www.plannedparenthood.org/health-center/texas/dallas/75231/north-
dallas-shelburne-health-center-2521-91620/gender-affirming-care'>
  <img src='./hormone therapy.png' alt='hormone'/>
  
  </a>
</h7>

<h8>
  <a href='https://www.phntx.org/locations/prism-health-north-texas-pharmacy/'>
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
