import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import components with correct paths
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import CallToAction from './components/CallToAction';
import ContactSection from './components/ContactSection';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import ProtectedRoute from './components/Admin/ProtectedRoute';

// Create a simple Header component if it doesn't exist
const Header = () => (
  <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div className="font-display font-bold text-xl text-primary-600">Huey The Helicopter</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="text-gray-700 hover:text-primary-600">Home</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-primary-600">About</a></li>
          <li><a href="#benefits" className="text-gray-700 hover:text-primary-600">Benefits</a></li>
          <li><a href="#products" className="text-gray-700 hover:text-primary-600">Products</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-primary-600">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

// Create a simple Footer component if it doesn't exist
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p>© {new Date().getFullYear()} Huey The Helicopter. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="/" element={
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Benefits />
              <CallToAction />
              <ContactSection />
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;