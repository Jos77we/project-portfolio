import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, User } from 'lucide-react';

export default function ResumeCallToAction() {
  return (
    <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">
        Looking for a developer who combines innovation with precision?
      </h2>
      <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
        Let's collaborate and bring your ideas to life with cutting-edge technology and exceptional user experiences.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Let's Collaborate
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