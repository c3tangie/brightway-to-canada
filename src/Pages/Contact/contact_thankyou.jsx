import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const ThankyouPg = () => {
  return (
    <div>
        <Navbar />

        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold text-gray-700">
            Thank You For Your Response
          </h1>
          <p class="my-3 text-2xl font-semibold text-gray-700">
            Your response is successfully sent to us and we will contact you on your provided email or phone number shortly. Feel free to close this page. If you wish to visit other part of this website, please click on the options in the top navigation bar or click the logo on the top left to return to our homepage. If you want to check out our social media, please click on the respective icons in the footer. 
          </p>
        </div>

        <Footer />
    </div>
  )
}

export default ThankyouPg
