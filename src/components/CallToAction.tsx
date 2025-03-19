import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-primary-600 to-secondary-700 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-xl border border-white/20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Start Your Child's Adventure Today
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Give the gift of imagination, courage, and fun with Huey The Helicopter. Special offer: Free shipping on orders over $35!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-50 shadow-md transition duration-150"
              >
                Buy Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-150"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <p className="text-white/90">Colorful Illustrations</p>
            </div>
            <div className="bg-white/20 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">10k+</div>
              <p className="text-white/90">Happy Readers</p>
            </div>
            <div className="bg-white/20 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <p className="text-white/90">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;