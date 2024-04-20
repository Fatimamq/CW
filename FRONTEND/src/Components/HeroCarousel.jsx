import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel, Arrow } from 'react-responsive-carousel';



const images = [

  'bin1.jpg',
  'bin2.jpg',
  'bin3.jpg',
  'bin4.jpg'
];

/* const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
  
    const handlePrevClick = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? images.length - 1 : prevSlide - 1
      );
      carouselRef.current.prev();
    }; 
  
    const handleNextClick = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
      carouselRef.current.next();

    };
    const carouselRef = React.useRef(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        handleNextClick();
      }, 5000); // Change the interval time to your preference
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
  return (
    <Carousel 
    ref={carouselRef}
    showThumbs={false} 
    showStatus={false} 
    selectedItem={currentSlide}
    onChange={(_, slide) => setCurrentSlide(slide)}
    infiniteLoop={false}
    interval={5000}
    emulateTouch
    onSlideChanged={(slide) => {
      if (slide === images.length - 1) {
        setTimeout(() => {
          carouselRef.current.goToSlide(0);
        }, 5000);
      }
    }}
  >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image-${index + 1}`}
          className='h-[470px] object-cover rounded-xl' />
        </div>
      ))} 
       
    </Carousel> */
    const HeroCarousel = () => {
      return (
        <Carousel
          autoPlay
          interval={5000} // Adjust the interval time to your preference
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Image-${index + 1}`}
                className='h-screen w-[80%] object-cover'
              />
            </div>
          ))}
        </Carousel>
  );
}; 


export default HeroCarousel;