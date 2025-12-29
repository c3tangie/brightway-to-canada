import React, { useEffect } from 'react'
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
          <div className="h-40 sm:h-52"></div>
           <div className="max-w-4xl mx-auto">
            <div className="bg-black/5 border border-gray-200 shadow-lg py-0 sm:py-12 px-8 rounded-3xl">
              <h1 className="my-3 text-xl sm:text-3xl font-bold text-gray-700">
                The Content You Requested Is Temporarily Unavailable
              </h1>
              <p className="my-3 text-lg sm:text-2xl font-medium text-gray-700">
                Please wait for future updates, we are sorry for the inconvenience. If there is an urgent request, feel free to contact us through the contact page.
              </p>
            </div>
          </div>
        </div>
        <div className="h-40 sm:h-52"></div>  
        {showFooter && <Footer />}
    </div>
  )
}

export default WIPPg
