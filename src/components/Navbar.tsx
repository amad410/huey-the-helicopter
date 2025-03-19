import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import logo from './images/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Huey Logo" className="h-12 w-12" />
            <span className="ml-2 text-xl font-display font-bold text-primary-800">Huey The Helicopter</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-primary-600 hover:text-primary-800 font-medium">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary-600 font-medium">About</a>
            <a href="#products" className="text-gray-600 hover:text-primary-600 font-medium">Purchase</a>
            <a href="#benefits" className="text-gray-600 hover:text-primary-600 font-medium">Benefits</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 font-medium">Contact</a>
            <button className="flex items-center text-primary-600 hover:text-primary-800">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-1">Cart (0)</span>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {/* <img src={logo} alt="Huey Logo" className="h-8 w-8" /> */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-primary-600 font-medium">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium">About</a>
            <a href="#products" className="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium">Shop</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium">Benefits</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-primary-600 font-medium">Contact</a>
            <button className="flex items-center px-3 py-2 text-primary-600">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-1">Cart (0)</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;