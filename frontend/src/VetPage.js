import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import textbg from './assets/vetlandingbg.jpg'; // The background image

import vet1Image from './assets/vet1.jpg';
import vet2Image from './assets/vet2.jpg';
import vet3Image from './assets/vet3.jpg';

// Dummy data for vets (using imported images)
const vetsData = [
  {
    id: 1,
    name: 'Dr. Alice Green',
    specialty: 'General Medicine',
    profilePicture: vet1Image,  // Use imported image here
    availableTimes: ['Mon - 10:00 AM - 2:00 PM', 'Wed - 9:00 AM - 1:00 PM'],
    contact: 'alicegreen@vetclinic.com',
  },
  {
    id: 2,
    name: 'Dr. Bob Brown',
    specialty: 'Surgery',
    profilePicture: vet2Image,  // Use imported image here
    availableTimes: ['Tue - 11:00 AM - 3:00 PM', 'Thu - 9:00 AM - 12:00 PM'],
    contact: 'bobbrown@vetclinic.com',
  },
  {
    id: 3,
    name: 'Dr. Matt Damon',
    specialty: 'General Veterinary Care',
    profilePicture: vet3Image,  // Use imported image here
    availableTimes: ['Fri - 11:00 AM - 3:00 PM', 'Sat - 9:00 AM - 12:00 PM'],
    contact: 'mattdamon@vetclinic.com',
  },
  // More vets can be added here
];

const VetPage = () => {
  const [selectedVet, setSelectedVet] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: '',
    email: '',
    phone: '',
    vetId: '',
    appointmentTime: '',
  });
  const [isBooking, setIsBooking] = useState(false); // Simulating loading state
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleVetClick = (vet) => {
    setSelectedVet(vet);
    setAppointmentDetails({
      ...appointmentDetails,
      vetId: vet.id,
    });
  };

  const handleFormChange = (e) => {
    setAppointmentDetails({
      ...appointmentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsBooking(true);

    // Simulate sending data to the backend
    try {
      // Simulating backend booking request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccessMessage('Appointment successfully booked!');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('There was an error. Please try again.');
      setSuccessMessage('');
    } finally {
      setIsBooking(false);
    }
  };

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

      {/* Banner Section */}
      <section
        className="relative hero-bg bg-cover bg-center"
          style={{
          backgroundImage: `url(${textbg})`,
          height: '430px' // You can change this value as needed
        }}
      >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
        Meet Our Veterinarians
      </h1>
      <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
        Dedicated, compassionate, and highly skilled – our veterinarians are here to provide the best care for your beloved pets.
      </p>
      <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
        Browse through their profiles and easily book an appointment today!
      </p>      
      </div>
      </section>

      {/* Vet Listings Section */}
      <section className="container mx-auto p-6 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold text-center mt-3">Explore Our Veterinarians and Find the Perfect Match for Your Pet</h2>
      <p className="text-lg mt-1 text-center mb-8">Click on your chosen profile and fill the appointment form!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {vetsData.map((vet) => (
            <div
              key={vet.id}
              className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => handleVetClick(vet)}
            >
              <img
                src={vet.profilePicture}
                alt={vet.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800">{vet.name}</h3>
              <p className="text-center text-gray-500">{vet.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vet Profile and Booking Form */}
      {selectedVet && (
        <section className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
          <h3 className="text-2xl font-bold text-center text-teal-800 mb-6">
            Book an Appointment with {selectedVet.name}
          </h3>

          {/* Success/Error Messages */}
          {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
          {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

          <div className="text-center mb-6">
            <img
              src={selectedVet.profilePicture}
              alt={selectedVet.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-lg">{selectedVet.specialty}</p>
            <p className="text-gray-600">Available times:</p>
            <ul className="list-disc list-inside text-gray-600">
              {selectedVet.availableTimes.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
            <p className="text-gray-600">Contact: {selectedVet.contact}</p>
          </div>

          {/* Appointment Booking Form */}
          <form onSubmit={handleBookingSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <input
              type="text"
              name="name"
              value={appointmentDetails.name}
              onChange={handleFormChange}
              placeholder="Your Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={appointmentDetails.email}
              onChange={handleFormChange}
              placeholder="Your Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              value={appointmentDetails.phone}
              onChange={handleFormChange}
              placeholder="Your Phone"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <select
              name="appointmentTime"
              value={appointmentDetails.appointmentTime}
              onChange={handleFormChange}
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            >
              <option value="">Select Available Time</option>
              {selectedVet.availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>

            {isBooking ? (
              <div className="text-center">
                <div className="spinner-border animate-spin w-12 h-12 border-4 border-t-4 border-gray-500 rounded-full"></div>
              </div>
            ) : (
              <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700 transition-colors duration-200">
                Book Appointment
              </button>
            )}
          </form>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default VetPage;
