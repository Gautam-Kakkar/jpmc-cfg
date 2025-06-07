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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './components/Home';
import ParentSignup from './pages/ParentSignup';
import ParentLogin from './pages/ParentLogin';
import DashboardAdmin from './pages/dashboardAdmin';
import Admin from './pages/admin';
import Dashboard from './components/Dashboard';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<ParentSignup />} />
        <Route path="/login" element={<ParentLogin />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        {/* <Route path="/admin" element={<DashboardAdmin />} /> */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
}

export default App;

// export default App;