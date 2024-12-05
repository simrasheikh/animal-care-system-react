import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AnimalManagement = () => {
  const [animals, setAnimals] = useState([]);

  // Fetch animals from the backend or use dummy data for now
  useEffect(() => {
    // Dummy Data (replace with real API call when available)
    setAnimals([
      { id: 1, name: 'Bella', species: 'Dog', age: 'Puppy', status: 'Available' },
      { id: 2, name: 'Milo', species: 'Cat', age: 'Adult', status: 'Adopted' },
      { id: 3, name: 'Charlie', species: 'Dog', age: 'Senior', status: 'Available' },
      { id: 4, name: 'Lucy', species: 'Cat', age: 'Adult', status: 'Available' },
      // Add more animals as needed...
    ]);
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
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
          <img src="/catlogo.png" alt="Logo" className="w-8 h-8 mr-2" />
          Animal Care System
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/animals" className="text-white hover:text-gray-300">Browse Animals</Link>
          <Link to="/adopt" className="text-white hover:text-gray-300">Adopt</Link>
          <Link to="/donate" className="text-white hover:text-gray-300">Donate</Link>
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
                <tr key={animal.id} className="border-b">
                  <td className="px-4 py-2">{animal.name}</td>
                  <td className="px-4 py-2">{animal.species}</td>
                  <td className="px-4 py-2">{animal.age}</td>
                  <td className="px-4 py-2">{animal.status}</td>
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
