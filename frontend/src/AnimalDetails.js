import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPaw, FaWeightHanging, FaDog, FaCat, FaMale, FaFemale } from 'react-icons/fa'; // Importing icons

const AnimalDetails = () => {
  const { id } = useParams(); // Get the 'id' from the URL
  const [animal, setAnimal] = useState(null);

  // Fetch animal details from the backend using the ID
  const fetchAnimalDetails = () => {
    fetch(`http://localhost:3001/animals/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimal(data.data[0]); // Assuming the API returns an array, and we want the first result
      })
      .catch((error) => {
        console.error('Error fetching animal details:', error);
      });
  };

  useEffect(() => {
    fetchAnimalDetails(); // Fetch animal details when the component mounts
  }, [id]);

  if (!animal) return <p>Loading...</p>; // Show loading message if the animal is not yet fetched

  return (
    <div className="bg-gray-50 min-h-screen">
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
          <Link to="/vet" className="text-white hover:text-gray-300">Vet Services</Link>
          <Link to="/login" className="text-white hover:text-gray-300">User Login</Link>
          <Link to="/adminlogin" className="text-white hover:text-gray-300">Staff Login</Link>
        </div>
      </nav>

      {/* Animal Details Section */}
      <div className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Animal Profile */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <div className="relative group">
            {/* Hover Zoom Effect on Animal Image */}
            <img
              src={animal.PHOTO_URL} // Dynamically load image based on photo_url
              alt={animal.NAME}
              className="w-40 h-40 object-cover rounded-full border-4 border-teal-600 transition-all transform group-hover:scale-110 duration-300"
            />          
          </div>

          {/* Name and Paw Icon next to each other */}
          <div className="flex items-center mt-4">
            <h2 className="text-3xl font-bold text-teal-800">{animal.NAME}</h2>
            <FaPaw className="text-teal-600 text-3xl ml-2" />
          </div>

          {/* Attribute Rectangles (Two Columns, Closer Spacing) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {/* Weight */}
            <div className="flex items-center space-x-2 px-3 py-2 bg-teal-100 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-teal-200">
              <FaWeightHanging className="text-teal-500" />
              <span className="font-semibold">Weight:</span> 
              <span className="ml-2">{animal.WEIGHT}</span>
            </div>

            {/* Breed */}
            <div className="flex items-center space-x-2 px-3 py-2 bg-teal-100 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-teal-200">
              <FaCat className="text-teal-500" />
              <span className="font-semibold">Breed:</span> 
              <span className="ml-2">{animal.BREED}</span>
            </div>

            {/* Gender */}
            <div className="flex items-center space-x-2 px-3 py-2 bg-teal-100 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-teal-200">
              {animal.GENDER === 'Female' ? (
                <FaFemale className="text-teal-500" />
              ) : (
                <FaMale className="text-teal-500" />
              )}
              <span className="font-semibold">Gender:</span>
              <span className="ml-2">{animal.GENDER}</span>
            </div>

            {/* Age */}
            <div className="flex items-center space-x-2 px-3 py-2 bg-teal-100 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-teal-200">
              <FaPaw className="text-teal-500" />
              <span className="font-semibold">Age:</span>
              <span className="ml-2">{animal.AGE}</span>
            </div>
          </div>
        </div>

        {/* Middle Column: Description */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-800">About {animal.NAME}</h3>
          <p className="mt-4 text-gray-600">{animal.DESCRIPTION}</p>
        </div>

        {/* Right Column: Adopt Button */}
        {animal.STATUS === 'Available' && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Link to={`/adopt/${animal.animal_id}`} state={{ animal }}>
              <button className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg mt-6 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-teal-700">
                Adopt Me
              </button>
            </Link>
          </div>
        )}
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
