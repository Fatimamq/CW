import React, { useState, useEffect } from 'react';

/* const HeroSection = () => {
  const [text, setText] = useState('Welcome to Clean Waste');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => {
        if (prevText === 'Welcome to Clean Waste') {
          return 'Manage waste in a smart manner';
        } else {
          return 'Welcome to Clean Waste';
        }
      });

      // Add a delay before applying the fade-out class
      setTimeout(() => {
        const heroTextElement = document.querySelector('.hero-text');
        heroTextElement.classList.add('fade-out');

        // Remove the fade-out class after the animation is complete
        setTimeout(() => {
          heroTextElement.classList.remove('fade-out');
        }, 1000);
      }, 1000);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="bg-green-500 h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 hero-text">{text}</h1>
      </div>
    </section>
  );
};

export default HeroSection; */
/* const HeroSection = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showManage, setShowManage] = useState(false);

  useEffect(() => {
    // Set a timeout to show the first line after a delay
    const welcomeTimeout = setTimeout(() => {
      setShowWelcome(true);
    }, 1000); // Adjust the delay as needed

    // Set a timeout to show the second line after the first line is fully shown
    const manageTimeout = setTimeout(() => {
      setShowManage(true);
    }, 2500); // Adjust the delay as needed

    // Clear timeouts on component unmount
    return () => {
      clearTimeout(welcomeTimeout);
      clearTimeout(manageTimeout);
    };
  }, []);

  const animateText = (text) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        style={{ animationDelay: `${index * 50}ms` }}
        className="inline-block animate__animated animate__fadeInLeft"
      >
        {char}
      </span>
    ));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-blue-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl">
          {showWelcome && animateText('Welcome to Clear Waste')}
        </h1>
        <h2 className="text-2xl mt-4">
          {showManage && animateText('Manage waste smartly')}
        </h2>
      </div>
    </div>
  );
};

export default HeroSection; */


const HeroSection = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showManage, setShowManage] = useState(false);

  useEffect(() => {
    // Set a timeout to show the first line after a delay
    const welcomeTimeout = setTimeout(() => {
      setShowWelcome(true);
    }, 3000); // Adjust the delay as needed

    // Set a timeout to show the second line after the first line is fully shown
    const manageTimeout = setTimeout(() => {
      setShowManage(true);
    }, 4000); // Adjust the delay as needed

    // Clear timeouts on component unmount
    return () => {
      clearTimeout(welcomeTimeout);
      clearTimeout(manageTimeout);
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-blue-500 text-white">
      <div className="text-center">
        <h1 className="text-4xl">
          {showWelcome && (
            <span className="animate-text">
              Welcome to Clear Waste
            </span>
          )}
        </h1>
        <h2 className="text-2xl mt-4">
          {showManage && (
            <span className="animate-text">
              Manage waste smartly
            </span>
          )}
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;


