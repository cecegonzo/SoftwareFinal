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
          <p className="text-center text-blue-700 text-lg mt-auto mb-4">Primary Care/Provider</p>
        </div>
        
        {/* Therapy*/}
        <div className="flex flex-col items-center justify-center bg-white border border-blue-500 rounded-lg w-full h-48">
          <p className="text-center text-blue-700 text-lg mt-auto mb-4">Therapy</p>
        </div>
        
        {/* Insurance*/}
        <div className="flex flex-col items-center justify-center bg-white border border-blue-500 rounded-lg w-full h-48">
          <p className="text-center text-blue-700 text-lg mt-auto mb-4">Insurance</p>
        </div>

        {/* Hormone Therapy*/}
        <div className="flex flex-col items-center justify-center bg-white border border-blue-500 rounded-lg w-full h-48">
          <p className="text-center text-blue-700 text-lg mt-auto mb-4">Hormone Therapy</p>
        </div>

        {/* Pharmacy*/}
        <div className="flex flex-col items-center justify-center bg-white border border-blue-500 rounded-lg w-full h-48">
          <p className="text-center text-blue-700 text-lg mt-auto mb-4">Pharmacy</p>
        </div>

        {/* Teen & Family*/}
        <div className="flex flex-col items-center justify-center bg-white border border-blue-500 rounded-lg w-full h-48">
          <p className="text-center text-blue-700 text-lg mt-auto mb-4">Teen & Family</p>
        </div>

      </div>
    </section>
  );
}

export default Service;
