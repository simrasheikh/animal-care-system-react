import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AnimalListings from './AnimalListings'; // Animal listings page
import AnimalDetails from './AnimalDetails'; // Animal details page
import AdoptLanding from './AdoptLanding'; // New AdoptLanding page
import Adopt from './Adopt'; 
import Donate from './Donate'; // Donate page
import LoginSignup from './LoginSignup';
import VetPage from './VetPage'; // Add this import for the VetPage


function App() {
  const [animals, setAnimals] = useState([]);

  // Function to fetch animals based on filters
  const fetchAnimals = async (filters) => {
    const params = new URLSearchParams(filters).toString();
    const response = await fetch(`http://localhost:3002/animals?${params}`);
    const data = await response.json();
    setAnimals(data);
  };

  useEffect(() => {
    fetchAnimals({ status: 'Available' }); // Default filter to fetch available animals
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Animal Listings page */}
        <Route
          path="/animals"
          element={<AnimalListings animals={animals} fetchAnimals={fetchAnimals} />}
        />

        {/* Animal Details page */}
        <Route path="/animals/:id" element={<AnimalDetails />} />

        {/* Adopt page */}
        <Route path="/adopt/:id" element={<Adopt />} /> {/* Updated to handle specific animal adoption */}
        <Route path="/adopt" element={<AdoptLanding />} /> 

        {/* Donate page */}
        <Route path="/donate" element={<Donate />} />

        <Route path="/login" element={<LoginSignup />} />

        {/* Vet Page route */}
        <Route path="/vet" element={<VetPage />} />  {/* Added route for VetPage */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
