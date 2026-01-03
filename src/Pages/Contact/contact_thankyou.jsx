import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const ThankyouPg = () => {
  return (
    <div>
        <Navbar />

        <div className="text-center">
          <div className="h-52"></div>
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-black/5 border border-gray-200 shadow-lg py-12 px-8 rounded-2xl">
              <h1 className="my-3 text-3xl font-semibold text-gray-700">
              Thank You For Your Response <br /><br />
              </h1>
              <p className="my-3 text-xl font-medium text-gray-600 leading-relaxed">
                Your response is successfully sent to us and we will contact you on your provided email or phone number shortly. Feel free to close this page.
                
                
                {/* If you want to check out our social media, please click on the respective icons in the footer.  */}

              </p>      
            </div>
          </div>
        </div>
        <div className="h-52"></div>
        <Footer />
    </div>
  )
}

export default ThankyouPg
