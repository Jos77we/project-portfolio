import React from 'react';
import { MapPin, Calendar, Code2 } from 'lucide-react';

export default function OverviewCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <img
        src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=400"
        alt="Joseph Muigai"
        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
      />
      
      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-5 h-5 mr-3" />
          <span>2+ Years Experience</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Code2 className="w-5 h-5 mr-3" />
          <span>MERN, SERN, JARS</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-5 h-5 mr-3" />
          <span>Nairobi, Kenya</span>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">Professional Summary</h3>
        <p className="text-gray-600">
          Experienced software developer skilled in creating efficient and user-friendly applications 
          using cutting-edge technologies. Specialized in full-stack development with a focus on 
          scalable solutions.
        </p>
      </div>
    </div>
  );
}