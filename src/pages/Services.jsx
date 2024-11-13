import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/Service.module.css"
const Services = () => {
  return (
    <div className='bg-white'>
      <Navbar />
    
    <div>
    <h1> Primary Care/Provider </h1>
    <p> 
         This is where you can find all </p>
     <p> the Primary care/Provider near you, or </p>
     <p> online. 
    </p>
    </div>
    
    <div>
      <h1>Therapy</h1>
      <p>
        This is where you can find all the </p>
      <p> therapists and what services they </p>
      <p>  provide near you, or online. 
      </p>
    </div>
    
    <div>
      <h1> Insurance </h1>
      <p> This is where you can find all types of
      </p>
      <p> insurances that could help you cover</p>
      <p> your transgender care needs.</p>
    </div>
    
    <div>
      <h1> Hormone Therapy </h1>
      <p>This is where you can learn what</p>
      <p> hormone therapy is, and where you </p>
      <p> can access hormone therapy</p>
      <p> care legally under a doctor.</p>
    </div>
   
    <div>
      <h1> Pharmacy </h1>
      <p> This is where you can learn what </p>
      <p> pharmacy is best suited for your</p>
      <p> care. </p>
    </div>
    
    <div> 
      <h1> Teens & Family </h1>
      <p> This is where you can learn more </p>
      <p> about transgender care for your kids </p>
      <p> that does not involve hormone </p>
      <p> therapy. Transgender care is not just </p>
      <p> about transitioning medically. </p>
    </div>
  

<Footer />
</div>
  )
}

export default Services
