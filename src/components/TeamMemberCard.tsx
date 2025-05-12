import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

interface SocialLink {
  platform: 'facebook' | 'twitter' | 'linkedin';
  url: string;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks?: SocialLink[];
  className?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  bio,
  socialLinks = [],
  className = '',
}) => {
  
  const SocialIcon = ({ platform }: { platform: string }) => {
    switch (platform) {
      case 'facebook':
        return <Facebook size={18} />;
      case 'twitter':
        return <Twitter size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      default:
        return null;
    }
  };
  
  return (
    <div className={`card overflow-hidden h-full ${className}`}>
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-cyan-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        
        {socialLinks.length > 0 && (
          <div className="flex space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-cyan-600 transition-colors"
                aria-label={`${name}'s ${link.platform}`}
              >
                <SocialIcon platform={link.platform} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;