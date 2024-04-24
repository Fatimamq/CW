import React from 'react'

const About = () => {
  return (
    <div className='aboutmain pt-16 w-screen h-full  flex flex-col '>
      <div className='flex-col'>
      <div className='font-[Raleway] mt-8 mx-20' >
      <h1 className='text-[70px] font-bold text-gray-800'>About
      <span className='text-yellow-400'> C</span><span className='text-[#007f18]'>W</span></h1>
      
      </div>
      <hr className='border top-20 border-[#007f18] w-[90%] mx-auto justify-center' />
      </div>
      <div className="container mx-auto  py-6 px-[2px] ">
      <div className='text-center items-center  m-4  text-[26px] font-[Raleway] '>
        <p id='service-area' >Established in 2024, CW was created to change the way waste is handled. Our goal is to make the practice of efficent waste disposal, the norm. With the help of technology we hope to optimize every aspect of waste management, while also ensuring user satisfaction. </p>
        <br />
        <p >Currently our services are offered in Kashmir, where we are based. But we will soon be expanding it to major cities in India.</p></div>
       
        <div id='core-values'>
          <div className='font-[Raleway] mx-[25px]' >
        <h1 className='text-[50px] font-bold text-gray-800 '>Our Core Values</h1>
        </div>
        <hr className='border top-20 border-[#007f18]  mx-auto justify-center' />
        <div className='font-[Raleway] m-6'>
        <div className='m-3'>
         <h1 className='text-[40px]'>Sustainabilty</h1> 
         <div className='text-[25px]'>We are committed to implementing sustainable practices that minimize environmental impact and contribute to a cleaner, greener future.</div>
         </div>
         <div className='m-3'>
         <h1 className='text-[40px]'>Innovation</h1>
         <div className='text-[25px]'>We continuously seek innovative solutions and technologies to improve waste management processes and deliver exceptional service to our clients.</div>
         </div>
         <div className='m-3'>
         <h1 className='text-[40px]'>Integrity</h1>
         <div className='text-[25px]'>We conduct our business with honesty, transparency, and ethical responsibility, ensuring the trust and confidence of our customers and partners.</div>
         </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
