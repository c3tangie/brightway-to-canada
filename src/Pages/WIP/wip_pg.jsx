import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const WIPPg = () => {
  return (
    <div>
        <Navbar />

        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold text-gray-700">
            The Content You Requested Is Still Being Worked On
          </h1>
          <p class="my-3 text-2xl font-semibold text-gray-700">
            Please wait for future updates. We are sorry for the inconvinience caused. 
          </p>
        </div>

        <Footer />
    </div>
  )
}

export default WIPPg
