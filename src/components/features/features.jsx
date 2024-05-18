import React from "react";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
const Features = () => {
  return (
    <>
      <div className="my-24 md:px-20 px-4 max-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* features description */}
          <div className="lg:w-1/4">
            <h1 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
              We are better than others
            </h1>
            <p className="text-base text-tertiary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              sunt incidunt iure optio vitae nisi sequi laudantium obcaecati
              ipsa accusantium, possimus eaque? Culpa soluta natus quo unde
              debitis sequi sunt.
            </p>
            <button className="py-4 px-8 my-5 bg-secondary rounded text-white font-bold  hover:bg-primary transition-all duration-300">See More...</button>
          </div>
          {/* card features */}
          <div className="w-full lg:w-3/4">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
              <div className="bg-grey-300 rounded-[35px] h-96 shadow-2xl items-center flex justify-center hover:translate-y-10 transition-all duration-300 cursor-pointer">
                <div>
                  <img src={img2} alt="" className="w-52" />
                  <h5 className="font-semibold text-2xl text-primary text-center  px-5">
                    Convenient Traveling Time...
                  </h5>
                </div>
              </div>
              <div className="bg-grey-300 rounded-[35px] h-96 shadow-2xl items-center flex justify-center hover:translate-y-10 transition-all duration-300 cursor-pointer md:mt-20">
                <div>
                  <img src={img3} alt="" className="w-52" />
                  <h5 className="font-semibold text-2xl text-primary text-center  px-5">
                    Convenient Traveling Time...
                  </h5>
                </div>
              </div>
              <div className="bg-grey-300 cursor-pointer rounded-[35px] h-96 shadow-2xl items-center flex justify-center hover:translate-y-10 transition-all duration-300">
                <div>
                  <img src={img4} alt="" className="w-52" />
                  <h5 className="font-semibold text-2xl text-primary text-center  px-5">
                    Convenient Traveling Time...
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
