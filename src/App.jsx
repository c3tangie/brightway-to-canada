import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/home'
import ProspectiveStudents from './Pages/Prospective Students/ps'
import CurrentStudents from './Pages/Current Students/cs'
import GraduatingStudents from './Pages/Graduating Students/gs'


function App() {

  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prospective-students" element={<ProspectiveStudents />} />
        <Route path="/current-students" element={<CurrentStudents />} />
        <Route path="/graduating-students" element={<GraduatingStudents />} />
      </Routes>
    </Router>
  );
}

export default App
