    import React from 'react';

    function Admin() {
    return (
        <div className="bg-[#1a202e] min-h-screen text-white">
        {/* Header */}
        <header className="bg-[#16202b] shadow-md py-4 px-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold font-rounded" style={{ fontFamily: 'Baloo 2, cursive' }}>
            Admin Dashboard
            </h1>
            <button className="bg-gradient-to-r from-[#ff5f00] to-[#ff6f00] px-4 py-2 rounded-full font-semibold hover:brightness-110 transition">
            Logout
            </button>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto p-6">
            <h2 className="text-xl font-semibold mb-6">Children Information</h2>
            <div className="overflow-x-auto rounded-lg shadow-lg bg-[#16202b]">
            <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-[#1a202e]">
                <tr>
                    {['Photo', 'Name', 'Age', 'Location', 'Status', 'Notes', 'Actions'].map((heading) => (
                    <th
                        key={heading}
                        className={`px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider ${
                        heading === 'Actions' ? 'text-center' : 'text-left'
                        }`}
                    >
                        {heading}
                    </th>
                    ))}
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-700">
                {[
    {
                    name: 'Amina',
      age: 8,
      location: 'Nairobi, Kenya',
      status: 'Connected',
                    statusColor: 'text-green-400',
                    notes: 'Needs school supplies and medical checkup.',
                    photo: 'https://storage.googleapis.com/a1aa/image/de46cb85-03a9-4087-a743-ccb508dbbddc.jpg',
    },
    {
                    name: 'Rahul',
      age: 10,
      location: 'Mumbai, India',
                    status: 'Pending',
                    statusColor: 'text-yellow-400',
                    notes: 'Waiting for NGO connection.',
                    photo: 'https://storage.googleapis.com/a1aa/image/67dadac7-cdcb-4a96-7e96-0c3751d8ae4a.jpg',
    },
    {
                    name: 'Fatima',
      age: 7,
      location: 'Lagos, Nigeria',
                    status: 'Connected',
                    statusColor: 'text-green-400',
                    notes: 'Recently connected with NGO for education support.',
                    photo: 'https://storage.googleapis.com/a1aa/image/90954004-9722-45b3-e157-10a847789f7b.jpg',
                    },
                ].map((child, index) => (
                    <tr key={index} className="hover:bg-[#2d3748] transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <img
                        src={child.photo}
                        alt={`Photo of child named ${child.name}`}
                        className="w-14 h-14 rounded object-cover"
                        width="60"
                        height="60"
                        />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{child.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{child.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{child.location}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${child.statusColor}`}>
                        {child.status}
                    </td>
                    <td
                        className="px-6 py-4 whitespace-nowrap text-sm max-w-xs truncate"
                        title={child.notes}
                    >
                        {child.notes}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm space-x-2">
                        <button aria-label="View details" className="text-blue-400 hover:text-blue-600">
                        <i className="fas fa-eye"></i>
                        </button>
                        <button aria-label="Edit details" className="text-yellow-400 hover:text-yellow-600">
                        <i className="fas fa-edit"></i>
                        </button>
                        <button aria-label="Delete record" className="text-red-500 hover:text-red-700">
                        <i className="fas fa-trash-alt"></i>
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </main>
    </div>
  );
    }

export default Admin;
