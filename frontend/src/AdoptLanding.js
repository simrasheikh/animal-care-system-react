// src/AdoptLanding.js
import React from 'react';
import { Link } from 'react-router-dom';
import textbg from './assets/adoptlandingbg.png'; // The background image

const AdoptLanding = () => {
  return (
    <div>
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#66443e' }}>
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
            {/* Logo to the left */}
            <img src="/catlogo.png" alt="Cat Logo" className="w-8 h-8 mr-2" /> 
            Animal Care
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/animals" className="text-white hover:text-gray-300">Browse Animals</Link>
          <Link to="/adopt" className="text-white hover:text-gray-300">Adopt</Link>
          <Link to="/donate" className="text-white hover:text-gray-300">Donate</Link>
          <Link to="/vet" className="text-white hover:text-gray-300">Vet Services</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Staff Login</Link>
        </div>
      </nav>

      {/* Landing Page with Background */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(${textbg})`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold text-center">Thank You for Wanting to Adopt!</h1>
          <p className="text-lg mt-2 text-center">You're doing a great thing! Let's find your new best friend.</p>
          <p className="text-center mt-4 text-lg">Select an animal below and fill out the form to adopt.</p>
          <div className="mt-6">
            <Link to="/animals">
              <button className="px-6 py-2 bg-blue-700 rounded-lg text-white hover:bg-blue-800 transition">
                Browse Animals
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default AdoptLanding;
