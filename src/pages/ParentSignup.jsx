import React, { useState } from 'react';

function ParentSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle signup logic here (e.g., send data to backend)
    console.log("Signup successful", formData);
  };

  return (
    <div className="min-h-screen bg-[#1a202e] text-white flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[#2d3748] p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-400">Parent Signup</h2>

        {/* Name */}
        <label className="block mb-2 text-sm font-semibold" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Enter your full name"
          className="w-full px-4 py-2 mb-4 rounded bg-[#1a202e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email */}
        <label className="block mb-2 text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 rounded bg-[#1a202e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password */}
        <label className="block mb-2 text-sm font-semibold" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Enter your password"
          className="w-full px-4 py-2 mb-4 rounded bg-[#1a202e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Confirm Password */}
        <label className="block mb-2 text-sm font-semibold" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          placeholder="Re-enter your password"
          className="w-full px-4 py-2 mb-4 rounded bg-[#1a202e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {/* Phone Number */}
        <label className="block mb-2 text-sm font-semibold" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 mb-6 rounded bg-[#1a202e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={formData.phone}
          onChange={handleChange}
        />
        

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#ff5f00] to-[#ff6f00] py-2 rounded-full text-white font-semibold hover:brightness-110 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default ParentSignup;
