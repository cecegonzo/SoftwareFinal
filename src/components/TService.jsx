import React from 'react';

const Service = () => {
  return (
    <section className="bg-[#FFE7E7] w-screen p-8">
      <div className="text-2xl font-bold text-center mb-6 text-blue-700">
        Type of Services
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Primary Care/Provider*/}
        <div className="flex flex-col items-center justify-center bg-white border border-blue-500 rounded-lg w-full h-48">
          <a href='https://www.phntx.org/services/transgender-care/' className="text-center text-blue-700 text-lg mt-auto mb-4">Primary Care/Provider
          <img src='./Primary car.jpg' alt='primary' className='rounded-lg' /></a>
          
        </div>
        
        {/* Therapy*/}
        <div className="flex flex-col items-center justify-center bg-white border border-blue-500 rounded-lg w-full h-48">
          <a href='https://transcare.ucsf.edu/guidelines/overview' className="text-center text-blue-700 text-lg mt-auto mb-4">Therapy
          <img src='./therapy.png' alt='therapy' className='rounded-lg' /></a>
        </div>
        
        {/* Insurance*/}
        <div className="flex flex-col items-center justify-center bg-white border border-blue-500 rounded-lg w-full h-48">
          <a href='https://www.bcbstx.com/' className="text-center text-blue-700 text-lg mt-auto mb-4">Insurance
          <img src='./insurance.png' alt='insurance' className='rounded-lg'/>
          </a>
        </div>

        {/* Hormone Therapy*/}
        <div className="flex flex-col items-center justify-center bg-white border border-blue-500 rounded-lg w-full h-48">
          <a href='https://www.plannedparenthood.org/health-center/texas/dallas/75231/north-
dallas-shelburne-health-center-2521-91620/gender-affirming-care' className="text-center text-blue-700 text-lg mt-auto mb-4">Hormone Therapy
            <img src='./hormone therapy.png' alt='hormone' className='rounded-lg' />
            </a>
        </div>

        {/* Pharmacy*/}
        <div className="flex flex-col items-center justify-center bg-white border border-blue-500 rounded-lg w-full h-48">
          <a href='https://www.phntx.org/locations/prism-health-north-texas-pharmacy/' className="text-center text-blue-700 text-lg mt-auto mb-4">Pharmacy
          <img src='./pharmacy.png' alt='pharmacy' className='rounded-lg'/>
            </a>
        </div>

        {/* Teen & Family*/}
        <div className="flex flex-col items-center justify-center bg-white border border-blue-500 rounded-lg w-full h-48">
          <a href='https://www.transyouthequality.org/for-parents' className="text-center text-blue-700 text-lg mt-auto mb-4">Teen & Family
          <img src='./teens and family.jpg' alt='teens and family' className='rounded-lg'/>
          </a>
        </div>
</div>
        <div className=  "bg-white  p-8 mt-9 font-bold rounded-lg text-blue-700 text-[24px] text-center flex flex-col justify-center items-center"> 
        Map 
        <a href='/Map'>
        <img src='./texas.webp' alt='texas' className='mb-8 mt-5 rounded-lg '>
       
       </img> </a>
        </div>

    
    </section>
  );
}

export default Service;
