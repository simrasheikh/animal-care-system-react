import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [donationPurpose, setDonationPurpose] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // Set loading state

    // Replace with your backend API URL
    const url = 'http://localhost:5000/donations';
    const donationData = {
      donor_name: donorName,
      donor_email: donorEmail,
      donation_amount: donationAmount,
      donation_purpose: donationPurpose
    };

    try {
      const response = await fetch(url, {
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
      setIsLoading(false);  // Reset loading state
    }
  };

  return (
    <div className="donate-container">
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#66443e' }}>
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
            {/* Logo to the left */}
            <img src="/catlogo.png" alt="Cat Logo" className="w-8 h-8 mr-2" /> 
            Animal Care
        </Link>
        <div className="space-x-4">
          <Link to="/animals" className="text-white hover:text-gray-300">Browse Animals</Link>
          <Link to="/adopt" className="text-white hover:text-gray-300">Adopt</Link>
          <Link to="/donate" className="text-white hover:text-gray-300">Donate</Link>
          <Link to="/vet" className="text-white hover:text-gray-300">Vet Services</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Staff Login</Link>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <h2 className="text-2xl text-center mb-6">Your contribution makes a difference!</h2>

        {/* Success/Error Message */}
        {successMessage && <div className="success-message text-green-500 text-center mb-4">{successMessage}</div>}
        {errorMessage && <div className="error-message text-red-500 text-center mb-4">{errorMessage}</div>}

        {/* Donation Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />

          <input
            type="email"
            value={donorEmail}
            onChange={(e) => setDonorEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />

          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="Donation Amount"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />

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
