import React, { useState, useEffect } from 'react';

const AnimatedStatistic = ({ number, duration, text}) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  /* const [animationStarted, setAnimationStarted] = useState(false); */

  useEffect(() => {
    const interval = setInterval(() => {
        /* if (animationStarted) { */
            
      setCurrentNumber(prevNumber => {
        const increment = number / (duration / 1000);
        const newNumber = prevNumber + increment;
        return newNumber >= number ? number : newNumber;
      });
   /*  } */
    }, 70);

    return () => clearInterval(interval);
  }, [number, duration, text , /* animationStarted */]);

  /* useEffect(() => {
    // Start animation after a short delay to avoid blinking effect
    const timeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);
    return () => clearTimeout(timeout);
}, []);
 */
  return (
    <div className="  text-center flex items-center ">
     <div className='text-5xl ml-[55px] font-bold font-mono'>{Math.round(currentNumber)}</div>
     {/* <div className=" mt-2 font-medium text-5xl">+</div> */}
     <div className="mt-2 ml-1 text-center font-bold text-3xl">{text}</div>
    </div>
  );

  
};

const Statistics = () => {
  return (
  <div className=" w-screen relative ">
    
      <div className='flex absolute right-40  text-center mt-[90px]'>
        <div className='' >
       <div className=''><AnimatedStatistic number={2400} duration={24000} text={'M+' }/></div>
        <div className="mt-2 text-2xl font-medium"> tons of solid waste</div>
        <div className="mt-1 text-lg">generated globally in 2020</div>
        </div>
        
        <div className='ml-10'>
        
        <AnimatedStatistic number={62} duration={24000} text={'M+' }/>
        <div className="mt-2 text-2xl font-medium">tons of solid waste</div>
        <div className="mt-1 text-lg">generated in India in 2020</div>
        </div>

        <div className='ml-10'>
        <AnimatedStatistic number={160} duration={24000} text={'K+'} />
        <div className="mt-2 text-2xl font-medium">metric tons generated </div>
        <div className="mt-1 text-lg">in India per day in 2021 </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
