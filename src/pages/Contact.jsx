
//import { ContainerWithChildren } from 'postcss/lib/container';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/Contact.module.css";

const Contact =() => {
  return(
    
    <div className='bg-white'>
      <Navbar />

<section className="contact">
      <form>

        <h1>Contact Form </h1>
        
        <div className="input-box">
          <label> Full Name </label>
          <input type="text" className="field" placeholder=' Enter your name' required ></input>
        </div>

        <div className="input-box">
          <label> Email Address </label>
          <input type="text" className="field" placeholder=' Enter your email' required ></input>
        </div>

        <div className="input-box">
          <label> Your Question? </label>
          <textarea name="" id="" classname="field message" placeholder=' Enter your question' required ></textarea>
        </div>

        <button type="submit"> Send Message </button>
        </form>
  </section>
        <Footer />
    </div>
  )
}

export default Contact;