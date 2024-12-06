import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';  // Add this import statement

const AddMedicalRecord = () => {
  const [animalId, setAnimalId] = useState('');
  const [treatmentDate, setTreatmentDate] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [treatmentDetails, setTreatmentDetails] = useState('');
  const [nextCheckupDate, setNextCheckupDate] = useState('');
  const [vetName, setVetName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      animalId,
      treatmentDate,
      diagnosis,
      treatmentDetails,
      nextCheckupDate,
      vetName,
    };
    console.log('New Medical Record:', newRecord);
    
    // Save the new medical record (for now, logging to console)
    // Later, this can be sent to the backend via an API call

    // Redirect back to the Medical Records page
    navigate('/staff-dashboard/medical-records');
  };

  return (
    <div>
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#21422b' }}>
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
            {/* Logo to the left */}
            <img src="/catlogo.png" alt="Cat Logo" className="w-8 h-8 mr-2" /> 
            Animal Care
        </Link>
        <div className="space-x-4">
          <Link to="/staff-dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link to="/staff-dashboard/animal-management" className="text-white hover:text-gray-300">Animal Management</Link>
          <Link to="/staff-dashboard/adoption-applications" className="text-white hover:text-gray-300">Adoption Applications</Link>
          <Link to="/staff-dashboard/medical-records" className="text-white hover:text-gray-300">Medical Records</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Logout</Link>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Add New Medical Record</h2>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          {/* Animal ID */}
          <div>
            <input
              type="text"
              value={animalId}
              onChange={(e) => setAnimalId(e.target.value)}
              placeholder="Animal ID"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Treatment Date */}
          <div>
            <input
              type="date"
              value={treatmentDate}
              onChange={(e) => setTreatmentDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Diagnosis */}
          <div>
            <input
              type="text"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              placeholder="Diagnosis"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Treatment Details */}
          <div>
            <textarea
              value={treatmentDetails}
              onChange={(e) => setTreatmentDetails(e.target.value)}
              placeholder="Treatment Details"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Next Check-up Date */}
          <div>
            <input
              type="date"
              value={nextCheckupDate}
              onChange={(e) => setNextCheckupDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          {/* Vet Name */}
          <div>
            <input
              type="text"
              value={vetName}
              onChange={(e) => setVetName(e.target.value)}
              placeholder="Veterinarian Name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>

          <button type="submit" className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">
            Save Record
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

export default AddMedicalRecord;
