import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AnimalManagement = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState(null);

  // Fetch animals from the backend
  useEffect(() => {
    fetch(`http://localhost:3001/animals`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAnimals(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  const handleEdit = (animal) => {
    setCurrentAnimal(animal);
    setShowModal(true);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    // Save changes to backend
    fetch(`http://localhost:3001/animals/${currentAnimal.ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentAnimal),
    })
      .then((response) => response.json())
      .then((updatedAnimal) => {
        setAnimals((prevAnimals) =>
          prevAnimals.map((animal) =>
            animal.ID === updatedAnimal.ID ? updatedAnimal : animal
          )
        );
        setShowModal(false);
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (animalId) => {
    // Send delete request to the backend
    fetch(`http://localhost:3001/animals/${animalId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        setAnimals((prevAnimals) => prevAnimals.filter((animal) => animal.ID !== animalId));
      })
      .catch((err) => console.error(err));
  };

  const handleInputChange = (field, value) => {
    setCurrentAnimal({ ...currentAnimal, [field]: value });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#21422b' }}>
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
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

      <div className="container mx-auto p-6 flex-grow">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-teal-100 text-teal-800 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold">Total Animals</h4>
            <p className="text-2xl font-bold">{animals.length}</p>
          </div>
          <div className="bg-green-100 text-green-800 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold">Available Animals</h4>
            <p className="text-2xl font-bold">{animals.filter((a) => a.STATUS === 'Available').length}</p>
          </div>
          <div className="bg-red-100 text-red-800 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold">Adopted Animals</h4>
            <p className="text-2xl font-bold">{animals.filter((a) => a.STATUS === 'Adopted').length}</p>
          </div>
        </div>

        {/* Add New Animal Button */}
        <div className="text-center mb-6">
          <Link to="/staff-dashboard/animal-management/add">
            <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-transform transform hover:scale-105">
              Add New Animal
            </button>
          </Link>
        </div>

        {/* Animal Management Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
          {loading ? (
            <p className="text-center text-lg">Loading...</p>
          ) : animals.length === 0 ? (
            <p className="text-center text-lg">No animals found.</p>
          ) : (
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
                  <tr key={animal.ID} className="border-b hover:bg-gray-100 transition">
                    <td className="px-4 py-2">{animal.NAME}</td>
                    <td className="px-4 py-2">{animal.SPECIES}</td>
                    <td className="px-4 py-2">{animal.AGE}</td>
                    <td className="px-4 py-2">{animal.STATUS}</td>
                    <td className="px-4 py-2 flex space-x-2">
                      <button
                        onClick={() => handleEdit(animal)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <i className="fas fa-edit"></i> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(animal.ID)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <i className="fas fa-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal for Editing */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Edit Animal</h3>
            <form onSubmit={handleSaveChanges} className="space-y-4">
              <input
                type="text"
                value={currentAnimal.NAME}
                onChange={(e) => handleInputChange('NAME', e.target.value)}
                placeholder="Name"
                className="w-full p-3 border rounded"
              />
              <input
                type="text"
                value={currentAnimal.SPECIES}
                onChange={(e) => handleInputChange('SPECIES', e.target.value)}
                placeholder="Species"
                className="w-full p-3 border rounded"
              />
              <input
                type="number"
                value={currentAnimal.AGE}
                onChange={(e) => handleInputChange('AGE', e.target.value)}
                placeholder="Age"
                className="w-full p-3 border rounded"
              />
              <select
                value={currentAnimal.STATUS}
                onChange={(e) => handleInputChange('STATUS', e.target.value)}
                className="w-full p-3 border rounded"
              >
                <option value="Available">Available</option>
                <option value="Adopted">Adopted</option>
              </select>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center mt-auto">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default AnimalManagement;
