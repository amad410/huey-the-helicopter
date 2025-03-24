import React from 'react';
import cartoonCloud from './images/cartoon-cloud2.jpg';

interface CloudBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const CloudBackground: React.FC<CloudBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
        style={{ backgroundImage: `url(${cartoonCloud})` }}
      ></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CloudBackground;
