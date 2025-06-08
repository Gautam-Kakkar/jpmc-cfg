import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { useNavigate } from 'react-router-dom';

const DashboardAdmin = () => {
  const [showFilteredChildren, setShowFilteredChildren] = useState(false);
  const navigate = useNavigate();

  // Sample data for children
  const allChildren = [
    {
      id: 1,
      name: 'Aarav Sharma',
      age: 3,
      location: 'Delhi, India',
      progress: 85,
      status: 'Connected',
      photo: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      subjects: { social: 80, emotional: 90, physical: 85, cognitive: 88, aesthetic: 82 },
      volunteer: 'Priya Singh'
    },
    {
      id: 2,
      name: 'Ishaan Patel',
      age: 7,
      location: 'Mumbai, India',
      progress: 65,
      status: 'Needs Support',
      photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      subjects: { social: 60, emotional: 70, physical: 65, cognitive: 62, aesthetic: 68 },
      volunteer: 'Rohit Mehra'
    },
    {
      id: 3,
      name: 'Diya Nair',
      age: 5,
      location: 'Bangalore, India',
      progress: 92,
      status: 'Excellent',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      subjects: { social: 95, emotional: 90, physical: 92, cognitive: 94, aesthetic: 90 },
      volunteer: 'Anjali Rao'
    },
    {
      id: 4,
      name: 'Kabir Verma',
      age: 6,
      location: 'Kolkata, India',
      progress: 58,
      status: 'Needs Support',
      photo: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      subjects: { social: 55, emotional: 60, physical: 58, cognitive: 59, aesthetic: 57 },
      volunteer: 'Sunita Joshi'
    },
    {
      id: 5,
      name: 'Meera Desai',
      age: 8,
      location: 'Ahmedabad, India',
      progress: 78,
      status: 'Good Progress',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      subjects: { social: 75, emotional: 80, physical: 78, cognitive: 79, aesthetic: 77 },
      volunteer: 'Vikas Kumar'
    },
    {
      id: 6,
      name: 'Riya Gupta',
      age: 4,
      location: 'Chennai, India',
      progress: 45,
      status: 'Critical Support',
      photo: 'https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      subjects: { social: 40, emotional: 50, physical: 45, cognitive: 42, aesthetic: 48 },
      volunteer: 'Neha Agarwal'
    }
  ];

  // Statistics
  const totalChildren = allChildren.length;
  const lackingChildren = allChildren.filter(child => child.progress < 70).length;
  const volunteers = [...new Set(allChildren.map(child => child.volunteer))].length;

  // Filter children with progress < 70%
  const filteredChildren = allChildren.filter(child => child.progress < 70);

  // Data for charts
  const progressData = [
    { name: 'Excellent (90-100%)', value: allChildren.filter(c => c.progress >= 90).length, color: '#10B981' },
    { name: 'Good (70-89%)', value: allChildren.filter(c => c.progress >= 70 && c.progress < 90).length, color: '#F59E0B' },
    { name: 'Needs Support (<70%)', value: allChildren.filter(c => c.progress < 70).length, color: '#EF4444' }
  ];

  const subjectData = [
    {
      subject: 'Social',
      average: Math.round(allChildren.reduce((acc, child) => acc + child.subjects.social, 0) / allChildren.length)
    },
    {
      subject: 'Emotional',
      average: Math.round(allChildren.reduce((acc, child) => acc + child.subjects.emotional, 0) / allChildren.length)
    },
    {
      subject: 'Physical',
      average: Math.round(allChildren.reduce((acc, child) => acc + child.subjects.physical, 0) / allChildren.length)
    },
    {
      subject: 'Cognitive',
      average: Math.round(allChildren.reduce((acc, child) => acc + child.subjects.cognitive, 0) / allChildren.length)
    },
    {
      subject: 'Aesthetic',
      average: Math.round(allChildren.reduce((acc, child) => acc + child.subjects.aesthetic, 0) / allChildren.length)
    }
  ];

  const monthlyProgressData = [
    { month: 'Jan', progress: 65 },
    { month: 'Feb', progress: 68 },
    { month: 'Mar', progress: 72 },
    { month: 'Apr', progress: 75 },
    { month: 'May', progress: 78 },
    { month: 'Jun', progress: 82 }
  ];

  const getProgressColor = (progress) => {
    if (progress >= 90) return 'text-green-500';
    if (progress >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Good Progress': return 'bg-blue-100 text-blue-800';
      case 'Connected': return 'bg-green-100 text-green-800';
      case 'Needs Support': return 'bg-yellow-100 text-yellow-800';
      case 'Critical Support': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#ff5f00]">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Admin"
                />
                <span className="text-sm font-medium text-gray-700">Admin</span>
              </div>
              <button className="bg-[#ff5f00] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#e55400] transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-blue-500 p-3 rounded-lg">
                <i className="fas fa-child text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{totalChildren}</p>
                <p className="text-sm text-gray-600">Total Children Enrolled</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-red-500 p-3 rounded-lg">
                <i className="fas fa-exclamation-triangle text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{lackingChildren}</p>
                <p className="text-sm text-gray-600">Children Lacking Progress</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-green-500 p-3 rounded-lg">
                <i className="fas fa-users text-white text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900">{volunteers}</p>
                <p className="text-sm text-gray-600">Active Volunteers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Children Profiles Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Children Profiles</h2>
            <button className="text-[#ff5f00] hover:text-[#e55400] font-medium flex items-center">
              View All <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
          
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {allChildren.slice(0, 8).map((child) => (
              <div
                key={child.id}
                className="flex-shrink-0 text-center cursor-pointer"
                onClick={() => {
                  if (child.name === 'Aarav Sharma') navigate('/aaravinfo');
                }}
              >
                <div className="relative">
                  <img
                    className="w-16 h-16 rounded-full object-cover mx-auto mb-2 border-4 border-white shadow-lg"
                    src={child.photo}
                    alt={child.name}
                  />
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    child.progress >= 90 ? 'bg-green-500' : 
                    child.progress >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  } text-white`}>
                    {child.progress}
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900 truncate w-20">{child.name.split(' ')[0]}</p>
                <p className="text-xs text-gray-500">{child.age}y</p>
              </div>
            ))}
            <div className="flex-shrink-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#ff5f00] hover:text-[#ff5f00] transition-colors">
                <i className="fas fa-arrow-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Performance Filter</h2>
            <button
              onClick={() => setShowFilteredChildren(!showFilteredChildren)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                showFilteredChildren 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <i className="fas fa-filter mr-2"></i>
              {showFilteredChildren ? 'Show All Children' : 'Show Children < 70% Progress'}
            </button>
          </div>

          {showFilteredChildren && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-red-600 mb-4">
                Children Needing Attention ({filteredChildren.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredChildren.map((child) => (
                  <div key={child.id} className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <div className="flex items-center mb-3">
                      <img
                        className="w-12 h-12 rounded-full object-cover mr-3"
                        src={child.photo}
                        alt={child.name}
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{child.name}</h4>
                        <p className="text-sm text-gray-600">{child.location}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Progress:</span>
                      <span className={`font-bold ${getProgressColor(child.progress)}`}>
                        {child.progress}%
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(child.status)}`}>
                        {child.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Visual Data Representation */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Overall Performance Analytics</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Progress Distribution Pie Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={progressData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {progressData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Subject Performance Bar Chart */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Subject Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="average" fill="#ff5f00" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Progress Trend */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Progress Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="progress" stroke="#ff5f00" fill="#ff5f00" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <i className="fas fa-plus mr-2 text-[#ff5f00]"></i>
              Add New Child
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <i className="fas fa-user-plus mr-2 text-[#ff5f00]"></i>
              Add Volunteer
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <i className="fas fa-file-export mr-2 text-[#ff5f00]"></i>
              Export Report
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <i className="fas fa-cog mr-2 text-[#ff5f00]"></i>
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;