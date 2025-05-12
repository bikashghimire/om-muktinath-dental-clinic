import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  date: string;
  rating: number;
  text: string;
  image?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  date, 
  rating, 
  text, 
  image, 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 ${className}`}>
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center">
              <span className="text-cyan-600 font-medium text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="ml-3">
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default TestimonialCard;