import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const OfficialContacts = () => {
  return (
    <noscript>This page requires JavaScript to Run</noscript>
    <div>
        <Navbar />
        <hr></hr>

        <h1>Contact Us Through Our Webform</h1>
        <p>Please do not put in personal or sensitive information in your response.</p>

        <form className='mt-5 max-w-screen-2xl mx-auto 2xl:px-20 xl:px-20 px-6 font-RobotoFlex text-center text-xl leading-normal'>
          <div>
              <label for="WF_name">Name:</label>
              <input type="text" maxlength="100" id="WF_name" name="WF_name" placeholder="Your Name (Max 100 Characters)"></input>
          </div>

          <br></br>

          <div>
              <label for="WF_email">Email:</label>
              <input type="email" maxlength="100" id="WF_email" name="WF_email" placeholder="Your Email (Max 100 Characters)"></input>
          </div>

          <div>
              <label for="WF_main">Main Texts:</label>
              <input type="text" maxlength="1024" id="WF_main" name="WF_main" placeholder="Type your questions or comments here (Max 1024 Characters)"></input>
          </div>

          <div>
              <input type="reset"></input>
          </div>

          <div>
              <input type="submit"></input>
          </div>
        </form>

        <hr></hr>
        <Footer />
    </div>
  )
}

export default OfficialContacts
