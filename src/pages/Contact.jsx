
//import { ContainerWithChildren } from 'postcss/lib/container';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/Contact.module.css";

const Contact =() => {
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_ha3pvts', 'template_ekpqcyo', e.target, 'o1seTcAYL1LzSjxtK')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

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

        <div className='input-box'>
          <textarea id='message' className='field' placeholder='Questions' required></textarea>
        </div>

        <button type="submit"> Submit </button>
        
        </form>
  </section>



        <Footer />
    </div>
  )
}

export default Contact;