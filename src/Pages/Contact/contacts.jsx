import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WF_App from './contact-components/contact_form'
import contactBackground from "../../assets/contact_bg.png";

const OfficialContacts = () => {
  return (
    <div className="relative min-h-screen">
      {/* Full-page background */}
{/*       <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url(${contactBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Creates nice parallax effect
        }}
      /> */}
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Navbar />
        <WF_App />
        <Footer />
      </div>
    </div>
  )
}

export default OfficialContacts