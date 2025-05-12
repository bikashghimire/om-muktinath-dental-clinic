import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Home, Phone } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | BrightSmile Dental Clinic';
  }, []);
  
  return (
    <div className="animate-fade-in pt-24">
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <h1 className="text-9xl font-bold text-cyan-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
            We can't seem to find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button variant="primary" size="lg" icon={<Home size={20} />}>
                Back to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg" icon={<Phone size={20} />}>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;