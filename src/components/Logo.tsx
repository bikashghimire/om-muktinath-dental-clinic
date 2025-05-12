import React from 'react';
import { Stethoscope } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Stethoscope className="text-cyan-600 mr-2" size={32} />
      <div className="font-heading font-bold">
        <span className="text-cyan-600">Bright</span>
        <span className="text-gray-800">Smile</span>
      </div>
    </div>
  );
};

export default Logo;