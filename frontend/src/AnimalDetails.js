import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPaw, FaWeightHanging, FaDog, FaCat, FaMale, FaFemale } from 'react-icons/fa'; // Importing icons

const AnimalDetails = () => {
  const { id } = useParams(); // Get the 'id' from the URL
  const [animal, setAnimal] = useState(null);
  const [medicalRecords, setMedicalRecords] = useState([]);

  // Dummy data for testing
  const dummyAnimals = [
    { id: 1, name: 'Bella', species: 'Dog', age: 'Puppy', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'bella.jpg', description: 'A playful puppy ready for adoption.' },
    { id: 2, name: 'Milo', species: 'Cat', age: 'Adult', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'milo.jpg', description: 'A calm and friendly cat looking for a home.' },
    { id: 3, name: 'Charlie', species: 'Dog', age: 'Senior', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'charlie.jpg', description: 'A senior dog, adopted to a loving family.' },
    { id: 4, name: 'Lucy', species: 'Cat', age: 'Adult', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'lucy.jpg', description: 'A curious and independent cat.' },
    { id: 5, name: 'Milo', species: 'Cat', age: 'Adult', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'milo.jpg', description: 'A calm and friendly cat looking for a home.' },
    { id: 6, name: 'Charlie', species: 'Dog', age: 'Senior', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'charlie.jpg', description: 'A senior dog, adopted to a loving family.' },
    { id: 7, name: 'Lucy', species: 'Cat', age: 'Adult', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'lucy.jpg', description: 'A curious and independent cat.' },
    { id: 8, name: 'Bella', species: 'Dog', age: 'Puppy', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'bella.jpg', description: 'A playful puppy ready for adoption.' },
    { id: 9, name: 'Charlie', species: 'Dog', age: 'Senior', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'charlie.jpg', description: 'A senior dog, adopted to a loving family.' },
    { id: 10, name: 'Lucy', species: 'Cat', age: 'Adult', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'lucy.jpg', description: 'A curious and independent cat.' },
    { id: 11, name: 'Milo', species: 'Cat', age: 'Adult', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'milo.jpg', description: 'A calm and friendly cat looking for a home.' },
    { id: 12, name: 'Charlie', species: 'Dog', age: 'Senior', weight: '4kg', breed: 'Persian', gender: 'Male', status: 'Available', imageName: 'charlie.jpg', description: 'A senior dog, adopted to a loving family.' },
    // Add more animals as needed...
  ];

  const dummyMedicalRecords = [
    { record_id: 1, treatment_date: '2024-03-15', diagnosis: 'Vaccination', treatment_details: 'Administered Rabies vaccine', next_checkup_date: '2024-09-15', vet_name: 'Dr. Sarah Lee' },
    { record_id: 2, treatment_date: '2024-06-01', diagnosis: 'Ear Infection', treatment_details: 'Prescribed antibiotics', next_checkup_date: '2024-07-01', vet_name: 'Dr. Kevin Smith' },
    // Add more medical records as needed...
  ];

  const fetchAnimalDetails = () => {
    const foundAnimal = dummyAnimals.find(animal => animal.id === parseInt(id));
    setAnimal(foundAnimal);
  };

  const fetchMedicalRecords = () => {
    // Filter medical records by animal_id. Replace with real API call once backend is ready
    const records = dummyMedicalRecords.filter(record => record.animal_id === parseInt(id));
    setMedicalRecords(records);
  };

  useEffect(() => {
    fetchAnimalDetails(); // Fetch animal details when the component mounts
    fetchMedicalRecords();
  }, [id]);

  // Show loading if animal data is not yet fetched
  if (!animal) return <p>Loading...</p>;

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
          <Link to="/donate" className="text-white hover:text-gray-300">Donate</Link>
          <Link to="/vet" className="text-white hover:text-gray-300">Vet Services</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Staff Login</Link>
        </div>
      </nav>

      {/* Animal Details Section */}
      <div className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Animal Profile */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
          <div className="relative">
            <img
              src={require(`./assets/${animal.imageName}`)}  // Dynamically load image
              alt={animal.name}
              className="w-40 h-40 object-cover rounded-full border-4 border-teal-600"
            />
            <FaPaw className="absolute bottom-0 right-0 text-teal-600 text-3xl mb-2 mr-2" />
          </div>
          <h2 className="text-3xl font-bold mt-4 text-teal-800">{animal.name}</h2>

          {/* Attribute Rectangles (Stacked Vertically) */}
          <div className="flex flex-col justify-center mt-6 space-y-3">
            <div className="flex items-center space-x-2 px-4 py-2 bg-teal-100 rounded-lg">
              <FaDog className="text-teal-500" />
              <span className="font-semibold">Species:</span> 
              <span className="ml-2">{animal.species}</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-teal-200 rounded-lg">
              <FaWeightHanging className="text-teal-500" />
              <span className="font-semibold">Weight:</span> 
              <span className="ml-2">{animal.weight}</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-teal-300 rounded-lg">
              <FaCat className="text-teal-500" />
              <span className="font-semibold">Breed:</span> 
              <span className="ml-2">{animal.breed}</span> {/* Corrected to display breed */}
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-teal-200 rounded-lg">
              {animal.gender === 'Female' ? (
                <FaFemale className="text-teal-500" />
              ) : (
                <FaMale className="text-teal-500" />
              )}
              <span className="font-semibold">Gender:</span>
              <span className="ml-2">{animal.gender}</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-teal-100 rounded-lg">
              <FaPaw className="text-teal-500" />
              <span className="font-semibold">Age:</span>
              <span className="ml-2">{animal.age}</span>
            </div>
          </div>
        </div>

        {/* Middle Column: Description */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-teal-800">About {animal.name}</h3>
          <p className="mt-4 text-gray-600">{animal.description}</p>
        </div>

        {/* Right Column: Medical Records */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-teal-800">Medical Records</h3>
            {medicalRecords.length > 0 ? (
              <div>
                {medicalRecords.map((record) => (
                  <div key={record.record_id} className="mb-6">
                    <p><strong>Treatment Date:</strong> {record.treatment_date}</p>
                    <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
                    <p><strong>Treatment Details:</strong> {record.treatment_details}</p>
                    <p><strong>Next Check-up:</strong> {record.next_checkup_date}</p>
                    <p><strong>Vet:</strong> {record.vet_name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No medical records available.</p>
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
