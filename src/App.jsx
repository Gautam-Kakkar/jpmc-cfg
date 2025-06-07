import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './components/Home';
import ParentSignup from './pages/ParentSignup';
import ParentLogin from './pages/ParentLogin';
// import AdminLogin from './pages/AdminLogin'; // Optional
import Dashboard from './components/Dashboard';

// Components
// import Navbar from './components/Navbar'; // If you want a global navbar
// import Layout from './components/Layout'; // If you're using a layout wrapper

function App() {
  return (
    <Router>
      {/* Optional: Wrap routes with <Layout> if needed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<ParentSignup />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/login" element={<ParentLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
