import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const OfficialContacts = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>

        <h1>Contact Us Through Our Webform</h1>
        <form>
          <div>
              <label for="WF_name">Name:</label>
              <input type="text" id="WF_name" name="WF_name" placeholder="Your Name"></input>
          </div>

          <br></br>

          <div>
              <label for="WF_email">Email:</label>
              <input type="email" id="WF_email" name="WF_email" placeholder="Your Email"></input>
          </div>

          <div>
              <label for="WF_main">Main Texts:</label>
              <input type="text" id="WF_main" name="WF_main" placeholder="Type your questions or comments here"></input>
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