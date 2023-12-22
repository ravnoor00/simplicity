// AboutUsPage.jsx

import React from 'react';
import NavBar from './NavBar';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-purple-200 text-gray-900">
       <NavBar /> {NavBar}
      <div className="py-10 px-5 md:px-10">
        <h1 className="text-5xl font-bold text-center text-purple-700 mb-10">Who We Are</h1>
        <p className="mb-6 text-lg text-center">
          We Care Act NYC is a recognized 501(c)3 non-profit organization committed to empowering underserved students by providing them with free or low-cost computers and electronic devices. We believe in fostering digital literacy and expanding opportunities by exposing young leaders to the vast potential of technology-related frontiers.
        </p>
      </div>
      <div className="py-5">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-5">We believe in...</h2>
        <div className="flex flex-wrap justify-center items-stretch gap-10">
          {/* Card 1 */}
          <div className="max-w-sm bg-white rounded-lg shadow-md p-5">
            <h3 className="text-xl font-bold text-purple-700 mb-3">Education</h3>
            <p>Empowering students through taking away barriers of technology access and placing the Internet's resources at the tip of their fingers.</p>
          </div>
          {/* Card 2 */}
          <div className="max-w-sm bg-white rounded-lg shadow-md p-5">
            <h3 className="text-xl font-bold text-purple-700 mb-3">Environment</h3>
            <p>Diverting electronics from companies and renewing their life to help students and our Earth thrive.</p>
          </div>
          {/* Card 3 */}
          <div className="max-w-sm bg-white rounded-lg shadow-md p-5">
            <h3 className="text-xl font-bold text-purple-700 mb-3">Technology</h3>
            <p>Leveraging technology and education through tutoring services, programming resources, and technological guidance.</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md my-10 py-5 px-5 md:px-10">
        <h2 className="text-4xl font-bold text-purple-700 mb-5">Our Story</h2>
        <p>
          Founded by students at the Bronx High School of Science in 2021, We Care Act NYC aims to provide underserved students in New York City with access to personal digital devices.
        </p>
        <p className="mt-3">
          We obtain computer donations from our partners and corporations from around the five boroughs who no longer need the technology and seek ways to give back to their community. With these generous donations, we are able to take used equipment, refurbish and renew them, and donate them to disinvested communities and students around NYC.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
