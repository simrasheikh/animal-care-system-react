import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import textbg from './assets/stafflandingbg.jpg'; // The background image

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok && data.message === "Staff validated successfully") {
        setErrorMessage("");
        navigate("/staff-dashboard");
      } else {
        setErrorMessage(data.message || "Failed to login.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage("Failed to login.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#21422b' }}>
        <a href="/" className="flex items-center text-2xl font-bold text-white">
          <img src="/catlogo2.png" alt="Cat Logo" className="w-8 h-8 mr-2" />
          Animal Care System
        </a>        
      </nav>

      {/* Banner Section */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${textbg})`, height: '180px' }} // Adjust the height value here
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Access Your Dashboard
          </h1>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
            Please login with your credentials to access the staff dashboard.
          </p>
        </div>
      </section>

      {/* Login Form */}
      <div className="container mx-auto p-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Staff Login</h2>
          {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button type="submit" className="w-full py-3 rounded-lg bg-teal-700 text-white font-semibold hover:bg-teal-800 transition-colors">
              Login
            </button>
          </form>
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

export default AdminLogin;
