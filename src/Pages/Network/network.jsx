// @ts-ignore
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Network_Article from './network-components/network_article'

const OfficialNetwork = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <Network_Article />
        <hr></hr>
        <Footer />
    </div>
  )
}

export default OfficialNetwork