
//import { ContainerWithChildren } from 'postcss/lib/container';
import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/Contact.module.css";
import emailjs from 'emailjs-com';

const Contact =() => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const serviceId = 'service_ha3pvts';
    const templateId = 'template_ekpqcyo';
    const publicKey = 'o1seTcAYL1LzSjxtK';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'StarTeam',
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('Email sent successfully!', response);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Error sending email: ', error);
    });
  }

  return(
    
    <div>
      <Navbar />  

      <h1 className='mt-20 text-center'>Contact </h1>

    
<section className="contact">  

      <form className="contact-form" onSubmit={handleSubmit}>

      
        <div className="input-box">
          <input type="text" className="field" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required ></input>
        </div>

        <div className="input-box">
          <input type="text" className="field" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}required ></input>
        </div>

        <div className='input-box'>
          <textarea id='message' className='field' placeholder='Questions' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>

        <button type="submit" value="Send">Submit </button>
        
        </form>
  </section>



        <Footer />
    </div>
  )
}

export default Contact;