import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const OfficialContacts = () => {
  return (
    <div>
        <Navbar />
        <hr></hr>
        <h1>Contact Us</h1>
        <h2>Emails</h2>
        <h2>Phones</h2>
        <p>If you have trouble contacting us using the methods explained above, you can try</p>
        <h2>Alternative Contacts</h2>
        <p>If you have trouble contacting us using the methods explained above, you can try</p>
        <h1>Other Contacts</h1>
        <p>Below is a list of other contacts that students will find useful</p>
        
        <table style="width:100%">
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>BC Hydro</td>
            <td>Electricity Bills and Rates, Power Outages, Careers</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>

        <hr></hr>
        <Footer />
    </div>
  )
}

export default OfficialContacts