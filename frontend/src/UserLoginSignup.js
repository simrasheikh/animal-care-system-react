import React, { useState } from "react";
import { Link } from "react-router-dom";
import textbg from './assets/signupbg.jpg';

const LoginSignup = () => {
  const [signupError, setSignupError] = useState("");

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Password strength regex (now only requires 1 uppercase and 1 number)
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log("input details: ", { name, username, email, password });


    if (!name.trim()) {
      setSignupError("Name is required.");
      return;
    }

    if (!validateEmail(email)) {
      setSignupError("Invalid email format.");
      return;
    }

    if (!validatePassword(password)) {
      setSignupError(
        "Password must be at least 8 characters long and include at least one uppercase letter and one number."
      );
      return;
    }

    if (password !== confirmPassword) {
      setSignupError("Passwords do not match.");
      return;
    }

    setSignupError("");

    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username, email, password }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const data = await response.json();
      console.log("Signup successful:", data);
      // Perform redirection or notify user of successful signup
    } catch (error) {
      console.error("Signup failed:", error);
      setSignupError("Failed to create an account. Please try again.");
    }
  };

  return (
    <div>
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: "#1a2b3b" }}>
        <Link to="/" className="flex items-center text-2xl font-bold text-white">
          <img src="/catlogo.png" alt="Cat Logo" className="w-8 h-8 mr-2" />
          Animal Care
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/animals" className="text-white hover:text-gray-300">Browse Animals</Link>
          <Link to="/adopt" className="text-white hover:text-gray-300">Adopt</Link>          
          <Link to="/vet" className="text-white hover:text-gray-300">Vet Services</Link>
          <Link to="/login" className="text-white hover:text-gray-300">User Signup</Link>
          <Link to="/adminlogin" className="text-white hover:text-gray-300">Staff Login</Link>
        </div>
      </nav>

      {/* Banner Section */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${textbg})`, height: '180px' }} // Adjust the height value here
      >
        <div className="absolute inset-0 bg-black bg-opacity-55 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Join the Animal Care Community Today!
          </h1>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
            Sign up now to help find loving homes for animals in need.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Signup Form */}
        <form onSubmit={handleSignupSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Signup</h2>
          {signupError && <p className="text-red-500 text-sm mb-4">{signupError}</p>}
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <button type="submit" className="w-full py-3 rounded-lg bg-[#4992b8] text-white font-semibold rounded hover:bg-[#3e7a99]">
            Signup
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

export default LoginSignup;
