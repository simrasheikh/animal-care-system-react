import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaPaw, FaWeightHanging, FaDog, FaCat, FaMale, FaFemale } from 'react-icons/fa';

const Adopt = () => {
  const { id } = useParams(); // Get animal ID from the URL
  const [animal, setAnimal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phone_number: "",
    agreement: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch animal details based on the ID
    fetch(`http://localhost:3001/animals/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimal(data.data[0]); // Assuming the response contains an array of animals
      })
      .catch((error) => {
        console.error("Error fetching animal details:", error);
      });
  }, [id]); // Re-fetch if the ID changes

  const handleAdoptSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username) {
      setErrorMessage("Username is required");
      return;
    }

    if (!formData.agreement) {
      setErrorMessage("You must agree to the adoption terms");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/adopt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          animal_id: id,  // Ensure animal_id is correct
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setErrorMessage("");
        alert("Adoption application submitted!");
        navigate("/animals");
      } else {
        setErrorMessage(data.message || "Failed to submit adoption");
      }
    } catch (error) {
      console.error("Error submitting adoption:", error);
      setErrorMessage("Failed to submit adoption");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Animal Profile and Attributes */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img
            src={animal.PHOTO_URL}
            alt={animal.NAME}
            className="w-40 h-40 object-cover rounded-full border-4 border-teal-600 mb-4"
          />
          <h2 className="text-3xl font-bold text-teal-800">{animal.NAME}</h2>
          <div className="flex items-center mt-2">
            <FaPaw className="text-teal-600 text-2xl mr-2" />
            <span className="text-lg text-gray-600">{animal.SPECIES}</span>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4">
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

        {/* Right Column: Adoption Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-800">Adopt {animal.NAME}</h3>
          <form onSubmit={handleAdoptSubmit} className="mt-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="username" className="block text-sm font-semibold">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="phone_number" className="block text-sm font-semibold">Phone Number:</label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label htmlFor="agreement" className="text-sm">I agree to the adoption terms and conditions</label>
            </div>

            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

            <button 
              type="submit" 
              className="mt-4 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg w-full transition-all transform hover:bg-teal-700 hover:scale-105 hover:shadow-lg"
            >
              Submit Adoption Application
            </button>
          </form>

          {/* Additional link to the login page */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Don't have a username? <Link to="/login" className="text-teal-600">Signup here</Link></p>
          </div>
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

export default Adopt;
