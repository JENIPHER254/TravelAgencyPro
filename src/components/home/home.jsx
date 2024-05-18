import React from "react";
import img1 from "../../assets/img1.png";
const Home = () => {
  return (
    <>
      <div className="lg:px-12 max-w-screen-2xl mx-auto mt-28 text-black">
        <div className="gradientBg m-6 rounded md:px-9 rounded-br-[100px] ">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
             {/* banner image */}
             <div>
              <img src={img1} alt="" className="lg:has-[360px]:" />
            </div>
            <div className="md:w-3/5 my-20 mx-20">
              <h2 className="font-bold text-white md:text-6xl text-4xl mb-6 leading-relaxed">Explore the World, One Adventure at a Time</h2>
              <p className="text-white md:text-2xl text-xl mb-8">
                Discover unique destinations and unforgettable experiences with
                our tailored travel packages. Your adventure starts here!
              </p>
              <div className="">
                <button className="py-4 px-8 m-2 bg-secondary rounded text-white font-bold  hover:bg-primary transition-all duration-300">Get Started</button>
                <button className="py-4 px-8 m-2 bg-secondary rounded text-white font-bold  hover:bg-primary transition-all duration-300">Book Package</button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
