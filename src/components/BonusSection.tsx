import React from 'react';
import { Gift, BookOpen, Video, Download, CheckCircle } from 'lucide-react';

interface BonusItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
}

const BonusItem: React.FC<BonusItemProps> = ({ icon, title, description, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary-500 transition-transform hover:translate-y-[-5px]">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-3">{description}</p>
          <div className="flex items-center">
            <span className="text-lg font-bold text-accent-500 mr-2">{value}</span>
            <span className="text-sm text-gray-500 line-through">$29.99</span>
          </div>
          <div className="mt-2 flex items-center text-primary-600">
            <CheckCircle className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">Included Free</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Huey's Activity Book",
      description: "A 24-page activity book filled with coloring pages, mazes, and puzzles featuring Huey and friends.",
      value: "FREE"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Animated Mini-Episode",
      description: "Exclusive digital access to a 5-minute animated adventure with Huey The Helicopter.",
      value: "FREE"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Printable Wall Art",
      description: "Beautiful high-resolution artwork from the book that you can print and frame.",
      value: "FREE"
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Parent's Guide",
      description: "A helpful guide with discussion questions and activities to enhance your child's reading experience.",
      value: "FREE"
    }
  ];

  return (
    <section id="bonuses" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Claim Your Free Bonuses</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Purchase any edition of "Huey The Helicopter" and receive these exclusive bonuses absolutely free!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus, index) => (
            <BonusItem 
              key={index}
              icon={bonus.icon}
              title={bonus.title}
              description={bonus.description}
              value={bonus.value}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#products" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 shadow-lg transition duration-150"
          >
            Get Your Book & Claim Bonuses
          </a>
          <p className="mt-4 text-sm text-gray-500">
            *Bonuses will be delivered to your email after purchase confirmation
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
