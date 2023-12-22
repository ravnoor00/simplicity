// ServicesPage.jsx

import React from 'react';
import NavBar from './NavBar';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-purple-200 text-gray-900">
            <NavBar /> {NavBar}
      <div className="py-10 px-5 md:px-10">
        <h1 className="text-5xl font-bold text-center text-purple-700 mb-10">Our Services</h1>
        <div className="flex flex-wrap justify-center items-stretch gap-10">
          {/* Service Card 1 */}
          <div className="max-w-sm bg-white rounded-lg shadow-md p-5">
            <h3 className="text-xl font-bold text-purple-700 mb-3">Service One</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          {/* Service Card 2 */}
          {/* ... repeat for as many services as you need ... */}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
