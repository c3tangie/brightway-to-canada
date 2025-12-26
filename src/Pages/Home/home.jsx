import React from 'react'
import Navbar from '../../components/Navbar'
import Navbartest from '../../components/Navbartest'
import Banner from './h-components/Banner'
import Article from './h-components/Article'
import Buttons from './h-components/Buttons'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Article />
        <Buttons />
        <Footer />
    </div>
  )
}

export default Home