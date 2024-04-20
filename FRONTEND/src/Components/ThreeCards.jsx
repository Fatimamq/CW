import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({img, title, content, button, to}) => {
  return (
    <div className="max-w-sm rounded-[13%] overflow-hidden shadow-xl m-4 text-white bg-gradient-to-r  from-[#26852e] to-[#67cf06] font-[Raleway]">
      <div className="px-6 py-4">
        <img className='h-[240px] w-full my-2 rounded-[10%]'src={img} alt={title}/>
        <div className="font-bold text-xl my-2 ">{title}</div>
        <p className="text-white text-base mb-2">{content}</p>
        <Link to={to} className='bg-white hover:bg-[#d1d3d0] block text-center text-[#007f18] font-[600] shadow-md rounded-lg w-[100px] h-[35px] pt-[6px]'>{button}</Link>
      </div>
    </div>
  );
};

const ThreeCards = () => {
  return (
    <div className="flex justify-center">
      <Card
        img="card1img.jpg"
        title="CW Services"
        content="Streamlining the waste collection process to ensure timely and efficient pickup of waste materials."
        button="Know More"
        to="/services"
      />
      <Card
        img="card2img.jpg"
        title="About us"
        content="Find out  who we are, where we are based, and the locations where our services are available. "
        button="Know More"
        to="/about"
      />
      <Card
        img="card3img.jpg"
        title="What Next?"
        content="CW aims to contribute to the nature by incorporating technology to our collection processes. "
        button="Know More"
        to="/about"
      />
    </div>
  );
};

export default ThreeCards;
