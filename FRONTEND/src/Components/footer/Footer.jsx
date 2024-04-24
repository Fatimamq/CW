import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
   /* let location= useLocation();
    if (location.pathname="/login"){
        return null;
     } */
     const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };

    return(
        <>
        <footer >
   {/*  <div className=' footer absolute bottom-0 bg-[#007f18] h-[200px] w-full'>
        this is the footer
    </div>  */}

    <div className=" bg-gradient-to-r from-[#c7d63f] to-[#1ee00c] h-[300px]  text-white justify-around flex-col text-center pl-[3rem] pr-[3rem] pb-[3rem] pt-[1rem] w-full font-[Raleway]">
            <div className='pb-2 relative top-0 flex items-center'>
                    <img
                    className="logo h-[3rem] w-[3rem] "
                    src="cwlogo1.png"/> 
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
            <h2 className="text-2xl font-bold mb-1 underline">Quick Info</h2>
            <ul className='text-lg'>
                <a href="/#second-div">
              <li className="mb-1">Our Aims</li></a>
              <a href="/#our-vision">
              <li className="mb-1">Our Vision</li>
                </a>
            </ul>
          </div>

          <div className="md:w-[15%]">
            <h2 className="text-2xl font-bold mb-1 underline">About Us</h2>
            <ul className='text-lg'>
                <a href="/about#service-area">
              <li className="mb-1">Service areas</li></a>
              <a href="/about#core-values">
              <li className="mb-1">Core Values</li>
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