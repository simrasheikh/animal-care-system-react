// src/AdoptLanding.js
import React from 'react';
import { Link } from 'react-router-dom';
import textbg from './assets/adoptlandingbg.jpg'; // The background image

const AdoptLanding = () => {
  return (
    <div>
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#1a2b3b' }}>
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
        className="relative hero-bg bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${textbg})`,
          height: '547px' // Set your custom height here
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Thank You for Wanting to Adopt!
          </h1>
          <p className="text-lg md:text-xl text-center mb-6 animate__animated animate__slideInUp">
            Every animal deserves a chance to be loved. By adopting, you're not just gaining a pet; you're making a lifelong friend.
          </p>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
            Explore our adoptable animals and find your perfect companion today!
          </p>
        <div className="mt-10">
          <Link to="/animals">
          <button
            className="px-8 py-3 rounded-lg text-white animate__animated animate__slideInUp transition transform hover:scale-105"
            style={{ backgroundColor: '#4992b8' }}  // Main color
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3e7a99'}  // Darker color on hover
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4992b8'}  // Revert back to main color
          >
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
