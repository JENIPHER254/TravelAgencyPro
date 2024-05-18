import React from "react";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
const About = () => {
  return (
    <>
      <div className="md:px-20 p-4 max-w-s mx-auto">
        <div className=" items-center text-center ">
            <h2 className="mt-8 mb-2 text-primary text-5xl font-bold">About Us...</h2>
            <p className="text-gray-500 text-xl mb-8 font-bold">Learn more about TAP (TravelAgencyPro)...</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src={img6} alt="" />
          </div>
          {/* about content */}
          <div className="md:w-1/2">
            <h1 className="text-5xl text-primary font-bold  mb-12">
              Welcome to <br/>TravelAgencyPro your <br/>ultimate <span className="text-pink">Tour Guide...</span>
            </h1>
            <p className="text-base text-tertiary my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, explicabo! Modi totam accusantium ducimus dignissimos, laudantium voluptatibus! Nulla vel vitae corporis. Animi error laboriosam voluptatem. Accusantium repudiandae laudantium similique expedita quasi blanditiis nihil ab quisquam, iusto delectus tenetur explicabo excepturi voluptates non commodi! Reiciendis ipsum quia culpa fuga labore mollitia!
            </p>
            <button className="py-4 px-8 my-10 bg-secondary rounded text-white font-bold  hover:bg-primary transition-all duration-300">
              Learn More About Us...
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
         
          {/* about content */}
          <div className="md:w-1/2  mt-12">
            <h1 className="text-5xl text-primary font-bold  mb-12">
              We have <br/>been offering services <br/><span className="text-pink">For Years...</span>
            </h1>
            <p className="text-base text-tertiary my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, explicabo! Modi totam accusantium ducimus dignissimos, laudantium voluptatibus! Nulla vel vitae corporis. Animi error laboriosam voluptatem. Accusantium repudiandae laudantium similique expedita quasi blanditiis nihil ab quisquam, iusto delectus tenetur explicabo excepturi voluptates non commodi! Reiciendis ipsum quia culpa fuga labore mollitia!
            </p>
            <button className="py-4 px-8 my-10 bg-secondary rounded text-white font-bold  hover:bg-primary transition-all duration-300">
              Learn More About Us...
            </button>
          </div>
          <div className="md:w-1/2">
            <img src={img7} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
