import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPaw, FaWeightHanging, FaDog, FaCat, FaMale, FaFemale } from 'react-icons/fa';

const AnimalDetails = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  const fetchAnimalDetails = () => {
    fetch(`http://localhost:3001/animals/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimal(data.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching animal details:', error);
      });
  };

  useEffect(() => {
    fetchAnimalDetails();
  }, [id]);

  if (!animal) return <p>Loading...</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
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

      {/* Animal Details Section */}
      <div className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Left Column: Animal Profile */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <div className="relative group">
            <img
              src={animal.PHOTO_URL}
              alt={animal.NAME}
              className="w-40 h-40 object-cover rounded-full border-4 border-teal-600 transition-all transform group-hover:scale-110 duration-300"
            />
          </div>

          <div className="flex items-center mt-4">
            <h2 className="text-3xl font-bold text-teal-800">{animal.NAME}</h2>
            <FaPaw className="text-teal-600 text-3xl ml-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center space-x-2 px-3 py-2 bg-teal-100 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-teal-200">
              <FaWeightHanging className="text-teal-500" />
              <span className="font-semibold">Weight:</span>
              <span className="ml-2">{animal.WEIGHT || 'N/A'}</span>
            </div>

            <div className="flex items-center space-x-2 px-3 py-2 bg-teal-100 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-teal-200">
              <FaCat className="text-teal-500" />
              <span className="font-semibold">Breed:</span>
              <span className="ml-2">{animal.BREED}</span>
            </div>

            <div className="flex items-center space-x-2 px-3 py-2 bg-teal-100 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-teal-200">
              {animal.GENDER === 'Female' ? (
                <FaFemale className="text-teal-500" />
              ) : (
                <FaMale className="text-teal-500" />
              )}
              <span className="font-semibold">Gender:</span>
              <span className="ml-2">{animal.GENDER || 'N/A'}</span>
            </div>

            <div className="flex items-center space-x-2 px-3 py-2 bg-teal-100 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-teal-200">
              <FaPaw className="text-teal-500" />
              <span className="font-semibold">Age:</span>
              <span className="ml-2">{animal.AGE}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Description and Adopt Button */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 lg:col-span-1">
          <h3 className="text-2xl font-semibold text-teal-800">About {animal.NAME}</h3>
          <p className="mt-4 text-gray-600">{animal.DESCRIPTION || 'No description available.'}</p>

          {/* Adopt Button */}
          {animal.STATUS === 'Available' && (
            <Link to={`/adopt/${animal.animal_id}`} state={{ animal }}>
              <button className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg mt-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-teal-700 w-full">
                Adopt Me
              </button>
            </Link>
          )}
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

export default AnimalDetails;
