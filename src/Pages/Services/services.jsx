import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ServiceBanner from './services-components/service_banner'
import ServiceArticle from './services-components/service_article'
import Buttons from './services-components/Buttons'

const OfficialServices = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <ServiceBanner />
        <ServiceArticle />
        {/* <Buttons /> */}
        <hr></hr>
        <Footer />
    </div>
  )
}

export default OfficialServices