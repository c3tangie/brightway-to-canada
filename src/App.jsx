import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/home'
import ProspectiveStudents from './Pages/Prospective Students/ps'
import CurrentStudents from './Pages/Current Students/cs'
import GraduatingStudents from './Pages/Graduating Students/gs'
import OfficialAbouts from './Pages/About/abouts'
import OfficialBlogs from './Pages/Blog/blogs'
import OfficialContacts from './Pages/Contact/contacts'
import OfficialNetwork from './Pages/Network/network'
import OfficialServices from './Pages/Services/services'
import ThankyouPg from './Pages/Contact/contact_thankyou'
import WIPPg from './Pages/WIP/wip_pg'

import TeamMemberDetailPage from './Pages/About/abouts-components/TeamMemberDetailPage';

function App() {

  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prospective-students" element={<ProspectiveStudents />} />
        <Route path="/current-students" element={<CurrentStudents />} />
        <Route path="/graduating-students" element={<GraduatingStudents />} />
        <Route path="/about" element={<OfficialAbouts />} />
        {/* Dynamic route for team members */}
        <Route path="/team/:memberId" element={<TeamMemberDetailPage />} />
        <Route path="/blog" element={<OfficialBlogs />} />
        <Route path="/contact" element={<OfficialContacts />} />
        <Route path="/thankyou" element={<ThankyouPg />} />
        <Route path="/wip" element={<WIPPg />} />
        <Route path="/network" element={<OfficialNetwork />} />
        <Route path="/services" element={<OfficialServices />} />
      </Routes>
    </Router>
  );
}

export default App
