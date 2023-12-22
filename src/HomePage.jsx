import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from './NavBar'


// Sample data for companies and testimonials
const testimonials = [
  { id: 1, name: "Global Tech", testimonial: "Simplicity's platform has enabled us to grow our business exponentially." },
  { id: 2, name: "Innovate Secure", testimonial: "Their team is responsive and attentive to our needs." },
  { id: 3, name: "Green Future", testimonial: "We've seen a significant reduction in our carbon footprint thanks to Simplicity." },
  { id: 4, name: "Green Future", testimonial: "We've seen a significant reduction in our carbon footprint thanks to Simplicity." },
  // ... add more testimonials as needed
];

const settings = {
  dots: false,
  infinite: true,
  speed: 10000, // Slow transition for a smoother glide
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000, // No delay for continuous movement
  cssEase: "linear", // Linear transition for a smooth constant movement
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const HomePage = () => {
  const sliderRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 50); // Adjust time to control speed of the slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <NavBar /> {/* Include the NavBar */}
      <header className="bg-purple-600 text-white text-center py-12">
        <h1 className="text-5xl font-bold mb-2">Made for people. Built for productivity.</h1>
        <p className="mb-6">Connect the right people, find anything you need and automate the rest. That's work in Simplicity, your productivity platform.</p>
        <button className="bg-white text-purple-600 px-5 py-3 rounded-md text-sm font-medium">Talk to Sales</button>
      </header>
      <section className="container mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Trusted by Companies all over the World</h2>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="p-4">
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
                <div className="font-bold text-xl mb-2">{testimonial.name}</div>
                <p className="text-gray-700 text-base">{testimonial.testimonial}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className="py-12 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Vision</h2>
        <p className="text-center text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {/* Add more lorem ipsum or actual content here */}
      </section>
      <footer className="bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-sm">© 2023 Simplicity Inc. All rights reserved.</p>
            {/* Add footer links here */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
