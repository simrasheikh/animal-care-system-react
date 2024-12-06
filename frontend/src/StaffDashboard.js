import React from 'react';
import { Link } from 'react-router-dom';
import textbg from './assets/stafflandingbg.jpg'; // The background image
import { FaPaw, FaWeightHanging, FaDog, FaCat, FaMale, FaFemale } from 'react-icons/fa'; // Importing icons

const StaffDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#21422b' }}>
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
            {/* Logo to the left */}
            <img src="/catlogo.png" alt="Cat Logo" className="w-8 h-8 mr-2" /> 
            Animal Care
        </Link>
        <div className="space-x-4">
          <Link to="/staff-dashboard/animal-management" className="text-white hover:text-gray-300">Animal Management</Link>
          <Link to="/staff-dashboard/adoption-applications" className="text-white hover:text-gray-300">Adoption Applications</Link>
          <Link to="/staff-dashboard/medical-records" className="text-white hover:text-gray-300">Medical Records</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Logout</Link>
        </div>
      </nav>

      {/* Banner Section */}
      <section
        className="relative hero-bg bg-cover bg-center"
        style={{
          backgroundImage: `url(${textbg})`,
          height: '430px',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to the Staff Dashboard
          </h1>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
            Manage all aspects of animal care, adoptions, and medical records in one place.
          </p>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
          Explore the available options below to manage everything related to animal management.
          </p>
        </div>
      </section>

    {/* Dashboard Feature Links */}
    <div className="container mx-auto p-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Animal Management */}
        <div className="bg-[#406e4d] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
        <div className="text-center mb-4 text-white flex justify-center items-center flex-col">
            <FaPaw className="text-4xl mb-4" />
            <h3 className="text-2xl font-semibold">Animal Management</h3>
        </div>
        <p className="text-white mb-4">
            Manage animals in the system, including adding, editing, and deleting animal records.
        </p>
        <Link to="/staff-dashboard/animal-management">
            <button className="w-full py-3 rounded-lg bg-white text-teal-700 font-semibold hover:bg-[#284531] hover:text-white transition-colors">
            Manage Animals
            </button>
        </Link>
        </div>

        {/* Adoption Applications */}
        <div className="bg-[#57996b] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
        <div className="text-center mb-4 text-white flex justify-center items-center flex-col">
            <FaWeightHanging className="text-4xl mb-4" />
            <h3 className="text-2xl font-semibold">Adoption Applications</h3>
        </div>
        <p className="text-white mb-4">
            View and process adoption applications, including approval and rejection of requests.
        </p>
        <Link to="/staff-dashboard/adoption-applications">
            <button className="w-full py-3 rounded-lg bg-white text-teal-700 font-semibold hover:bg-[#284531] hover:text-white transition-colors">
            View Applications
            </button>
        </Link>
        </div>

        {/* Medical Records */}
        <div className="bg-[#406e4d] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
        <div className="text-center mb-4 text-white flex justify-center items-center flex-col">
            <FaDog className="text-4xl mb-4" />
            <h3 className="text-2xl font-semibold">Medical Records</h3>
        </div>
        <p className="text-white mb-4">
            Manage and view the medical records of the animals, including treatments and health status.
        </p>
        <Link to="/staff-dashboard/medical-records">
            <button className="w-full py-3 rounded-lg bg-white text-teal-700 font-semibold hover:bg-[#284531] hover:text-white transition-colors">
            View Medical Records
            </button>
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
