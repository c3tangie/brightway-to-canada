import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Pre_Student_Article from './sub-components/pre_student_article'

const PreStudent = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <Pre_Student_Article />
        <hr></hr>
        <Footer />
    </div>
  )
}

export default PreStudent