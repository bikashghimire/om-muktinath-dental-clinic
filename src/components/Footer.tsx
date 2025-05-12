import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div>
            <Link to="/">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Providing exceptional dental care with a gentle touch for over 15 years.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={18} className="text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-gray-400">8:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Saturday</p>
                  <p className="text-gray-400">9:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Sunday</p>
                  <p className="text-gray-400">Closed</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-400">123 Dental Street, Medical Center, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-cyan-400 mr-2 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-cyan-400 mr-2 flex-shrink-0" />
                <a href="mailto:info@brightsmile.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  info@brightsmile.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;