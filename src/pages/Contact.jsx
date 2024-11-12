
//import { ContainerWithChildren } from 'postcss/lib/container';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/Contact.module.css";

const Contact =() => {
  return(
    
    <div>
      <Navbar />

      <h1 className='mt-20 text-center'>Contact </h1>

    
<section className="contact">  

      <form>

      
        <div className="input-box">
          <input type="text" className="field" placeholder='Email' required ></input>
        </div>

        <div className="input-box">
          <input type="text" className="field" placeholder='Name' required ></input>
        </div>

        <button type="submit"> Submit </button>
        
        </form>
  </section>

        <Footer />
    </div>
  )
}

export default Contact;