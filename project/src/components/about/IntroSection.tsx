import React from 'react';
import { Code2, Laptop, Server } from 'lucide-react';

export default function IntroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
            Hi, I'm Joseph Muigai – Building Seamless Digital Experiences.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            I am a passionate software developer with expertise in creating intuitive user interfaces 
            and robust backend systems. My focus is on leveraging the MERN stack and other cutting-edge 
            technologies to craft seamless, user-centric applications. I thrive on challenges, turning 
            complex ideas into reality through innovative problem-solving and meticulous execution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 className="w-8 h-8 text-blue-600" />,
                title: 'Frontend Development',
                description: 'Creating beautiful, responsive interfaces with React',
              },
              {
                icon: <Server className="w-8 h-8 text-blue-600" />,
                title: 'Backend Development',
                description: 'Building robust APIs and server-side applications',
              },
              {
                icon: <Laptop className="w-8 h-8 text-blue-600" />,
                title: 'Full Stack Solutions',
                description: 'End-to-end development with modern technologies',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {item.icon}
                <h3 className="text-lg font-semibold mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}