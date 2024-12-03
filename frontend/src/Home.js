import React from "react";
import textbg from './assets/homebg.jpg'; // Adjust the path based on your folder structure
import { Link } from "react-router-dom";
import './styles.css';  // Make sure this points to the correct path

const Home = () => {
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
          <Link to="/">Home</Link>
          <Link to="/animals">Browse Animals</Link>
          <Link to="/adopt">Adopt</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/vet">Vet Services</Link>
          <Link to="/login">Staff Login</Link>
        </div>
      </nav>

      {/* Banner Section with Animated Background */}
      <section
        className="relative hero-bg bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${textbg})`,
          height: '550px' // Set your custom height here
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Animal Care System
          </h1>
          <p className="text-lg md:text-xl text-center mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Helping Animals Find a Loving Home
          </p>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__fadeIn animate__delay-1s">
          Our mission is to provide safe, loving environments for every animal in need, offering expert care, support, and a chance for a better life.
          </p>
          <div className="mt-6">
            <Link to="/animals">
            <button
              className="px-8 py-3 rounded-lg text-white transition transform hover:scale-105"
              style={{ backgroundColor: '#4992b8' }}  // Main color
              onMouseEnter={(e) => e.target.style.backgroundColor = '#3e7a99'}  // Darker color on hover
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4992b8'}  // Revert back to main color
            >
              Browse Animals
            </button>
            </Link>
            <Link to="/donate">
              <button
              className="px-8 py-3 rounded-lg text-white transition ml-6 transform hover:scale-105"
              style={{ backgroundColor: '#4992b8' }}  // Main color
              onMouseEnter={(e) => e.target.style.backgroundColor = '#3e7a99'}  // Darker color on hover
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4992b8'}  // Revert back to main color
            >
              Donate Now
            </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Sections */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Featured Animals</h3>
          <p className="mt-4">Meet some of our amazing animals waiting for a home.</p>
          <Link to="/animals" className="text-blue-500 hover:underline">
            See More
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Adoption Process</h3>
          <p className="mt-4">Learn how easy it is to adopt your new best friend.</p>
          <Link to="/adopt" className="text-blue-500 hover:underline">
            Start Adoption
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Your Impact</h3>
          <p className="mt-4">Your donations make a real difference in animal lives.</p>
          <Link to="/donate" className="text-blue-500 hover:underline">
            Donate Now
          </Link>
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

export default Home;
