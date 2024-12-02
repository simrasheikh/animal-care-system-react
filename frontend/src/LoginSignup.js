import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);  // Toggle between Login and Signup

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., call API to verify credentials)
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., call API to register a new user)
  };

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

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 ${isLogin ? "bg-red-700 text-white" : "bg-gray-300 text-black"} rounded-l-lg hover:bg-red-800`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-6 py-2 ${!isLogin ? "bg-red-700 text-white" : "bg-gray-300 text-black"} rounded-r-lg hover:bg-red-800`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* Login Form */}
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />

            <div className="text-right mb-4">
              <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-700 text-white font-semibold rounded hover:bg-red-800"
            >
              Login
            </button>
          </form>
        ) : (
          /* Signup Form */
          <form onSubmit={handleSignupSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Signup</h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
              required
            />

            {/* Role Dropdown */}
            <select className="w-full p-3 mb-4 border border-gray-300 rounded" required>
              <option value="">Select Role</option>
              <option value="adopter">Adopter</option>
              <option value="staff">Staff</option>
            </select>

            <button
              type="submit"
              className="w-full py-3 bg-red-700 text-white font-semibold rounded hover:bg-red-800"
            >
              Signup
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default LoginSignup;
