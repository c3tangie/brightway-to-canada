import React, { useState, useEffect, useRef } from 'react'
import Logo from "../assets/logo.png"
import menuIcon from "../assets/menu_icon.svg"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const mobileMenuButtonRef = useRef(null);

  // Add CSS for hover effect
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hover-active {
        background-color: rgb(243 244 246) !important;
        color: rgb(30 58 138) !important;
      }
      .hover-about-active {
        background-color: rgb(249 250 251) !important;
        color: rgb(30 58 138) !important;
      }
      .hover-border-active {
        border-left-color: rgb(30 58 138) !important;
      }
      /* Mobile navbar fix - use sticky positioning on mobile */
      @media (max-width: 768px) {
        .mobile-fixed-navbar {
          position: -webkit-sticky !important;
          position: sticky !important;
          top: 0 !important;
          z-index: 9999 !important;
        }
        html, body {
          height: 100%;
          overflow-x: hidden;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = (event) => {
    const newMenuState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newMenuState);
    
    // If closing the menu, blur the button to remove focus/blue border
    if (!newMenuState && mobileMenuButtonRef.current) {
      setTimeout(() => {
        mobileMenuButtonRef.current.blur();
      }, 10);
    }
  };

  // Handle touch end to prevent sticky hover
  const handleTouchEnd = (event) => {
    // Remove any stuck hover classes on touch devices
    if (mobileMenuButtonRef.current) {
      mobileMenuButtonRef.current.classList.remove('hover-active');
      setTimeout(() => {
        mobileMenuButtonRef.current.blur();
      }, 50);
    }
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Spacer to prevent content overlap - only on desktop */}
      <div className={`hidden md:block transition-all duration-300 ${
        isScrolled ? 'h-16' : 'h-16 md:h-32'
      }`}></div>
      
      <div className={`mobile-fixed-navbar md:fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-xl' : 'bg-white shadow-lg'
      }`}>
      {/* Top Contact Bar - Hidden when scrolled or on small screens */}
      <div 
        className={`text-white transition-all duration-300 bg-blue-900 hidden md:block ${
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
            isScrolled ? 'h-12' : 'h-12 md:h-20'
          }`}>
            
            {/* Logo and Brand */}
            <div className="flex items-center">
              <a href="/" className={`transition-all duration-300 flex items-center group space-x-0 ${
                isScrolled ? 'md:space-x-0' : 'md:space-x-3'
              }`}>
                <img 
                  src={Logo} 
                  alt="Logo" 
                  className={`transition-all duration-300 group-hover:scale-105 w-12 ${
                    isScrolled ? 'md:w-12' : 'md:w-16'
                  } h-auto`} 
                />
                <div className={`flex flex-col transition-all duration-300 scale-90 ${
                  isScrolled ? 'md:scale-90' : 'md:scale-100'
                }`}>
                  <span className={`font-bold font-outfit text-blue-900 leading-tight transition-all duration-300 text-xl ${
                    isScrolled ? 'md:text-xl lg:text-2xl' : 'md:text-2xl lg:text-3xl'
                  }`}>
                    Brightway to Canada
                  </span>
                  <span className={`text-red-600 font-light font-outfit tracking-wide transition-all duration-300 text-xs ${
                    isScrolled ? 'md:text-xs lg:text-sm' : 'md:text-sm lg:text-base'
                  }`}>
                    Education Consultant
                  </span>
                </div>
              </a>
            </div>

            
            {/* Navigation Links */}
            <div className="hidden xl:flex items-center">
              <nav className={`flex transition-all duration-300 ${
                isScrolled ? 'space-x-12' : 'space-x-12 md:space-x-14'
              }`}>
                <a 
                  href="/" 
                  className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-base md:text-lg'
                  }`}
                >
                  Home
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                
                {/* About Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => {
                    setIsAboutDropdownOpen(true);
                    setIsServicesDropdownOpen(false);
                  }}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <button 
                    className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                      isScrolled ? 'text-base' : 'text-base md:text-lg'
                    }`}
                  >
                    About
                    <svg className="w-3 h-3 absolute -right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-200" style={{ transform: `translateY(-50%) ${isAboutDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'}` }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 transition-all duration-200 ${
                    isAboutDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                  } z-50`}>
                    <div className="py-2">
                      <a 
                        href="#/about" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
                      >
                        About Us
                      </a>
                      <a 
                        href="#/about_teams" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Our Team
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Services Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => {
                    setIsServicesDropdownOpen(true);
                    setIsAboutDropdownOpen(false);
                  }}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <button 
                    className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                      isScrolled ? 'text-base' : 'text-base md:text-lg'
                    }`}
                  >
                    Services
                    <svg className="w-3 h-3 absolute -right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-200" style={{ transform: `translateY(-50%) ${isServicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'}` }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 transition-all duration-200 ${
                    isServicesDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                  } z-50`}>
                    <div className="py-2">
                      <a 
                        href="#/services" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Our Services
                      </a>
                      <a 
                        href="#/service-list" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
                      >
                        Service Categories
                      </a>
                    </div>
                  </div>
                </div>
                {/* <a 
                  href="#/blog" 
                  className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-lg'
                  }`}
                >
                  Blog
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a> */}
                {/* <a 
                  href="#/network" 
                  className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-base md:text-lg'
                  }`}
                >
                  Network
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a> */}
                <a 
                  href="#/contact" 
                  className={`group relative text-gray-700 hover:text-blue-900 font-semibold transition-all duration-300 ${
                    isScrolled ? 'text-base' : 'text-base md:text-lg'
                  }`}
                >
                  Contact
                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-red-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button 
                ref={mobileMenuButtonRef}
                onClick={toggleMobileMenu}
                onTouchEnd={handleTouchEnd}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 scale-90 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 ${
                  isScrolled ? 'md:scale-90' : 'md:scale-100'
                } ${
                  isMobileMenuOpen 
                    ? 'text-blue-900 bg-gray-100' 
                    : 'text-gray-700'
                }`}
                style={{ 
                  WebkitTapHighlightColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isMobileMenuOpen && window.matchMedia('(hover: hover)').matches) {
                    e.target.classList.add('hover-active');
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.classList.remove('hover-active');
                }}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className={`transition-all duration-300 h-6 w-auto ${
                      isScrolled ? 'md:h-6' : 'md:h-7'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className={`transition-all duration-300 h-6 w-auto ${
                      isScrolled ? 'md:h-6' : 'md:h-7'
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`xl:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-4 pb-1 space-y-2">
              <a 
                href="/" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 font-semibold transition-colors duration-200 border-l-4 border-transparent hover:border-blue-900"
                onClick={closeMobileMenu}
              >
                Home
              </a>
              
              {/* Mobile About Section */}
              <div className={`border-l-4 transition-colors duration-200 ${
                isAboutDropdownOpen ? 'border-blue-900' : 'border-transparent'
              } mobile-about-container`}>
                <button 
                  className={`w-full text-left px-4 py-3 font-semibold transition-colors duration-200 flex items-center justify-between ${
                    isAboutDropdownOpen 
                      ? 'text-blue-900 bg-gray-50' 
                      : 'text-gray-700'
                  } mobile-about-button`}
                  onClick={() => {
                    setIsAboutDropdownOpen(prev => {
                      const next = !prev;
                      if (next) setIsServicesDropdownOpen(false);
                      return next;
                    });
                  }}
                  onMouseEnter={(e) => {
                    if (!isAboutDropdownOpen && window.matchMedia('(hover: hover)').matches) {
                      e.target.closest('.mobile-about-container').classList.add('hover-border-active');
                      e.target.classList.add('hover-about-active');
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.closest('.mobile-about-container').classList.remove('hover-border-active');
                    e.target.classList.remove('hover-about-active');
                  }}
                  onTouchEnd={(e) => {
                    e.target.closest('.mobile-about-container').classList.remove('hover-border-active');
                    e.target.classList.remove('hover-about-active');
                  }}
                >
                  About
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`transition-all duration-200 overflow-hidden ${
                  isAboutDropdownOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <a 
                    href="#/about" 
                    className="block pl-8 pr-4 py-2 text-gray-600 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </a>
                  <a 
                    href="#/about_teams" 
                    className="block pl-8 pr-4 py-2 text-gray-600 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Our Team
                  </a>
                </div>
              </div>
              
              {/* Mobile Services Section */}
              <div className={`border-l-4 transition-colors duration-200 ${
                isServicesDropdownOpen ? 'border-blue-900' : 'border-transparent'
              } mobile-services-container`}>
                <button 
                  className={`w-full text-left px-4 py-3 font-semibold transition-colors duration-200 flex items-center justify-between ${
                    isServicesDropdownOpen 
                      ? 'text-blue-900 bg-gray-50' 
                      : 'text-gray-700'
                  } mobile-services-button`}
                  onClick={() => {
                    setIsServicesDropdownOpen(prev => {
                      const next = !prev;
                      if (next) setIsAboutDropdownOpen(false);
                      return next;
                    });
                  }}
                  onMouseEnter={(e) => {
                    if (!isServicesDropdownOpen && window.matchMedia('(hover: hover)').matches) {
                      e.target.closest('.mobile-services-container').classList.add('hover-border-active');
                      e.target.classList.add('hover-about-active');
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.closest('.mobile-services-container').classList.remove('hover-border-active');
                    e.target.classList.remove('hover-about-active');
                  }}
                  onTouchEnd={(e) => {
                    e.target.closest('.mobile-services-container').classList.remove('hover-border-active');
                    e.target.classList.remove('hover-about-active');
                  }}
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`transition-all duration-200 overflow-hidden ${
                  isServicesDropdownOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <a 
                    href="#/services" 
                    className="block pl-8 pr-4 py-2 text-gray-600 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Our Services
                  </a>
                  <a 
                    href="#/service-list" 
                    className="block pl-8 pr-4 py-2 text-gray-600 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Service Categories
                  </a>
                </div>
              </div>
              {/* <a 
                href="#/network" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 font-semibold transition-colors duration-200 border-l-4 border-transparent hover:border-blue-900"
                onClick={closeMobileMenu}
              >
                Network
              </a> */}
              <a 
                href="#/contact" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 font-semibold transition-colors duration-200 border-l-4 border-transparent hover:border-blue-900"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;