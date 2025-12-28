import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WF_App from './contact-components/contact_form'
import seaBackground from "./contact-components/sea-7498910_1920.jpg";

const OfficialContacts = () => {
  return (
    <div className="relative min-h-screen">
      {/* Full-page background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${seaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Creates nice parallax effect
        }}
      />
      
      {/* Optional overlay for better readability */}
      <div className="fixed inset-0 bg-white/30"></div>
      
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