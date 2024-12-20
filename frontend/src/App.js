import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AnimalListings from './AnimalListings'; // Animal listings page
import AnimalDetails from './AnimalDetails'; // Animal details page
import AdoptLanding from './AdoptLanding'; // New AdoptLanding page
import Adopt from './Adopt'; 
import Donate from './Donate'; // Donate page
import UserLoginSignup from './UserLoginSignup'; //User login/signup page
import AdminLogin from './AdminLogin'; //admin login page
import VetPage from './VetPage'; // Add this import for the VetPage
import StaffDashboard from './StaffDashboard'; // Staff Dashboard Landing page
import AnimalManagement from './AnimalManagement'; // Animal Management Page
import StaffManagement from './StaffManagement'; // Staff Management Page
import AdoptionApplications from './AdoptionApplications'; // Adoption Applications Page
import AddAnimal from './AddAnimal';  // Import AddAnimal
import AddStaff from './AddStaff';  // Import AddStaff


function App() {
  const [animals, setAnimals] = useState([]);

  
  const fetchAnimals = async () => {
    try {
      fetch(`http://localhost:3001/animals`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setAnimals(data.data);
        })
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };

  useEffect(() => {
    fetchAnimals();
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

        {/* User Login/Signup page */}
        <Route path="/login" element={<UserLoginSignup />} />

        {/* Admin Login */}
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* Vet Page route */}
        <Route path="/vet" element={<VetPage />} />  {/* Added route for VetPage */}

        {/* Staff Dashboard Landing */}
        <Route path="/staff-dashboard" element={<StaffDashboard />} />

        {/* Staff Dashboard sub-pages */}
        <Route path="/staff-dashboard/animal-management" element={<AnimalManagement />} />
        <Route path="/staff-dashboard/adoption-applications" element={<AdoptionApplications />} />        
        <Route path="/staff-dashboard/animal-management/add" element={<AddAnimal />} />
        <Route path="/staff-dashboard/staff-management" element={<StaffManagement />} />
        <Route path="/staff-dashboard/staff-management/add-staff" element={<AddStaff />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;