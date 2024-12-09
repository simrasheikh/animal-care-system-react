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
    const fetchAnimals = async () => {
      try {
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
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchAnimals();
  }, []);

  const handleEdit = (animal) => {
    setCurrentAnimal(animal);
    setShowModal(true);
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    // Send updated animal details to the backend
    const response = await fetch(`http://localhost:3001/animals/${currentAnimal.ANIMAL_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ANIMAL_NAME: currentAnimal.ANIMAL_NAME,
        SPECIES: currentAnimal.SPECIES,
        AGE: currentAnimal.AGE,
        STATUS: currentAnimal.STATUS,
        BREED: currentAnimal.BREED, // Update breed
        GENDER: currentAnimal.GENDER, // Update gender
        WEIGHT: currentAnimal.WEIGHT, // Update weight
        PHOTO_URL: currentAnimal.PHOTO_URL,
        DESCRIPTION: currentAnimal.DESCRIPTION, // Update description
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to save changes.');
        }
        return response.json();
      })
      .then((updatedAnimal) => {
        // Update the state with the new animal details
        setAnimals((prevAnimals) =>
          prevAnimals.map((animal) =>
            animal.ANIMAL_ID === updatedAnimal.ANIMAL_ID ? updatedAnimal : animal
          )
        );
        setShowModal(false); // Close the modal
      })
      .catch((err) => {
        console.error('Error saving changes:', err);
        alert('Failed to save changes. Please try again.');
      });
  };

  const handleDelete = (animal) => {
    // Send delete request to the backend
    fetch(`http://localhost:3001/animals/${animal.ANIMAL_ID}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        // Immediately remove the deleted animal from the state
        setAnimals((prevAnimals) => prevAnimals.filter((item) => item.ANIMAL_ID !== animal.ANIMAL_ID));
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
                  <th className="px-4 py-2 text-left">Animal ID</th>
                  <th className="px-4 py-2 text-left">Image</th>
                  <th className="px-4 py-2 text-left">Animal Name</th>
                  <th className="px-4 py-2 text-left">Species</th>
                  <th className="px-4 py-2 text-left">Age</th>
                  <th className="px-4 py-2 text-left">Breed</th>
                  <th className="px-4 py-2 text-left">Gender</th>
                  <th className="px-4 py-2 text-left">Weight</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Intake Date</th>
                  <th className="px-4 py-2 text-left">Status</th>                  
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {animals.map((animal) => (
                  <tr key={animal.ANIMAL_ID} className="border-b hover:bg-gray-100 transition">
                    <td className="px-4 py-2">{animal.ANIMAL_ID}</td>
                    <td className="px-4 py-2">
                      <img
                        src={animal.PHOTO_URL}
                        alt={animal.ANIMAL_NAME}
                        className="w-10 h-10 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">{animal.ANIMAL_NAME}</td>
                    <td className="px-4 py-2">{animal.SPECIES}</td>
                    <td className="px-4 py-2">{animal.AGE}</td>
                    <td className="px-4 py-2">{animal.BREED}</td>
                    <td className="px-4 py-2">{animal.GENDER}</td>
                    <td className="px-4 py-2">{animal.WEIGHT}</td>
                    <td className="px-4 py-2">{animal.DESCRIPTION}</td>
                    <td className="px-4 py-2">{animal.INTAKE_DATE}</td>
                    <td className="px-4 py-2">{animal.STATUS}</td>                    
                    <td className="px-4 py-2 flex space-x-2">
                      <button
                        onClick={() => handleEdit(animal)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <i className="fas fa-edit"></i> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(animal)}
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
                value={currentAnimal.ANIMAL_NAME}
                onChange={(e) => handleInputChange('ANIMAL_NAME', e.target.value)}
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
              <input
                type="text"
                value={currentAnimal.BREED}
                onChange={(e) => handleInputChange('BREED', e.target.value)}
                placeholder="Breed"
                className="w-full p-3 border rounded"
              />
              <select
                value={currentAnimal.GENDER}
                onChange={(e) => handleInputChange('GENDER', e.target.value)}
                className="w-full p-3 border rounded"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="number"
                value={currentAnimal.WEIGHT}
                onChange={(e) => handleInputChange('WEIGHT', e.target.value)}
                placeholder="Weight"
                className="w-full p-3 border rounded"
              />
              <input
                type="text"
                value={currentAnimal.PHOTO_URL}
                onChange={(e) => handleInputChange('PHOTO_URL', e.target.value)}
                placeholder="Image URL"
                className="w-full p-3 border rounded"
              />
              <textarea
                value={currentAnimal.DESCRIPTION}
                onChange={(e) => handleInputChange('DESCRIPTION', e.target.value)}
                placeholder="Description"
                className="w-full p-3 border rounded"
                rows="4"
              ></textarea>
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
