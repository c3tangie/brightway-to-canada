import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ConsultationForm from '../Services/services-components/consultation_form'

const ConsultationPage = () => {
  return (
    <div>
      <Navbar />
      <ConsultationForm />
      <Footer />
    </div>
  )
}

export default ConsultationPage