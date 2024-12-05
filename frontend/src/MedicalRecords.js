import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Added useNavigate import

const MedicalRecords = () => {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();  // Initialize navigate hook

  // Dummy data for medical records (replace with actual API call later)
  useEffect(() => {
    setRecords([
      {
        id: 1,
        animalName: 'Bella',
        treatmentDate: '2024-03-15',
        diagnosis: 'Vaccination',
        treatmentDetails: 'Administered Rabies vaccine',
        nextCheckupDate: '2024-09-15',
        vetName: 'Dr. Sarah Lee',
      },
      {
        id: 2,
        animalName: 'Milo',
        treatmentDate: '2024-06-01',
        diagnosis: 'Ear Infection',
        treatmentDetails: 'Prescribed antibiotics',
        nextCheckupDate: '2024-07-01',
        vetName: 'Dr. Kevin Smith',
      },
      {
        id: 3,
        animalName: 'Charlie',
        treatmentDate: '2024-05-10',
        diagnosis: 'Skin Infection',
        treatmentDetails: 'Applied topical ointment',
        nextCheckupDate: '2024-06-15',
        vetName: 'Dr. Sarah Lee',
      },
      // Add more records as needed
    ]);
  }, []);

  // Handle edit or view medical record (dummy action)
  const handleEdit = (recordId) => {
    console.log(`Editing medical record with ID: ${recordId}`);
    // Add logic to edit the medical record, like opening a modal or redirecting to an edit page
  };

  const handleAddNew = () => {
    navigate('/staff-dashboard/medical-records/add');  // Corrected to use navigate for redirection
  };

  return (
    <div>
      {/* Header */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
          <img src="/catlogo.png" alt="Logo" className="w-8 h-8 mr-2" />
          Animal Care System
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/animals" className="text-white hover:text-gray-300">Browse Animals</Link>
          <Link to="/adopt" className="text-white hover:text-gray-300">Adopt</Link>
          <Link to="/donate" className="text-white hover:text-gray-300">Donate</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Logout</Link>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Medical Records</h2>

        {/* Add New Medical Record Button */}
        <div className="mb-6 text-center">
          <button
            onClick={handleAddNew}
            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700"
          >
            Add New Medical Record
          </button>
        </div>

        {/* Medical Records Table */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Animal Name</th>
                <th className="px-4 py-2 text-left">Treatment Date</th>
                <th className="px-4 py-2 text-left">Diagnosis</th>
                <th className="px-4 py-2 text-left">Next Check-up</th>
                <th className="px-4 py-2 text-left">Vet Name</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id} className="border-b">
                  <td className="px-4 py-2">{record.animalName}</td>
                  <td className="px-4 py-2">{record.treatmentDate}</td>
                  <td className="px-4 py-2">{record.diagnosis}</td>
                  <td className="px-4 py-2">{record.nextCheckupDate}</td>
                  <td className="px-4 py-2">{record.vetName}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(record.id)}
                      className="text-blue-500 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleEdit(record.id)} // Implement actual delete function if needed
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default MedicalRecords;
