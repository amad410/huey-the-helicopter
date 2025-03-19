import React from 'react';
import { BookOpen, Brain, Heart, Users, Star, Sparkles } from 'lucide-react';
import logo from './images/logo.png';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
      {
        icon: <img src={logo} className="h-8 w-8" alt="Huey Logo" />,
        title: "Promotes Reading",
        description: "Engaging storytelling that encourages a love for reading from an early age.",
        color: "bg-primary-600"
      },
      {
        icon: <Brain className="h-6 w-6 text-white" />,
        title: "Educational Value",
        description: "Learn about helicopters, weather, and important life lessons in a fun way.",
        color: "bg-secondary-600"
      },
      {
        icon: <Heart className="h-6 w-6 text-white" />,
        title: "Emotional Intelligence",
        description: "Helps children understand and process emotions through Huey's experiences.",
        color: "bg-accent-500"
      },
      {
        icon: <Users className="h-6 w-6 text-white" />,
        title: "Family Bonding",
        description: "Create special moments with your child through shared reading experiences.",
        color: "bg-primary-600"
      },
      {
        icon: <Star className="h-6 w-6 text-white" />,
        title: "Award-Winning",
        description: "Recognized for excellence in children's literature and illustration.",
        color: "bg-secondary-600"
      },
      {
        icon: <Sparkles className="h-6 w-6 text-white" />,
        title: "Imagination Booster",
        description: "Sparks creativity and encourages children to dream big and explore.",
        color: "bg-accent-500"
      }
    ];

    return (    <section id="benefits" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Why Parents & Kids Love Huey</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            More than just a story, Huey The Helicopter offers numerous benefits for young readers
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              color={benefit.color}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:mr-10">
              <img 
                src="https://images.unsplash.com/photo-1629196914168-3a2652305f9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Happy child reading" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-display font-semibold text-primary-700 mb-4">What Parents Are Saying</h3>
              <blockquote className="italic text-gray-700 mb-6">
                "Huey The Helicopter has become my daughter's favorite bedtime story. The beautiful illustrations and heartwarming message about courage have made such a positive impact. She now wants to be a helicopter pilot when she grows up!"
              </blockquote>
              <div className="flex items-center">
                <div className="flex text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">— Sarah T., Parent of 6-year-old</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;