import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Gs_Article from './g-components/gs_article'

const graduatingStudents = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <Gs_Article />
        <hr></hr>
        <Footer />
    </div>
  )
}

export default graduatingStudents