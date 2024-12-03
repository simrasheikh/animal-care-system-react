import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const AnimalDetails = () => {
  const { id } = useParams(); // Get the 'id' from the URL
  const [animal, setAnimal] = useState(null);

  // Dummy data for testing
  const dummyAnimals = [
    { id: 1, name: 'Bella', species: 'Dog', age: 'Puppy', status: 'Available', imageName: 'bella.jpg', description: 'A playful puppy ready for adoption.' },
    { id: 2, name: 'Milo', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'milo.jpg', description: 'A calm and friendly cat looking for a home.' },
    { id: 3, name: 'Charlie', species: 'Dog', age: 'Senior', status: 'Available', imageName: 'charlie.jpg', description: 'A senior dog, adopted to a loving family.' },
    { id: 4, name: 'Lucy', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'lucy.jpg', description: 'A curious and independent cat.' },
    { id: 5, name: 'Milo', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'milo.jpg', description: 'A calm and friendly cat looking for a home.' },
    { id: 6, name: 'Charlie', species: 'Dog', age: 'Senior', status: 'Available', imageName: 'charlie.jpg', description: 'A senior dog, adopted to a loving family.' },
    { id: 7, name: 'Lucy', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'lucy.jpg', description: 'A curious and independent cat.' },
    { id: 8, name: 'Bella', species: 'Dog', age: 'Puppy', status: 'Available', imageName: 'bella.jpg', description: 'A playful puppy ready for adoption.' },
    { id: 9, name: 'Charlie', species: 'Dog', age: 'Senior', status: 'Available', imageName: 'charlie.jpg', description: 'A senior dog, adopted to a loving family.' },
    { id: 10, name: 'Lucy', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'lucy.jpg', description: 'A curious and independent cat.' },
    { id: 11, name: 'Milo', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'milo.jpg', description: 'A calm and friendly cat looking for a home.' },
    { id: 12, name: 'Charlie', species: 'Dog', age: 'Senior', status: 'Available', imageName: 'charlie.jpg', description: 'A senior dog, adopted to a loving family.' },
  ];

  // Function to get the animal details by id from dummy data
  const fetchAnimalDetails = () => {
    const foundAnimal = dummyAnimals.find(animal => animal.id === parseInt(id));
    setAnimal(foundAnimal);
  };

  useEffect(() => {
    fetchAnimalDetails(); // Fetch animal details when the component mounts
  }, [id]);

  // Show loading if animal data is not yet fetched
  if (!animal) return <p>Loading...</p>;

  return (
    <div>
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#66443e' }}>
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

      {/* Animal Details */}
      <div className="p-6">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {/* Dynamically load image based on imageName */}
          <img
            src={require(`./assets/${animal.imageName}`)}  // Dynamically load image from the assets folder
            alt={animal.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h2 className="text-3xl font-semibold mt-4">{animal.name}</h2>
          <p className="text-lg text-gray-500">{animal.species}</p>
          <p className="text-sm text-gray-500">Age: {animal.age}</p>
          <p className="text-sm text-gray-500">Status: {animal.status}</p>
          <p className="text-sm text-gray-500 mt-4">{animal.description}</p>  {/* Displaying the description */}

          {/* Adopt Button */}
          {animal.status === 'Available' && (
            <Link to={`/adopt/${animal.id}`}> {/* Update the Link */}
              <button className="w-full py-3 bg-red-700 text-white font-semibold rounded hover:bg-red-800 mt-4">
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
