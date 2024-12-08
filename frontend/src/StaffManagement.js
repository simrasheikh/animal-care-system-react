import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const StaffManagement = () => {
  const [staffMembers, setStaffMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentStaff, setCurrentStaff] = useState(null);
  const [staffFilter, setStaffFilter] = useState('');

  // Commented out the data fetching from the backend for now
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        // Commented out backend fetch
        // const response = await fetch(`http://localhost:3001/staff`, {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // });
        // const data = await response.json();
        
        // Using dummy data for now
        const dummyData = [
          { STAFF_ID: 1, name: 'John Doe', phone_number: '123-456-7890', email: 'john.doe@example.com', password: 'john123' },
          { STAFF_ID: 2, name: 'Jane Smith', phone_number: '987-654-3210', email: 'jane.smith@example.com', password: 'john123' },
          { STAFF_ID: 3, name: 'Alice Brown', phone_number: '555-123-4567', email: 'alice.brown@example.com', password: 'john123' },
          { STAFF_ID: 4, name: 'Bob White', phone_number: '555-987-6543', email: 'bob.white@example.com', password: 'john123' }
        ];
        setStaffMembers(dummyData); // Set the dummy data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching staff members:', error);
      }
    };

    fetchStaff();
  }, []);

  const handleEdit = (staff) => {
    setCurrentStaff(staff);
    setShowModal(true);
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    // Commented out the backend update
    // const response = await fetch(`http://localhost:3001/staff/${currentStaff.STAFF_ID}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: currentStaff.name,
    //     phone_number: currentStaff.phone_number,
    //     email: currentStaff.email,
    //     password: currentStaff.password,
    //   }),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Failed to save changes.');
    //     }
    //     return response.json();
    //   })
    //   .then((updatedStaff) => {
    //     setStaffMembers((prevStaffMembers) =>
    //       prevStaffMembers.map((staff) =>
    //         staff.STAFF_ID === updatedStaff.STAFF_ID ? updatedStaff : staff
    //       )
    //     );
    //     setShowModal(false); // Close the modal
    //   })
    //   .catch((err) => {
    //     console.error('Error saving changes:', err);
    //     alert('Failed to save changes. Please try again.');
    //   });

    // For now, we'll update the dummy data directly:
    setStaffMembers((prevStaffMembers) =>
      prevStaffMembers.map((staff) =>
        staff.STAFF_ID === currentStaff.STAFF_ID ? currentStaff : staff
      )
    );
    setShowModal(false); // Close the modal
  };

  const handleDelete = (staff) => {
    // Commented out backend delete
    // fetch(`http://localhost:3001/staff/${staff.STAFF_ID}`, {
    //   method: 'DELETE',
    // })
    //   .then((response) => response.json())
    //   .then(() => {
    //     // Immediately remove the deleted staff from the state
    //     setStaffMembers((prevStaffMembers) => prevStaffMembers.filter((item) => item.STAFF_ID !== staff.STAFF_ID));
    //   })
    //   .catch((err) => console.error(err));

    // For now, we'll remove the staff from the dummy data directly:
    setStaffMembers((prevStaffMembers) => prevStaffMembers.filter((item) => item.STAFF_ID !== staff.STAFF_ID));
  };

  const handleInputChange = (field, value) => {
    setCurrentStaff({ ...currentStaff, [field]: value });
  };

  // Filter staff by name or email
  const filteredStaff = staffMembers.filter(staff =>
    staff.name.toLowerCase().includes(staffFilter.toLowerCase()) ||
    staff.email.toLowerCase().includes(staffFilter.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
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
          <Link to="/staff-dashboard/staff-management" className="text-white hover:text-gray-300">Staff Management</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Logout</Link>
        </div>
      </nav>

      <div className="container mx-auto p-6 flex-grow">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Total Staff Members Box */}
          <div className="bg-teal-100 text-teal-800 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold">Total Staff Members</h4>
            <p className="text-2xl font-bold">{staffMembers.length}</p>
          </div>

          {/* Filtered Staff Members Box */}
          <div className="bg-green-100 text-green-800 p-4 rounded shadow-md">
            <h4 className="text-lg font-semibold">Filtered Staff Members</h4>
            <p className="text-2xl font-bold">{filteredStaff.length}</p>
          </div>

          {/* Add New Staff Button */}
          <Link to="/staff-dashboard/staff-management/add-staff">
            <div className="bg-blue-100 text-blue-800 p-4 rounded shadow-md flex flex-col items-center justify-center cursor-pointer hover:bg-blue-200 transition">
              <i className="fas fa-plus text-3xl mb-2"></i>
              <h4 className="text-lg font-semibold">Add New Staff Member</h4>
            </div>
          </Link>
        </div>

        {/* Filter Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Filter staff by name or email"
            className="w-full p-3 border border-gray-300 rounded"
            value={staffFilter}
            onChange={(e) => setStaffFilter(e.target.value)}
          />
        </div>

        {/* Staff Management Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
          {loading ? (
            <p className="text-center text-lg">Loading...</p>
          ) : filteredStaff.length === 0 ? (
            <p className="text-center text-lg">No staff members found.</p>
          ) : (
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 text-left">Staff ID</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Phone Number</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Password</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStaff.map((staff) => (
                  <tr key={staff.STAFF_ID} className="border-b hover:bg-gray-100 transition">
                    <td className="px-4 py-2">{staff.STAFF_ID}</td>
                    <td className="px-4 py-2">{staff.name}</td>
                    <td className="px-4 py-2">{staff.phone_number}</td>
                    <td className="px-4 py-2">{staff.email}</td>
                    <td className="px-4 py-2">{staff.password}</td>
                    <td className="px-4 py-2 flex space-x-2">
                      <button
                        onClick={() => handleEdit(staff)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <i className="fas fa-edit"></i> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(staff)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <i className="fas fa-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal for Editing */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Edit Staff</h3>
            <form onSubmit={handleSaveChanges} className="space-y-4">
              <input
                type="text"
                value={currentStaff.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Name"
                className="w-full p-3 border rounded"
              />
              <input
                type="text"
                value={currentStaff.phone_number}
                onChange={(e) => handleInputChange('phone_number', e.target.value)}
                placeholder="Phone Number"
                className="w-full p-3 border rounded"
              />
              <input
                type="email"
                value={currentStaff.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Email"
                className="w-full p-3 border rounded"
              />
              <input
                type="password"
                value={currentStaff.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                placeholder="Password"
                className="w-full p-3 border rounded"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center mt-auto">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default StaffManagement;
