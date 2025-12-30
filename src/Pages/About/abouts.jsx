import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BackToTop from '../../components/BackToTopButton'
import Abouts_Article_Main from './abouts-components/abouts_article_main'

const OfficialAbouts = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <Abouts_Article_Main />
        <hr></hr>
        <BackToTop />
        <Footer />
    </div>
  )
}

export default OfficialAbouts
