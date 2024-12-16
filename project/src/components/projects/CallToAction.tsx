import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, User } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mt-16">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Let's Build Something Great Together!
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Contact Me
        </Link>
        <Link
          to="/about"
          className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
        >
          <User className="w-5 h-5 mr-2" />
          Learn More About Me
        </Link>
      </div>
    </div>
  );
}