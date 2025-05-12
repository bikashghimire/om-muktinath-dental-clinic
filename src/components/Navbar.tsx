import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="h-10 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === link.path 
                    ? 'text-cyan-600' 
                    : 'text-gray-700 hover:text-cyan-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* CTA - Phone */}
          <div className="hidden lg:flex items-center">
            <a 
              href="tel:+11234567890" 
              className="flex items-center text-cyan-600 font-medium hover:text-cyan-800 transition-colors"
            >
              <Phone size={20} className="mr-2" />
              (123) 456-7890
            </a>
            <Link 
              to="/appointment" 
              className="ml-6 btn btn-primary"
            >
              Book Appointment
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden animate-fade-in">
          <div className="py-4 bg-white border-t">
            <div className="container-custom">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`py-2 font-medium ${
                      location.pathname === link.path 
                        ? 'text-cyan-600' 
                        : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  to="/appointment"
                  className="btn btn-primary w-full text-center mt-4"
                >
                  Book Appointment
                </Link>
                <a 
                  href="tel:+11234567890" 
                  className="flex items-center justify-center py-2 text-cyan-600 font-medium"
                >
                  <Phone size={20} className="mr-2" />
                  (123) 456-7890
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;