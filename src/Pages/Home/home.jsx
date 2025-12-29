import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from './h-components/Banner'
import Article from './h-components/Article'
import Buttons from './h-components/Buttons'
import Footer from '../../components/Footer'
import BackToTop from '../../components/BackToTopButton';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Article />
        <Buttons />
        {/* <BackToTop /> */}
        <Footer />
    </div>
  )
}

export default Home