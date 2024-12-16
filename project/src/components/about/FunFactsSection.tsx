import React from 'react';
import { Bot, Gamepad, Coffee } from 'lucide-react';

const funFacts = [
  {
    icon: <Bot className="w-6 h-6" />,
    text: "I love building chatbots and automating tasks in my free time",
  },
  {
    icon: <Gamepad className="w-6 h-6" />,
    text: "Outside of coding, you'll find me exploring Nairobi's tech scene or gaming",
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    text: "I believe the best code is written after the perfect cup of coffee",
  },
];

export default function FunFactsSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Fun Facts
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600">{fact.icon}</div>
              <p className="text-gray-600">{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}