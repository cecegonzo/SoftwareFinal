import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/Service.module.css"
const Services = () => {
  return (
    <div className='bg-white'>
      <Navbar />
    
    <h2> Type of Services </h2>
    <div className='Services'>
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
  

<Footer />
</div>
  )
}

export default Services
