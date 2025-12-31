import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/home'
import PreStudent from './Pages/Services/services-subpages/pre_student'
import NowStudent from './Pages/Services/services-subpages/now_student'
import GradStudent from './Pages/Services/services-subpages/grad_student'
import OfficialAbouts from './Pages/About/abouts'
import OfficialAboutsTeams from './Pages/About/abouts_teams'
import OfficialBlogs from './Pages/Blog/blogs'
import OfficialContacts from './Pages/Contact/contacts'
import OfficialNetwork from './Pages/Network/network'
import OfficialServices from './Pages/Services/services'
import ConsultationPage from './Pages/Services/consultation'
import ThankyouPg from './Pages/Contact/contact_thankyou'
import WIPPg from './Pages/WIP/wip_pg'
import ServicesPage from './Pages/Services/services-components/ServicesPage';
import ServiceDetailPage from './Pages/Services/services-components/ServiceDetailPage';

import TeamMemberDetailPage from './Pages/About/abouts-components/TeamMemberDetailPage';

function App() {

  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/prospective-students" element={<PreStudent />} />
        <Route path="/services/current-students" element={<NowStudent />} />
        <Route path="/services/graduating-students" element={<GradStudent />} />
        <Route path="/about" element={<OfficialAbouts />} />
        <Route path="/about_teams" element={<OfficialAboutsTeams />} />
        {/* Dynamic route for team members */}
        <Route path="/team/:memberSlug" element={<TeamMemberDetailPage />} />
        <Route path="/blog" element={<OfficialBlogs />} />
        <Route path="/contact" element={<OfficialContacts />} />
        <Route path="/thankyou" element={<ThankyouPg />} />
        <Route path="/wip" element={<WIPPg />} />
        <Route path="/network" element={<OfficialNetwork />} />
        <Route path="/services" element={<OfficialServices />} />
        {/* Updated routes to use /service instead of /servicesX */}
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/service/:serviceSlug" element={<ServiceDetailPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
      </Routes>
    </Router>
  );
}

export default App