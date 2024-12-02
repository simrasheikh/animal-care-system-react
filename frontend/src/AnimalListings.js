import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AnimalListings = () => {
  const [animals, setAnimals] = useState([]);
  const [filters, setFilters] = useState({ species: '', age: '', status: '' });
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy animal data for testing
  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        // Replace this part with your actual API call when your backend is ready
        // const response = await fetch('http://localhost:5001/animals');
        // const data = await response.json();

        // Dummy data
        const data = [
          { id: 1, name: 'Bella', species: 'Dog', age: 'Puppy', status: 'Available', imageName: 'bella.jpg' },
          { id: 2, name: 'Milo', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'milo.jpg' },
          { id: 3, name: 'Charlie', species: 'Dog', age: 'Senior', status: 'Adopted', imageName: 'charlie.jpg' },
          { id: 4, name: 'Lucy', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'lucy.jpg' },
          { id: 5, name: 'Milo', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'milo.jpg' },
          { id: 6, name: 'Charlie', species: 'Dog', age: 'Senior', status: 'Adopted', imageName: 'charlie.jpg' },
          { id: 7, name: 'Lucy', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'lucy.jpg' },
          { id: 8, name: 'Bella', species: 'Dog', age: 'Puppy', status: 'Available', imageName: 'bella.jpg' },
          { id: 9, name: 'Charlie', species: 'Dog', age: 'Senior', status: 'Adopted', imageName: 'charlie.jpg' },
          { id: 10, name: 'Lucy', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'lucy.jpg' },
          { id: 11, name: 'Milo', species: 'Cat', age: 'Adult', status: 'Available', imageName: 'milo.jpg' },
          { id: 12, name: 'Charlie', species: 'Dog', age: 'Senior', status: 'Adopted', imageName: 'charlie.jpg' },
        ];
        setAnimals(data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchAnimals();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAnimals = animals.filter((animal) => {
    const matchesSpecies = filters.species ? animal.species.includes(filters.species) : true;
    const matchesAge = filters.age ? animal.age === filters.age : true;
    const matchesStatus = filters.status ? animal.status === filters.status : true;
    const matchesSearchTerm = animal.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSpecies && matchesAge && matchesStatus && matchesSearchTerm;
  });

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
          <Link to="/animals" className="text-white hover:text-gray-300">Browse Animals</Link>
          <Link to="/adopt" className="text-white hover:text-gray-300">Adopt</Link>
          <Link to="/donate" className="text-white hover:text-gray-300">Donate</Link>
          <Link to="/vet" className="text-white hover:text-gray-300">Vet Services</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Staff Login</Link>
        </div>
      </nav>

      {/* Search & Filter Bar */}
      <div className="p-4 bg-gray-200">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search by name..."
            className="p-2 border rounded"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select
            name="species"
            className="p-2 border rounded"
            value={filters.species}
            onChange={handleFilterChange}
          >
            <option value="">Select Species</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
          <select
            name="age"
            className="p-2 border rounded"
            value={filters.age}
            onChange={handleFilterChange}
          >
            <option value="">Select Age</option>
            <option value="Puppy">Puppy</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
          <select
            name="status"
            className="p-2 border rounded"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">Select Status</option>
            <option value="Available">Available</option>
            <option value="Adopted">Adopted</option>
          </select>
        </div>
      </div>

      {/* Animal Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredAnimals.map((animal) => (
          <div key={animal.id} className="bg-white p-4 rounded-lg shadow-lg">
            {/* Dynamically load image based on imageName */}
            <Link to={`/animals/${animal.id}`} className="block">
              <img
                src={require(`./assets/${animal.imageName}`)}  // This will reference images in the src/assets folder
                alt={animal.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-2xl font-semibold mt-4">{animal.name}</h3>
              <p className="text-sm text-gray-500">{animal.species}</p>
              <p className="text-sm text-gray-500">Age: {animal.age}</p>
              <p className="text-sm text-gray-500">Status: {animal.status}</p>
            </Link>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default AnimalListings;
