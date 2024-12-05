import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdoptionApplications = () => {
  const [applications, setApplications] = useState([]);

  // Dummy data for adoption applications (replace with actual API call later)
  useEffect(() => {
    setApplications([
      { id: 1, animalName: 'Bella', adopterName: 'John Doe', status: 'Pending' },
      { id: 2, animalName: 'Milo', adopterName: 'Jane Smith', status: 'Approved' },
      { id: 3, animalName: 'Charlie', adopterName: 'Tom Johnson', status: 'Pending' },
      { id: 4, animalName: 'Lucy', adopterName: 'Emily Davis', status: 'Rejected' },
    ]);
  }, []);

  // Handle approval of adoption application
  const handleApprove = (applicationId) => {
    const updatedApplications = applications.map((app) =>
      app.id === applicationId ? { ...app, status: 'Approved' } : app
    );
    setApplications(updatedApplications);
    console.log(`Adoption Application ID: ${applicationId} Approved`);
  };

  // Handle rejection of adoption application
  const handleReject = (applicationId) => {
    const updatedApplications = applications.map((app) =>
      app.id === applicationId ? { ...app, status: 'Rejected' } : app
    );
    setApplications(updatedApplications);
    console.log(`Adoption Application ID: ${applicationId} Rejected`);
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
        <h2 className="text-3xl font-semibold text-center mb-6">Adoption Applications</h2>

        {/* Adoption Applications Table */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Animal Name</th>
                <th className="px-4 py-2 text-left">Adopter Name</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id} className="border-b">
                  <td className="px-4 py-2">{application.animalName}</td>
                  <td className="px-4 py-2">{application.adopterName}</td>
                  <td className="px-4 py-2">{application.status}</td>
                  <td className="px-4 py-2">
                    {application.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(application.id)}
                          className="text-green-500 mr-4"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(application.id)}
                          className="text-red-500"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {application.status === 'Approved' && (
                      <span className="text-green-500">Approved</span>
                    )}
                    {application.status === 'Rejected' && (
                      <span className="text-red-500">Rejected</span>
                    )}
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

export default AdoptionApplications;
