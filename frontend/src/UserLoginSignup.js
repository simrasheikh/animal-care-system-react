import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Password strength regex
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!validateEmail(email)) {
      setLoginError("Invalid email format.");
      return;
    }

    if (password.length < 8) {
      setLoginError("Password must be at least 8 characters long.");
      return;
    }

    setLoginError("");

    // Backend login logic (commented out for now)
    /*
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      // Perform redirection or save token to localStorage/sessionStorage
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Invalid email or password.");
    }
    */
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const role = e.target.role.value;

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
        "Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setSignupError("Passwords do not match.");
      return;
    }

    if (!role) {
      setSignupError("Please select a role.");
      return;
    }

    setSignupError("");

    // Backend signup logic (commented out for now)
    /*
    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
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
    */
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
          <Link to="/donate" className="text-white hover:text-gray-300">Donate</Link>
          <Link to="/vet" className="text-white hover:text-gray-300">Vet Services</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
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
            {loginError && <p className="text-red-500 text-sm mb-4">{loginError}</p>}
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
            <button type="submit" className="w-full py-3 bg-red-700 text-white font-semibold rounded hover:bg-red-800">
              Login
            </button>
          </form>
        ) : (
          /* Signup Form */
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
            <button type="submit" className="w-full py-3 bg-red-700 text-white font-semibold rounded hover:bg-red-800">
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
