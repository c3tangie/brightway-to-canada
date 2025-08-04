import React from 'react'
import Logo from "../assets/logo.png"
import menuIcon from "../assets/menu_icon.svg"

const Navbar = () => {
  return (
    <div className="top-0 left-0 w-full z-10 bg-white shadow relative">
      <div className="flex relative">
        {/* Left Section: Logo and Brand */}
        <div className="flex items-center justify-end w-5/12 bg-white px-20 my-3">
          <div className=" z-20" style={{
            clipPath: 'ellipse(100% 100% at left center)',
            color: '#21d337'
          }}></div>
          <a
            href="/"
            className="flex font-outfit"
          >
            <img src={Logo} alt="Logo" className="w-24 h-auto" />
            <div className="flex flex-col ml-3 mt-6">
              <span className="text-4xl font-extrabold text-blue-900">
                Brightway to Canada
              </span>
              <span className="text-red-600 text-base tracking-wide">
                Education Consultant
              </span>
            </div>
            
          </a>
        </div>

        {/* Right Section: Two-layer Nav */}
        <div className="flex-1 flex flex-col">
          {/* Top Layer: Contact or utility links */}
          <div className="flex justify-end bg-[rgb(255,126,126)] text-white text-sm px-6 py-4">

            <div className='max-w-screen mx-auto'>
              <p>Phone: +1 (250) 797-7886 | Email: info@brightwaytocanada.ca</p>
            </div>
            
          </div>
          {/* Bottom Layer: Main navigation links */}
          <div className="flex justify-end items-center px-20 bg-[rgb(182,214,253)] py-8">
            <ul className="hidden xl:flex gap-10 max-w-screen-xl mx-auto ">
              <a href="/" className="group relative inline-block text-xl font-semibold font-RobotoFlex">Home
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-black opacity-0 group-hover:opacity-100 transition duration-200"></span>
            </a>
            <a href="#/about" className="group relative inline-block text-xl font-semibold font-RobotoFlex">About
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </a>
            <a href="#/services" className="group relative inline-block text-xl font-semibold font-RobotoFlex">Services
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </a>
            <a href='#/blog' className="group relative inline-block text-xl font-semibold font-RobotoFlex">Blog
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </a>
            <a href='#/events' className="group relative inline-block text-xl font-semibold font-RobotoFlex">Events
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </a>
            <a href="#/contact" className="group relative inline-block text-xl font-semibold font-RobotoFlex">Contact
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </a>
            </ul>
            {/* Mobile Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.75}
              strokeLinecap="butt"
              strokeLinejoin="butt"
              className="xl:hidden w-9 h-9 text-black hover:text-gray-600 transition-all duration-300"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;