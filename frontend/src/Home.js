import React from "react";
import textbg from './assets/homebg.jpg'; // Adjust the path based on your folder structure
import { Link } from "react-router-dom";
import './styles.css';  // Make sure this points to the correct path
import 'animate.css';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <nav className="flex justify-between items-center p-4 text-white" style={{ backgroundColor: '#1a2b3b' }}>
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
          <Link to="/login" className="text-white hover:text-gray-300">Staff Login</Link>
        </div>
      </nav>

      {/* Banner Section with Animated Background */}
      <section
        className="relative hero-bg bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${textbg})`,
          height: '547px' // Set your custom height here
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Animal Care System
          </h1>
          <p className="text-lg md:text-xl text-center mb-6 animate__animated animate__slideInUp">
            Helping Animals Thrive, One Paw at a Time
          </p>
          <p className="text-lg md:text-xl text-center mb-1 animate__animated animate__slideInUp">
            We believe that every animal deserves love, care, and a forever home. Our team is dedicated to providing expert veterinary services, helping you find the perfect companion, and making sure that animals receive the care they need to thrive.
          </p>
          <div className="mt-6">
            
          <Link to="/animals">
            <button
              className="px-8 py-3 rounded-lg text-white bg-[#4992b8] transition-all transform hover:scale-105 hover:translate-y-[-2px] hover:bg-[#3e7a99] animate__animated animate__slideInUp"
            >
              Browse Animals
            </button>
          </Link>

          <Link to="/donate">
            <button
              className="px-8 py-3 rounded-lg text-white bg-[#4992b8] transition-all transform hover:scale-105 hover:translate-y-[-2px] hover:bg-[#3e7a99] animate__animated animate__slideInUp ml-6"
            >
              Donate Now
            </button>
          </Link>

          </div>
        </div>
      </section>      
      
      <section className="featured-animals-section py-12 bg-gray-100">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Meet Our Featured Animals</h2>
    <div className="carousel-container flex overflow-hidden relative">
      {/* Add Carousel or Slider for Featured Animals */}
      <div className="carousel-items flex space-x-4">
        <div className="carousel-item bg-white p-4 rounded-lg shadow-lg">
          <img src="animal1.jpg" alt="Animal 1" className="w-full h-64 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Bella - Dog</h3>
          <p className="text-sm text-gray-500">Puppy</p>
          <Link to="/animals/1" className="text-teal-600">View More</Link>
        </div>
        <div className="carousel-item bg-white p-4 rounded-lg shadow-lg">
          <img src="animal2.jpg" alt="Animal 2" className="w-full h-64 object-cover rounded-lg" />
          <h3 className="text-xl font-semibold mt-4">Milo - Cat</h3>
          <p className="text-sm text-gray-500">Adult</p>
          <Link to="/animals/2" className="text-teal-600">View More</Link>
        </div>
        {/* Add more animals */}
      </div>
    </div>
  </div>
</section>
<section className="how-it-works py-12 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">How It Works</h2>
    <div className="steps-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="step bg-teal-100 p-6 rounded-lg shadow-md">
        <div className="step-icon text-4xl mb-4">🐾</div>
        <h3 className="text-xl font-semibold">Browse Animals</h3>
        <p className="text-gray-600">Explore our wide range of adoptable animals. Find the perfect companion for you.</p>
      </div>
      <div className="step bg-teal-100 p-6 rounded-lg shadow-md">
        <div className="step-icon text-4xl mb-4">📝</div>
        <h3 className="text-xl font-semibold">Fill Out the Form</h3>
        <p className="text-gray-600">Complete a simple adoption application form with your details and preferences.</p>
      </div>
      <div className="step bg-teal-100 p-6 rounded-lg shadow-md">
        <div className="step-icon text-4xl mb-4">✅</div>
        <h3 className="text-xl font-semibold">Adopt Your New Friend</h3>
        <p className="text-gray-600">Once approved, welcome your new furry friend into your home!</p>
      </div>
    </div>
  </div>
</section>

<section className="testimonials py-12 bg-gray-50">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">What Our Community Says</h2>
    <div className="testimonials-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
        <p className="italic">"Adopting Bella was the best decision of my life. She's brought so much joy to my family!"</p>
        <p className="font-semibold mt-4">Emily Johnson</p>
        <p className="text-gray-500">Adopter</p>
      </div>
      <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
        <p className="italic">"The process was so easy, and we are so grateful to give a loving home to Milo."</p>
        <p className="font-semibold mt-4">John Smith</p>
        <p className="text-gray-500">Adopter</p>
      </div>
      <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
        <p className="italic">"We donated to help these animals, and it feels great knowing we're making a difference."</p>
        <p className="font-semibold mt-4">Sarah Brown</p>
        <p className="text-gray-500">Donor</p>
      </div>
    </div>
  </div>
</section>
<section className="cta py-12 bg-teal-600 text-white text-center">
  <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
  <p className="text-lg mb-6">Your action today helps us provide the love, care, and shelter animals need. Become a part of our community and help animals find forever homes.</p>
  <Link to="/adopt">
    <button className="px-8 py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors">
      Start Your Adoption Journey
    </button>
  </Link>
</section>



      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center">
        <p>&copy; 2024 Animal Care System. All rights reserved.</p>
        <p>Follow us on social media: Facebook | Twitter | Instagram</p>
      </footer>
    </div>
  );
};

export default Home;
