import React from "react";
import textbg from './assets/homebg.jpg'; // Adjust the path based on your folder structure
import { Link } from "react-router-dom";
import './styles.css';  // Make sure this points to the correct path
import 'animate.css';
import { FaPaw, FaHeart, FaStethoscope } from 'react-icons/fa'; // Import icons for the cards

const Home = () => {
  return (
    <div>
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#1a2b3b' }}>
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
          <img src="/catlogo.png" alt="Cat Logo" className="w-8 h-8 mr-2" />
          Animal Care
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/animals" className="text-white hover:text-gray-300">Browse Animals</Link>
          <Link to="/adopt" className="text-white hover:text-gray-300">Adopt</Link>          
          <Link to="/vet" className="text-white hover:text-gray-300">Vet Services</Link>
          <Link to="/login" className="text-white hover:text-gray-300">User Login</Link>
          <Link to="/adminlogin" className="text-white hover:text-gray-300">Staff Login</Link>
        </div>
      </nav>

      {/* Banner Section with Animated Background */}
      <section
        className="relative hero-bg bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${textbg})`,
          height: '630px' // Set your custom height here
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Animal Care System
          </h1>
          <p className="text-lg md:text-xl text-center mb-6 animate__animated animate__slideInUp">
            Helping Animals Thrive, One Paw at a Time
          </p>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
            We believe that every animal deserves love, care, and a forever home. Our team is dedicated to providing expert veterinary services, helping you find the perfect companion, and making sure that animals receive the care they need to thrive.
          </p>
          <div className="mt-6">            
          <Link to="/adopt">
            <button
              className="px-8 py-3 rounded-lg text-white bg-[#4992b8] transition-all transform hover:scale-105 hover:translate-y-[-2px] hover:bg-[#3e7a99] animate__animated animate__slideInUp">
              Adopt Animals
            </button>
          </Link>
          <Link to="/vet">
            <button
              className="px-8 py-3 rounded-lg text-white bg-[#4992b8] transition-all transform hover:scale-105 hover:translate-y-[-2px] hover:bg-[#3e7a99] animate__animated animate__slideInUp ml-6">
              Browse Vets
            </button>
          </Link>          
          </div>
        </div>
      </section>      
      
      {/* Feature Cards Section */}
      <section className="feature-cards py-14 bg-gray-50">
        <div className="container px-6 text-center">          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {/* Browse Animals */}
            <div className="bg-gradient-to-r from-[#325473] to-[#1a2b3b] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex flex-col justify-center items-center mb-4">
                <FaHeart className="text-5xl text-white mb-4" />
                <h3 className="text-2xl font-semibold text-white">Browse Animals</h3>
              </div>
              <p className="text-lg text-white mb-4">
              Explore our adoptable animals and find your perfect companion today!
              </p>
              <Link to="/animals">
                <button className="w-full py-3 rounded-lg bg-[#1a222e] text-white font-semibold hover:bg-[#4b6282] transition-all">
                  Browse Collection
                </button>
              </Link>
            </div>

            {/* Adopt an Animal */}
            <div className="bg-gradient-to-r from-[#325473] to-[#1a2b3b] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex flex-col justify-center items-center mb-4">
                <FaPaw className="text-5xl text-white mb-4" />
                <h3 className="text-2xl font-semibold text-white">Adopt an Animal</h3>
              </div>
              <p className="text-lg text-white mb-4">
                Find your new furry friend. Our adoption process is simple, and we’re here to help.
              </p>
              <Link to="/adopt">
                <button className="w-full py-3 rounded-lg bg-[#1a222e] text-white font-semibold hover:bg-[#4b6282] transition-all">
                  Start Adoption
                </button>
              </Link>
            </div>            

            {/* Vet Services */}
            <div className="bg-gradient-to-r from-[#325473] to-[#1a2b3b] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex flex-col justify-center items-center mb-4">
                <FaStethoscope className="text-5xl text-white mb-4" />
                <h3 className="text-2xl font-semibold text-white">Vet Services</h3>
              </div>
              <p className="text-lg text-white mb-4">
                Our veterinarians provide top-notch care for your pets, from routine check-ups to treatments.
              </p>
              <Link to="/vet">
                <button className="w-full py-3 rounded-lg bg-[#1a222e] text-white font-semibold hover:bg-[#4b6282] transition-all">
                  Book an Appointment
                </button>
              </Link>
            </div>
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

export default Home;
