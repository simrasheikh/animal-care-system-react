import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import textbg from './assets/donationlandingbg.jpg'; // The background image

const Donate = () => {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [donationPurpose, setDonationPurpose] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({}); // To store form validation errors

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate Donor Name
    if (!donorName) {
      errors.donorName = 'Name is required';
      isValid = false;
    }

    // Validate Donor Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!donorEmail || !emailRegex.test(donorEmail)) {
      errors.donorEmail = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate Donation Amount
    if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
      errors.donationAmount = 'Please enter a valid donation amount (greater than 0)';
      isValid = false;
    }

    // Validate Donation Purpose
    if (!donationPurpose) {
      errors.donationPurpose = 'Please select a donation purpose';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // If validation fails, prevent form submission
    }

    setIsLoading(true);
    const donationData = {
      donor_name: donorName,
      donor_email: donorEmail,
      donation_amount: donationAmount,
      donation_purpose: donationPurpose,
    };

    try {
      const response = await fetch('http://localhost:5000/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for your donation!');
        setErrorMessage('');
      } else {
        setErrorMessage('Something went wrong. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again later.');
      setSuccessMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="donate-container">
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
          height: '450px', // You can change this value as needed
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Be a Hero for Animals: Donate Now
          </h1>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
            Your generosity helps us provide essential care, treatments, and support for animals in need.
          </p>
          <p className="text-lg md:text-xl text-center mb-8 animate__animated animate__slideInUp">
            Whether it's life-saving surgery, emergency care, or general wellness services, your donation makes a real difference.
          </p>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
            Fill out the form below to make your contribution and select how you'd like your donation to support our efforts.
          </p>
        </div>
      </section>

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Donation Form</h2>

        {/* Success/Error Message */}
        {successMessage && <div className="success-message text-green-500 text-center mb-4">{successMessage}</div>}
        {errorMessage && <div className="error-message text-red-500 text-center mb-4">{errorMessage}</div>}

        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <div>
            <input
              type="text"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            {formErrors.donorName && <p className="text-red-500 text-sm">{formErrors.donorName}</p>}
          </div>

          <div>
            <input
              type="email"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            {formErrors.donorEmail && <p className="text-red-500 text-sm">{formErrors.donorEmail}</p>}
          </div>

          <div>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Donation Amount"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            {formErrors.donationAmount && <p className="text-red-500 text-sm">{formErrors.donationAmount}</p>}
          </div>

          <div>
            <select
              value={donationPurpose}
              onChange={(e) => setDonationPurpose(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              required
            >
              <option value="">Select Purpose</option>
              <option value="Medical Care">Medical Care</option>
              <option value="Food">Food</option>
              <option value="Shelter">Shelter</option>
            </select>
            {formErrors.donationPurpose && <p className="text-red-500 text-sm">{formErrors.donationPurpose}</p>}
          </div>

          {/* Loading Spinner */}
          {isLoading ? (
            <div className="text-center">
              <div className="spinner-border animate-spin w-12 h-12 border-4 border-t-4 border-gray-500 rounded-full"></div>
            </div>
          ) : (
            <button type="submit" className="w-full py-3 bg-green-700 text-white font-semibold rounded hover:bg-green-800">
              Donate Now
            </button>
          )}
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default Donate;
