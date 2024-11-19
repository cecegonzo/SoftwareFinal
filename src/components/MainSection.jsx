import React from 'react';

const MainSection = () => {
  return (
    <section className="bg-white w-screen p-8 pt-[100px]"> {/* Added top padding */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex flex-col space-y-4 max-w-md">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-blue-700 leading-tight">
              Your one stop 
            </h1>
            <h1 className="text-3xl font-bold text-blue-700 leading-tight">
              transgender guide
            </h1>
          </div>
          
          <button 
            type="button" 
           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full px-6 py-2 text-center w-[150px]"
          >
            Learn More
          </button>
        </div>
        
        <div></div>
      <img src='unt flag.jpeg' alt='pride flag' className='rounded-lg'></img>
      </div>
    </section>
  );
}

export default MainSection;


