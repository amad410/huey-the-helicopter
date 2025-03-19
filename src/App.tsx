import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Benefits from './components/Benefits';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SubscriptionPopup from './components/SubscriptionPopup';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedBefore = localStorage.getItem('huey_visited');
    
    if (!hasVisitedBefore) {
      // Show popup after 3 seconds on first visit
      const timer = setTimeout(() => {
        setShowPopup(true);
        // Mark that the user has visited
        localStorage.setItem('huey_visited', 'true');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Benefits />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Subscription Popup */}
      <SubscriptionPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  );
}

export default App;