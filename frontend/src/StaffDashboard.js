import React from 'react';
import { Link } from 'react-router-dom';

const StaffDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-semibold text-center mb-6">Staff Dashboard</h2>

        {/* Dashboard Feature Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Animal Management */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold mb-4">Animal Management</h3>
            <p className="text-lg mb-4">Manage animals in the system, including adding, editing, and deleting animal records.</p>
            <Link to="/staff-dashboard/animal-management">
              <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all">Manage Animals</button>
            </Link>
          </div>

          {/* Adoption Applications */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold mb-4">Adoption Applications</h3>
            <p className="text-lg mb-4">View and process adoption applications, including approval and rejection of requests.</p>
            <Link to="/staff-dashboard/adoption-applications">
              <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all">View Applications</button>
            </Link>
          </div>

          {/* Medical Records */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-all">
            <h3 className="text-2xl font-semibold mb-4">Medical Records</h3>
            <p className="text-lg mb-4">Manage and view the medical records of the animals, including treatments and health status.</p>
            <Link to="/staff-dashboard/medical-records">
              <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all">View Medical Records</button>
            </Link>
          </div>
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

export default StaffDashboard;
