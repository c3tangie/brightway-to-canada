import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "../assets/logo.png"
import footerBg from "../assets/footerbg.png"
import footerBg2 from "../assets/footerbg2.png"
import footerBg3 from "../assets/footerbg3.png"
import searchIcon from "../assets/search_icon.png"
import search_Icon from "../assets/search_icon.svg"

const Footer = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    
    if (search && search.trim()) {
      // Navigate to search results page with query
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch(""); // Clear the search input
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <footer className="w-full">

      {/* Top Section */}
      <div
        className="w-full bg-blue-900"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

  <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row lg:flex-nowrap xl:flex-wrap lg:items-start lg:justify-between px-6 xl:px-20 2xl:px-20 py-10 gap-6 lg:gap-6">
          {/* Bubble 1: Logo/Brandname + Contact Info */}
          <div
      className="flex flex-col gap-4 lg:gap-6 bg-white/10 rounded-xl p-4 sm:p-5 lg:p-6 shadow-lg w-full lg:flex-1 lg:min-w-[220px] lg:max-w-[850px] min-w-0"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 text-lg sm:text-2xl lg:text-3xl font-bold font-outfit text-white">
              <img src={Logo} alt="Logo" style={{ width: "50px", height: "auto" }} className="lg:w-[60px]" /> 
              <span className="text-center lg:text-left">Brightway to Canada</span>
            </div>
            <div className="text-white text-sm lg:text-base font-RobotoFlex leading-loose tracking-wider text-center lg:text-left break-words">
              <p>
                Phone: +1 (250) 797-7886 | Email: info@brightwaytocanada.ca<br />
                Mailbox: PO Box 886 Station A, Nanaimo, BC, V9T 5N2 <br className="lg:hidden" />
                <span className="hidden lg:inline"></span>
                {/* | Office Hours: 9:00 AM - 4:00 PM (PST) */}
              </p>
            </div>
          </div>

          {/* Bubble 2: Search Bar + Social Media */}
          <div className="flex flex-col items-center lg:items-end gap-4 bg-white/10 rounded-xl p-5 sm:p-6 lg:p-8 shadow-lg w-full lg:w-auto lg:flex-none lg:shrink-0">
            <div className="flex items-center justify-center lg:justify-end">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-56 sm:w-60 lg:w-72 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black font-normal"
              />
             <button
                onClick={handleSearch}
                className="ml-3 rounded-full group p-1"
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-40 -40 591.78128 591.45334"
                  className="text-white w-6 h-6 relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_white]"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle
                    cx="199.98663"
                    cy="200.31458"
                    r="172.81909"
                    strokeWidth={80}
                    stroke="currentColor"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 330.28188,330.28188 487.00386,487.00386"
                    strokeWidth={70}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {/* <div className="flex flex-row items-center gap-4 mr-8">
              <a href='#/wip'>
                <img src={wechat_Icon} alt="WeChat Icon" className="w-10 h-10" />
              </a>
              <a href='#/wip'>
                <img src={rednote_Icon} alt="Red Note Icon" className="w-10 h-10" />
              </a>
              <a href='#/wip'>
                <img src={instagram_Icon} alt="Instagram Icon" className="w-10 h-10" />
              </a>
              <a href='#/wip'>
                <img src={facebook_Icon} alt="Facebook Icon" className="w-10 h-10" />
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="w-full bg-blue-950">

        <div className="max-w-screen-2xl mx-auto px-10 sm:px-20 py-3 text-white text-[14px] sm:text-sm font-RobotoFlex">
          <p className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} Brightway to Canada. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer