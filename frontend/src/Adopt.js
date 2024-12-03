import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Adopt = () => {
  const [adopterName, setAdopterName] = useState('');
  const [adopterEmail, setAdopterEmail] = useState('');
  const [adopterPhone, setAdopterPhone] = useState('');
  const [adopterAddress, setAdopterAddress] = useState('');
  const [animal, setAnimal] = useState(null);  // For pre-filling animal details
  const [isLoading, setIsLoading] = useState(false);  // Loading state
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({}); // To store form validation errors
  const { id } = useParams();  // Get animal id from URL
  const navigate = useNavigate();
  
  // Example of checking if the user is logged in (you can replace this with your actual auth logic)
  const isAuthenticated = true;  // Assume user is logged in, replace this with real check
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect if not authenticated
    } else {
      const fetchAnimalDetails = async () => {
        const response = await fetch(`http://localhost:3000/animals/${id}`);
        const animalData = await response.json();
        setAnimal(animalData);
      };

      fetchAnimalDetails();
    }
  }, [isAuthenticated, id, navigate]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'adopterName':
        setAdopterName(value);
        break;
      case 'adopterEmail':
        setAdopterEmail(value);
        break;
      case 'adopterPhone':
        setAdopterPhone(value);
        break;
      case 'adopterAddress':
        setAdopterAddress(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate Adopter Name
    if (!adopterName) {
      errors.adopterName = 'Name is required';
      isValid = false;
    }

    // Validate Adopter Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!adopterEmail || !emailRegex.test(adopterEmail)) {
      errors.adopterEmail = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate Adopter Phone (only numbers, and minimum length)
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!adopterPhone || !phoneRegex.test(adopterPhone)) {
      errors.adopterPhone = 'Please enter a valid phone number (10-15 digits)';
      isValid = false;
    }

    // Validate Adopter Address
    if (!adopterAddress) {
      errors.adopterAddress = 'Address is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // If validation fails, prevent form submission
    }

    setIsLoading(true);
    const applicationData = {
      adopter_name: adopterName,
      adopter_email: adopterEmail,
      adopter_phone: adopterPhone,
      adopter_address: adopterAddress,
      animal_id: animal ? animal.animal_id : null,
    };

    try {
      const response = await fetch('http://localhost:3002/adopt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });

      if (response.ok) {
        setSuccessMessage('Your adoption application has been submitted!');
        setErrorMessage('');
      } else {
        setErrorMessage('Something went wrong. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again later.');
      setSuccessMessage('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
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
          <Link to="/donate" className="text-white hover:text-gray-300">Donate</Link>
          <Link to="/vet" className="text-white hover:text-gray-300">Vet Services</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Staff Login</Link>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <h2 className="text-2xl text-center mb-6">Adopt {animal ? animal.name : 'an Animal'}</h2>

        {/* Success/Error Message */}
        {successMessage && <div className="success-message text-green-500 text-center mb-4">{successMessage}</div>}
        {errorMessage && <div className="error-message text-red-500 text-center mb-4">{errorMessage}</div>}

        {/* Animal Information (pre-filled in the form) */}
        {animal && (
          <div className="mb-6 text-center">
            <img
              src={animal.photo_url}  // Assuming photo_url is available in the animal data
              alt={animal.name}
              className="w-48 h-48 object-cover rounded-lg mx-auto"
            />
            <p className="mt-4">{animal.name} - {animal.species}</p>
            <p className="mt-2">{animal.age} - {animal.description}</p>
          </div>
        )}

        {/* Adoption Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <div>
            <input
              type="text"
              name="adopterName"
              value={adopterName}
              onChange={handleFormChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            {formErrors.adopterName && <p className="text-red-500 text-sm">{formErrors.adopterName}</p>}
          </div>

          <div>
            <input
              type="email"
              name="adopterEmail"
              value={adopterEmail}
              onChange={handleFormChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            {formErrors.adopterEmail && <p className="text-red-500 text-sm">{formErrors.adopterEmail}</p>}
          </div>

          <div>
            <input
              type="phone"
              name="adopterPhone"
              value={adopterPhone}
              onChange={handleFormChange}
              placeholder="Your Phone Number"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            {formErrors.adopterPhone && <p className="text-red-500 text-sm">{formErrors.adopterPhone}</p>}
          </div>

          <div>
            <textarea
              name="adopterAddress"
              value={adopterAddress}
              onChange={handleFormChange}
              placeholder="Your Address"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            {formErrors.adopterAddress && <p className="text-red-500 text-sm">{formErrors.adopterAddress}</p>}
          </div>

          {/* Submit Button */}
          {isLoading ? (
            <div className="text-center">
              <div className="spinner-border animate-spin w-12 h-12 border-4 border-t-4 border-gray-500 rounded-full"></div>
            </div>
          ) : (
            <button type="submit" className="w-full py-3 bg-red-700 text-white font-semibold rounded hover:bg-red-800">
              Submit Application
            </button>
          )}
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

export default Adopt;
