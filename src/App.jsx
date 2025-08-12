import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/home'
import ProspectiveStudents from './Pages/Prospective Students/ps'
import CurrentStudents from './Pages/Current Students/cs'
import GraduatingStudents from './Pages/Graduating Students/gs'
import OfficialAbouts from './Pages/About/abouts'
import OfficialBlogs from './Pages/Blog/blogs'
import OfficialContacts from './Pages/Contact/contacts'
import OfficialEvents from './Pages/Events/events'
import OfficialServices from './Pages/Services/services'
import ThankyouPg from './Pages/Contact/contact_thankyou'


function App() {

  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prospective-students" element={<ProspectiveStudents />} />
        <Route path="/current-students" element={<CurrentStudents />} />
        <Route path="/graduating-students" element={<GraduatingStudents />} />
        <Route path="/about" element={<OfficialAbouts />} />
        <Route path="/blog" element={<OfficialBlogs />} />
        <Route path="/contact" element={<OfficialContacts />} />
        <Route path="/thankyou" element={<ThankyouPg />} />
        <Route path="/events" element={<OfficialEvents />} />
        <Route path="/services" element={<OfficialServices />} />
      </Routes>
    </Router>
  );
}

export default App
