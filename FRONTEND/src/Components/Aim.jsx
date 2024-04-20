import React from 'react';
import { PiNumberCircleOneBold } from "react-icons/pi";
import { PiNumberCircleTwoBold } from "react-icons/pi";
import { PiNumberCircleThreeBold } from "react-icons/pi";

const Aim = ({title, content}) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl m-4 bg-[#ecedee] font-[Raleway]">
      <div className="px-6 py-4">
        <div className="font-bold  my-2 text-[40px] text-[#007f18]">{title}</div>
        <p className="text-black text-[20px] mb-2">{content}</p>
        
      </div>
    </div>
  );
};

const Aims = () => {
  return (
    <div className="flex justify-center">
    
      <Aim
        title={<PiNumberCircleOneBold/>}
        content="Cleaner streets,less overflowing bins and littering."
      />

      <Aim
        title={<PiNumberCircleTwoBold/>}
        content="Create public awareness with regards to efficient waste disposal."
      />

      <Aim
        title={<PiNumberCircleThreeBold/>}
        content="Reduction in overall environment pollution"
      />
    </div>
  );
};

export default Aims;