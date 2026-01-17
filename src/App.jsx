import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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
import ServicesListPage from './Pages/Services/services-components/ServicesListPage';
import ServiceDetailPage from './Pages/Services/services-components/ServiceDetailPage';
import SearchResults from './Pages/Search/SearchResults';

import TeamMemberDetailPage from './Pages/About/abouts-components/TeamMemberDetailPage';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // In HashRouter, some navigations can keep the same pathname while changing
    // the hash/search; include them so every navigation reliably jumps to top.
    // Use requestAnimationFrame so layout is ready (helps on mobile Safari).
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [pathname, search, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/prospective-students" element={<PreStudent />} />
        <Route path="/services/current-students" element={<NowStudent />} />
        <Route path="/services/graduating-students" element={<GradStudent />} />
        <Route path="/about" element={<OfficialAbouts />} />
        <Route path="/about_teams" element={<OfficialAboutsTeams />} />
        <Route path="/team/:memberSlug" element={<TeamMemberDetailPage />} />
        <Route path="/blog" element={<OfficialBlogs />} />
        <Route path="/contact" element={<OfficialContacts />} />
        <Route path="/thankyou" element={<ThankyouPg />} />
        <Route path="/wip" element={<WIPPg />} />
        <Route path="/network" element={<OfficialNetwork />} />
        
        {/* Main Service Article - The landing page for services */}
        <Route path="/services" element={<OfficialServices />} />
        
        {/* Service List Page - Shows all service categories */}
        <Route path="/service-list" element={<ServicesListPage />} />
        
        {/* Individual Service Detail Page */}
        <Route path="/service/:serviceSlug" element={<ServiceDetailPage />} />
        
        <Route path="/consultation" element={<ConsultationPage />} />
        
        {/* Search Results Page */}
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App