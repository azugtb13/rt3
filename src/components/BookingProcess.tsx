import React from 'react';
import { BookOpen, UserCheck, ThumbsUp } from 'lucide-react';

const BookingProcess = () => {
  const steps = [
    {
      icon: BookOpen,
      title: 'Book a Ride',
      description: 'Get instant confirmation. Free adjustments, flexible terms—always stress-free.'
    },
    {
      icon: UserCheck,
      title: 'Meet Your Driver',
      description: 'Upon arrival, be personally greeted and escorted to your vehicle. Drivers monitor your flight to accommodate any changes and delays, providing ultimate peace of mind.'
    },
    {
      icon: ThumbsUp,
      title: 'Enjoy the Comfort',
      description: 'Relax as your professional driver takes you to your chosen location, starting your adventure on the right note.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Booking Process Explained</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <step.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-blue-600"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingProcess;