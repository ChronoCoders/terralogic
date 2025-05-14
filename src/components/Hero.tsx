import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import BookDemoForm from './BookDemoForm';

const Hero = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      heroRef.current.style.backgroundPositionY = `${scrolled * 0.4}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        ref={heroRef}
        className="relative bg-cover bg-center h-screen flex items-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="md:w-2/3 text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Intelligent Agriculture Analytics
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              Transform your agricultural data into actionable insights with Terra Logic's advanced image analysis and monitoring solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => setShowDemoForm(true)}
                className="border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-3 rounded-md text-base font-medium transition-all duration-300"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#features" className="text-white">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {showDemoForm && <BookDemoForm onClose={() => setShowDemoForm(false)} />}
    </>
  );
};

export default Hero;