
import React,{useEffect, useState} from 'react';
import Statistics from './Statistics';
const Hero = () => {
    const [showFirstLine, setShowFirstLine] = useState(false);
    
  
    useEffect(() => {
      // After component mounts, set a timeout to display the first line
      const firstLineTimeout = setTimeout(() => {
        setShowFirstLine(true);
      }, 10); // Adjust the delay as needed
  
      
  
      // Clean up timeouts to avoid memory leaks
      return () => {
        clearTimeout(firstLineTimeout);
       
      };
    }, []);
  
    return (
      
        <div className='flex h-[90%] w-screen'>
          <div className='hero bg-gradient-to-r h-screen w-screen from-[#daf34f] to-[#1ee00c] text-white pt-20 pl-10'>
            <div className="m-10 font-[Raleway]">
              <div>
                {/* Apply animation class based on state */}
                <h1 className={`text-[70px] font-bold bg-clip-text ${showFirstLine ? 'animate-line' : ''}`}>Welcome to <span className='
                text-yellow-400'>CLEAR </span><span className='text-[#007f18]'>WASTE.</span></h1>
                {/* Apply animation class based on state */}
                <p className={`mt-2 text-[30px] ${showFirstLine ? 'animate-line' : ''}`}>Manage waste smartly.</p>
                <button className={`mt-[30px] text-[20px] h-[50px] w-[150px] border-[2px]  ${showFirstLine ? 'animate-line' : ''}`}>Get Started</button>
             
              <Statistics></Statistics>
            </div>
          </div>
        </div>
     </div>
    );
  };
  
export default Hero;
