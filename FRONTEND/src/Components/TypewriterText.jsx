import React, { useEffect, useRef, useState } from 'react';

const TypewriterText = ({ text }) => {
  const textRef = useRef(null);
 
  useEffect(() => {
    
    const textElement = textRef.current;
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        textElement.textContent += text[index];
        index++;
      } else {
        clearInterval(intervalId);
        
      }
      
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
   
  }, [text]);

  return <span ref={textRef} className="text-[30px] font-medium font-[Raleway]"></span>;
};

export default TypewriterText;