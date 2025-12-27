import React, { useState, useEffect } from 'react'
import Logo from "../assets/logo.png"
import menuIcon from "../assets/menu_icon.svg"

const Navbartest = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Spacer to prevent content overlap */}
      <div className={`transition-all duration-300 ${
        isScrolled ? 'h-16' : 'h-32'
      }`}></div>
      
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-xl' : 'bg-white shadow-lg'
      }`}>
      {/* Top Contact Bar - Hidden when scrolled */}
      <div 
        className={`text-white transition-all duration-300 bg-blue-900 ${
          isScrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'py-2 opacity-100'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-center lg:justify-end items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                +1 (250) 797-7886
              </span>
              <span className="hidden sm:flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                info@brightwaytocanada.ca
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className={`max-w-screen-2xl mx-auto px-4 py-3 lg:px-20 sm:px-6  ${isScrolled ? 'py-0' : 'py-3'}`}>
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-12' : 'h-20'
          }`}>
            
            {/* Logo and Brand */}
            <div className="flex items-center">
              <a href="/" className={`transition-all duration-300 flex items-center group ${isScrolled ? 'space-x-0' : 'space-x-3'}`}>
                <img 
                  src={Logo} 
                  alt="Logo" 
                  className={`transition-all duration-300 group-hover:scale-105 ${
                    isScrolled ? 'w-12 h-auto' : 'w-16 h-auto'
                  }`} 
                />
                <div className={`flex flex-col transition-all duration-300 ${
                  isScrolled ? 'scale-90' : 'scale-100'
                }`}>
                  <span className={`font-bold font-outfit text-blue-900 leading-tight transition-all duration-300 ${
                    isScrolled ? 'text-xl lg:text-2xl' : 'text-2xl lg:text-3xl'
                  }`}>
                    Brightway to Canada
                  </span>
                  <span className={`text-red-600 font-light font-outfit tracking-wide transition-all duration-300 ${
                    isScrolled ? 'text-xs lg:text-sm' : 'text-sm lg:text-base'
                  }`}>
                    Education Consultant
                  </span>
                </div>
              </a>
            </div>

            
            {/* Navigation Links */}
            <div className="hidden xl:flex items-center space-x-8">
              <nav className={`flex transition-all duration-300 ${
                isScrolled ? 'space-x-8' : 'space-x-10'
              }`}>
                <a 
                  href="/" 
                  className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-lg'
                  }`}
                >
                  Home
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#/about" 
                  className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-lg'
                  }`}
                >
                  About
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#/services" 
                  className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-lg'
                  }`}
                >
                  Services
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                {/* <a 
                  href="#/blog" 
                  className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-lg'
                  }`}
                >
                  Blog
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a> */}
                <a 
                  href="#/network" 
                  className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-lg'
                  }`}
                >
                  Network
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#/contact" 
                  className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-lg'
                  }`}
                >
                  Contact
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button className={`inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300 ${
                isScrolled ? 'scale-90' : 'scale-100'
              }`}>
                <svg
                  className={`transition-all duration-300 ${
                    isScrolled ? 'h-6 w-auto' : 'h-7 w-auto'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbartest;