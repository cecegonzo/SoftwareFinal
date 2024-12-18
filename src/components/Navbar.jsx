import React from 'react'

const Navbar = () => {
  return (
    

<nav className="bg-[#FFE7E7] w-screen h-[69px] fixed top-0">
  <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
   <a href='/Home'>
   <img src='./Star 1.png' alt='star' className='flex items-center self-center'/>
    </a>
  

    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium text-[20px]  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>
        <a href="/Home" class="block py-2 px-3 text-white bg-[#1D7AF2] rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Home</a>
      </li>
      <li>
        <a href="/Map" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 hover:text-[#1D7AF2]">Map</a>
      </li>
      <li>
        <a href="/Services" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 hover:text-[#1D7AF2]">Services</a>
      </li>
      <li>
      <a href="/Contact" class="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 hover:text-[#1D7AF2]">Contact</a>
      </li>
    </ul>
  </div>
  </div>
  
</nav>

  )
}

export default Navbar
