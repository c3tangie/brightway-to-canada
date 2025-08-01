// @ts-ignore
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Event_Article from './event-components/event_article'

const OfficialEvents = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <Event_Article />
        <hr></hr>
        <Footer />
    </div>
  )
}

export default OfficialEvents