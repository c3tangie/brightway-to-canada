import React from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Now_Student_Article from './sub-components/now_student_article'

const NowStudent = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <Now_Student_Article />
        <hr></hr>
        <Footer />
    </div>
  )
}

export default NowStudent