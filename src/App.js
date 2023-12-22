import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUsPage from './AboutUsPage'; // Create this component
import ServicesPage from './ServicesPage'; // Create this component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
};

export default App;