import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Cs_Article from './c-components/cs_article'

const currentStudents = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <Cs_Article />
        <hr></hr>
        <Footer />
    </div>
  )
}

export default currentStudents