import React, { useState } from 'react';

const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAddChildModal, setShowAddChildModal] = useState(false);
  const [children, setChildren] = useState([
    {
      id: 1,
      name: "ABC",
      age: 3,
      // grade: "3rd Grade",
      image: "#",
      subjects: {
        social: 85,
        physical: 92,
        asthetic: 78,
        cognitive: 88,
        emotional: 90
      },
      overallProgress: 86,
      // attendance: 95,
      lastUpdate: "2 days ago",
      activities: ["Level 2"],
      nextGoal: "Imporove Eating Habits"
    },
    {
      id: 2,
      name: "XYZ",
      age: 1,
      // grade: "5th Grade",
      image: "#",
      subjects: {
        social: 85,
        physical: 92,
        asthetic: 78,
        cognitive: 88,
        emotional: 90
      },
      overallProgress: 84,
      attendance: 88,
      lastUpdate: "1 week ago",
      activities: ["Level 1"],
      nextGoal: "Improve Coginitive Skills"
    },
    {
      id: 3,
      name: "PQR",
      age: "8 months",
      // grade: "2nd Grade",
      image: "#",
      subjects: {
        social: 85,
        physical: 92,
        asthetic: 78,
        cognitive: 88,
        emotional: 90
      },
      overallProgress: 78,
      attendance: 92,
      lastUpdate: "3 days ago",
      activities: ["Level 1"],
      nextGoal: "Enhance Physical Activities"
    }
  ]);

  const [newChild, setNewChild] = useState({
    name: '',
    age: '',
    grade: '',
    image: ''
  });

  const notifications = [
    { id: 1, message: "Sarah's monthly report is ready", time: "2 hours ago", unread: true },
    { id: 2, message: "Ahmed's soccer game this Saturday", time: "1 day ago", unread: true },
    { id: 3, message: "Maria's art project won first place", time: "3 days ago", unread: false },
    { id: 4, message: "Parent-teacher conference scheduled", time: "1 week ago", unread: false }
  ];

  const stats = [
    { label: "Total Children", value: children.length.toString(), icon: "fas fa-child", color: "bg-blue-500" },
    { label: "Average Progress", value: `${Math.round(children.reduce((acc, child) => acc + child.overallProgress, 0) / children.length)}%`, icon: "fas fa-chart-line", color: "bg-green-500" },
    { label: "Active Grades", value: new Set(children.map(child => child.grade)).size.toString(), icon: "fas fa-graduation-cap", color: "bg-purple-500" },
    { label: "This Month Updates", value: "12", icon: "fas fa-bell", color: "bg-orange-500" }
  ];

  const handleAddChild = (e) => {
    e.preventDefault();
    if (newChild.name && newChild.age && newChild.grade) {
      const child = {
        id: children.length + 1,
        ...newChild,
        age: parseInt(newChild.age),
        subjects: {
          math: 0,
          english: 0,
          science: 0,
          social: 0
        },
        overallProgress: 0,
        attendance: 0,
        lastUpdate: "Just added",
        activities: [],
        nextGoal: "Set initial goals",
        image: newChild.image || "https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
      };
      setChildren([...children, child]);
      setNewChild({ name: '', age: '', grade: '', image: '' });
      setShowAddChildModal(false);
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 85) return 'bg-green-500';
    if (progress >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-[#ff5f00]">Parent Dashboard</h1>
              </div>
            </div>

            {/* Navigation Links */}
              

            {/* Right side - Notifications and Profile */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 text-gray-600 hover:text-[#ff5f00] hover:bg-gray-100 rounded-full transition-colors relative"
                >
                  <i className="fas fa-bell text-lg"></i>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    2
                  </span>
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
                            notification.unread ? 'bg-blue-50' : ''
                          }`}
                        >
                          <p className="text-sm text-gray-900">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center border-t border-gray-200">
                      <a href="#" className="text-sm text-[#ff5f00] hover:underline">
                        View all notifications
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 p-2 text-gray-600 hover:text-[#ff5f00] hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="Profile"
                  />
                  <span className="hidden md:block text-sm font-medium">Parent Account</span>
                  <i className="fas fa-chevron-down text-xs"></i>
                </button>

                {/* Profile Dropdown */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">Parent Account</p>
                      <p className="text-xs text-gray-500">parent@email.com</p>
                    </div>
                    <div className="py-2">
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <i className="fas fa-user mr-3"></i>
                        Profile Settings
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <i className="fas fa-cog mr-3"></i>
                        Account Settings
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <i className="fas fa-question-circle mr-3"></i>
                        Help & Support
                      </a>
                      <hr className="my-2" />
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        <i className="fas fa-sign-out-alt mr-3"></i>
                        Logout
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Children Progress Dashboard</h1>
            <p className="text-gray-600">Track your children's academic progress and activities.</p>
          </div>
          <button
            onClick={() => setShowAddChildModal(true)}
            className="bg-[#ff5f00] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e55400] transition-colors flex items-center"
          >
            <i className="fas fa-plus mr-2"></i>
            Add Child
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <i className={`${stat.icon} text-white text-xl`}></i>
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Children Progress Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Children Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {children.map((child) => (
              <div key={child.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      src={child.image}
                      alt={child.name}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{child.name}</h3>
                      <p className="text-sm text-gray-600">Age {child.age} • {child.grade}</p>
                    </div>
                  </div>

                  {/* Overall Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                      <span className="text-sm font-bold text-gray-900">{child.overallProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(child.overallProgress)}`}
                        style={{ width: `${child.overallProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Subject Progress */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Subject Progress</h4>
                    <div className="space-y-2">
                      {Object.entries(child.subjects).map(([subject, score]) => (
                        <div key={subject} className="flex items-center justify-between">
                          <span className="text-xs text-gray-600 capitalize w-16">{subject}</span>
                          <div className="flex-1 mx-3">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(score)}`}
                                style={{ width: `${score}%` }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-xs font-medium text-gray-900 w-8">{score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Attendance */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Attendance</span>
                      <span className={`text-sm font-medium ${child.attendance >= 90 ? 'text-green-600' : child.attendance >= 80 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {child.attendance}%
                      </span>
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Current Activities:</p>
                    <div className="flex flex-wrap gap-1">
                      {child.activities.map((activity, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Next Goal */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">Next Goal:</p>
                    <p className="text-sm text-gray-700">{child.nextGoal}</p>
                  </div>

                  <p className="text-xs text-gray-500 mb-4">Last update: {child.lastUpdate}</p>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-[#ff5f00] text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-[#e55400] transition-colors">
                      View Details
                    </button>
                    <button className="p-2 text-gray-600 hover:text-[#ff5f00] hover:bg-gray-100 rounded-lg transition-colors">
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Child Modal */}
      {showAddChildModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Add New Child</h3>
              <button
                onClick={() => setShowAddChildModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form onSubmit={handleAddChild} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={newChild.name}
                  onChange={(e) => setNewChild({...newChild, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5f00] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  value={newChild.age}
                  onChange={(e) => setNewChild({...newChild, age: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5f00] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                <input
                  type="text"
                  value={newChild.grade}
                  onChange={(e) => setNewChild({...newChild, grade: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5f00] focus:border-transparent"
                  placeholder="e.g., 3rd Grade"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL (Optional)</label>
                <input
                  type="url"
                  value={newChild.image}
                  onChange={(e) => setNewChild({...newChild, image: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5f00] focus:border-transparent"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddChildModal(false)}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#ff5f00] text-white rounded-lg hover:bg-[#e55400] transition-colors"
                >
                  Add Child
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;