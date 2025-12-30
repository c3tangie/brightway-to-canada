import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Grad_Student_Article from './sub-components/grad_student_article'

const GradStudent = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <Grad_Student_Article />
        <hr></hr>
        <Footer />
    </div>
  )
}

export default GradStudent