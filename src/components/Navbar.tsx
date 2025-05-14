import React, { useState, useEffect } from 'react';
import { Menu, X, Sprout } from 'lucide-react';

interface NavbarProps {
  onAuthClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAuthClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Sprout className={`h-8 w-8 ${isScrolled ? 'text-green-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Terra Logic
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLink href="#features" isScrolled={isScrolled}>Features</NavLink>
              <NavLink href="#technology" isScrolled={isScrolled}>Technology</NavLink>
              <NavLink href="#solutions" isScrolled={isScrolled}>Solutions</NavLink>
              <NavLink href="#success-stories" isScrolled={isScrolled}>Success Stories</NavLink>
              <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
              <button 
                onClick={onAuthClick}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Sign In
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#technology">Technology</MobileNavLink>
            <MobileNavLink href="#solutions">Solutions</MobileNavLink>
            <MobileNavLink href="#success-stories">Success Stories</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <button 
              onClick={() => {
                setIsOpen(false);
                onAuthClick();
              }}
              className="w-full text-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 mt-3"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, isScrolled }) => (
  <a 
    href={href} 
    className={`text-sm font-medium hover:text-green-600 transition-colors duration-300 ${
      isScrolled ? 'text-gray-800' : 'text-white'
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 hover:text-green-600 transition-colors duration-300"
    onClick={() => setTimeout(() => window.scrollTo({ top: document.querySelector(href).offsetTop - 100, behavior: 'smooth' }), 100)}
  >
    {children}
  </a>
);

export default Navbar;