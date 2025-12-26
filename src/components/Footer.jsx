import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import footerBg from "../assets/footerbg.png"
import footerBg2 from "../assets/footerbg2.png"
import footerBg3 from "../assets/footerbg3.png"
import searchIcon from "../assets/search_icon.png"
import search_Icon from "../assets/search_icon.svg"
import rednote_Icon from "../assets/rednote_icon.svg"
import instagram_Icon from "../assets/instagram_icon.svg"
import facebook_Icon from "../assets/facebook_icon.svg"
import wechat_Icon from "../assets/wechat_icon.svg"

const Footer = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    // Replace with your search logic
    alert(`Searching for: ${search}`);
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

        <div className="max-w-screen-2xl mx-auto flex justify-between items-start px-20 py-10">
          {/* Bubble 1: Logo/Brandname + Contact Info */}
          <div className="flex flex-col gap-6 bg-white/10 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-3 text-3xl font-bold font-outfit text-white">
              <img src={Logo} alt="Logo" style={{ width: "60px", height: "auto" }} /> Brightway to Canada
            </div>
            <div className="text-white text-base font-RobotoFlex leading-loose tracking-wider">
              <p>
                Office: PO Box 1234, 5413 Jacobs Lane, Nanaimo, BC, V9T 0B8 <br />
                Phone: +1 (250) 797-7886 | Email: info@brightwaytocanada.ca | Office Hours: 9:00 AM - 4:00 PM (PST)
              </p>
            </div>
          </div>

          {/* Bubble 2: Search Bar + Social Media */}
          <div className="flex flex-col items-end gap-4 bg-white/10 rounded-xl p-8 shadow-lg">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-72 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black font-normal"

                // Search Button
              />
             <button
                onClick={handleSearch}
                className="ml-3 rounded-full group"
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 511.78128 511.45334"
                  className="text-white w-5 h-5 relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_white]"
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
            <div className="flex flex-row items-center gap-4 mr-8">
              <a href='#/wip'>
                <img src={wechat_Icon} alt="WeChat Icon" className="w-10 h-10" />
              </a>
              <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1'>
                <img src={rednote_Icon} alt="Red Note Icon" className="w-10 h-10" />
              </a>
              <a href='#/wip'>
                <img src={instagram_Icon} alt="Instagram Icon" className="w-10 h-10" />
              </a>
              <a href='#/wip'>
                <img src={facebook_Icon} alt="Facebook Icon" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="w-full bg-blue-950">

        <div className="max-w-screen-2xl mx-auto px-20 py-3 text-white text-sm font-RobotoFlex">
          <p className="text-right">
            &copy; {new Date().getFullYear()} Brightway to Canada. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer