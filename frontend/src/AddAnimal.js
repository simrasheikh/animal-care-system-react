import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddAnimal = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const navigate = useNavigate();

  // Form validation
  const validateForm = () => {
    if (!name || !species || !breed || !age || !description || !imageUrl || !gender || !weight) {
      alert('All fields are required!');
      return false;
    }
    if (isNaN(age) || age <= 0) {
      alert('Age must be a positive number!');
      return false;
    }
    if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
      alert('Image URL must be a valid URL!');
      return false;
    }
    if (isNaN(weight) || weight <= 0) {
      alert('Weight must be a positive number!');
      return false;
    }
    if (gender !== 'Male' && gender !== 'Female') {
      alert('Gender must be Male or Female!');
      return false;
    }
    return true;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here, you can call your backend to add the animal to the database
      // console.log({ name, species, breed, age, description, imageUrl, gender, weight });

      // Redirect back to the animal management page after submission
      try {
        // Make a POST request to the backend
        const response = await fetch("http://localhost:3001/animals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set content type to JSON
          },
          body: JSON.stringify({
            NAME: name,
            SPECIES: species,
            BREED: breed,
            AGE: parseInt(age), // Convert age to a number
            DESCRIPTION: description,
            PHOTO_URL: imageUrl, // Match the backend field name
            GENDER: gender, // New field for gender
            WEIGHT: parseFloat(weight), // New field for weight
          }),
        });

        if (!response.ok) {
          // If the response is not ok, throw an error
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to add animal.");
        }

        const data = await response.json(); // Parse the JSON response
        console.log("Animal added successfully:", data);

        // Redirect to the animal management page
        navigate("/staff-dashboard/animal-management");
      } catch (error) {
        console.error("Error adding animal:", error);
        alert(error.message); // Display an error message to the user
      }
      navigate('/staff-dashboard/animal-management');
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
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              placeholder="Breed"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              className="w-full p-3 border border-gray-300 rounded"
              required
              min="1"
            />
          </div>
          <div>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight"
              className="w-full p-3 border border-gray-300 rounded"
              required
              min="0.1"
              step="0.01"  // This allows decimals like 34.1, 34.01, etc.
            />
          </div>
          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="w-full p-3 border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
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
