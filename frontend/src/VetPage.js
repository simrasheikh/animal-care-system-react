import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import textbg from './assets/vetlandingbg.jpg';

const VetPage = () => {
  const [vetsData, setVetsData] = useState([]); // Initialize as empty array
  const [selectedVet, setSelectedVet] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({
    notes: '',
    username: '',
    password: '',
    vetId: '',
    appointmentTime: '',
    appointmentDate: '', // Added appointment date field
  });
  const [isBooking, setIsBooking] = useState(false); // Simulating loading state
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formErrors, setFormErrors] = useState({}); // For validation errors
  const [isLoading, setIsLoading] = useState(true); // To track loading state

  // Fetch vet data from the backend
  useEffect(() => {
    const fetchVets = async () => {
      try {
        const response = await fetch('http://localhost:3001/vets'); // Backend API call
        const data = await response.json();
        setVetsData(data.vets || []); // In case vets is undefined, default to empty array
      } catch (error) {
        console.error('Error fetching vets:', error);
        setErrorMessage('Failed to load vet data');
      } finally {
        setIsLoading(false); // Stop loading once the API call finishes
      }
    };

    fetchVets();
  }, []);

  const handleVetClick = (vet) => {
    setSelectedVet(vet);
    setAppointmentDetails({
      ...appointmentDetails,
      vetId: vet.VET_ID, // Update vet ID from selected vet
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({
      ...appointmentDetails,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate Name
    // if (!appointmentDetails.notes) {
    //   errors.notes = 'Name is required';
    //   isValid = false;
    // }

    // Validate Username
    if (!appointmentDetails.username) {
      errors.username = 'Username is required';
      isValid = false;
    }

    // Validate Password
    if (!appointmentDetails.password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    // Validate Appointment Time
    if (!appointmentDetails.appointmentTime) {
      errors.appointmentTime = 'Please select an appointment time';
      isValid = false;
    }

    // Validate Appointment Date
    if (!appointmentDetails.appointmentDate) {
      errors.appointmentDate = 'Please select an appointment date';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 9; hour <= 16; hour++) {
      const hourFormatted = hour < 10 ? `0${hour}` : hour;
      options.push(`${hourFormatted}:00`);
      if (hour !== 16) {  // Skip adding 16:30
        options.push(`${hourFormatted}:30`);
      }
    }
    return options;
  };

  // Handle day selection to ensure Monday to Friday only
  const handleDayChange = (e) => {
    const selectedDay = new Date(e.target.value);
    const dayOfWeek = selectedDay.getDay(); // 0 = Sunday, 6 = Saturday

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      setErrorMessage("Please select a weekday (Monday to Friday).");
    } else {
      setErrorMessage('');
      setAppointmentDetails({ ...appointmentDetails, appointmentDate: e.target.value });
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Prevent submission if validation fails
    }
  
    setIsBooking(true);
  
    // Prepare the data to be sent to the backend
    const appointmentData = {
      username: appointmentDetails.username,
      password: appointmentDetails.password,
      vetId: selectedVet.VET_ID, // Pass vetId from selected vet
      appointmentTime: appointmentDetails.appointmentTime, // Send appointment time as string
      appointmentDate: appointmentDetails.appointmentDate, // Send date as string
      notes: appointmentDetails.notes || "", // Optional notes field
    };
    console.log(appointmentData);
    try {
      const response = await fetch('http://localhost:3001/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        setSuccessMessage('Appointment successfully booked!');
      } else {
        setErrorMessage('Failed to book appointment. Please try again.');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      setErrorMessage('There was an error. Please try again.');
      setSuccessMessage('');
    } finally {
      setIsBooking(false);
    }
  };
  

  if (isLoading) {
    return <div>Loading vet data...</div>; // Loading message while vetsData is being fetched
  }

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
          <Link to="/vet" className="text-white hover:text-gray-300">Vet Services</Link>
          <Link to="/login" className="text-white hover:text-gray-300">User Signup</Link>
          <Link to="/adminlogin" className="text-white hover:text-gray-300">Staff Login</Link>
        </div>
      </nav>

      {/* Banner Section */}
      <section
        className="relative hero-bg bg-cover bg-center"
        style={{
          backgroundImage: `url(${textbg})`,
          height: '430px',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Meet Our Veterinarians
          </h1>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
            Dedicated, compassionate, and highly skilled – our veterinarians are here to provide the best care for your beloved pets.
          </p>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
            Browse through their profiles and easily book an appointment today!
          </p>
        </div>
      </section>

      {/* Vet Listings Section */}
      <section className="container mx-auto p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold text-center mt-3">Explore Our Veterinarians and Find the Perfect Match for Your Pet</h2>
        <p className="text-lg mt-1 text-center mb-8">Click on your chosen profile and fill the appointment form!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {vetsData.length > 0 ? (
            vetsData.map((vet) => (
              <div
                key={vet.VET_ID}
                className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => handleVetClick(vet)}
              >
                <img
                  src={vet.IMAGE_URL} // Use the right image based on vet ID
                  alt={vet.NAME}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center text-gray-800">{vet.NAME}</h3>
                <p className="text-center text-gray-500">{vet.SPECIALIZATION}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No vets found</p>
          )}
        </div>
      </section>

      {/* Vet Profile and Booking Form */}
      {selectedVet && (
        <section className="container mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
          <h3 className="text-2xl font-bold text-center text-teal-800 mb-6">
            Book an Appointment with {selectedVet.NAME}
          </h3>

          {/* Success/Error Messages */}
          {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
          {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

          <div className="text-center mb-6">
            <img
              src={selectedVet.IMAGE_URL} // Corrected here
              alt={selectedVet.NAME}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />            
            <p className="text-gray-600">Contact: {selectedVet.PHONE_NUMBER}</p>
          </div>
  
          {/* Appointment Booking Form */}
          <form onSubmit={handleBookingSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <div>
              <input
                type="text"
                name="name"
                value={appointmentDetails.notes}
                onChange={handleFormChange}
                placeholder="Your Name"
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                required
              />
              {formErrors.name && <p className="text-red-500 text-sm">{formErrors.notes}</p>}
            </div>

            <div>
              <input
                type="text"
                name="username"
                value={appointmentDetails.username}
                onChange={handleFormChange}
                placeholder="Username"
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                required
              />
              {formErrors.username && <p className="text-red-500 text-sm">{formErrors.username}</p>}
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={appointmentDetails.password}
                onChange={handleFormChange}
                placeholder="Password"
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                required
              />
              {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
            </div>

            {/* Day Selection (Monday to Friday only) */}
            <div>
              <label htmlFor="appointmentDate" className="block text-sm font-semibold">Select Day:</label>
              <input
                type="date"
                name="appointmentDate"
                value={appointmentDetails.appointmentDate}
                onChange={handleDayChange} // Custom handler for restricting weekends
                min="2024-01-01" // Can adjust this to the current date if needed
                className="w-full p-3 mt-2 border border-gray-300 rounded"
                required
              />
              {formErrors.appointmentDate && <p className="text-red-500 text-sm">{formErrors.appointmentDate}</p>}
            </div>

            {/* Time Selection */}
            <div>
              <label htmlFor="appointmentTime" className="block text-sm font-semibold">Select Time:</label>
              <select
                name="appointmentTime"
                value={appointmentDetails.appointmentTime}
                onChange={handleFormChange}
                className="w-full p-3 mb-4 border border-gray-300 rounded"
                required
              >
                <option value="">Select Time</option>
                {generateTimeOptions().map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {formErrors.appointmentTime && <p className="text-red-500 text-sm">{formErrors.appointmentTime}</p>}
            </div>

            {isBooking ? (
              <div className="text-center">
                <div className="spinner-border animate-spin w-12 h-12 border-4 border-t-4 border-gray-500 rounded-full"></div>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full py-3 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700 transition-colors duration-200"
              >
                Book Appointment
              </button>
            )}
          </form>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default VetPage;
