import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/home'
import ProspectiveStudents from './Pages/Prospective Students/ps'
import CurrentStudents from './Pages/Current Students/cs'
import GraduatingStudents from './Pages/Graduating Students/gs'
import officialAbouts from './Pages/About/abouts'
import officialBlogs from './Pages/Blog/blogs'
import officialContacts from './Pages/Contact/contacts'
import officialEvents from './Pages/Events/events'
import officialServices from './Pages/Services/services'


function App() {

  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prospective-students" element={<ProspectiveStudents />} />
        <Route path="/current-students" element={<CurrentStudents />} />
        <Route path="/graduating-students" element={<GraduatingStudents />} />
        <Route path="/about" element={<officialAbouts />} />
        <Route path="/blog" element={<officialBlogs />} />
        <Route path="/contact" element={<officialContacts />} />
        <Route path="/events" element={<officialEvents />} />
        <Route path="/services" element={<officialServices />} />
      </Routes>
    </Router>
  );
}

export default App
