import React from 'react';

const HueyCharacter: React.FC = () => {
  return (
    <svg
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Helicopter Body */}
      <ellipse cx="400" cy="450" rx="250" ry="200" fill="#5cb85c" stroke="#333" strokeWidth="8" />
      
      {/* Face */}
      <circle cx="320" cy="450" r="80" fill="#f8f9fa" />
      <ellipse cx="320" cy="430" rx="60" ry="40" fill="#0dcaf0" /> {/* Eyes */}
      <circle cx="330" cy="420" r="15" fill="white" /> {/* Eye highlight */}
      <path d="M250 500 Q 320 550 390 500" fill="none" stroke="#dc3545" strokeWidth="12" /> {/* Smile */}
      
      {/* Windows */}
      <rect x="500" y="400" width="80" height="60" rx="10" fill="#0dcaf0" />
      
      {/* Rotor Base */}
      <circle cx="400" cy="250" r="30" fill="#9c1e3c" />
      
      {/* Rotors */}
      <path d="M400 250 Q 300 150 150 100" fill="none" stroke="#495057" strokeWidth="15" strokeLinecap="round" />
      <path d="M400 250 Q 500 150 650 100" fill="none" stroke="#495057" strokeWidth="15" strokeLinecap="round" />
      <path d="M400 250 Q 300 350 150 400" fill="none" stroke="#495057" strokeWidth="15" strokeLinecap="round" />
      <path d="M400 250 Q 500 350 650 400" fill="none" stroke="#495057" strokeWidth="15" strokeLinecap="round" />
      
      {/* Tail */}
      <path d="M650 450 L 750 450" fill="none" stroke="#495057" strokeWidth="15" strokeLinecap="round" />
      <path d="M650 470 L 750 470" fill="none" stroke="#495057" strokeWidth="15" strokeLinecap="round" />
    </svg>
  );
};

export default HueyCharacter;