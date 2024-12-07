import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddMedicalRecord = () => {
  const [animalId, setAnimalId] = useState('');
  const [treatmentDate, setTreatmentDate] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [treatmentDetails, setTreatmentDetails] = useState('');
  const [nextCheckupDate, setNextCheckupDate] = useState('');
  const [vetName, setVetName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Form validation
  const validateForm = () => {
    if (!animalId || !treatmentDate || !diagnosis || !treatmentDetails || !vetName) {
      setError('Please fill out all required fields.');
      return false;
    }
    if (!/^\d+$/.test(animalId)) {
      setError('Animal ID must be a numeric value.');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecord = {
      animalId: parseInt(animalId, 10),
      treatmentDate,
      diagnosis,
      treatmentDetails,
      nextCheckupDate: nextCheckupDate || null, // Optional field
      vetName,
    };

    console.log('New Medical Record:', newRecord);

    // Backend API call (to be implemented)
    /*
    fetch('http://localhost:3001/medical-records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecord),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add medical record.');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Record saved:', data);
        navigate('/staff-dashboard/medical-records');
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Failed to save medical record. Please try again.');
      });
    */

    // Temporary redirection
    navigate('/staff-dashboard/medical-records');
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
        <h2 className="text-3xl font-semibold text-center mb-6">Add New Medical Record</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          {/* Animal ID */}
          <div>
            <input
              type="text"
              value={animalId}
              onChange={(e) => setAnimalId(e.target.value)}
              placeholder="Animal ID (numeric)"
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
