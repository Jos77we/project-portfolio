import React from 'react';
import { Users, Lightbulb, Target } from 'lucide-react';

const values = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'Collaboration',
    description: 'I excel in team environments, ensuring seamless communication and collaboration to meet shared goals.',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    title: 'Adaptability',
    description: 'I quickly adapt to new challenges, keeping pace with the ever-evolving tech landscape.',
  },
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: 'Commitment to Excellence',
    description: 'My work is driven by a relentless pursuit of quality and attention to detail.',
  },
];

export default function ValuesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Values & Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}