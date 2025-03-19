import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import grassPlain from './images/grass-plain.png';
import hueyPic3 from './images/huey-pic3.png';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden py-12 md:py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${grassPlain})` }}
      ></div>
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-700 leading-tight">
              Discover the Adventures of <span className="text-accent-500">Huey The Helicopter</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-2xl">
              Join Huey on an exciting journey through the skies in this beautifully illustrated children's book that inspires imagination and courage.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 shadow-md transition duration-150"
              >
                Buy Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50 transition duration-150"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src={hueyPic3} 
                alt="Huey The Helicopter" 
                className="relative z-10 w-full h-auto drop-shadow-2xl transition-transform duration-200"
                style={{ 
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(${grassPlain})`, backgroundPositionY: '10%' }}
      ></div>
      
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
export default Hero;