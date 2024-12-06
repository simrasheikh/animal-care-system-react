import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AnimalManagement = () => {
  const [animals, setAnimals] = useState([]);

  // Fetch animals from the backend or use dummy data for now
  useEffect(() => {
    fetch(`http://localhost:3001/animals`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data.data);
        console.log(data)
      })
        .catch((error) => console.error('Error:', error));
  }, []);

  // Handle Edit and Delete actions (dummy logic)
  const handleEdit = (animalId) => {
    console.log(`Editing animal with ID: ${animalId}`);
  };

  const handleDelete = (animalId) => {
    // For now, filter out the deleted animal (you can later call an API to delete)
    const updatedAnimals = animals.filter((animal) => animal.id !== animalId);
    setAnimals(updatedAnimals);
    console.log(`Deleted animal with ID: ${animalId}`);
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
        <h2 className="text-3xl font-semibold text-center mb-6">Animal Management</h2>

        {/* Add New Animal Button */}
        <div className="mb-6 text-center">
          <Link to="/staff-dashboard/animal-management/add">
            <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">
              Add New Animal
            </button>
          </Link>
        </div>

        {/* Animal Management Table */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Animal Name</th>
                <th className="px-4 py-2 text-left">Species</th>
                <th className="px-4 py-2 text-left">Age</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <tr key={animal.ID} className="border-b">
                  <td className="px-4 py-2">{animal.NAME}</td>
                  <td className="px-4 py-2">{animal.SPECIES}</td>
                  <td className="px-4 py-2">{animal.AGE}</td>
                  <td className="px-4 py-2">{animal.STATUS}</td>
                  <td className="px-4 py-2">
                    {/* Edit and Delete Buttons */}
                    <button onClick={() => handleEdit(animal.id)} className="text-blue-500 mr-4">Edit</button>
                    <button onClick={() => handleDelete(animal.id)} className="text-red-500">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default AnimalManagement;
