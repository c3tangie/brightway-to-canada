import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from './h-components/Banner'
import Article from './h-components/Article'
import Buttons from './h-components/Buttons'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <Banner />
        <Article />
        <Buttons />
        <hr></hr>
        <Footer />
    </div>
  )
}

export default Home