import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Benefits from './components/Benefits';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Benefits />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;