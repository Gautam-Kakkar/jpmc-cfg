import React, { useRef, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const aarav = {
  name: 'Aarav Sharma',
  age: 3,
  location: 'Delhi, India',
  progress: 85,
  status: 'Connected',
  level: 'Upper Nursery',
  photo: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  subjects: { social: 80, emotional: 90, physical: 85, cognitive: 88, aesthetic: 82 },
  volunteer: 'Priya Singh',
  growth: [
    { month: 'Jan', progress: 70 },
    { month: 'Feb', progress: 75 },
    { month: 'Mar', progress: 78 },
    { month: 'Apr', progress: 80 },
    { month: 'May', progress: 83 },
    { month: 'Jun', progress: 85 }
  ]
};

const AaravInfo = () => {
  const [uploadedDoc, setUploadedDoc] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [info, setInfo] = useState({ ...aarav });
  const fileInputRef = useRef();

  const handleUpload = (e) => {
    if (e.target.files.length > 0) {
      setUploadedDoc(e.target.files[0].name);
    }
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubjectChange = (e, subject) => {
    setInfo({
      ...info,
      subjects: { ...info.subjects, [subject]: Number(e.target.value) }
    });
  };

  const handleSave = () => {
    setEditMode(false);
    // Here you would typically send updated info to backend
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl border border-gray-200">
        <div className="flex flex-col items-center mb-6">
          <img
            className="w-28 h-28 rounded-full object-cover mb-2 border-4 border-[#ff5f00] shadow-lg"
            src={info.photo}
            alt={info.name}
          />
          <h2 className="text-3xl font-bold text-[#ff5f00]">{info.name}</h2>
          <p className="text-gray-600">{info.location}</p>
          <span className="mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
            Level: {info.level}
          </span>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <p><span className="font-semibold">Age:</span> {info.age} years</p>
            <p>
              <span className="font-semibold">Progress:</span>
              <span className={`ml-2 font-bold ${info.progress >= 90 ? 'text-green-600' : info.progress >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                {info.progress}%
              </span>
            </p>
            <p>
              <span className="font-semibold">Status:</span>
              <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                info.status === 'Excellent' ? 'bg-green-100 text-green-800' :
                info.status === 'Good Progress' ? 'bg-blue-100 text-blue-800' :
                info.status === 'Connected' ? 'bg-green-100 text-green-800' :
                info.status === 'Needs Support' ? 'bg-yellow-100 text-yellow-800' :
                info.status === 'Critical Support' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {info.status}
              </span>
            </p>
            <p><span className="font-semibold">Volunteer:</span> {info.volunteer}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Subjects</h3>
            <ul className="list-disc list-inside text-gray-700">
              {Object.entries(info.subjects).map(([subject, value]) => (
                <li key={subject} className="capitalize">
                  {subject}: {editMode ? (
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={value}
                      onChange={e => handleSubjectChange(e, subject)}
                      className="w-16 ml-2 border rounded px-1 py-0.5 text-sm"
                    />
                  ) : (
                    <span className="ml-1">{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Growth Tracker</h3>
          <div className="bg-gray-50 rounded-lg border p-3">
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={info.growth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Area type="monotone" dataKey="progress" stroke="#ff5f00" fill="#ff5f00" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Upload Document</h3>
          <input
            type="file"
            ref={fileInputRef}
            className="mb-2"
            onChange={handleUpload}
          />
          {uploadedDoc && (
            <p className="text-green-600 text-sm">Uploaded: {uploadedDoc}</p>
          )}
        </div>
        <div className="flex justify-between">
          <button
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${editMode ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-[#ff5f00] text-white hover:bg-[#e55400]'}`}
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? 'Cancel' : 'Edit Info'}
          </button>
          {editMode && (
            <button
              className="px-4 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 ml-2"
              onClick={handleSave}
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-xs">
        Personalized for Aarav Sharma | Powered by Admin Dashboard
      </div>
    </div>
  );
};

export default AaravInfo;