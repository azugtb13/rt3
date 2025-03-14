import React from 'react';
import { Crown } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Crown className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">Royal Transfer EU</span>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="/faq" className="text-gray-700 hover:text-blue-600">FAQs</a>
            <a href="/partners" className="text-gray-700 hover:text-blue-600">Partners</a>
            <a href="/rent" className="text-gray-700 hover:text-blue-600">Rent a Car</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;