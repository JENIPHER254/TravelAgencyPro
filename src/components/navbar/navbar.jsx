import { React, useState } from "react";
import logo1 from "../../assets/logo1.jpg";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  /**
   * navigation bar open and close states
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "Pricing" },
    { link: "Contact", path: "Contact" },
  ];
  return (
    <>
      <nav className="bg-white max-w-screen-2x1 text-primary mx-auto p-4 fixed top-0 left-0 right-0">
        <div className="container flex mx-auto justify-between items-center text-lg font-medium">
          <div className="flex items-center space-x-14 ">
            <a
              href="/"
              className="flex font-semibold text-3xl items-center space-x-3 text-primary"
            >
              <img
                src={logo1}
                alt=""
                width={150}
                className=" items-center inline-block"
              />
              <span>TAP</span>
            </a>
            {/* Display nav items using navItem list to map items */}
            <ul className="lg:flex space-x-12 hidden ">
              {navItems.map(({ link, path }) => (
                <a className="block hover:text-gray-300" key={link} href={path}>
                  {link}
                </a>
              ))}
            </ul>
          </div>
          {/* BOOK NOW AND SIGN UP BUTTONS */}
          <div className="space-x-12 items-center lg:flex hidden">
            <a href="/" className="hover:text-secondary items-center">
              Book Now
            </a>
            <button className="bg-secondary py-2 px-4 rounded text-bold hover:text-white hover:bg-indigo-500 duration-300">
              SignUp
            </button>
          </div>
          {/* Button only display in mobile view */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 text-primary h-6" />
              ) : (
                <FaBars className="w-6 text-primary h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Navigation for mobile */}
      <div className={`space-y-10 font-bold text-white pl-6  duration-300 bg-secondary pt-56 pb-5 ${isMenuOpen ? "block fixed top-0 right-0 left-0":"hidden"}`}>
        {navItems.map(({ link, path }) => (
          <a className="block hover:text-gray-600" key={link} href={path}>
            {link}
          </a>
        ))}
      </div>
    </>
  );
};
export default Navbar;
