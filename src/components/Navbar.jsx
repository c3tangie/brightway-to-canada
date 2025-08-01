import React from 'react'
import Logo from "../assets/logo.png"
import menuIcon from "../assets/menu_icon.svg"

const Navbar = () => {
  return (
    <div className="top-0 left-0 w-full z-10">
        <div className='max-w-screen-2xl mx-auto flex justify-between items-center py-4 2xl:px-20 xl:px-20 px-6'>

        {/* Logo and Brandname */}
        <a href="/" className="font-extrabold bold font-outfit text-1xl sm:text-3xl flex gap-3 items-center">
            <img src={Logo} alt="Logo" style={{ width: "50px", height: "auto" }} />
            Brightway to Canada
        </a>

        {/* Menu */}
        <ul className="hidden xl:flex gap-10 3xl:gap-8">
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
        <img src={menuIcon} className='xl:hidden w-7' alt="Menu Icon" />
        </div>
    </div>
  )
}

export default Navbar
