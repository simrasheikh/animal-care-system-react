import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MedicalRecords = () => {
  const [records, setRecords] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // UseEffect for fetching data (dummy data for now)
  useEffect(() => {
    setLoading(true);

    // Dummy data
    const dummyData = [
      {
        id: 1,
        animalId: 101,
        treatmentDate: '2024-12-01',
        diagnosis: 'Fever',
        vetName: 'Dr. John Doe',
      },
      {
        id: 2,
        animalId: 102,
        treatmentDate: '2024-11-15',
        diagnosis: 'Infection',
        vetName: 'Dr. Jane Smith',
      },
      {
        id: 3,
        animalId: 103,
        treatmentDate: '2024-12-02',
        diagnosis: 'Sprain',
        vetName: 'Dr. Alice Brown',
      },
    ];

    // Simulate fetching data
    setTimeout(() => {
      setRecords(dummyData);
      setLoading(false);
    }, 1000);

    // Backend fetching (commented out for now)
    /*
    fetch('http://localhost:3001/medical-records', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch medical records.');
        }
        return response.json();
      })
      .then((data) => {
        setRecords(data); // Assuming the API returns an array of records
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching medical records:', err);
        setError('Failed to load medical records. Please try again later.');
        setLoading(false);
      });
    */
  }, []);

  // Filter records
  const filteredRecords = records.filter((record) =>
    filter ? record.animalId.toString().includes(filter) || record.vetName.toLowerCase().includes(filter.toLowerCase()) : true
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#21422b' }}>
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
          <img src="/catlogo.png" alt="Cat Logo" className="w-8 h-8 mr-2" />
          Animal Care
        </Link>
        <div className="space-x-4">
          <Link to="/staff-dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link to="/staff-dashboard/animal-management" className="text-white hover:text-gray-300">Animal Management</Link>
          <Link to="/staff-dashboard/adoption-applications" className="text-white hover:text-gray-300">Adoption Applications</Link>
          <Link to="/staff-dashboard/medical-records" className="text-white hover:text-gray-300">Medical Records</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Logout</Link>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Medical Records</h2>

        {/* Filter Section */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Animal ID or Vet Name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>

        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-teal-100 text-teal-800 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold">Total Records</h4>
            <p className="text-2xl font-bold">{records.length}</p>
          </div>
          <div className="bg-green-100 text-green-800 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold">Records by {filter || 'All Vets'}</h4>
            <p className="text-2xl font-bold">{filteredRecords.length}</p>
          </div>
        </div>

        {/* Loading/Error Handling */}
        {loading ? (
          <p className="text-center text-lg">Loading medical records...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredRecords.length === 0 ? (
          <p className="text-center text-gray-500">No records found.</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">Animal ID</th>
                  <th className="px-4 py-2 text-left">Treatment Date</th>
                  <th className="px-4 py-2 text-left">Diagnosis</th>
                  <th className="px-4 py-2 text-left">Vet Name</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((record) => (
                  <tr key={record.id} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-2">{record.animalId}</td>
                    <td className="px-4 py-2">{record.treatmentDate}</td>
                    <td className="px-4 py-2">{record.diagnosis}</td>
                    <td className="px-4 py-2">{record.vetName}</td>
                    <td className="px-4 py-2 flex space-x-2">
                      <button className="text-blue-500 hover:text-blue-700">
                        <i className="fas fa-edit"></i> Edit
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <i className="fas fa-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Add New Record Button */}
        <div className="text-center mt-6">
          <Link to="/staff-dashboard/medical-records/add">
            <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">
              Add New Medical Record
            </button>
          </Link>
        </div>
      </div>

      <footer className="bg-black text-white p-4 text-center mt-auto">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MedicalRecords;
