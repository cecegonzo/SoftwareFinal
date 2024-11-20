
//import { ContainerWithChildren } from 'postcss/lib/container';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/Contact.module.css";

const Contact =() => {
  return(
    <main>
    <div>
      <Navbar />

      <h1 className='mt-20 text-center'>Contact </h1>

    
<section className="contact mb-96">  

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

       
    </div>
    <Footer />
    </main>
  )
}

export default Contact;