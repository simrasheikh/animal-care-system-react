import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AdoptionApplications = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState('All'); // Filter state
  // Variables for summary
  const totalApplications = applications.length;
  const pendingApplications = applications.filter((app) => app.STATUS === 'Pending').length;
  const approvedApplications = applications.filter((app) => app.STATUS === 'Approved').length;

  // Dummy data for adoption applications
  useEffect(() => {
    fetch('http://localhost:3001/adoption-applications', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch applications.');
        }
        return response.json();
      })
      .then((data) => {
        setApplications(data); // Assuming the API returns a list of applications
      })
      .catch((error) => {
        console.error('Error fetching applications:', error);
      });
    
  }, []);

  // Handle approval of adoption application
  const handleApprove = (application) => {
    // console.log('Approved application:', application.ADOPTION_ID);
    const updatedApplications = applications.map((app) =>
      app.ADOPTION_ID === application.ADOPTION_ID ? { ...app, STATUS: 'Approved' } : app
    );
    setApplications(updatedApplications);

    fetch(`http://localhost:3001/adoption-applications/${application.ADOPTION_ID}/approve`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        ADOPTION_ID: application.ADOPTION_ID,
        STATUS: 'Approved' }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to approve application.');
        }
        return response.json();
      })
      .then(() => {
        setApplications(updatedApplications);
      })
      .catch((error) => {
        console.error('Error approving application:', error);
      });
  };

  // Handle rejection of adoption application
  const handleReject = (application) => {
    const updatedApplications = applications.map((app) =>
      app.ADOPTION_ID === application.ADOPTION_ID ? { ...app, STATUS: 'Rejected' } : app
    );
    setApplications(updatedApplications);

    fetch(`http://localhost:3001/adoption-applications/${application.ADOPTION_ID}/reject`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        ADOPTION_ID: application.ADOPTION_ID,
        STATUS: 'Rejected' }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to reject application.');
        }
        return response.json();
      })
      .then(() => {
        setApplications(updatedApplications);
      })
      .catch((error) => {
        console.error('Error rejecting application:', error);
      });
  };

  // Filter applications by status
  const filteredApplications =
    filter === 'All'
      ? applications
      : applications.filter((app) => app.status === filter);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#21422b' }}>
        <Link to="/staff-dashboard" className="flex items-center text-2xl font-bold text-white">
          <img src="/catlogo2.png" alt="Cat Logo" className="w-8 h-8 mr-2" />
          Dashboard
        </Link>
        <div className="space-x-4">
          <Link to="/staff-dashboard" className="text-white hover:text-gray-300">Dashboard Home</Link>
          <Link to="/staff-dashboard/animal-management" className="text-white hover:text-gray-300">Animal Management</Link>
          <Link to="/staff-dashboard/adoption-applications" className="text-white hover:text-gray-300">Adoption Applications</Link>
          <Link to="/staff-dashboard/medical-records" className="text-white hover:text-gray-300">Medical Records</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Logout</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6 flex-grow">
        <h2 className="text-3xl font-semibold text-center mb-6">Adoption Applications</h2>

        {/* Summary Section with Circular Dials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center bg-blue-100 p-4 rounded shadow-md">
                <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                    value={totalApplications}
                    maxValue={100} // Adjust as needed
                    text={`${totalApplications}`}
                    styles={buildStyles({
                    textColor: '#2563eb',
                    pathColor: '#2563eb',
                    trailColor: '#dbeafe',
                    })}
                />
                </div>
                <p className="mt-4 text-lg font-semibold text-blue-800">Total Applications</p>
            </div>
            <div className="flex flex-col items-center bg-yellow-100 p-4 rounded shadow-md">
                <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                    value={pendingApplications}
                    maxValue={totalApplications || 1} // Prevent division by 0
                    text={`${pendingApplications}`}
                    styles={buildStyles({
                    textColor: '#ca8a04',
                    pathColor: '#ca8a04',
                    trailColor: '#fef08a',
                    })}
                />
                </div>
                <p className="mt-4 text-lg font-semibold text-yellow-800">Pending Applications</p>
            </div>
            <div className="flex flex-col items-center bg-green-100 p-4 rounded shadow-md">
                <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                    value={approvedApplications}
                    maxValue={totalApplications || 1}
                    text={`${approvedApplications}`}
                    styles={buildStyles({
                    textColor: '#15803d',
                    pathColor: '#15803d',
                    trailColor: '#bbf7d0',
                    })}
                />
                </div>
                <p className="mt-4 text-lg font-semibold text-green-800">Approved Applications</p>
            </div>
            </div>

        {/* Filter Section */}
        <div className="mb-4 flex justify-between items-center">
          <label className="text-lg font-semibold">
            Filter by Status:
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="ml-2 p-2 border rounded"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </label>
        </div>

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
              {filteredApplications.map((application) => (
                <tr key={application.ADOPTION_ID} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{application.ANIMAL_NAME}</td>
                  <td className="px-4 py-2">{application.OWNER_NAME}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        application.STATUS === 'Pending'
                          ? 'bg-yellow-500'
                          : application.STATUS === 'Approved'
                          ? 'bg-green-500'
                          : 'bg-red-500'
                      }`}
                    >
                      {application.STATUS}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex space-x-2">
                    {application.STATUS === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(application)}
                          className="text-green-500 hover:text-green-700"
                        >
                          <i className="fas fa-check"></i>
                        </button>
                        <button
                          onClick={() => handleReject(application)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </>
                    )}
                    {application.STATUS !== 'Pending' && (
                      <span className="text-gray-500">No actions available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredApplications.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No applications found.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center mt-auto">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default AdoptionApplications;
