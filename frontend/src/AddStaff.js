import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddStaff = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  // Form validation
  const validateForm = () => {
    if (!name || !phoneNumber || !email || !password || !confirmPassword) {
      alert('All fields are required!');
      return false;
    }
    if (!/^\d{10,15}$/.test(phoneNumber)) {
      alert('Phone number must be between 10 and 15 digits!');
      return false;
    }
    if (!email.includes('@')) {
      alert('Email must be valid!');
      return false;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return false;
    }
    return true;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Make a POST request to the backend
        const response = await fetch('http://localhost:3001/staff', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phone_number: phoneNumber,
            email,
            password,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to add staff.');
        }

        const data = await response.json();
        console.log('Staff added successfully:', data);

        // Redirect to the staff management page after submission
        navigate('/staff-dashboard/staff-management');
      } catch (error) {
        console.error('Error adding staff:', error);
        alert(error.message);
      }
    }
  };

  return (
    <div>
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
          <Link to="/staff-dashboard/staff-management" className="text-white hover:text-gray-300">Staff Management</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Logout</Link>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Add New Staff Member</h2>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Staff Name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">
            Add Staff
          </button>
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

export default AddStaff;
