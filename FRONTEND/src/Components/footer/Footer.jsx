import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
    let location= useLocation();
    if (location.pathname="/login"){
        return null;
    }

    return(
        <>
        <footer >
   {/*  <div className=' footer absolute bottom-0 bg-[#007f18] h-[200px] w-full'>
        this is the footer
    </div>  */}

    <div className="bg-[#007f18] h-[300px] text-white justify-around flex-col text-center pl-[3rem] pr-[3rem] pb-[3rem] pt-[1rem] w-full rounded-3xl ">
            <div className='pb-2 relative top-0 flex items-center'>
                    <img
                    className="logo h-[3rem] w-[3rem] "
                    src="cwlogo.jpg"/>
                </div> 
      <div className="container mx-auto border-t border-white   px-8 py-8">
        <div className="flex flex-col md:flex-row justify-center align-middle">
          <div className="md:w-[15%]"> 
            <h2 className="text-2xl font-bold mb-1 underline">Services</h2>
            <ul className='text-lg'>
                <a href="/services">
              <li className="mb-1">Waste Disposal</li>
              <li className="mb-1">Recycling</li>
                </a>
            </ul>
          </div>

          <div className="md:w-[15%]">
            <h2 className="text-2xl font-bold mb-1 underline">Support</h2>
            <ul className='text-lg'>
                <a href="/support">
              <li className="mb-1">FAQ </li>
              <li className="mb-1">Contact Us</li>
              </a>
            </ul>
          </div>

          <div className="md:w-[15%]">
            <h2 className="text-2xl font-bold mb-1 underline">About Us</h2>
            <ul className='text-lg'>
                <a href="/about">
              <li className="mb-1">Our Mission</li>
              <li className="mb-1">Our Team</li>
                </a>
            </ul>
          </div>

          <div className="md:w-[15%]">
            <h2 className="text-2xl font-bold mb-1 underline">Quick Info</h2>
            <ul className='text-lg'>
                <a href="/about">
              <li className="mb-1">Service areas</li>
              <li className="mb-1">Waste basics</li>
                </a>
            </ul>
            </div>
          </div>
          
        
      </div>
    </div>
    </footer>
    </>
    );
};
 export default Footer