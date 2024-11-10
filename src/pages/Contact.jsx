
import { ContainerWithChildren } from 'postcss/lib/container';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Contact =() => {
  return(
    
    <div className='bg-white'>
      <Navbar />
        <h1>Contact Form </h1>
        <div className="input-box">
          <label> Full Name</label>
          <input type="text" className="field" placeholder='Enter your name' required ></input>
        </div>


        <Footer />
    </div>
  )
}

export default Contact;