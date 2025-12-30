import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ServiceBanner from './services-components/service_banner'
import ServiceArticle from './services-components/service_article'
import Buttons from './services-components/Buttons'
import BackToTop from '../../components/BackToTopButton'

const OfficialServices = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <ServiceBanner />
        <ServiceArticle />
        {/* <Buttons /> */}
        <hr></hr>
        <BackToTop />
        <Footer />
    </div>
  )
}

export default OfficialServices