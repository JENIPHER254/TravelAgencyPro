import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import PricingCard from "./pricingCard";

const Pricing = () => {
  const [isMonthlyPrice, setIsMonthlyPrice] = useState(true);

  const ChangeToggle = () => {
    setIsMonthlyPrice(!isMonthlyPrice);
  };
  return (
    <div>
      <div className=" items-center text-center my-12">
        <h2 className="mt-8 mb-2 text-primary text-5xl font-bold">
          Here are all our plans
        </h2>
        <p className="text-gray-500 text-xl mb-8 text-center ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit adipisicing
          elit.
          <br /> Amet, temporibus!
        </p>
      </div>

      {/* toggle pricing */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <h5
          className={`text-4xl font-bold p-8  ${
            isMonthlyPrice ? "text-gray-500" : "text-gray-800"
          }`}
        >
          Monthly
        </h5>
        <div className="text-5xl" onClick={ChangeToggle}>
          {isMonthlyPrice ? (
            <FaToggleOn className="text-pink" />
          ) : (
            <FaToggleOff className="text-pink" />
          )}
        </div>
        <h5
          className={`text-4xl font-bold p-8  ${
            isMonthlyPrice ? "text-gray-800" : "text-gray-500"
          }`}
        >
          Yearly
        </h5>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-8  gap-2">
        <PricingCard/>
        <PricingCard/>
        <PricingCard/>
      </div>
    </div>
  );
};
export default Pricing;
