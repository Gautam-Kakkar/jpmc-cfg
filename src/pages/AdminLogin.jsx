import React from 'react'
import "./AdminLogin.css"
import { Link, useNavigate } from 'react-router-dom';
const AdminLogin = () => {
   const navigate = useNavigate();
   
    const handleAdminLoginSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboardAdmin');
    };
  return (
  <div className="min-h-screen flex items-center justify-center bg-[#1a202e]">
    <div className="md:w-1/2 relative flex justify-center items-center">
      <form
        className="bg-[#2d3748] p-8 rounded-lg shadow-lg w-full max-w-md text-white"
        onSubmit={handleAdminLoginSubmit}
      >
                            <h2 className="text-2xl font-bold mb-6 text-[#ff6f00] text-center">
                                Admin Login
                            </h2>
                            <label className="block mb-2 text-sm font-semibold" htmlFor="parentMobile">
                                Mobile Number
                            </label>
                            <input
                                id="parentMobile"
                                name="parentMobile"
                                type="tel"
                                required
                                placeholder="Enter your Mobile Number"
                                className="w-full px-4 py-2 mb-6 rounded bg-[#1a202e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <label className="block mb-2 text-sm font-semibold" htmlFor="parentPassword">
                                Password
                            </label>
                            <input
                                id="parentPassword"
                                name="parentPassword"
                                type="password"
                                required
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mb-4 rounded bg-[#1a202e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#ff5f00] to-[#ff6f00] py-2 rounded-full text-white font-semibold hover:brightness-110 transition"
                            >
                                Login
                            </button>
                            
                            {/* <Link to="/signup" className="block mt-2 text-sm text-center text-orange-400 hover:underline">
                                Signup as a Admin
                            </Link> */}
      </form>
    </div>
  </div>
  )
}

export default AdminLogin
