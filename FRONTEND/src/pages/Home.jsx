import React, {useState, useEffect, useRef} from 'react'
import HeroCarousel from '../Components/HeroCarousel';
import ThreeCards from '../Components/ThreeCards';
import { TfiEmail } from "react-icons/tfi";
import { TbTargetArrow } from "react-icons/tb";
import { BsRocketTakeoff } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import Aims from '../Components/Aim';
import Hero from '../Components/Hero';


export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [isSecondDivVisible, setIsSecondDivVisible] = useState(false);
    const [isThirdDivVisible, setIsThirdDivVisible] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerHeight = windowHeight * 0.25; // Adjust this value to control when the animation triggers

      setIsVisible(top > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const secondDivOffset = document.getElementById('second-div').offsetTop;
      const windowHeight = window.innerHeight;
      const triggerHeight = secondDivOffset - windowHeight * 0.7; // Adjust this value to control when the animation triggers

      setIsSecondDivVisible(top > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const thirdDivOffset = document.getElementById('third-div').offsetTop;
      const windowHeight = window.innerHeight;
      const triggerHeight = thirdDivOffset - windowHeight * 0.8; // Adjust this value to control when the animation triggers

      setIsThirdDivVisible(top > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return(
    <>
    <div className='main w-screen h-full  flex flex-col  '>
      <Hero></Hero>
       {/* <div className='flex h-[90%] w-screen'>
      
      <div className='hero bg-gradient-to-r h-screen w-screen  from-[#74cf3f] to-[#d1dfeb] text-white pt-20 pl-10'>
      <div className="  m-16 font-[Raleway]">
      <div>
        <h1 className="text-[80px] font-bold bg-clip-text">Welcome to CLEAR WASTE</h1>
        <p className="mt-2 text-[30px]">Manage waste smartly.</p>
      </div>
      </div>
   */} 
   {/* </div>
        </div> */}
      {/*<div className='blank flex w-[30%] items-center justify-center  font-[Raleway] '>
        <div className='text-center m-10 text-black '>
        <TypewriterText text="According to the World Bank, global waste generation is expected to rise to 3.4 billion tons by 2050, up from 2.01 billion tons in 2016. "/></div>
         </div>
       <div className="home-img  flex-1 bg-cover bg-center "> */}
    {/* <img src='homepage.jpg' alt="home-img" className="absolute inset-0 object-cover w-full h-full"/> */}
    {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.55)' }}></div>   */}
    {/* <div className='p-24 z-10 absolute'>
    <h1 className="maintext text-5xl text-yellow-500 font-bold font-serif">CLEAR WASTE</h1>
    <br/>
    <h2 className="subtext text-4xl text-green-600 font-serif font-bold">An initiative towards Swacch Bharat </h2>
    </div> */}
        {/* <HeroCarousel/> */}
       {/*  </div> */}
       
      <div className="container mx-auto  py-8 px-[2px] ">
      {/* <div className="box2  h-screen w-full flex justify-center py-16 px-16"> */}
            {/* <div
              className={`transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'} 
                w-[screen] h-[500px] flex items-center justify-center py-16 bg-gray-300 rounded-xl px-16 border-solid border-[5px] shadow-lg mb-[30px]`}>
              <img
                src="homepage.jpg"
                alt="Your Image"
                className=" w-[500px] h-auto mr-8  pl-16"/>

                <div className=" h-[200px] w-auto text-xl  italic ml-50 items-center bg-[#007f18] text-white rounded-lg p-5 border-solid border-[2px] shadow-lg">
                  <p className=''>Currently, the world generates over 2 billion metric tons of municipal solid waste annually.</p>
                  <p className=''>That is roughly equivalent to the combined weight of over 400 million adult African elephants!</p>
                </div>
            </div> */}
      {/* </div> */}
            <div
              className={`transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'}`}>
    <div className='text-center items-center justify-center m-10 text-[26px] font-[Raleway] '>
    <p>As the global population increases, so does the amount of waste generated. Added to this are various other factors like urbanization, economic growth and rising living standards, and industrialization. According to the World Bank, global waste generation is expected to rise to 3.4 billion tons by 2050, up from 2.01 billion tons in 2016. </p>
    <br />
    <p><span className='text-yellow-500'>Clear </span><span className='text-[#007f18]'>Waste</span>'s waste management solution is an initiative to manage the growing volumes of waste generated. By incorporating features like real-time tracking and Event specific waste pickups, we aim to promote a greener, more efficient urban landscape. </p>
    <br />
    <p>Smart decisions lead to smart cities, and a smart future. Together we can create a world where waste is managed intelligently, fostering sustainability and a healthier environment for all. </p>
    </div>
    </div>
    <div
              id='second-div'
              className={`transition-opacity duration-1000 ${
                isSecondDivVisible ? 'opacity-100' : 'opacity-0'
              } m-10`}> 
            
    <div className='h-[80%] width-full  font-[Raleway] mb-10' >
      <div className='pb-5'>
      <div className='flex justify-center'id='our-vision'>
      <h1 className='text-center text-[35px]'>Here's what we aim to accomplish</h1>
      <div className='text-center text-[#007f18] text-[40px]'><TbTargetArrow /></div>
      </div>
      <br />
      <div className='flex items-center justify-center '> 
      {/* <div className='  flex-row items-center p-4 border-[2px] border-gray-500 m-4'> */}
        {/* <div className='count bg-gray-200 text-[#007f18] w-[60px] h-[60px] justify-center flex items-center text-[35px] shadow-md border-[1px] rounded-xl mx-36 my-4'>1</div> */}
        {/* <div className='text-[#007f18] text-[60px] justify-center flex items-center'><PiNumberCircleOneBold /></div>
        <div className='one text-[26px]'>Cleaner streets,less overflowing bins and littering</div></div>
      <div className=' p-4 border-[2px] border-gray-500 m-4 justify-center flex-row items-center' > */}
        {/* <div className='count bg-gray-200 text-[#007f18] w-[60px] h-[60px] justify-center flex items-center text-[35px] shadow-md border-[1px] rounded-xl mx-36 my-4'>2</div> */}
        {/* <div className='text-[#007f18] text-[60px] justify-center flex items-center '><PiNumberCircleTwoBold /></div>
        <div className='one text-[26px]'>Create public awareness with regards to efficient waste disposal.</div></div>
      <div className='  p-4 border-[2px] border-gray-500 m-4'> */}
        {/* <div className='count bg-gray-200 text-[#007f18] w-[60px] h-[60px] justify-center flex items-center text-[35px] shadow-md border-[1px] rounded-xl mx-36 my-4'>3</div> */}
        {/* <div className=' text-[#007f18] text-[60px] justify-center flex items-center'><PiNumberCircleThreeBold /></div>
        <div className='one text-[26px]'>Reduction in overall environment pollution</div></div>
      </div> */}
      <Aims/>
      </div>
      </div>
      <div >
      <div className='flex justify-center mt-6 '>
        <h1 className='text-center text-[35px]'>and Our Vision</h1>
        
        <div className='text-center text-[#007f18] text-[40px]'><BsRocketTakeoff /></div>
        
        </div>
        <br />
        <div className='text-[26px] text-center flex justify-center pb-4 mb-2'>
          <div className='text-center text-[#007f18] text-[40px]'><GrTechnology/></div>
        <p>A waste-free world through technology and innovation</p>
        </div>
        </div>
    </div>
    </div>
    <div
              id='third-div'
              className={`transition-opacity duration-1000 ${
                isThirdDivVisible ? 'opacity-100' : 'opacity-0'
              } m-10`}> 
    <div className='pb-8 mb-2'>
    <div className="flex items-center justify-between ">
  <div className="border-t border-gray-300 flex-1"></div>
  <div className="mx-4 text-[35px] font-[Raleway]">At a glimpse</div>
  <div className="border-t border-gray-300 flex-1"></div>
</div>

        <ThreeCards/>
      </div>
      </div>
            {/* <div
              id='second-div'
              className={`transition-opacity duration-1000 ${
                isSecondDivVisible ? 'opacity-100' : 'opacity-0'
              } w-[screen] h-[500px] flex items-center justify-center py-16 bg-gray-200 rounded-xl px-16 border-solid border-[5px] shadow-lg my-[60px]`}> 
            </div> */}
      
      <div className='w-full h-[200px] bg-gray-200 flex items-center justify-evenly font-[Raleway]'>
  <div className='w-[40%] flex'>
    <div className='email text-[80px] pr-7 '><TfiEmail/></div>
    <p className="text-[30px]">Keep in touch with our regular updates</p>
  </div>
  <div className="flex items-center px-[10px] ">
    <input
      type="email"
      placeholder="Enter your email address"
      className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none w-[300px]"
    />
    <button className="bg-[#007f18] hover:bg-green-900 text-white py-2 px-4 rounded-r">
      Count me in!
    </button>
  </div>
    
      </div>
       </div>
    
{/* <div className='box   h-screen w-full flex justify-center py-16 px-16'>
      <div className="w-[40%]">
        <img src="homepage.jpg" alt="My Image" className="w-full h-auto mr-8" />
      </div>
      <div className="w-1/2 h-[60%] text-xl ml-12 flex items-center text-center ">
        <p className='relative'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a volutpat laoreet, ipsum nisi vulputate nunc, vel aliquet nunc nisi et velit.</p>
      </div>
    </div> */}
 {/* <div className='box2 h-screen w-full flex justify-center py-14 px-14'>
      <div className="w-1/2 h-[60%] text-xl mr-12 flex items-center text-center">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a volutpat laoreet, ipsum nisi vulputate nunc, vel aliquet nunc nisi et velit.</p>
      </div>
      <div className="w-[40%]">
        <img src="homepage.jpg" alt="My Image" className="w-full h-auto mr-8" />
      </div>
      
    </div> */}</div>
{/* </div>  */}

 
 </>  
    )
}