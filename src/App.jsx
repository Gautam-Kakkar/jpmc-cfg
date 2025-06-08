// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Pages
// import Home from './components/Home';
// import ParentSignup from './pages/ParentSignup';
// import ParentLogin from './pages/ParentLogin';
// import Admin from './pages/Admin';
// import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<ParentSignup />} />
//         <Route path="/login" element={<ParentLogin />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';

// Pages
import Home from './components/Home';
import ParentSignup from './pages/ParentSignup';
// import ParentLogin from './pages/ParentLogin';
import Admin from './pages/Admin';
import Dashboard from './components/Dashboard';
import DashboardAdmin from './pages/dashboardAdmin';
import AaravInfo from './pages/aaravinfo';
import Resources from './components/Resources';
import Forms from './pages/Forms';
import Milestone from './pages/Milestone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<ParentSignup />} />
        {/* <Route path="/login" element={<ParentLogin />} /> */}
        <Route path="/admin" element={<DashboardAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aaravinfo" element={<AaravInfo />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/milestone" element={<Milestone />} />
      </Routes>
    </Router>
  );
}

export default App;

// export default App;