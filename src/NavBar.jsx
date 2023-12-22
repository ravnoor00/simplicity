// NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 mr-6">Simplicity</Link>
            <Link to="/about" className="text-gray-800 mx-2 hover:underline">About Us</Link>
            <Link to="/services" className="text-gray-800 mx-2 hover:underline">Services</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
