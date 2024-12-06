import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MedicalRecords = () => {
  const [records, setRecords] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);

  // UseEffect for fetching data (dummy data for now)
  useEffect(() => {
    setLoading(true);

    // Dummy data
    const dummyData = [
      {
        id: 1,
        animalId: 101,
        treatmentDate: '2024-12-01',
        diagnosis: 'Fever',
        vetName: 'Dr. John Doe',
      },
      {
        id: 2,
        animalId: 102,
        treatmentDate: '2024-11-15',
        diagnosis: 'Infection',
        vetName: 'Dr. Jane Smith',
      },
      {
        id: 3,
        animalId: 103,
        treatmentDate: '2024-12-02',
        diagnosis: 'Sprain',
        vetName: 'Dr. Alice Brown',
      },
    ];

    // Simulate fetching data
    setTimeout(() => {
      setRecords(dummyData);
      setLoading(false);
    }, 1000);

    // Backend fetching (commented out for now)
    /*
    fetch('http://localhost:3001/medical-records', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch medical records.');
        }
        return response.json();
      })
      .then((data) => {
        setRecords(data); // Assuming the API returns an array of records
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching medical records:', err);
        setError('Failed to load medical records. Please try again later.');
        setLoading(false);
      });
    */
  }, []);

  // Filter records
  const filteredRecords = records.filter((record) =>
    filter ? record.animalId.toString().includes(filter) || record.vetName.toLowerCase().includes(filter.toLowerCase()) : true
  );

  // Handle delete record
  const handleDelete = (id) => {
    // Backend delete logic (commented out)
    /*
    fetch(`http://localhost:3001/medical-records/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete record.');
        }
        return response.json();
      })
      .then(() => {
        setRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));
      })
      .catch((err) => {
        console.error('Error deleting record:', err);
        setError('Failed to delete record. Please try again.');
      });
    */
    // Temporary logic
    setRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));
  };

  // Handle edit record
  const handleEdit = (record) => {
    setCurrentRecord(record);
    setShowEditModal(true);
  };

  // Save edited record
  const handleSaveEdit = (e) => {
    e.preventDefault();

    // Backend update logic (commented out)
    /*
    fetch(`http://localhost:3001/medical-records/${currentRecord.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentRecord),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update record.');
        }
        return response.json();
      })
      .then((updatedRecord) => {
        setRecords((prevRecords) =>
          prevRecords.map((record) =>
            record.id === updatedRecord.id ? updatedRecord : record
          )
        );
        setShowEditModal(false);
      })
      .catch((err) => {
        console.error('Error updating record:', err);
        setError('Failed to update record. Please try again.');
      });
    */
    // Temporary logic
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.id === currentRecord.id ? currentRecord : record
      )
    );
    setShowEditModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#21422b' }}>
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
          <img src="/catlogo.png" alt="Cat Logo" className="w-8 h-8 mr-2" />
          Animal Care
        </Link>
        <div className="space-x-4">
          <Link to="/staff-dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link to="/staff-dashboard/medical-records" className="text-white hover:text-gray-300">Medical Records</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Logout</Link>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Medical Records</h2>

        {/* Summary Section with Add New Record */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Total Records Box */}
        <div className="bg-teal-100 text-teal-800 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold">Total Records</h4>
            <p className="text-2xl font-bold">{records.length}</p>
        </div>

        {/* Filtered Records Box */}
        <div className="bg-green-100 text-green-800 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold">Filtered Records</h4>
            <p className="text-2xl font-bold">{filteredRecords.length}</p>
        </div>

        {/* Add New Record Box */}
        <Link
            to="/staff-dashboard/medical-records/add"
            className="bg-blue-100 text-blue-800 p-4 rounded shadow-md flex flex-col items-center justify-center cursor-pointer hover:bg-blue-200 transition"
        >
            <i className="fas fa-plus text-3xl mb-2"></i>
            <h4 className="text-lg font-semibold">Add New Record</h4>
        </Link>
        </div>

        {/* Filter Section */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Animal ID or Vet Name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>

        {loading ? (
        <div className="flex justify-center items-center">
            <div className="animate-pulse space-y-2 w-full max-w-4xl">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="bg-gray-200 h-6 rounded-md"></div>
            ))}
            </div>
        </div>
        ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
            <table className="min-w-full table-auto">
            <thead className="bg-gray-100 border-b">
                <tr>
                <th className="px-4 py-2 text-left font-semibold">Animal ID</th>
                <th className="px-4 py-2 text-left font-semibold">Treatment Date</th>
                <th className="px-4 py-2 text-left font-semibold">Diagnosis</th>
                <th className="px-4 py-2 text-left font-semibold">Vet Name</th>
                <th className="px-4 py-2 text-center font-semibold">Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredRecords.map((record, idx) => (
                <tr
                    key={record.id}
                    className={`border-b ${
                    idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100 transition duration-150`}
                >
                    <td className="px-4 py-2">{record.animalId}</td>
                    <td className="px-4 py-2">{record.treatmentDate}</td>
                    <td className="px-4 py-2">{record.diagnosis}</td>
                    <td className="px-4 py-2">{record.vetName}</td>
                    <td className="px-4 py-2 flex justify-center space-x-2">
                    <button
                        onClick={() => handleEdit(record)}
                        className="text-blue-500 hover:text-blue-700 tooltip"
                    >
                        <i className="fas fa-edit"></i>
                        <span className="tooltip-text">Edit</span>
                    </button>
                    <button
                        onClick={() => handleDelete(record.id)}
                        className="text-red-500 hover:text-red-700 tooltip"
                    >
                        <i className="fas fa-trash"></i>
                        <span className="tooltip-text">Delete</span>
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        )}

      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h3 className="text-lg font-bold mb-4">Edit Medical Record</h3>
            <form onSubmit={handleSaveEdit}>
              <input
                type="text"
                value={currentRecord.diagnosis}
                onChange={(e) =>
                  setCurrentRecord({ ...currentRecord, diagnosis: e.target.value })
                }
                className="w-full p-2 border rounded mb-4"
              />
              <input
                type="date"
                value={currentRecord.treatmentDate}
                onChange={(e) =>
                  setCurrentRecord({ ...currentRecord, treatmentDate: e.target.value })
                }
                className="w-full p-2 border rounded mb-4"
              />
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
              <button type="button" onClick={() => setShowEditModal(false)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
            </form>
          </div>
        </div>
      )}

      <footer className="bg-black text-white p-4 text-center mt-auto">
        <p>&copy; 2024 Animal Care System</p>
      </footer>
    </div>
  );
};

export default MedicalRecords;
