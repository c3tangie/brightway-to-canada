import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WF_App from './contact-components/contact_form'

const OfficialContacts = () => {
  return (
    <div className="bg-white"> 
        <Navbar />

        <WF_App />

        <Footer />
    </div>
  )
}

export default OfficialContacts
