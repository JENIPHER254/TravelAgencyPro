import React from "react";
const PricingCard = () => {
  return (
    <>
     <div className="bg-white m-12 rounded-[35px]  shadow-2xl  flex justify-center hover:translate-y-10 transition-all duration-300 cursor-pointer p-8">
     <div>
        <h5 className="font-semibold text-2xl text-primary text-center  p-5">
          Start
        </h5>
        <p className="text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolor.
        </p>
        <h5 className="font-semibold text-2xl text-secondary text-center  p-5">
          $19<span className="text-xl text-gray-500">/month</span>
        </h5>
        <div className="items-center justify-center flex">
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Lorem ipsum dolor sit amet. </li>
            <li>consectetur adipisicing elit. </li>
            <li>Lorem ipsum dolor sit amet. </li>
            <li> Quod accusantium natus numquam. </li>
            <li>Lorem ipsum dolor sit amet. </li>
          </ul>
        </div>
        <div className="items-center justify-center flex">
          <button className="py-4 px-8 my-10 bg-secondary rounded text-white font-bold  hover:bg-primary transition-all duration-300">
            Book Now
          </button>
        </div>
        
      </div>
     </div>
     
    </>
  );
};
export default PricingCard;
