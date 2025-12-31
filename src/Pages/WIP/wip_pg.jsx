import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const WIPPg = ({ showNavbar = true, showFooter = true }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div>
        {showNavbar && <Navbar />}

        <div className="text-center">
          <div className="py-24 sm:py-40 xl:py-52 3xl:py-96">
            <div className="max-w-4xl mx-auto">
            <div className="bg-black/5 border border-gray-200 shadow-lg py-8 sm:py-12 px-6 sm:px-8 rounded-3xl">
              <h1 className="my-3 text-xl sm:text-3xl font-bold text-gray-700">
                The Content You Requested Is Temporarily Unavailable
              </h1>
              <p className="my-3 text-lg sm:text-2xl font-medium text-gray-700">
                Please wait for future updates, we are sorry for the inconvenience. If there is an urgent request, feel free to contact us through the contact page.
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-600 text-lg text-white font-semibold hover:bg-navy-700 transition-colors duration-200"
                >
                  <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
        {showFooter && <Footer />}
    </div>
  )
}

export default WIPPg