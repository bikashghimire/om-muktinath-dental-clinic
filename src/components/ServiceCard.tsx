import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, className = '' }) => {
  return (
    <div className={`card group h-full ${className}`}>
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="bg-cyan-100 text-cyan-600 w-16 h-16 flex items-center justify-center rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link
          to={link}
          className="mt-2 inline-flex items-center text-cyan-600 font-medium group-hover:text-cyan-700"
        >
          Learn more
          <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;