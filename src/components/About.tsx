import React from 'react';
import { BookOpen, Heart, Star } from 'lucide-react';
import hueyVideo from './videos/huey-vid.mp4';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">About Huey The Helicopter</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <video 
              src={hueyVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-display font-semibold text-primary-700 mb-4">A Story of Adventure and Friendship</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              "Huey The Helicopter" is a heartwarming tale about a brave little helicopter who discovers the true meaning of courage and friendship. Written with love and illustrated with vibrant, captivating artwork, this book takes young readers on an unforgettable journey through blue skies and stormy weather.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Perfect for children ages 4-8, this story teaches important values like bravery, kindness, and perseverance in a fun and engaging way that will keep little ones asking to read it again and again.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-primary-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-primary-600 mb-2" />
                <span className="text-sm font-medium text-gray-800">32 Colorful Pages</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-secondary-50 rounded-lg">
                <Heart className="h-8 w-8 text-secondary-600 mb-2" />
                <span className="text-sm font-medium text-gray-800">Ages 4-8</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-accent-50 rounded-lg">
                <Star className="h-8 w-8 text-accent-500 mb-2" />
                <span className="text-sm font-medium text-gray-800">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;