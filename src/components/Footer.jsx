import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white w-screen p-8 bottom-0 ">
      <div className="text-center">
        <p className="text-4xl font-bold font-large">Guide through your journey</p>
        <p className="text-4xl font-bold font-large">with ease</p> 
        </div>

        <div className="flex justify-between gap-2 p-5">
        <div>
          
        <ul className="text-xl text-pink-200 font-bold font-large"> Care & Services
          
           <li><a href='https://www.phntx.org/services/transgender-care/' className='text-sm font-medium text-white'>Primary Care</a></li>
          <li><a href='https://transcare.ucsf.edu/guidelines/overview' className='text-sm font-medium text-white'>Therapy</a></li>
          <li><a href='https://www.bcbstx.com/' className='text-sm font-medium text-white'>Insurance</a></li>
          <li><a href='https://www.plannedparenthood.org/health-center/texas/dallas/75231/north-
dallas-shelburne-health-center-2521-91620/gender-affirming-care' className='text-sm font-medium text-white'>Hormone Therapy</a></li>
           <li><a href='https://www.phntx.org/locations/prism-health-north-texas-pharmacy/' className='text-sm font-medium text-white'>Pharmacy</a></li>
          <li><a href='https://www.transyouthequality.org/for-parents' className='text-sm font-medium text-white'>Teen & Family</a></li>
          

        </ul>
        
</div>

<div>
  
<ul className='text-xl text-pink-200 font-bold font-large'> Resources

        <li><a className='text-sm font-medium text-white'> Support Groups </a></li>
        <li><a className='text-sm font-medium text-white'> HRT Care Fund</a></li>
        <li><a className='text-sm font-medium text-white'> Surgery Fund</a></li>
</ul>

</div>

<div>

<ul className='text-xl text-pink-200 font-bold font-large'> Hotlines 
  <li><a className='text-sm font-medium text-white'>Phone number: </a></li>
  <li><a className='text-sm font-medium text-white'> (877) 565-8860 </a></li>
  <li><a className='text-lg font-large text-pink-200'>National Suicide </a></li>
  <li><a className='text-lg font-large text-pink-200'>Prevention Lifeline</a></li>
  <li><a className='text-sm font-medium text-white'> (800) 273- 8255</a></li>
  <li><a className='text-lg font-large text-pink-200'> Texas Counselor </a></li>
  <li><a className='text-sm font-medium text-white'> (866) 488-7386 </a></li>
  <li><a className='text-lg font-large text-pink-200'>TrevorText </a></li>
  <li><a className='text-sm font-medium text-white'> Text START to </a></li>
  <li><a className='text-sm font-medium text-white'> 678-678 </a></li>
  </ul>
</div>
</div>
      
    </footer>
  );
}

export default Footer;