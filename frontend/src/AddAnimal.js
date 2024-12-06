import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';  // Add this import statement

const AddAnimal = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can call your backend to add the animal to the database
    console.log({ name, species, age, status });
    // Redirect back to the animal management page after submission
    navigate('/staff-dashboard/animal-management');
  };

  return (
    <div>
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#21422b' }}>
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
            {/* Logo to the left */}
            <img src="/catlogo.png" alt="Cat Logo" className="w-8 h-8 mr-2" /> 
            Animal Care
        </Link>
        <div className="space-x-4">
          <Link to="/staff-dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link to="/staff-dashboard/animal-management" className="text-white hover:text-gray-300">Animal Management</Link>
          <Link to="/staff-dashboard/adoption-applications" className="text-white hover:text-gray-300">Adoption Applications</Link>
          <Link to="/staff-dashboard/medical-records" className="text-white hover:text-gray-300">Medical Records</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Logout</Link>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Add New Animal</h2>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Animal Name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <input
              type="text"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              placeholder="Species"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              required
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Adopted">Adopted</option>
            </select>
          </div>

          <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">
            Add Animal
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

export default AddAnimal;
